// Allow the user to compare the contents of one file to another and report the difference.
// EX.
// These values for file A are NOT found in file B.
// Search for a file.
const fs = require('fs');

// Read file.
function readFile(filename){
    try {
        const data = fs.readFileSync(filename, 'utf8').split('/n');
        const values = data.map(line => line.trim());
        return values;
    } catch (err) {
    console.error(err);
    }
};

    
// readFile('fileA.txt');
let fileA_content = readFile('fileA.txt');
let fileB_content = readFile('fileB.txt');


// readFile('fileB.txt');

// use function to compare fileA to FileB. 
// if values in fileA is in fileB print "theses values match."
// if values in fileA not in fileB print "these values are missing from fileB."

function compareFiles(fileA, fileB){

};

compareFiles(fileA_content,fileB_content);
console.log(fileA_content);
