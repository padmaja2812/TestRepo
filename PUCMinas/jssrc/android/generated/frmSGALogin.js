//Form JS File
function addWidgetsfrmSGALogin() {
    var Label0d3cf3ef70ec04b = new kony.ui.Label({
        "id": "Label0d3cf3ef70ec04b",
        "top": "0%",
        "left": "0%",
        "width": "100%",
        "height": "15%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Faca login no sua conta",
        "skin": "CopyslLabel09075b3ed8cf24c"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var txtUser = new kony.ui.TextBox2({
        "id": "txtUser",
        "top": "0%",
        "left": "0%",
        "width": "100%",
        "height": "90%",
        "zIndex": 1,
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "placeholder": "Matricula",
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "CopyslTextBox01ed5eff17b114a",
        "focusSkin": "CopyslTextBox08779992a65e94e",
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT
    }, {
        "padding": [1, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "autoFilter": false,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var FlexContainer051d21b3d0de84c = new kony.ui.FlexContainer({
        "id": "FlexContainer051d21b3d0de84c",
        "top": "18.84%",
        "left": "0%",
        "width": "100%",
        "height": "15%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,33]",
        "skin": "slFbox",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    FlexContainer051d21b3d0de84c.setDefaultUnit(kony.flex.DP)
    FlexContainer051d21b3d0de84c.add(
    txtUser);
    var txtPassword = new kony.ui.TextBox2({
        "id": "txtPassword",
        "top": "0%",
        "left": "0%",
        "width": "100%",
        "height": "90%",
        "zIndex": 1,
        "isVisible": true,
        "text": null,
        "secureTextEntry": true,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "placeholder": "Senha",
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "CopyslTextBox08e6f4cfdf84f4b",
        "focusSkin": "CopyslTextBox09d457358eedf41",
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT
    }, {
        "padding": [1, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "autoFilter": false,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var CopyFlexContainer0e9df98861cb149 = new kony.ui.FlexContainer({
        "id": "CopyFlexContainer0e9df98861cb149",
        "top": "38.84%",
        "left": "0dp",
        "width": "100%",
        "height": "15%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,69]",
        "skin": "slFbox",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    CopyFlexContainer0e9df98861cb149.setDefaultUnit(kony.flex.DP)
    CopyFlexContainer0e9df98861cb149.add(
    txtPassword);
    var Label0dd09aa4412894b = new kony.ui.Label({
        "id": "Label0dd09aa4412894b",
        "top": "59%",
        "left": "50.09%",
        "width": "50.86%",
        "height": "11.31%",
        "zIndex": 1,
        "isVisible": false,
        "text": "Permanecer conectado",
        "skin": "CopyslLabel0d2acd553f75741"
    }, {
        "padding": [0, 0, 3, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var btnLogin = new kony.ui.Button({
        "id": "btnLogin",
        "top": "80%",
        "left": "0%",
        "width": "100%",
        "height": "18%",
        "centerX": "50%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Entrar",
        "skin": "btnLoginNorm",
        "focusSkin": "btnLoginFcs"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var FlexContainer0c5a8b813d4c346 = new kony.ui.FlexContainer({
        "id": "FlexContainer0c5a8b813d4c346",
        "top": "31%",
        "left": "0%",
        "width": "100%",
        "height": "1dp",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,55]",
        "skin": "CopyslFbox03d4ac7c99b134b",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    FlexContainer0c5a8b813d4c346.setDefaultUnit(kony.flex.DP)
    FlexContainer0c5a8b813d4c346.add();
    var CopyFlexContainer0121524fde0bc4d = new kony.ui.FlexContainer({
        "id": "CopyFlexContainer0121524fde0bc4d",
        "top": "51%",
        "left": "0%",
        "width": "100%",
        "height": "1dp",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,91]",
        "skin": "CopyslFbox03d4ac7c99b134b",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    CopyFlexContainer0121524fde0bc4d.setDefaultUnit(kony.flex.DP)
    CopyFlexContainer0121524fde0bc4d.add();
    var CheckBoxGroup123 = new kony.ui.CheckBoxGroup({
        "id": "CheckBoxGroup123",
        "top": "55.08%",
        "left": "31.67%",
        "width": "74.29%",
        "height": "22.83%",
        "zIndex": 1,
        "isVisible": true,
        "masterData": [
            ["1", "Permanecer conectado"]
        ],
        "selectedKeys": ["1"],
        "skin": "CopyslCheckBoxGroup015d7b3dedc8142"
    }, {
        "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
        "padding": [0, 0, 0, 0],
        "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "tickedImage": null,
        "untickedImage": null
    });
    var FlexContainer003f4656fc97841 = new kony.ui.FlexContainer({
        "id": "FlexContainer003f4656fc97841",
        "top": "9%",
        "left": "0%",
        "width": "82%",
        "height": "40%",
        "centerX": "50%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[41,40]",
        "skin": "slFbox",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    FlexContainer003f4656fc97841.setDefaultUnit(kony.flex.DP)
    FlexContainer003f4656fc97841.add(
    Label0d3cf3ef70ec04b, FlexContainer051d21b3d0de84c, CopyFlexContainer0e9df98861cb149, Label0dd09aa4412894b, btnLogin, FlexContainer0c5a8b813d4c346, CopyFlexContainer0121524fde0bc4d, CheckBoxGroup123);
    var btnNotice = new kony.ui.Button({
        "id": "btnNotice",
        "top": "6%",
        "left": "2%",
        "width": "46.88%",
        "height": "75%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Noticias",
        "skin": "btnLoginNorm",
        "focusSkin": "btnLoginFcs"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var btnCampus = new kony.ui.Button({
        "id": "btnCampus",
        "top": "6%",
        "left": "51%",
        "width": "46.88%",
        "height": "75%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Campi",
        "skin": "btnLoginNorm",
        "focusSkin": "btnLoginFcs"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var FlexContainer096b50764fee94f = new kony.ui.FlexContainer({
        "id": "FlexContainer096b50764fee94f",
        "top": "87.58%",
        "left": "0%",
        "width": "100%",
        "height": "9.06%",
        "zIndex": 1,
        "isVisible": false,
        "clipBounds": true,
        "Location": "[0,394]",
        "skin": "slFbox",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    FlexContainer096b50764fee94f.setDefaultUnit(kony.flex.DP)
    FlexContainer096b50764fee94f.add(
    btnNotice, btnCampus);
    var imgHeaderLogo = new kony.ui.Image2({
        "id": "imgHeaderLogo",
        "top": "0%",
        "left": "0%",
        "width": "23.44%",
        "height": "100.00%",
        "centerX": "50%",
        "zIndex": 1,
        "isVisible": false,
        "src": "headerlogo.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var btnMenu = new kony.ui.Button({
        "id": "btnMenu",
        "top": "0%",
        "left": "6.25%",
        "width": "10.94%",
        "height": "36.36%",
        "centerY": "50%",
        "zIndex": 1,
        "isVisible": false,
        "text": null,
        "skin": "CopyslButtonGlossBlue01bb67babefba47",
        "focusSkin": "CopyslButtonGlossBlue0d830f51aec3346"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var btnBack = new kony.ui.Button({
        "id": "btnBack",
        "top": "0%",
        "left": "1%",
        "width": "20.31%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "text": "< Voltar",
        "skin": "CopyslButtonGlossBlue080f26349f0374b",
        "focusSkin": "CopyslButtonGlossBlue0b71b7f7fbe9c4d"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var FlexHeader = new kony.ui.FlexContainer({
        "id": "FlexHeader",
        "top": "0%",
        "left": "0%",
        "width": "100%",
        "height": "7.99%",
        "zIndex": 5,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,0]",
        "skin": "CopyslFbox08c9e808d180d4d",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    FlexHeader.setDefaultUnit(kony.flex.DP)
    FlexHeader.add(
    imgHeaderLogo, btnMenu, btnBack);
    frmSGALogin.add(
    FlexContainer003f4656fc97841, FlexContainer096b50764fee94f, FlexHeader);
    frmSGALogin.imgHeaderLogo && (frmSGALogin.imgHeaderLogo.onTouchEnd = frmSGALogin_imgHeaderLogo_onTouchEnd_mobile);
    frmSGALogin.btnLogin && (frmSGALogin.btnLogin.onClick = frmSGALogin_btnLogin_onClick_mobile);
    frmSGALogin.btnBack && (frmSGALogin.btnBack.onClick = frmSGALogin_btnBack_onClick_mobile);
    frmSGALogin.btnNotice && (frmSGALogin.btnNotice.onClick = frmSGALogin_btnNotice_onClick_mobile);
    frmSGALogin.btnMenu && (frmSGALogin.btnMenu.onClick = frmSGALogin_btnMenu_onClick_mobile);
    frmSGALogin.btnCampus && (frmSGALogin.btnCampus.onClick = frmSGALogin_btnCampus_onClick_mobile);
};

function frmSGALoginGlobals() {
    var MenuId = [];
    frmSGALogin = new kony.ui.Form2({
        "id": "frmSGALogin",
        "enableScrolling": false,
        "bounces": false,
        "pagingEnabled": false,
        "needAppMenu": false,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "CopyslForm07d50a9e081ff44",
        "layoutType": kony.flex.FREE_FORM,
        "addWidgets": addWidgetsfrmSGALogin
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_PAN,
        "titleBar": true,
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
    frmSGALogin.setDefaultUnit(kony.flex.DP);
};