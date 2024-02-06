---
toc: True
comments: True
title: CPT project
courses: {'compsci': {'week': 13}}
type: hacks
permalink: /basics/home
---
{% include nav-warmup.html %}

## What we are incorporating:

- Binary
- Logic Gates (NAND, AND, OR, NOT etc.)
- SASS Theme 
- Color Coding
- ASCII

### Binary:

- For the binary part we have incorporated a binary converter 
- The binary converter basically switches from hex to binary and the other way around
- We incorporated an input and it uses child classes and javascript’s built in binary code in order to help us with this part of the project
- We used SASS in order to change the team to make the UI look pleasing for the user and for us
	
### Logic Gates:
- For the logic gate part, we have incorporated an interactive truth table for all of the logic gates.
- Then we are planning to add a randomly generated quiz about logic gates which would randomly decide the inputs and outputs. Then the user would have to match it with the corresponding logic gate(s). Logic from the previous part (interactive truth table) will be used to check if the answer is correct.
- Then we would like to add an overall theme which would look good for the UI.
- Major commits:
    - <a href="https://github.com/TDWolff/NAVTFrontend/commit/a94fcf1a549f8be73ec96115fda7b9e74434f0d9">Logic for 1st quiz</a>
    - <a href="https://github.com/TDWolff/NAVTFrontend/commit/5339638f3495abfb30ee8dbd61e782306c8fbcb2"> 1st quiz logic bug fixes</a>
    - <a href="https://github.com/TDWolff/NAVTFrontend/commit/313f1b9bdf280e100c0d52766ebc258e4bf1a97c">New quiz</a> 


### ASCII :
- For my ASCII part of the project I'm making a ASCII game. The game is a simple game where you have to get to the goal without touching the enemy or the obstacle. The game is made using JavaScript and HTML. The game is made using a 2D array. The player is represented by a P, the enemy is represented by a E, the obstacle is represented by a O, and the goal is represented by a G. The player can move up, down, left, and right. The player can move up by pressing the up arrow key, the player can move down by pressing the down arrow key, the player can move left by pressing the left arrow key, and the player can move right by pressing the right arrow key. The player can only move if there is no obstacle in the way. If the player touches the enemy or the obstacle, the game will end and the player will have to restart. If the player reaches the goal, the player will win and the player will be able to play again. The player can play again by pressing the space bar. The player can see their win streak at the top of the screen. The player can also see the game board at the bottom of the screen. The game board shows the player where the player is, where the enemy is, where the obstacle is, and where the goal is. The game board also shows the player where the player can move. The player can move to a spot if the spot is empty. The player can't move to a spot if the spot is occupied by the enemy or the obstacle. The player can't move to a spot if the spot is outside of the game board. The player can't move to a spot if the spot is occupied by the player. The player can't move to a spot if the spot is occupied by the goal. The player can't move to a spot if the spot is occupied by the enemy. The player can't move to a spot if the spot is occupied by the obstacle. The player can't move to a spot if the spot is occupied by the player. The player can't move to a spot if the spot is occupied by the goal. The player can't move to a spot if the spot is occupied by the enemy. The player can't move to a spot if the spot is occupied by the obstacle. The player can't move to a spot if the spot is occupied by the player. The player can't move to a spot if the spot is occupied by the goal. The player can't move
  
### Color Code Aspect:

For my Color Code part of the project I have made an RBG color selector where you mix different shades of the RBG Colors which as you know are Red, Green, and Blue. For each color there is 8 buttons with each button being a different shade of either Red, Green, or Blue. The more right the button is the more darker shade the color is. The more left the button is, the more lighter the shade of the color is. Color code shows an aspect of binary because it uses three main binary numbers to represent the amount and Red, Green, and Blue in the pixel. Additionally, there's an updateColor() function that translates the binary values into decimal values and sets the background color of a designated display div (color-display) according to the selected RGB values. The display area visually represents the color combination formed by the user's binary selections. 


