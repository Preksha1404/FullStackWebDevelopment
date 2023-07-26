const readline = require('readline');
const fs = require('fs');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt the user for employee information
rl.question('Enter employee name: ', (name) => {
  rl.question('Enter employee age: ', (age) => {
    rl.question('Enter employee position: ', (position) => {
      // Create an employee object
      const employee = {
        name: name,
        age: parseInt(age),
        position: position
      };

      // Convert the employee object to JSON format
      const employeeJSON = JSON.stringify(employee, null, 2);

      // Write employee data to file
      fs.writeFile('employee-data.json', employeeJSON, (err) => {
        if (err) {
          console.error('Error writing file:', err);
        } else {
          console.log('Employee data written to employee-data.json successfully!');
          // Read and print the contents of the JSON file
          fs.readFile('employee-data.json', 'utf8', (err, data) => {
            if (err) {
              console.error('Error reading file:', err);
            } else {
              console.log('Contents of employee-data.json:');
              console.log(data);
            }
            rl.close();
          });
        }
      });
    });
  });
});