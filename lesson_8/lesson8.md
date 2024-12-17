input: array of strings
output: new array with strings sorted according to highest
  number of adjacent consonants. Equal strings should maintain original order.
rules:
  explicit requirements:
    - y and w are consonants
    - Strings with equal amount of consonants maintain original relative order.
    - adjacent consonants are next to each other in same string or next to each other with space between.
  implicit rules:
    - Single consonants in a string do not affect sort order in comparison to strings with no consonants. Only adjacent consonants affect sort order.