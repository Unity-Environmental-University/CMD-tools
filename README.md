# Scripts to Convert SRT Files to TXT Files 

## Python
`SRT_to_TXT.py` is a Python script that removes timecodes and sequence numbers from a SubRip Subtitle (SRT) file and outputs a plain text file (TXT) that preserves the subtitle text only. The tkinter library is used for a GUI file selector.

## How to Run Script
- Download and Install [Python](https://www.python.org/)
- Clone this repository
- `cd` into CMD-Tools
- Command: `python3 SRT_to_TXT.py`


### Example Input (SRT file)
```
1
00:00:01,500 --> 00:00:04,000
Hello, world.

2
00:00:05,000 --> 00:00:07,000
This is a test.
```

### Example Output (TXT file)
```
Hello, world.
This is a test.
```

## JavaScript 
`convertToTXT.js` is JavaScript code that removes timecodes and numbering and preserves subtitle text only in a TXT file.

## How to Run Script
This script requires Node.js to run. 
- Download and install [Node](nodejs.org)
- Clone this repository
- `cd` into CMD-Tools
- Command: `node convertSrtToTxt.js path/to/your/subtitle.srt`
- If your SRT file is called example.srt and is in the same folder as the script: `node convertSrtToTxt.js example.srt`

### Example Input (SRT file)
```
1
00:00:01,500 --> 00:00:04,000
Hello, world.

2
00:00:05,000 --> 00:00:07,000
This is a test.
```

### Example Output (TXT file)
```
Hello, world.
This is a test.
```