const fs = require('fs');
try {
  // Read the contents of the first file
  const file1 = fs.readFileSync('file1.txt', 'utf8');

  // Read the contents of the second file
  const file2 = fs.readFileSync('file2.txt', 'utf8');

  // Compare the sizes of the files
  const file1Size = Buffer.byteLength(file1, 'utf8');
  const file2Size = Buffer.byteLength(file2, 'utf8');

  if (file1Size > file2Size) {
    console.log('File 1 is larger than File 2');
  } else if (file1Size < file2Size) {
    console.log('File 2 is larger than File 1');
  } else {
    console.log('File 1 and File 2 have the same size');
  }

  // Split the contents of the files into lines
  const linesFile1 = file1.split('\n');
  const linesFile2 = file2.split('\n');

  // Compare the lines of the files
  for (let i = 0; i < linesFile1.length; i++) {
    if (linesFile1[i] !== linesFile2[i]) {
      console.log(`Line ${i + 1}:`);
      console.log(`File 1: ${linesFile1[i]}`);
      console.log(`File 2: ${linesFile2[i]}`);
      console.log('------------------');
    }
  }
} catch (err) {
  console.error('Error reading the files:', err);
}