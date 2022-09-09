"""Word Finder: finds random words from a dictionary."""

import random


class WordFinder:
    """Finding random words from dictionary/file"""

    def __init__(self, path):
        dict_file = open(path)
        self.words = self.parse(dict_file)
        print(f"{len(self.words)} words read")

    def parse(self, dict_file):
        """Parse dict_file into list of words"""
        return [w.strip() for w in dict_file]

    def random(self):
        """Return random words"""
        return random.choice(self.words)


class SpecialWordFinder(WordFinder):
    """Excludes hashtags and spaces"""

    def parse(self, dict_file):
        return [w.strip() for w in dict_file if w.strip() and not w.startswith("w")]
