stickJS
=======

A little JS library to control joysticks in web browsers via Gamepad API.

A simple library that uses Gamepad API to control joysticks. Since browsers dont have a FULL implementation of the Gamepad spec I made this library.

Its in alpha version but I hope keep updating and make it bigger, it was tested with a Generic USB Joystick

Quick example
=============

- Import the lib <script src="stick.js"></script>

- stickJS.init() (this initialize the library, connect you gamepads and watch the browser console)

- stickJS.GAMEPAD_0.on("left", function(gamepad, value) {
           //your code here :D
});

API
===

stickJS.init()

start the library to search conencted gamepad, the first connected gamepad will be mapped to GAMEPAD_0, the second GAMEPAD_1 etc (max gamepads 4).

stickJS.GAMEPAD_X.on(eventName, function(gamepad, value) )
                   
eventName: one of the following

	* D-pad
		left, right, up, down
		
	*Buttons
 		button0, button1, button2, button3

	*Analogic (future release)
 		LAnalogX,  LAnalogY
 		RAnalogX, RAnalogY

	*Others (future release)
		L1, L2, 
		R1, R2, 
		start, select

function: the callback function to call, the parameters will be pass
	gamepad: a Gamepad instance
	value: the actual value of the button

Future features
===============
- Calibration (because some gamepads hasnt the same button mapping)
- Store the calibration for each gamepad (calibrate one time and no more ;) )
- Auto-mapping buttons for most commons gamepads (for avoid calibration :) )
- Any other idea :P

CHANGELOG
=========
v 0.2:
- init() change, no more gamepad number, now the gamepad are mapped automaticlly
- examples added