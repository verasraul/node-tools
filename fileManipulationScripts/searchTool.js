// Allow the user to compare the contents of one file to another and report the difference.
// EX.
// These values for file A are NOT found in file B.
// Search for a file.
const fs = require('fs');

// Read file.
function readFile(filename){
    try {
        const data = fs.readFileSync(filename, 'utf8');
        console.log(data);
    } catch (err) {
    console.error(err);
    }};

readFile();

// use function to open file.
// compare fileA to File. 
// If values in fileA is in fileB print 


