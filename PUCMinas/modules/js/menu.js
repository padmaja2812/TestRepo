flag = 0;

function onClickMenuItems() {
	var currForm = kony.application.getCurrentForm().id;
	var selIndex = eval(currForm + ".segMenu").selectedIndex[1];
	if (selIndex == 0 || selIndex == "0") {
		frmSGAHome.show();
	} else if (selIndex == 1 || selIndex == "1") {
		flag = 0;
        frmSubjects.imgSubjectHeader.src = "chart.png";
		callServiceSubjects();
	} else if (selIndex == 4 || selIndex == "4") {
		flag = 1;
        frmSubjects.imgSubjectHeader.src = "document.png";
		callServiceSubjects();
	} else if (selIndex == 5 || selIndex == "5") {
		frmNoticies.show();
	}
}

function onClickSubjects() {
	if (flag == 1) { 
		callServiceMaterials();
	} else {
		callServiceSubjectScores();
	}
}

function onClickMenuHome()
{
  var currForm = kony.application.getCurrentForm().id;
	var selIndex = eval(currForm + ".segMenu").selectedIndex[1];
	if (selIndex == 0 || selIndex == "0") {
		frmNoticies.show();
	} else if (selIndex == 1 || selIndex == "1") {
		frmSGALogin.show();
    } else if (selIndex == 2 || selIndex == "2") {
		callServiceCampus();
	}
}