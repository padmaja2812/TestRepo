function animateHamburger() {
	var currentForm = kony.application.getCurrentForm().id;
	if (eval(currentForm + ".FlexContainerHamburger").left == "-80%") {
		eval(currentForm + ".FlexContainerHamburger").animate(kony.ui.createAnimation({
			"100": {
				"left": "0%",
				"stepConfig": {
					"timingFunction": kony.anim.EASE
				}
			}
		}), {
			"delay": 0,
			"iterationCount": 1,
			"fillMode": kony.anim.FILL_MODE_FORWARDS,
			"duration": 0.5
		}, {
			"animationEnd": function() {}
		});
		eval(currentForm + ".FlexContainerTrans").setVisibility(true);
	} else {
		eval(currentForm + ".FlexContainerHamburger").animate(kony.ui.createAnimation({
			"100": {
				"left": "-80%",
				"stepConfig": {
					"timingFunction": kony.anim.EASE
				}
			}
		}), {
			"delay": 0,
			"iterationCount": 1,
			"fillMode": kony.anim.FILL_MODE_FORWARDS,
			"duration": 0.5
		}, {
			"animationEnd": function() {}
		});
		eval(currentForm + ".FlexContainerTrans").setVisibility(false);
	}
}

function timerAfterSplash() {
	kony.timer.schedule("timer2", navigateAfterSplash, 2, false);
}

function navigateAfterSplash() {
	kony.timer.cancel("timer2");
   callServiceNoticias();
   frmNoticies.show();
}
