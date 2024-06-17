//console.log(process.env);
const testDbUsername = process.env.TEST_DB_USERNAME;
const testDbPassword = process.env.TEST_DB_PASSWORD;


const uatDbUsername = process.env.UAT_DB_USERNAME;
const uatDbPassword = process.env.UAT_DB_PASSWORD;


const prodDbUsername = process.env.PROD_DB_USERNAME;
const prodDbPassword = process.env.PROD_DB_PASSWORD;


console.log('Credentials for Testing Environment:');
console.log('Username:', testDbUsername);
console.log('Password:', testDbPassword);


console.log('Credentials for UAT Environment:');
console.log('Username:', uatDbUsername);
console.log('Password:', uatDbPassword);


console.log('Credentials for Production Environment:');
console.log('Username:', prodDbUsername);
console.log('Password:', prodDbPassword)