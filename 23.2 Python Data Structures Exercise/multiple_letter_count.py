def multiple_letter_count(phrase):
    """Return dict of {ltr: frequency} from phrase.

    >>> multiple_letter_count('yay')
    {'y': 2, 'a': 1}

    >>> multiple_letter_count('Yay')
    {'Y': 1, 'a': 1, 'y': 1}
    """
    counter = {}  # creating empty dictionary

    for ltr in phrase:  # looping through phrase
        # .get returns the value of the dictionary key
        # counter[ltr] is either creating or locating variable
        # counter.get(ltr,0) + 1 is adding one t that value while 0 is setting a default value
        counter[ltr] = counter.get(ltr, 0) + 1

    return counter
