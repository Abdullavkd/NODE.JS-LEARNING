// does't need to import it
// it is a global module.


// process
console.log(process);

console.log(process.stdin);

console.log(process.stdout);

console.log(process.stderr);

console.log(process.argv);

console.log(process.env);

console.log(process.cwd());

console.log(process.platform);

console.log(process.arch);

console.log(process.version);

console.log(process.memoryUsage());

console.log(process.uptime())


// it will console the value inside exit();
process.on('exit',(code) => {
    console.log(`Exit is:`,code);
})

process.exit(0)
// process.exit() break the program
// if the value inside exit is 0, it means the programme succesfully completed.
// if the value inside exit is 1, it means the programme has occured a common error.

// so, if we give anything after process.exit(), they never work.