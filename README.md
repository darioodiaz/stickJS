stickJS
=======

A lillte JS library to control joysticks in web browsers via Gamepad API.

A simple library that uses Gamepad API to control joysticks. Since browsers dont have a FULL implementation of the Gamepad spec I made this library.

Its in alpha version but I hope keep updating and make it bigger, it was tested with a Generic USB Joystick

Quick example
=============

- Import the lib <script src="stick.js"></script>

- stickJS.init(0) (this is the number of the connected jotstick it can be from 0 to 3, this will put in the console if the library can get the gamepad, you must call this twice)

- stickJS.on("left", function(gamepad, value) {
           //your code here :D
});

API
===

stickJS.init(gamepadNumber)
             
gamepadNumber: the number of the connected gamepad (0 if only one gamepad is connected)

stickJS.on(eventName, function(gamepad, value) )
                   
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
- Examples u.u
- Multiple gamepads support
- Calibration (because some gamepads hasnt the same button mapping)
- Store the calibration for each gamepad (calibrate one time and no more ;) )
- Auto-mapping buttons for most commons gamepads (for avoid calibration :) )
- Any other idea :P