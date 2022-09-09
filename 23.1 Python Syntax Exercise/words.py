def print_upper_words(words):
    """For a list of words, print out each word on a separate line, but in all uppercase
    """
    for word in words:
        if word.startswith('h') or word.startswith('y'):
            print(word.upper())

print(print_upper_words(["hello", "hey", "goodbye", "yo", "yes"]))