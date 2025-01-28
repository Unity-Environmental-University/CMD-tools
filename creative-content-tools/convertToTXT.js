const fs = require('fs');
const path = require('path');
const readline = require('readline');

/**
 * Script use: convert an SRT file to a TXT file by stripping out timecodes and sequence numbers
 */

function convertSrtToTxt(srtFilename) {
  // Get the directory of the input file and construct the output file path
  const srtDirectory = path.dirname(srtFilename);
  const txtFilename = path.join(srtDirectory, path.basename(srtFilename, path.extname(srtFilename)) + '.txt');

  const srtStream = fs.createReadStream(srtFilename, { encoding: 'utf8' });
  const txtStream = fs.createWriteStream(txtFilename, { encoding: 'utf8' });

  const readLine = readline.createInterface({
    input: srtStream,
    crlfDelay: Infinity
  });

  const output = [];

  readLine.on('line', (line) => {
    const strippedLine = line.trim();
    if (strippedLine && isNaN(strippedLine) && !strippedLine.includes('-->')) {
      output.push(strippedLine);
    }
  });

  readLine.on('close', () => {
    const rawOutText = output.join('\n');
    console.log(rawOutText);

    const resultText = rawOutText.replace(/\s*\n\s*([a-z]\w+)/g, ' $1');
    txtStream.write(resultText);

    console.log(`Converted "${srtFilename}" to "${txtFilename}"`);
  });
}

// Use the command-line argument for the SRT file path
const srtFile = process.argv[2];
if (!srtFile) {
  console.error('Please specify an SRT file path as an argument');
  process.exit(1);
}

convertSrtToTxt(srtFile);