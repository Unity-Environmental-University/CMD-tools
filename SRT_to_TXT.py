import os
import re
import tkinter as tk


def convert_srt_to_txt(srt_filename):
    # Define the output TXT filename
    txt_filename = os.path.splitext(srt_filename)[0] + '.txt'

    output = []
    with open(srt_filename, 'r', encoding='utf-8') as srt_file, open(txt_filename, 'w', encoding='utf-8') as txt_file:
        for line in srt_file:
            # Remove lines that are just timecodes or sequence numbers
            stripped_line = line.strip()
            if stripped_line and not stripped_line.isdigit() and '-->' not in stripped_line:
                output.append(stripped_line)

        # Join the output lines into a single text block
        raw_out_text = '\n'.join(output)

        print(raw_out_text)
        txt_file.write(re.sub(r'\s*\n\s*([a-z]\w+)', r' \1', raw_out_text))
    print(f'Converted "{srt_filename}" to "{txt_filename}"')

def select_file():
    from tkinter.filedialog import askopenfilename
    filename = askopenfilename()
    return filename

if __name__ == "__main__":

    root = tk.Tk()
    root.withdraw()  # Hide the Tkinter root window

    root.attributes('-topmost', True)
    root.update()

    # Assuming the SRT file is in the same directory as the script
    srt_file = select_file()
    convert_srt_to_txt(srt_file)

 