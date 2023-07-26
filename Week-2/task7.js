const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to create a backup of a file
function backupFile(filePath) {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const backupFileName = path.basename(filePath) + '.bak';
  const backupFilePath = path.join(path.dirname(filePath), backupFileName);
  fs.writeFileSync(backupFilePath, fileContent);
  console.log(`Backup created: ${backupFilePath}`);
}

// Function to restore a file from backup
function restoreFile(backupFilePath, originalFilePath) {
  const fileContent = fs.readFileSync(backupFilePath, 'utf8');
  fs.writeFileSync(originalFilePath, fileContent);
  console.log(`File restored: ${originalFilePath}`);
}

// Prompt the user for backup or restore
rl.question('Enter "backup" or "restore": ', (choice) => {
  if (choice.toLowerCase() === 'backup') {
    rl.question('Enter the path of the file to backup: ', (filePath) => {
      backupFile(filePath);
      rl.close();
    });
  } else if (choice.toLowerCase() === 'restore') {
    rl.question('Enter the path of the backup file: ', (backupFilePath) => {
      rl.question('Enter the path to restore the file: ', (originalFilePath) => {
        restoreFile(backupFilePath, originalFilePath);
        rl.close();
      });
    });
  } else {
    console.log('Invalid choice. Please enter either "backup" or "restore".');
    rl.close();
  }
});
