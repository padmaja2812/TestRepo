function callServiceSubjects() {
    kony.application.showLoadingScreen(BlockedUIScreen, "Please wait", constants.LOADING_SCREEN_POSITION_FULLSCREEN, true, true, null);
    var paramTab = {
        deviceside: true,
        appver: "1.4.0",
        channel: "rc",
        appID: "PUCMinas",
        serviceID: "Subjects",
        platformver: "5.3.GA",
        isData: false,
        customParameters: "envType=dev"
    };
    kony.net.invokeServiceAsync("http://demo1.konylabs.net/middleware/MWServlet", paramTab, asyncSubjects);
}

function asyncSubjects(status, resultInfo) {
    if (status == 400) {
        SubjectsTab = [];
        if (kony.os.toNumber(resultInfo.opstatus) == 0) {
            var temp = resultInfo.Subjects;
            for (var i = 0; i < temp.length; i++) {
                SubjectsTab.push({
                    lblSubjectName: temp[i].NomeDisciplina,
                    imgArrow: "rightarrow.png",
                    CodDiciplina: temp[i].CodDiciplina,
                    CodTurma: temp[i].CodTurma,
                    CodTurmaExibicao: temp[i].CodTurmaExibicao
                });
            }
            frmSubjects.SegSubjects.setData(SubjectsTab);
            frmSubjects.show();
            kony.application.dismissLoadingScreen();
        } else {
            kony.application.dismissLoadingScreen();
            kony.print("Service Call Unsuccessful");
        }
    } else {
        kony.print("Service Call Unsuccessful");
    }
}