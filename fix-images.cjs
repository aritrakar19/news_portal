const fs = require('fs');

// Use native fs since glob might not be installed, wait let's use glob if node_modules is present or just native recursive read.
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('src/features', (file) => {
  if (!file.endsWith('.tsx')) return;
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  const fallbackUrl = 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=800&auto=format&fit=crop';
  
  content = content.replace(/<img([^>]*)>/g, (match, attrs) => {
    if (attrs.includes('onError')) return match;
    
    let newAttrs = attrs;
    if (!newAttrs.includes('className=')) {
      newAttrs += ' className="w-full h-full object-cover"';
    } else {
      if (!newAttrs.includes('w-full')) newAttrs = newAttrs.replace(/className=(["'])([^"']*)(["'])/, 'className=$1w-full $2$3');
      if (!newAttrs.includes('h-full')) newAttrs = newAttrs.replace(/className=(["'])([^"']*)(["'])/, 'className=$1h-full $2$3');
      if (!newAttrs.includes('object-cover')) newAttrs = newAttrs.replace(/className=(["'])([^"']*)(["'])/, 'className=$1object-cover $2$3');
    }
    
    if (!newAttrs.includes('width=')) newAttrs += ' width={800}';
    if (!newAttrs.includes('height=')) newAttrs += ' height={400}';
    
    newAttrs += ` onError={(e) => { e.currentTarget.src = '${fallbackUrl}'; e.currentTarget.onerror = null; }}`;
    
    return `<img${newAttrs}>`;
  });

  if (content !== originalContent) {
    fs.writeFileSync(file, content);
    console.log('Updated ' + file);
  }
});
