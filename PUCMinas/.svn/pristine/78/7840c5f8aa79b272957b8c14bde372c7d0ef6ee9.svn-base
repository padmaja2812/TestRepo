function callServiceSubjectScores() {
	var selItems = frmSubjects.SegSubjects.selectedItems[0];
	SubjectCode = selItems.CodTurma;
	kony.application.showLoadingScreen(BlockedUIScreen, "Please wait", constants.LOADING_SCREEN_POSITION_FULLSCREEN, true, true, null);
	var paramTab = {
		deviceside: true,
		appver: "1.4.0",
		channel: "rc",
		appID: "PUCMinas",
		serviceID: "Score",
		platformver: "5.3.GA",
		isData: false,
		customParameters: "envType=dev",
		codTurma: SubjectCode
	};
	kony.net.invokeServiceAsync("http://demo1.konylabs.net/middleware/MWServlet", paramTab, asyncSubjectScores);
}

function asyncSubjectScores(status, resultInfo) {
	if (status == 400) {
		SubjectScoreTab = [];
		if (kony.os.toNumber(resultInfo.opstatus) == 0) {
			var temp = resultInfo.Atividades;
			for (var i = 0; i < temp.length; i++) {
				SubjectScoreTab.push({
					lblSubjectName: temp[i].Nome,
					lblValor: (temp[i].Valor).replace(".0", ""),
					lblNota: (temp[i].Nota).replace(".0", "")
				});
			}
			frmSubjectScores.SegScores.setData(SubjectScoreTab);
			frmSubjectScores.lblSubjectName.text = frmSubjects.SegSubjects.selectedItems[0].lblSubjectName;
			frmSubjectScores.lblAulasValue.text = resultInfo.TotalAulas;
			frmSubjectScores.lblFaltasValue.text = resultInfo.Faltas;
			frmSubjectScores.lblPercentualValue.text = resultInfo.PercentualAprovacao + "%";
			frmSubjectScores.show();
			kony.application.dismissLoadingScreen();
		} else {
			kony.application.dismissLoadingScreen();
			kony.print("Service Call Unsuccessful");
		}
	} else {
		kony.print("Service Call Unsuccessful");
	}
}