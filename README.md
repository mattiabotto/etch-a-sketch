# Etch a Sketch
A simple application for drawing on a canvas just hovering the mouse, with different effects possible.

## Functionalities
- The resolution can be settled between 16 and 100 pixels
- Rainbow mode: a random color will be selected for each pixel, giving a rainbow effect
- Progressive mode: pixels are given progressively more color, so that after 10 times hover over they have full color

## Project description
The application consist in a simple UI made with CSS flexbox mainly and a Javascript logic that handles the interactivity.
The pixels are created through Javascript (function createGrid) and an evenListener on the grid calls the 
colorSquare function, which color the pixel where the mouse is, keeping in mind the settings toggled.
All the settings are accessible through buttons, an input box for the resolution and checkboxes for the two modes and
handled with eventListeners.

## Skills and technologies demonstrated
- Basic design of a GUI
- Implementation of the design with CSS flexbox
- Good code architecture, with separate function for different tasks
- eventListeners and interactive control of the style of an element
- Basic Javascript and DOM manipulation skills