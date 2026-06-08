const { Project, SyntaxKind } = require("ts-morph");
const fs = require("fs");
const path = require("path");

const project = new Project({
  tsConfigFilePath: "tsconfig.json",
});

const extractedStrings = {};
let keyCounter = 1;

function generateKey(text) {
  // Create a clean key from the text
  let key = text.trim()
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .split(/\s+/)
    .slice(0, 4)
    .join("")
    .toLowerCase();
  
  if (!key) key = "str";
  key = `auto_${key}_${keyCounter++}`;
  extractedStrings[key] = text.trim();
  return key;
}

project.addSourceFilesAtPaths("src/**/*.tsx");
const sourceFiles = project.getSourceFiles();

console.log(`Found ${sourceFiles.length} TSX files.`);

for (const sourceFile of sourceFiles) {
  let needsImport = false;
  let componentFunctions = [];

  // Find functional components
  sourceFile.getFunctions().forEach(func => {
    if (func.isExported() && func.getName() && func.getName()[0] === func.getName()[0].toUpperCase()) {
      componentFunctions.push(func);
    }
  });

  sourceFile.getVariableStatements().forEach(stmt => {
    stmt.getDeclarations().forEach(decl => {
      const init = decl.getInitializer();
      if (init && (init.getKind() === SyntaxKind.ArrowFunction || init.getKind() === SyntaxKind.FunctionExpression)) {
         if (decl.getName() && decl.getName()[0] === decl.getName()[0].toUpperCase()) {
            componentFunctions.push(init);
         }
      }
    });
  });

  if (componentFunctions.length === 0) continue;

  let hasChanges = false;

  const jsxTexts = sourceFile.getDescendantsOfKind(SyntaxKind.JsxText);
  for (const jsxText of jsxTexts) {
    const text = jsxText.getLiteralText();
    if (text.trim().length > 0 && !text.match(/^[ \n\r\t]+$/)) {
      const key = generateKey(text.trim());
      jsxText.replaceWithText(`{t("${key}", "${text.trim()}")}`);
      hasChanges = true;
      needsImport = true;
    }
  }

  // Handle some common JsxAttributes like placeholder, title, etc.
  const jsxAttributes = sourceFile.getDescendantsOfKind(SyntaxKind.JsxAttribute);
  for (const attr of jsxAttributes) {
    const name = attr.getNameNode().getText();
    if (["placeholder", "title", "label"].includes(name)) {
      const init = attr.getInitializer();
      if (init && init.getKind() === SyntaxKind.StringLiteral) {
        const text = init.getLiteralText();
        if (text.trim().length > 0) {
          const key = generateKey(text.trim());
          attr.setInitializer(`{t("${key}", "${text.trim()}")}`);
          hasChanges = true;
          needsImport = true;
        }
      }
    }
  }

  if (hasChanges) {
    // Add import
    const imports = sourceFile.getImportDeclarations();
    const hasI18nImport = imports.some(imp => imp.getModuleSpecifierValue() === "react-i18next");
    if (!hasI18nImport) {
      sourceFile.addImportDeclaration({
        namedImports: ["useTranslation"],
        moduleSpecifier: "react-i18next"
      });
    }

    // Add const { t } = useTranslation() to components
    componentFunctions.forEach(func => {
      const body = func.getBody();
      if (body && body.getKind() === SyntaxKind.Block) {
        const statements = body.getStatements();
        const hasT = statements.some(stmt => stmt.getText().includes("useTranslation"));
        if (!hasT) {
          body.insertStatements(0, "const { t } = useTranslation();");
        }
      }
    });
  }
}

project.saveSync();

fs.writeFileSync("extracted-en.json", JSON.stringify(extractedStrings, null, 2));
console.log("Done. Extracted " + Object.keys(extractedStrings).length + " strings.");
