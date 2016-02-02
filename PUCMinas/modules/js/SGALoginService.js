function callServiceSGALogin() {
	kony.application.showLoadingScreen(BlockedUIScreen, "Please wait", constants.LOADING_SCREEN_POSITION_FULLSCREEN, true, true, null);
	var paramTab = {
		deviceside: true,
		appver: "1.4.0",
		channel: "rc",
		appID: "PUCMinas",
		serviceID: "Login",
		platformver: "5.3.GA",
		isData: false,
		customParameters: "envType=dev"
	};
	kony.net.invokeServiceAsync("http://demo1.konylabs.net/middleware/MWServlet", paramTab, asyncSGALogin);
}

function asyncSGALogin(status, resultInfo) {
	if (status == 400) {
		if (kony.os.toNumber(resultInfo.opstatus) == 0) {
			if (resultInfo.Sucesso == "true") {
				Mensagem = resultInfo.Mensagem;
				Sucesso = resultInfo.Sucesso;
				CodOrigem = resultInfo.CodOrigem;
				Matricula = resultInfo.Matricula;
				NomeAluno = resultInfo.NomeAluno;
				NomeCurso = resultInfo.NomeCurso;
				NomeUnidade = resultInfo.NomeUnidade;
				Turno = resultInfo.Turno;
				frmSGAHome.show();
                kony.application.dismissLoadingScreen();
			} else {
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