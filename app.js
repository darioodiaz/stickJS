$(document).on("ready", function() {
	$("#btn_showJoysticks").on("click", function() {
		stickJS.init();

		stickJS.GAMEPAD_0.on("start", function() {
			$("#obj").css("border-radius", 50);
		});
		stickJS.GAMEPAD_0.on("select", function() {
			$("#obj").css("border-radius", 0);
		});

		stickJS.GAMEPAD_0.on("L1", function() {
			$("#obj").css({ transform: "rotate(45deg)" });
		});
		stickJS.GAMEPAD_0.on("R1", function() {
			$("#obj").css({ transform: "rotate(-45deg)" });
		});

		stickJS.GAMEPAD_0.on("l2", function() {
			$("#obj").css({transform: "scale(2, 2)"});
		});
		stickJS.GAMEPAD_0.on("r2", function() {
			$("#obj").css({transform: "scale(1, 1)"});
		});

		stickJS.GAMEPAD_0.on("LStickbutton", function() {
			$("#obj").css({ transform: "skew(20deg,20deg)" });
		});
		stickJS.GAMEPAD_0.on("RSTICKButton", function() {			
			$("#obj").css({ transform: "skew(-20deg,-20deg)" });
		});

		stickJS.GAMEPAD_0.on("left", function() {
			$("#obj").css("margin-left", parseInt($("#obj").css("margin-left")) - 10);
		});
		stickJS.GAMEPAD_0.on("up", function() {
			$("#obj").css("margin-top", parseInt($("#obj").css("margin-top")) - 10);
		});
		stickJS.GAMEPAD_0.on("right", function() {
			$("#obj").css("margin-left", parseInt($("#obj").css("margin-left")) + 10);
		});
		stickJS.GAMEPAD_0.on("down", function() {
			$("#obj").css("margin-top", parseInt($("#obj").css("margin-top")) + 10);
		});

		stickJS.GAMEPAD_0.on("button2", function() {
			$("#obj").css("background-color", "black");
		});
		stickJS.GAMEPAD_0.on("button3", function() {
			$("#obj").css("background-color", "red");
		});
		stickJS.GAMEPAD_0.on("button4", function() {
			$("#obj").css("background-color", "blue");
		});

		//Config for 2nd gamepad
		//I use some words in upper o lower case to see that it isn't case sensitive

		stickJS.GAMEPAD_1.on("left", function() {
			$("#obj2").css("margin-left", parseInt($("#obj2").css("margin-left")) - 10);
		});
		stickJS.GAMEPAD_1.on("right", function() {
			$("#obj2").css("margin-left", parseInt($("#obj2").css("margin-left")) + 10);
		});
		stickJS.GAMEPAD_1.on("up", function() {
			$("#obj2").css("margin-top", parseInt($("#obj2").css("margin-top")) - 10);
		});
		stickJS.GAMEPAD_1.on("down", function() {
			$("#obj2").css("margin-top", parseInt($("#obj2").css("margin-top")) + 10);
		});

		stickJS.GAMEPAD_1.on("button2", function() {
			$("#obj2").css("background-color", "black");
		});
		stickJS.GAMEPAD_1.on("button3", function() {
			$("#obj2").css("background-color", "red");
		});
		stickJS.GAMEPAD_1.on("button4", function() {
			$("#obj2").css("background-color", "blue");
		});

		stickJS.GAMEPAD_1.on("start", function() {
			$("#obj2").css("border-radius", 50);
		});
		stickJS.GAMEPAD_1.on("select", function() {
			$("#obj2").css("border-radius", 0);
		});

		stickJS.GAMEPAD_1.on("L1", function() {
			$("#obj2").css({ transform: "rotate(45deg)" });
		});
		stickJS.GAMEPAD_1.on("R1", function() {
			$("#obj2").css({ transform: "rotate(-45deg)" });
		});

		stickJS.GAMEPAD_1.on("l2", function() {
			$("#obj2").css({transform: "scale(2, 2)"});
		});
		stickJS.GAMEPAD_1.on("r2", function() {
			$("#obj2").css({transform: "scale(2, 2)"});
		});

		stickJS.GAMEPAD_1.on("LStickbutton", function() {
			$("#obj2").css({ transform: "skew(20deg,20deg)" });
		});
		stickJS.GAMEPAD_1.on("RSTICKButton", function() {			
			$("#obj2").css({ transform: "skew(-20deg,-20deg)" });
		});

	});
})