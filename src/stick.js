var GamePadController = {
  TYPICAL_BUTTON_COUNT: 16,
  TYPICAL_AXIS_COUNT: 4,
  ticking: false,
  gamepads: [],
  prevRawGamepadTypes: [],
  prevTimestamps: [],

  gamepad: null,
  buttonsStatus: [],
  oldButtonsStatus: [],
  axesStatus: [],
  oldAxesStatus: [],
  gamepadFn: {},
  calibrationIds: {},

  init: function(id) {
    if (!navigator.getGamepads()[id]) {
      console.log("Not gamepads");
      return;
    }
    console.log("Gamepad found");
    GamePadController.gamepad = navigator.getGamepads()[id];
    console.log("Gamepad: ", GamePadController.gamepad);
    for (var i = 0; i < GamePadController.gamepad.axes.length; i++) {
      GamePadController.oldAxesStatus.push(GamePadController.gamepad.axes[i]);
    }
    GamePadController.startPolling();
  },

  calibrate: function(type) {

  },

  startPolling: function() {
    if (!GamePadController.ticking) {
      GamePadController.ticking = true;
      GamePadController.tick();
    }
  },

  on: function(name, fn) {
    /*
    Name for directions:
    up, down, left, right

    Name for buttons:
    button1, button2, button3, button4

    Name for backButtons:
    l1, l2 
    r1, r2

    Name for axis:
    LStickX LStickY
    RStickX RStickY

    Name for special buttons:
    start, select, mode
    */
    GamePadController.gamepadFn[name.toLowerCase()] = fn;
  },

  stopPolling: function() {
    GamePadController.ticking = false;
  },

  tick: function() {
    GamePadController.pollStatus();
    GamePadController.scheduleNextTick();
  },

  scheduleNextTick: function() {
    if (GamePadController.ticking) {
      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(GamePadController.tick);
      } else if (window.webkitRequestAnimationFrame) {
        window.webkitRequestAnimationFrame(GamePadController.tick);
      }
    }
  },

  pollStatus: function() {
    GamePadController.gamepad = navigator.getGamepads()[0];

    for (var i = 0; i < GamePadController.gamepad.buttons.length; i++) {
      if(GamePadController.gamepad.buttons[i].pressed) {
        if (GamePadController.gamepadFn["button"+i]) {
          GamePadController.gamepadFn["button"+i](GamePadController.gamepad, GamePadController.gamepad.buttons[i].value);
        }
        //console.log("Button" + i + ": " + GamePadController.gamepad.buttons[i].value);
      }
    }    
    for (var i = 0; i < GamePadController.gamepad.axes.length; i++) {
      if(GamePadController.gamepad.axes[i] != GamePadController.oldAxesStatus[i]) {
        if (i == 1) {
          if (GamePadController.gamepad.axes[1] == -1) {
            //up
            if(GamePadController.gamepadFn["up"]) {
              GamePadController.gamepadFn["up"](GamePadController.gamepad, GamePadController.gamepad.axes[i]);
            }
          } else if (GamePadController.gamepad.axes[1] == 1) {
            if(GamePadController.gamepadFn["down"]) {
              GamePadController.gamepadFn["down"](GamePadController.gamepad, GamePadController.gamepad.axes[i]);
            }
          }
        } else if(i == 0) {
          if (GamePadController.gamepad.axes[0] == -1) {
            //left
            if (GamePadController.gamepadFn["left"]) {
              GamePadController.gamepadFn["left"](GamePadController.gamepad, GamePadController.gamepad.axes[i]);
            }
          } else if(GamePadController.gamepad.axes[0] == 1) {
            //right
            if(GamePadController.gamepadFn["right"]) {
              GamePadController.gamepadFn["right"](GamePadController.gamepad, GamePadController.gamepad.axes[i]);
            }
          }
        }
        //console.log("Axes",i, " changed");
        //console.log("Old: ", GamePadController.oldAxesStatus[i], " - New: ", GamePadController.gamepad.axes[i]);
        //GamePadController.oldAxesStatus[i] = GamePadController.gamepad.axes[i];
      }
    }
  },

  pollGamepads: function() {
    var rawGamepads = (navigator.getGamepads && navigator.getGamepads()) 
                      || (navigator.webkitGetGamepads && navigator.webkitGetGamepads());

    if (rawGamepads) {
      // We don’t want to use rawGamepads coming straight from the browser,
      // since it can have “holes” (e.g. if you plug two gamepads, and then
      // unplug the first one, the remaining one will be at index [1]).
      GamePadController.gamepads = [];

      // We only refresh the display when we detect some gamepads are new
      // or removed; we do it by comparing raw gamepad table entries to
      // “undefined.”
      var gamepadsChanged = false;

      for (var i = 0; i < rawGamepads.length; i++) {
        if (typeof rawGamepads[i] != GamePadController.prevRawGamepadTypes[i]) {
          gamepadsChanged = true;
          GamePadController.prevRawGamepadTypes[i] = typeof rawGamepads[i];
        }

        if (rawGamepads[i]) {
          GamePadController.gamepads.push(rawGamepads[i]);
        }
      }

      if (gamepadsChanged) {
        tester.updateGamepads(GamePadController.gamepads);
      }
    }
  }

};

window.stickJS = GamePadController;