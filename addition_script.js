var prompt = require('prompt'); //This is using the package the prompt package

prompt.start();

prompt.get(['first_number', 'second_number'], function (err, result) {
    if (err) { return onErr(err); }
    
    
    console.log('Command-line input received:');
    //We need parseInt to change it from a string to an int
    //Using + for the strings 5 and 6 would just make 56.
    console.log(`Sum - ${parseInt(result.first_number) + parseInt(result.second_number)}`);
    
});

function onErr(err) {
    console.log(err);
    return 1;
}