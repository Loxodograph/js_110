# Deal
  - Problem
    - deal 2 cards each to dealer and player
  - Examples
    - Dealer has: Ace and unknown card
    - You have: 2 and 8
  - Data Structures
    - Array representing Dealer and Player Hands
  - Algorithm
    - Write function which takes deck as argument
    - append to player hand first and second card from deck, removing first and second card from deck
    - append to dealer hand new first and second card from deck, removing first and second card.

# Intialize Deck
  - Problem

    - Input:
    - Output:
  - Rules:
    - Explicit:
    - Implicit:

  - Data Structures

  - Algorithm 


# Display Dealer Hand
  - Problem, display dealer hand
    - Input : Dealer Hand
    - Output : Dealers card, last card unknown
    - Rules:
      - Displays first card
      - Last Card is unknown
  - Examples
    - Dealer has: 7 and unknown card
    - Dealer has: 5 and unknown card
  - Data Structures:
    - array representing dealer hand
    - string representing dealer card plus last unknown. 
    
# Total
  - problem
    - calculate the total of a hand of cards

    - Input : An array representing player hand
    - Output : An integer representing total value of player hand

    - Rules
      - Explicit
        - Ace is either 11 or 1;
        - Face cards are 10;
        - every other value is equal to the number
        - every value in the hand must be totaled

  - examples
    - A and J = 21
    - 2 and 9 = 11
    - 2 9 and A = 12
    - A J and 9 = 20
  - Data structure
    - array representing player hand

  - Algorithm
    - Create function called total which takes a players hand as an argument
    - create value total = 0
    - create variable value
      - an array containing all the values of the players hand array;
        - values in player hand array are at index one of each element
    - for each value in value in value, add to total
      - if value is J, K, or Q
        - total plus 10
      - if value is A
        - total plus eleven
      - else 
        - total plus value
      - if total > 21 and total includes ace -= 10