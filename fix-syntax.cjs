const fs = require('fs');
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

  // Fix the syntax error introduced previously
  content = content.replace(
    /\/ width=\{800\} height=\{400\} onError=\{(.*?)\}>/g,
    'width={800} height={400} onError={$1} />'
  );
  content = content.replace(
    /> width=\{800\} height=\{400\} onError=\{(.*?)\}>/g,
    'width={800} height={400} onError={$1}>'
  );

  if (content !== originalContent) {
    fs.writeFileSync(file, content);
    console.log('Fixed ' + file);
  }
});
