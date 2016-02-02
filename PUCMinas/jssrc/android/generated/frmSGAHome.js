//Form JS File
function addWidgetsfrmSGAHome() {
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
        "isVisible": true,
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
    imgHeaderLogo, btnMenu);
    var lblHeader = new kony.ui.Label({
        "id": "lblHeader",
        "top": "0%",
        "left": "0%",
        "width": "100%",
        "height": "6.10%",
        "zIndex": 1,
        "isVisible": true,
        "text": "SGA",
        "skin": "CopyslLabel0072305ae463d43"
    }, {
        "padding": [2, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var ImgBanner = new kony.ui.Image2({
        "id": "ImgBanner",
        "top": "5%",
        "left": "0%",
        "width": "100%",
        "height": "27.47%",
        "zIndex": 1,
        "isVisible": true,
        "src": "noticebg.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var CopylblHeader0eb477a473d8d45 = new kony.ui.Label({
        "id": "CopylblHeader0eb477a473d8d45",
        "top": "0%",
        "left": "0%",
        "width": "100%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Ultimas Noticias",
        "skin": "CopyslLabel0072305ae463d43"
    }, {
        "padding": [2, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var lblVErMais = new kony.ui.Label({
        "id": "lblVErMais",
        "top": "0%",
        "left": "0%",
        "width": "100%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Ver Mais",
        "skin": "CopyslLabel078b355a7b8364d"
    }, {
        "padding": [2, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var Image0348ecafac3204e = new kony.ui.Image2({
        "id": "Image0348ecafac3204e",
        "top": "10%",
        "left": "70.43%",
        "width": "25%",
        "height": "80%",
        "zIndex": 1,
        "isVisible": true,
        "src": "add.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var FlexContainer049970384ee5846 = new kony.ui.FlexContainer({
        "id": "FlexContainer049970384ee5846",
        "top": "0%",
        "left": "78.13%",
        "width": "21.88%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[351,0]",
        "skin": "slFbox",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    FlexContainer049970384ee5846.setDefaultUnit(kony.flex.DP)
    FlexContainer049970384ee5846.add(
    lblVErMais, Image0348ecafac3204e);
    var FlexContainer123 = new kony.ui.FlexContainer({
        "id": "FlexContainer123",
        "top": "31.76%",
        "left": "0%",
        "width": "100%",
        "height": "5%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,127]",
        "skin": "slFbox",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    FlexContainer123.setDefaultUnit(kony.flex.DP)
    FlexContainer123.add(
    CopylblHeader0eb477a473d8d45, FlexContainer049970384ee5846);
    var SegNewsbox = new kony.ui.FlexContainer({
        "id": "SegNewsbox",
        "isVisible": true,
        "orientation": null,
        "width": "100%",
        "height": "19.7%",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": null
    }, {});
    var SegNews = new kony.ui.SegmentedUI2({
        "id": "SegNews",
        "top": "0%",
        "left": "0%",
        "width": "100%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "FlexContainer0e5406f5dfbf34b": "FlexContainer0e5406f5dfbf34b",
            "lblNewsHeader": "lblNewsHeader",
            "lblNewsDesc": "lblNewsDesc"
        },
        "data": [{
            "lblNewsHeader": "Mato da Univerdidade recebe Torneio de Arco e Flecha",
            "lblNewsDesc": "Neste sabado e domingo 12 e 13 de dezembro, a mato da Universidade, lo-calized° no campus Coracao Eu...."
        }, {
            "lblNewsHeader": "Mato da Univerdidade recebe Torneio de Arco e Flecha",
            "lblNewsDesc": "Neste sabado e domingo 12 e 13 de dezembro, a mato da Universidade, lo-calized° no campus Coracao Eu...."
        }, {
            "lblNewsHeader": "Mato da Univerdidade recebe Torneio de Arco e Flecha",
            "lblNewsDesc": "Neste sabado e domingo 12 e 13 de dezembro, a mato da Universidade, lo-calized° no campus Coracao Eu...."
        }, {
            "lblNewsHeader": "Mato da Univerdidade recebe Torneio de Arco e Flecha",
            "lblNewsDesc": "Neste sabado e domingo 12 e 13 de dezembro, a mato da Universidade, lo-calized° no campus Coracao Eu...."
        }, {
            "lblNewsHeader": "Mato da Univerdidade recebe Torneio de Arco e Flecha",
            "lblNewsDesc": "Neste sabado e domingo 12 e 13 de dezembro, a mato da Universidade, lo-calized° no campus Coracao Eu...."
        }],
        "Location": "[0,0]",
        "rowTemplate": SegNewsbox,
        "rowSkin": "Copyseg0ffd25397e10f4f",
        "rowFocusSkin": "seg2Focus",
        "alternateRowSkin": "Copyseg01125aad44f1048",
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "ffffff00",
        "showScrollbars": false,
        "groupCells": false,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});
    var lblNewsHeader = new kony.ui.Label({
        "id": "lblNewsHeader",
        "top": "0%",
        "left": "0%",
        "width": "100%",
        "height": "45%",
        "zIndex": 1,
        "isVisible": true,
        "skin": "CopyslLabel01dd32bea3efe4d"
    }, {
        "padding": [2, 1, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var lblNewsDesc = new kony.ui.Label({
        "id": "lblNewsDesc",
        "top": "45%",
        "left": "0%",
        "width": "100%",
        "height": "55%",
        "zIndex": 1,
        "isVisible": true,
        "skin": "CopyslLabel05e813c37a9db4e"
    }, {
        "padding": [2, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var FlexContainer0e5406f5dfbf34b = new kony.ui.FlexContainer({
        "id": "FlexContainer0e5406f5dfbf34b",
        "top": "0dp",
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
    lblNewsHeader, lblNewsDesc);
    SegNewsbox.add(
    FlexContainer0e5406f5dfbf34b);
    var FlexScrollContainerNews = new kony.ui.FlexScrollContainer({
        "id": "FlexScrollContainerNews",
        "top": "37%",
        "left": "0%",
        "width": "100%",
        "height": "63%",
        "zIndex": 1,
        "isVisible": true,
        "enableScrolling": true,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "verticalScrollIndicator": true,
        "bounces": false,
        "pagingEnabled": false,
        "Location": "[0,148]",
        "skin": "slFSbox",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    FlexScrollContainerNews.setDefaultUnit(kony.flex.DP);
    FlexScrollContainerNews.add(
    SegNews);
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
    lblHeader, ImgBanner, FlexContainer123, FlexScrollContainerNews);
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
    }, {});
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
        "imageWhileDownloading": null
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
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
    }, {});
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
        "textCopyable": false
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
        "src": "imagedrag.png"
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
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
    frmSGAHome.add(
    FlexHeader, FlexContainerMain, FlexContainerTrans, FlexContainerHamburger);
    frmSGAHome.onDeviceBack = frmSGAHome_onDeviceBack_mobile;
    frmSGAHome.segMenu && (frmSGAHome.segMenu.onRowClick = frmSGAHome_segMenu_onRowClick_mobile);
    frmSGAHome.FlexContainer049970384ee5846 && (frmSGAHome.FlexContainer049970384ee5846.onTouchEnd = frmSGAHome_FlexContainer049970384ee5846_onTouchEnd_mobile);
    frmSGAHome.CopybtnMenu && (frmSGAHome.CopybtnMenu.onClick = frmSGAHome_CopybtnMenu_onClick_mobile);
    frmSGAHome.FlexContainerTrans && (frmSGAHome.FlexContainerTrans.onTouchEnd = frmSGAHome_FlexContainerTrans_onTouchEnd_mobile);
    frmSGAHome.preShow = frmSGAHome_preShow_mobile;
    frmSGAHome.btnMenu && (frmSGAHome.btnMenu.onClick = frmSGAHome_btnMenu_onClick_mobile);
};

function frmSGAHomeGlobals() {
    var MenuId = [];
    frmSGAHome = new kony.ui.Form2({
        "id": "frmSGAHome",
        "enableScrolling": true,
        "bounces": true,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "pagingEnabled": false,
        "needAppMenu": false,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "frmBg",
        "layoutType": kony.flex.FREE_FORM,
        "addWidgets": addWidgetsfrmSGAHome
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
    frmSGAHome.setDefaultUnit(kony.flex.DP);
};