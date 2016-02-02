//Form JS File
function addWidgetsfrmSplash() {
    var ImgSplash = new kony.ui.Image2({
        "id": "ImgSplash",
        "top": "0%",
        "left": "0%",
        "width": "100%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "src": "splash.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null,
        "skin": "slImage"
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var FlexSplash = new kony.ui.FlexContainer({
        "id": "FlexSplash",
        "top": "0%",
        "left": "0%",
        "width": "100%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,0]",
        "skin": "slFbox",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    FlexSplash.setDefaultUnit(kony.flex.DP)
    FlexSplash.add(
    ImgSplash);
    frmSplash.add(
    FlexSplash);
    frmSplash.postShow = frmSplash_postShow_mobile;
    frmSplash.onDeviceBack = frmSplash_onDeviceBack_mobile;
};

function frmSplashGlobals() {
    var MenuId = [];
    frmSplash = new kony.ui.Form2({
        "id": "frmSplash",
        "enableScrolling": false,
        "bounces": false,
        "pagingEnabled": false,
        "needAppMenu": false,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "slForm",
        "bouncesZoom": true,
        "zoomScale": 1.0,
        "minZoomScale": 1.0,
        "maxZoomScale": 1.0,
        "statusBarHidden": "true",
        "layoutType": kony.flex.FREE_FORM,
        "addWidgets": addWidgetsfrmSplash
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false,
        "needsIndicatorDuringPostShow": true,
        "formTransparencyDuringPostShow": "100",
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_NEXTPREV,
        "configureExtendTop": false,
        "configureExtendBottom": false,
        "configureStatusBarStyle": false,
        "titleBar": false,
        "titleBarSkin": "slTitleBar",
        "titleBarConfig": {},
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "outTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        }
    });
    frmSplash.setDefaultUnit(kony.flex.DP);
};