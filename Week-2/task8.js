const fs = require('fs');

function createFileStructure(basePath, structure) {
  if (structure.isFile) {
    fs.writeFileSync(`${basePath}/${structure.name}`, '');
    console.log(`Created file: ${basePath}/${structure.name}`);
  } else {
    fs.mkdirSync(`${basePath}/${structure.name}`);
    console.log(`Created folder: ${basePath}/${structure.name}`);
    for (const item of structure.contents) {
      createFileStructure(`${basePath}/${structure.name}`, item);
    }
  }
}

const jsonContent = fs.readFileSync('fileStructure.json', 'utf8');
const fileStructure = JSON.parse(jsonContent);

createFileStructure('.', fileStructure);
