const fs = require('fs');
fs.readFile('student-data.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  const lines = data.split('\n');

  console.log('Filtered Students:');
  lines.forEach((line) => {
    const [name, cgpa] = line.split(' ');
    if (name.includes('MA') && parseFloat(cgpa) > 7) {
      console.log(line);
    }
  });
});