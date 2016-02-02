//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "PUCMinas",
    appName: "PUCMinas",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "demo1.konylabs.net",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: false,
    middlewareContext: "middleware",
    isMFApp: false,
    eventTypes: [],
    secureurl: "https://demo1.konylabs.net:443/middleware/MWServlet",
    url: "http://demo1.konylabs.net:80/middleware/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    kony.application.setCheckBoxSelectionImageAlignment(constants.CHECKBOX_SELECTION_IMAGE_ALIGNMENT_RIGHT);
    kony.application.setDefaultTextboxPadding(false);
    kony.application.setRespectImageSizeForImageWidgetAlignment(true);
    frmCampusGlobals();
    frmCampusDetailsGlobals();
    frmMaterialsGlobals();
    frmNoticasFullGlobals();
    frmNoticiesGlobals();
    frmSGAHomeGlobals();
    frmSGAHomeFullGlobals();
    frmSGALoginGlobals();
    frmSplashGlobals();
    frmSubjectsGlobals();
    frmSubjectScoresGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true,
        APILevel: 6500
    })
};

function themeCallBack() {
    callAppMenu();
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmSplash.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "eventTypes": appConfig.eventTypes
    }
    kony.setupsdks(sdkInitConfig, null, null);
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
kony.print = function() {
    return;
};