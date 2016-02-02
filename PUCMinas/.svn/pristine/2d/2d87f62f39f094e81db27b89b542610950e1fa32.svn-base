function callServiceMaterials() {
	var selItems = frmSubjects.SegSubjects.selectedItems[0];
	SubjectCode = selItems.CodTurma;
	kony.application.showLoadingScreen(BlockedUIScreen, "Please wait", constants.LOADING_SCREEN_POSITION_FULLSCREEN, true, true, null);
	var paramTab = {
		deviceside: true,
		appver: "1.4.0",
		channel: "rc",
		appID: "PUCMinas",
		serviceID: "Materials",
		platformver: "5.3.GA",
		isData: false,
		customParameters: "envType=dev",
		codTurma: SubjectCode,
		codDiretorio: "0"
	};
	kony.net.invokeServiceAsync("http://demo1.konylabs.net/middleware/MWServlet", paramTab, asyncMaterials);
}

function asyncMaterials(status, resultInfo) {
	if (status == 400) {
		MaterialsTab = [];
		if (kony.os.toNumber(resultInfo.opstatus) == 0) {
			if (resultInfo.Materials == undefined || resultInfo.Materials == null) {
				kony.application.dismissLoadingScreen();
				var infoAlert = kony.ui.Alert({
					message: "Não há documentos disponíveis para a matéria selecionada.",
					alertType: constants.ALERT_TYPE_INFO,
					alertTitle: "PUC Minas",
					yesLabel: "Ok",
					noLabel: "Cancel",
					alertHandler: null
				}, {});
			} else {
				var temp = resultInfo.Materials;
				for (var i = 0; i < temp.length; i++) {
					MaterialsTab.push({
						lblMaterialName: temp[i].Titulo,
						imgFolder: "foldericon.png",
						imgArrow: "rightarrow.png",
						CodMaterial: temp[i].CodMaterial,
						DataMaterial: temp[i].DataMaterial,
						Tipo: temp[i].Tipo,
						Url: temp[i].Url
					});
				}
				frmMaterials.SegMaterials.setData(MaterialsTab);
				frmMaterials.lblSubjectName.text = frmSubjects.SegSubjects.selectedItems[0].lblSubjectName;
				frmMaterials.show();
				kony.application.dismissLoadingScreen();
			}
		} else {
			kony.application.dismissLoadingScreen();
			kony.print("Service Call Unsuccessful");
		}
	} else {
		kony.print("Service Call Unsuccessful");
	}
}

function onClickDownload() {
	var selItem = frmMaterials.SegMaterials.selectedItems[0];
	kony.application.openURL(selItem.Url);
}