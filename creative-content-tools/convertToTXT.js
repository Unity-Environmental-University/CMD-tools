const fs = require('fs');
const path = require('path');
const readline = require('readline');

/**
 * Convert an SRT file to a TXT file by stripping out timecodes and sequence numbers.
 * param {string} srtFilename - The absolute path to the SRT file.
 */

function convertSrtToTxt(srtFilename) {
  const srtDirectory = path.dirname(srtFilename); // Get the directory of the input file and construct the output file path
  const txtFilename = path.join(srtDirectory, path.basename(srtFilename, path.extname(srtFilename)) + '.txt');     // Create the full path for the output TXT file in the same directory as the input.
  
  const srtStream = fs.createReadStream(srtFilename, { encoding: 'utf8' }); // Create a readable stream to read the SRT file.
  const txtStream = fs.createWriteStream(txtFilename, { encoding: 'utf8' }); // Create a writable stream to write to the TXT file.

    // Create an interface to read lines from the SRT file.
  const readLine = readline.createInterface({
    input: srtStream, // Input stream to read data from.
    crlfDelay: Infinity
  });

  const output = []; // Initialize an array to store lines from the SRT file that are not timecodes or sequence numbers.

    // Setup an event listener for each line read from the SRT file.
  readLine.on('line', (line) => {
    const strippedLine = line.trim(); // Remove leading and trailing whitespace from the line.
    if (strippedLine && isNaN(strippedLine) && !strippedLine.includes('-->')) {
    // If the line is not empty, not a number, and does not contain a timecode, add it to the output.
      output.push(strippedLine);
    }
  });

    // After finishing reading all lines, this event is triggered.
  readLine.on('close', () => {
    const rawOutText = output.join('\n'); // Join all lines in the output array into a single string with new lines.
    console.log(rawOutText);

    // Using regex, replace newline patterns followed by lowercase words with a single space then the word.
    const resultText = rawOutText.replace(/\s*\n\s*([a-z]\w+)/g, ' $1');
    txtStream.write(resultText); // Write the processed text to the TXT file.

    // Print confirmation message.
    console.log(`Converted "${srtFilename}" to "${txtFilename}"`);
  });
}

// Use the command-line argument for the SRT file path
const srtFile = process.argv[2];
if (!srtFile) { // Check if the SRT file path is provided.
  console.error('Please specify an SRT file path as an argument');
  process.exit(1); // Exit the process with a failure code.
}

convertSrtToTxt(srtFile);