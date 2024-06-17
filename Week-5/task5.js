const envVariables = process.env;

function displayEnvironmentVariables() {
     console.log("Environment Variables:");
     for (let key in envVariables) {
        console.log(`${key}: ${envVariables[key]}`);
    }
}

displayEnvironmentVariables();