function callServiceCampus() {
    kony.application.showLoadingScreen(BlockedUIScreen, "Please wait", constants.LOADING_SCREEN_POSITION_FULLSCREEN, true, true, null);
    var paramTab = {
        deviceside: true,
        appver: "1.4.0",
        channel: "rc",
        appID: "PUCMinas",
        serviceID: "Campus",
        platformver: "5.3.GA",
        isData: false,
        customParameters: "envType=dev"
    };
    kony.net.invokeServiceAsync("http://demo1.konylabs.net/middleware/MWServlet", paramTab, asyncCampus);
}

function asyncCampus(status, resultInfo) {
    if (status == 400) {
        CampusTab = [];
        if (kony.os.toNumber(resultInfo.opstatus) == 0) {
            var temp = resultInfo.CampusList;
            for (var i = 0; i < temp.length; i++) {
                CampusTab.push({
                    imgCampus: temp[i].imgURL,
                    lblCampusName: temp[i].NomeMenu,
                    imgArrow: "rightarrow.png",
                    Lat: temp[i].Lat,
                    LinkAcessoExterno: temp[i].LinkAcessoExterno,
                    Lon: temp[i].Lon,
                    TextoApresentacao: temp[i].TextoApresentacao,
                    TextoContato: temp[i].TextoContato,
                    TextoLocalizacao: temp[i].TextoLocalizacao,
                    Titulo: temp[i].Titulo
                });
            }
            frmCampus.SegCampus.setData(CampusTab);
            frmCampus.show();
            kony.application.dismissLoadingScreen();
        } else {
            kony.application.dismissLoadingScreen();
            kony.print("Service Call Unsuccessful");
        }
    } else {
        kony.print("Service Call Unsuccessful");
    }
}

function onClickCampus() {
    var selItems = frmCampus.SegCampus.selectedItems[0];
    frmCampusDetails.lblCampusName.text = selItems.Titulo;
    frmCampusDetails.lblCampusName1.text = selItems.lblCampusName;
    frmCampusDetails.imgCampusDetails.src = selItems.imgCampus;
    frmCampusDetails.RichtextCampusDetails.text = selItems.TextoApresentacao;
    frmCampusDetails.RichtextLocalization.text = selItems.TextoLocalizacao;
    frmCampusDetails.RichtextContact.text = selItems.TextoContato;
    frmCampusDetails.MapLocalization.locationData = [{
        lat: selItems.Lat,
        lon: selItems.Lon,
        name: selItems.Titulo
    }];
}