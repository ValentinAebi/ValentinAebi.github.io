import sys, random

email = sys.argv[1]
letters = {}

for i, c in enumerate(email):
    if c in letters:
        letters[c].append(i)
    else:
        letters[c] = [i]

letters = [(e, letters[e]) for e in letters]
random.shuffle(letters)

print(letters)
