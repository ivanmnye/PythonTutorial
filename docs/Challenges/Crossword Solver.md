---
sidebar_position: 2
slug: CrosswordSolver
---

# Crossword Solver

:::note

Difficulty: ⭐⭐

:::

Write a python program that assists in solving for words in a crossword. This is done by inputing what the known characters are for a word, and then the program will print a list of possible words that could go in that spot. Execution of the program is as follows:

```bash
$ python crossword.py <path-to-word-list>
```

The `crossword.py` file will contain the code for the program. The word-list file will be a file I will provide to you. For context, the word list file is just a standard .txt file that usually comes with linux computers that includes all English words in the dictionary. I will send you this file. Treat this dictionary as the possible solutions for a word in the crossword.

## Solving for words

When the program is run initially print out some useful information to the user on how to use the program. Below is an example but, it is not exhaustive by any means.

```bash
$ python crossword.py words.txt
Please input your word by typing the known letters and ‘?’ where you do not know the
letter.
```

Then, to solve a word the user will be asked to include some input. Print the “>” character to tell the user we are waiting for some input (highlighted in green is text input by the user in this example).

```bash
> tr??n
train
treen
> bre???t?
bregmata
breviate
>
```

The program will continue to ask for words. In the example above you can see that one of the user inputs was the word “tr??n”. And it matched two words in the dictionary, so it printed them both out. Note that the number of letters must match as well. The program will close when the user press CTRL+C. (This is the standard way of telling a program to die).

These are the concepts that will need to be researched to do this task, in order of how they should be researched:

- Variables
- If statements.
- Printing
- Command-line arguments
- Opening and reading text files
- String manipulation
- User input
- While loops

I recommend not trying to tackle the program instantly, but rather become familiar with the concepts above before trying to attempt the problem.
