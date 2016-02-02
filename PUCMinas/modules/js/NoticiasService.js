function callServiceNoticias() {
	kony.application.showLoadingScreen(BlockedUIScreen, "Please wait", constants.LOADING_SCREEN_POSITION_FULLSCREEN, true, true, null);
	var paramTab = {
		deviceside: true,
		appver: "1.4.0",
		channel: "rc",
		appID: "PUCMinas",
		serviceID: "Noticias",
		platformver: "5.3.GA",
		isData: false,
		customParameters: "envType=dev"
	};
	kony.net.invokeServiceAsync("http://demo1.konylabs.net/middleware/MWServlet", paramTab, asyncNoticias);
}

function asyncNoticias(status, resultInfo) {
	if (status == 400) {
		NoticiasTab = [];
        NoticiasNewTab = [];
		if (kony.os.toNumber(resultInfo.opstatus) == 0) {
			var temp = resultInfo.Noticias;
			for (var i = 0; i < temp.length; i++) {
				NoticiasTab.push({
					lblNewsHeader: temp[i].title,
					link: temp[i].link,
					pubDate: temp[i].pubDate,
					lblNewsDesc: temp[i].description,
					category: temp[i].category
				});
			}
           for(var j=0;j<5;j++)
             {
               NoticiasNewTab.push(NoticiasTab[j]);
             }
			frmNoticies.SegNews.setData(NoticiasNewTab);
			frmSGAHome.SegNews.setData(NoticiasNewTab);
			kony.application.dismissLoadingScreen();
		} else {
			kony.application.dismissLoadingScreen();
			kony.print("Service Call Unsuccessful");
		}
	} else {
		kony.print("Service Call Unsuccessful");
	}
}


function onClickViewMore()
{
      frmNoticasFull.SegNews.setData(NoticiasTab);
      frmNoticasFull.show();
}

function onClickMoreSGA()
{
  frmSGAHomeFull.SegNews.setData(NoticiasTab);
  frmSGAHomeFull.show();
}