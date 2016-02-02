//Form JS File
function addWidgetsfrmMaterials() {
    var imgHeaderLogo = new kony.ui.Image2({
        "id": "imgHeaderLogo",
        "top": "0%",
        "left": "0%",
        "width": "23.44%",
        "height": "100.00%",
        "centerX": "50%",
        "zIndex": 1,
        "isVisible": true,
        "src": "headerlogo.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null,
        "skin": "slImage"
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
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
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var btnBack = new kony.ui.Button({
        "id": "btnBack",
        "top": "0%",
        "left": "1%",
        "width": "17.19%",
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
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var FlexHeader = new kony.ui.FlexContainer({
        "id": "FlexHeader",
        "top": "0%",
        "left": "0%",
        "width": "100%",
        "height": "10%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,0]",
        "skin": "slFbox",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    FlexHeader.setDefaultUnit(kony.flex.DP)
    FlexHeader.add(
    imgHeaderLogo, btnMenu, btnBack);
    var lblSubjectName = new kony.ui.Label({
        "id": "lblSubjectName",
        "top": "0%",
        "left": "0%",
        "width": "100%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "text": "POLITICA E COMUNICACAO",
        "skin": "CopyslLabel051b3a8379f5f4f"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var FlexContainer04504ac15399e47 = new kony.ui.FlexContainer({
        "id": "FlexContainer04504ac15399e47",
        "top": "0%",
        "left": "0%",
        "width": "100%",
        "height": "8.14%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,0]",
        "skin": "CopyslFbox0a571ba50f3e545",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    FlexContainer04504ac15399e47.setDefaultUnit(kony.flex.DP)
    FlexContainer04504ac15399e47.add(
    lblSubjectName);
    var SegMaterialsbox = new kony.ui.FlexContainer({
        "id": "SegMaterialsbox",
        "isVisible": true,
        "orientation": null,
        "width": "100%",
        "height": "30%",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": null
    }, {});
    var SegMaterials = new kony.ui.SegmentedUI2({
        "id": "SegMaterials",
        "top": "0%",
        "left": "0%",
        "width": "92%",
        "height": "35.56%",
        "centerX": "50%",
        "zIndex": 1,
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "FlexContainer0e5406f5dfbf34b": "FlexContainer0e5406f5dfbf34b",
            "lblMaterialName": "lblMaterialName",
            "imgArrow": "imgArrow",
            "imgFolder": "imgFolder"
        },
        "data": [{
            "lblMaterialName": "A politica como ficcao ",
            "imgArrow": "rightarrow.png",
            "imgFolder": "foldericon.png"
        }],
        "Location": "[18,0]",
        "rowTemplate": SegMaterialsbox,
        "rowSkin": "Copyseg0ffd25397e10f4f",
        "rowFocusSkin": "seg2Focus",
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "ffffff32",
        "showScrollbars": false,
        "groupCells": false,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {
        "indicator": constants.SEGUI_NONE,
        "enableDictionary": false,
        "showProgressIndicator": true,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "bounces": true,
        "editStyle": constants.SEGUI_EDITING_STYLE_NONE
    });
    var lblMaterialName = new kony.ui.Label({
        "id": "lblMaterialName",
        "top": "0%",
        "left": "21%",
        "width": "73%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "skin": "CopyslLabel089f7c8c92f7343"
    }, {
        "padding": [2, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var imgArrow = new kony.ui.Image2({
        "id": "imgArrow",
        "top": "0%",
        "left": "94.77%",
        "width": "3.40%",
        "height": "50.41%",
        "centerY": "50%",
        "zIndex": 1,
        "isVisible": true,
        "imageWhenFailed": null,
        "imageWhileDownloading": null,
        "skin": "slImage",
        "src": "imagedrag.png"
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var imgFolder = new kony.ui.Image2({
        "id": "imgFolder",
        "top": "25.39%",
        "left": "0%",
        "width": "15.28%",
        "height": "61.94%",
        "centerY": "50%",
        "zIndex": 1,
        "isVisible": true,
        "imageWhenFailed": null,
        "imageWhileDownloading": null,
        "skin": "slImage",
        "src": "imagedrag.png"
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var FlexContainer0e5406f5dfbf34b = new kony.ui.FlexContainer({
        "id": "FlexContainer0e5406f5dfbf34b",
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
    FlexContainer0e5406f5dfbf34b.setDefaultUnit(kony.flex.DP)
    FlexContainer0e5406f5dfbf34b.add(
    lblMaterialName, imgArrow, imgFolder);
    SegMaterialsbox.add(
    FlexContainer0e5406f5dfbf34b);
    var lblMaterialName = new kony.ui.Label({
        "id": "lblMaterialName",
        "top": "0%",
        "left": "21%",
        "width": "68.91%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Questoes para a prova ",
        "skin": "CopyslLabel089f7c8c92f7343"
    }, {
        "padding": [2, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var imgArrow = new kony.ui.Image2({
        "id": "imgArrow",
        "top": "0%",
        "left": "92.68%",
        "width": "6.79%",
        "height": "50%",
        "centerY": "50%",
        "zIndex": 1,
        "isVisible": true,
        "src": "downloadicon.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null,
        "skin": "slImage"
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var FlexContainer0e5406f5dfbf34b = new kony.ui.FlexContainer({
        "id": "FlexContainer0e5406f5dfbf34b",
        "top": "33%",
        "left": "0%",
        "width": "92%",
        "height": "11.11%",
        "centerX": "50%",
        "zIndex": 1,
        "isVisible": false,
        "clipBounds": true,
        "Location": "[18,121]",
        "skin": "slFbox",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    FlexContainer0e5406f5dfbf34b.setDefaultUnit(kony.flex.DP)
    FlexContainer0e5406f5dfbf34b.add(
    lblMaterialName, imgArrow);
    var FlexContainer0215602ab0a9240 = new kony.ui.FlexContainer({
        "id": "FlexContainer0215602ab0a9240",
        "top": "44%",
        "left": "0%",
        "width": "92%",
        "height": "0.20%",
        "centerX": "50%",
        "zIndex": 1,
        "isVisible": false,
        "clipBounds": true,
        "Location": "[18,161]",
        "skin": "CopyslFbox0952e865f869047",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    FlexContainer0215602ab0a9240.setDefaultUnit(kony.flex.DP)
    FlexContainer0215602ab0a9240.add();
    var FlexScrollContainerNews = new kony.ui.FlexScrollContainer({
        "id": "FlexScrollContainerNews",
        "top": "8.1%",
        "left": "0%",
        "width": "100%",
        "height": "91.90%",
        "centerX": "50%",
        "zIndex": 1,
        "isVisible": true,
        "enableScrolling": true,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "verticalScrollIndicator": true,
        "bounces": false,
        "pagingEnabled": false,
        "Location": "[0,32]",
        "skin": "CopyslFSbox0b312bd66a9d847",
        "bouncesZoom": true,
        "zoomScale": 1.0,
        "minZoomScale": 1.0,
        "maxZoomScale": 1.0,
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    FlexScrollContainerNews.setDefaultUnit(kony.flex.DP);
    FlexScrollContainerNews.add(
    SegMaterials, FlexContainer0e5406f5dfbf34b, FlexContainer0215602ab0a9240);
    var FlexContainerMain = new kony.ui.FlexContainer({
        "id": "FlexContainerMain",
        "top": "11%",
        "left": "0%",
        "width": "100%",
        "height": "89%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,49]",
        "skin": "CopyslFbox01425c4a9e1c340",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    FlexContainerMain.setDefaultUnit(kony.flex.DP)
    FlexContainerMain.add(
    FlexContainer04504ac15399e47, FlexScrollContainerNews);
    var FlexContainerTrans = new kony.ui.FlexContainer({
        "id": "FlexContainerTrans",
        "top": "0%",
        "left": "0%",
        "width": "100%",
        "height": "100%",
        "zIndex": 10,
        "isVisible": false,
        "clipBounds": true,
        "Location": "[0,0]",
        "skin": "slFbox0078fe8f513e440",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    FlexContainerTrans.setDefaultUnit(kony.flex.DP)
    FlexContainerTrans.add();
    var CopybtnMenu = new kony.ui.Button({
        "id": "CopybtnMenu",
        "top": "9.73%",
        "left": "80.08%",
        "width": "13.67%",
        "height": "14.29%",
        "zIndex": 1,
        "isVisible": true,
        "text": null,
        "skin": "CopyslButtonGlossBlue03d17cf5de2de42",
        "focusSkin": "CopyslButtonGlossBlue030abb3392cbb43"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var imgLogo = new kony.ui.Image2({
        "id": "imgLogo",
        "top": "25%",
        "left": "4%",
        "width": "99.61%",
        "height": "60.00%",
        "centerX": "50%",
        "zIndex": 1,
        "isVisible": true,
        "src": "menulogo.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null,
        "skin": "slImage00f0e5dd7ae164f"
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var FlexContainer0a314c98229e149 = new kony.ui.FlexContainer({
        "id": "FlexContainer0a314c98229e149",
        "top": "0%",
        "left": "0%",
        "width": "100%",
        "height": "31.70%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,0]",
        "skin": "slFbox02a89e7c1586246",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    FlexContainer0a314c98229e149.setDefaultUnit(kony.flex.DP)
    FlexContainer0a314c98229e149.add(
    CopybtnMenu, imgLogo);
    var segMenubox = new kony.ui.FlexContainer({
        "id": "segMenubox",
        "isVisible": true,
        "orientation": null,
        "width": "100%",
        "height": "10%",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": null
    }, {});
    var segMenu = new kony.ui.SegmentedUI2({
        "id": "segMenu",
        "top": "30%",
        "left": "0%",
        "width": "100%",
        "height": "69.75%",
        "zIndex": 1,
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "FlexContainer09ba9c25b10044e": "FlexContainer09ba9c25b10044e",
            "lblMenu": "lblMenu",
            "imgMenu": "imgMenu"
        },
        "data": [{
            "lblMenu": "Inicio",
            "imgMenu": "iconhome.png"
        }, {
            "lblMenu": "Notas",
            "imgMenu": "icongraph.png"
        }, {
            "lblMenu": "Calendario",
            "imgMenu": "iconcalendar.png"
        }, {
            "lblMenu": "Horarios",
            "imgMenu": "icontime.png"
        }, {
            "lblMenu": "Mais",
            "imgMenu": "iconmore.png"
        }, {
            "lblMenu": "Sair",
            "imgMenu": "logout.png"
        }],
        "Location": "[0,135]",
        "rowTemplate": segMenubox,
        "rowSkin": "Copyseg0aa65874a7d7f46",
        "rowFocusSkin": "seg0b9619c5d0ac74e",
        "sectionHeaderSkin": "sliPhoneSegmentHeader025f6b7fd5f9644",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "00517b00",
        "showScrollbars": false,
        "groupCells": false,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {
        "indicator": constants.SEGUI_NONE,
        "enableDictionary": false,
        "showProgressIndicator": true,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "bounces": true,
        "editStyle": constants.SEGUI_EDITING_STYLE_NONE
    });
    var lblMenu = new kony.ui.Label({
        "id": "lblMenu",
        "top": "0%",
        "left": "15.63%",
        "width": "83.98%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "skin": "CopyslLabel0b9f86ddaa3164b"
    }, {
        "padding": [1, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var imgMenu = new kony.ui.Image2({
        "id": "imgMenu",
        "top": "0%",
        "left": "4%",
        "width": "9.77%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "imageWhenFailed": null,
        "imageWhileDownloading": null,
        "skin": "slImage",
        "src": "imagedrag.png"
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var FlexContainer09ba9c25b10044e = new kony.ui.FlexContainer({
        "id": "FlexContainer09ba9c25b10044e",
        "top": "0dp",
        "left": "0%",
        "width": "100%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,0]",
        "skin": "slFbox02a89e7c1586246",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    FlexContainer09ba9c25b10044e.setDefaultUnit(kony.flex.DP)
    FlexContainer09ba9c25b10044e.add(
    lblMenu, imgMenu);
    segMenubox.add(
    FlexContainer09ba9c25b10044e);
    var FlexContainerHamburger = new kony.ui.FlexContainer({
        "id": "FlexContainerHamburger",
        "top": "0%",
        "left": "-80%",
        "width": "80%",
        "height": "100%",
        "zIndex": 20,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[-360,0]",
        "skin": "CopyslFbox0a6ff0dad5e7b4b",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    FlexContainerHamburger.setDefaultUnit(kony.flex.DP)
    FlexContainerHamburger.add(
    FlexContainer0a314c98229e149, segMenu);
    frmMaterials.add(
    FlexHeader, FlexContainerMain, FlexContainerTrans, FlexContainerHamburger);
    frmMaterials.SegMaterials && (frmMaterials.SegMaterials.onRowClick = frmMaterials_SegMaterials_onRowClick_mobile);
    frmMaterials.FlexContainerTrans && (frmMaterials.FlexContainerTrans.onTouchEnd = frmMaterials_FlexContainerTrans_onTouchEnd_mobile);
    frmMaterials.btnBack && (frmMaterials.btnBack.onClick = frmMaterials_btnBack_onClick_mobile);
    frmMaterials.preShow = frmMaterials_preShow_mobile;
    frmMaterials.btnMenu && (frmMaterials.btnMenu.onClick = frmMaterials_btnMenu_onClick_mobile);
    frmMaterials.CopybtnMenu && (frmMaterials.CopybtnMenu.onClick = frmMaterials_CopybtnMenu_onClick_mobile);
    frmMaterials.segMenu && (frmMaterials.segMenu.onRowClick = frmMaterials_segMenu_onRowClick_mobile);
    frmMaterials.imgHeaderLogo && (frmMaterials.imgHeaderLogo.onTouchEnd = frmMaterials_imgHeaderLogo_onTouchEnd_mobile);
};

function frmMaterialsGlobals() {
    var MenuId = [];
    frmMaterials = new kony.ui.Form2({
        "id": "frmMaterials",
        "enableScrolling": true,
        "bounces": true,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "pagingEnabled": false,
        "needAppMenu": false,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "frmBg",
        "bouncesZoom": true,
        "zoomScale": 1.0,
        "minZoomScale": 1.0,
        "maxZoomScale": 1.0,
        "statusBarHidden": "false",
        "layoutType": kony.flex.FREE_FORM,
        "addWidgets": addWidgetsfrmMaterials
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
    frmMaterials.setDefaultUnit(kony.flex.DP);
};