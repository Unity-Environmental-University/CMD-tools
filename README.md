# Scripts to Convert SRT Files to TXT Files 

<details open>
  <summary>
    <h2>
       Python
    </h1>
  </summary>
  <br>
`SRT_to_TXT.py` is a Python script that removes timecodes and sequence numbers from a SubRip Subtitle (SRT) file and outputs a plain text file (TXT) that preserves the subtitle text only. The tkinter library is used for a GUI file selector.


## How to Run Python Script
- Download and install [Python](https://www.python.org/)
- Clone this repository
- `cd` into CMD-tools
- Run command: `python3 SRT_to_TXT.py`


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
</details>


<details open>
  <summary>
    <h2>
       JavaScript
    </h1>
  </summary>
  <br>
`convertToTXT.js` is JavaScript code that removes timecodes and numbering and preserves subtitle text only in a TXT file.

## How to Run JavaScript with Node
This script requires Node.js to run. 
- Download and install [Node](nodejs.org)
- Clone this repository
- `cd` into CMD-tools
- Run command: `node convertSrtToTxt.js path/to/your/subtitle.srt`
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
</details>
