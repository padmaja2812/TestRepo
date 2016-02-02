//Form JS File
function addWidgetsfrmCampusDetails() {
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
    imgHeaderLogo, btnMenu, btnBack);
    var lblCampusName = new kony.ui.Label({
        "id": "lblCampusName",
        "top": "0%",
        "left": "0%",
        "width": "100%",
        "height": "6.10%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Coracao Eucaristico",
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
    var imgCampusDetails = new kony.ui.Image2({
        "id": "imgCampusDetails",
        "top": "6%",
        "left": "0%",
        "width": "100%",
        "height": "27.47%",
        "zIndex": 1,
        "isVisible": true,
        "src": "campusdetailsbg.png",
        "imageWhenFailed": "campusdetailsbg.png",
        "imageWhileDownloading": "campusdetailsbg.png"
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var lblCampusName1 = new kony.ui.Label({
        "id": "lblCampusName1",
        "top": "0%",
        "left": "0%",
        "width": "100%",
        "height": "14.29%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Coracao Eucaristico",
        "skin": "CopyslLabel02f34eafe5ebd40"
    }, {
        "padding": [2, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var RichtextCampusDetails = new kony.ui.RichText({
        "id": "RichtextCampusDetails",
        "top": "0%",
        "left": "0%",
        "width": "100%",
        "height": "282%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Criado em iulho de 1958, o campus de Belo Horizonte e o maior dos campi do PUC minas, can 33 1.1 79 m2. Possui uma biblioteca com urn acenro aproximado de 270 mi Mos, dem de perodicos, videoteca hemeroteca, CDROM.% apostilos, mopos, normos e cotologos tecnicos. amigos. teses entre outros dotoda deem sistemo d¢ automocao pore faclitar a consults dos estudantes e o genencia-mento deseus procesos e servicos. entre seus vorios equipamentos estoo o com-plex° poliesportivo ",
        "skin": "CopyslRichText0ca1860fc9ac641"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [2, 1, 1, 1],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var FlexScrollContainer0b312f2fc3ce741 = new kony.ui.FlexScrollContainer({
        "id": "FlexScrollContainer0b312f2fc3ce741",
        "top": "14.30%",
        "left": "0%",
        "width": "100%",
        "height": "82.14%",
        "zIndex": 1,
        "isVisible": true,
        "enableScrolling": true,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "verticalScrollIndicator": true,
        "bounces": false,
        "pagingEnabled": false,
        "Location": "[0,16]",
        "skin": "slFSbox",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    FlexScrollContainer0b312f2fc3ce741.setDefaultUnit(kony.flex.DP);
    FlexScrollContainer0b312f2fc3ce741.add(
    RichtextCampusDetails);
    var FlexContainer01dd825959ea842 = new kony.ui.FlexContainer({
        "id": "FlexContainer01dd825959ea842",
        "top": "0%",
        "left": "0%",
        "width": "100%",
        "height": "43.75%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,0]",
        "skin": "slFbox",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    FlexContainer01dd825959ea842.setDefaultUnit(kony.flex.DP)
    FlexContainer01dd825959ea842.add(
    lblCampusName1, FlexScrollContainer0b312f2fc3ce741);
    var lblLocalization = new kony.ui.Label({
        "id": "lblLocalization",
        "top": "0%",
        "left": "0%",
        "width": "100%",
        "height": "20%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Localizacao",
        "skin": "CopyslLabel02f34eafe5ebd40"
    }, {
        "padding": [2, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var RichtextLocalization = new kony.ui.RichText({
        "id": "RichtextLocalization",
        "top": "75%",
        "left": "0%",
        "width": "100%",
        "height": "25%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Av. Dom Jose Gospor, 500 - Coracao eucaristico - Belo Horizonte - MC -CEP 50535-901 ",
        "skin": "CopyslRichText0ca1860fc9ac641"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [2, 1, 1, 1],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var MapLocalization = new kony.ui.Map({
        "id": "MapLocalization",
        "top": "20%",
        "left": "0%",
        "width": "100%",
        "height": "55%",
        "centerX": "50%",
        "zIndex": 1,
        "isVisible": true,
        "mapKey": null,
        "provider": constants.MAP_PROVIDER_GOOGLE,
        "defaultPinImage": "pinb.png",
        "calloutWidth": 80
    }, {
        "containerHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "showZoomControl": true,
        "mode": constants.MAP_VIEW_MODE_NORMAL,
        "zoomLevel": 15
    });
    var CopyFlexContainer0defcb9d91f1e4e = new kony.ui.FlexContainer({
        "id": "CopyFlexContainer0defcb9d91f1e4e",
        "top": "43%",
        "left": "0%",
        "width": "100%",
        "height": "35%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,112]",
        "skin": "slFbox",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    CopyFlexContainer0defcb9d91f1e4e.setDefaultUnit(kony.flex.DP)
    CopyFlexContainer0defcb9d91f1e4e.add(
    lblLocalization, RichtextLocalization, MapLocalization);
    var CopylblCampusName0dadd631fd54d4d = new kony.ui.Label({
        "id": "CopylblCampusName0dadd631fd54d4d",
        "top": "0%",
        "left": "0%",
        "width": "100%",
        "height": "38.46%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Contato",
        "skin": "CopyslLabel02f34eafe5ebd40"
    }, {
        "padding": [2, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var RichtextContact = new kony.ui.RichText({
        "id": "RichtextContact",
        "top": "0%",
        "left": "14.06%",
        "width": "85.94%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Telefone geral: (31)3319-4444",
        "skin": "CopyslRichText0949c5da5ccbf41"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 5, 1, 1],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var ImageCall = new kony.ui.Image2({
        "id": "ImageCall",
        "top": "0%",
        "left": "3%",
        "width": "10.94%",
        "height": "71.22%",
        "centerY": "50%",
        "zIndex": 1,
        "isVisible": true,
        "src": "phoneicon.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var FlexContainer0c26b42fcf21e4a = new kony.ui.FlexContainer({
        "id": "FlexContainer0c26b42fcf21e4a",
        "top": "38.49%",
        "left": "0%",
        "width": "100%",
        "height": "61.51%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,20]",
        "skin": "CopyslFbox0a486d16f44df4a",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    FlexContainer0c26b42fcf21e4a.setDefaultUnit(kony.flex.DP)
    FlexContainer0c26b42fcf21e4a.add(
    RichtextContact, ImageCall);
    var CopyFlexContainer0612997216d3849 = new kony.ui.FlexContainer({
        "id": "CopyFlexContainer0612997216d3849",
        "top": "79%",
        "left": "0%",
        "width": "100%",
        "height": "20.31%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,206]",
        "skin": "slFbox",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    CopyFlexContainer0612997216d3849.setDefaultUnit(kony.flex.DP)
    CopyFlexContainer0612997216d3849.add(
    CopylblCampusName0dadd631fd54d4d, FlexContainer0c26b42fcf21e4a);
    var FlexScrollContainer0bad27411877c41 = new kony.ui.FlexScrollContainer({
        "id": "FlexScrollContainer0bad27411877c41",
        "top": "34%",
        "left": "0%",
        "width": "100%",
        "height": "65.57%",
        "zIndex": 1,
        "isVisible": true,
        "enableScrolling": true,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "verticalScrollIndicator": false,
        "bounces": false,
        "pagingEnabled": false,
        "Location": "[0,136]",
        "skin": "slFSbox",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    FlexScrollContainer0bad27411877c41.setDefaultUnit(kony.flex.DP);
    FlexScrollContainer0bad27411877c41.add(
    FlexContainer01dd825959ea842, CopyFlexContainer0defcb9d91f1e4e, CopyFlexContainer0612997216d3849);
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
    lblCampusName, imgCampusDetails, FlexScrollContainer0bad27411877c41);
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
            "lblMenu": "SGA",
            "imgMenu": "iconprofile.png"
        }, {
            "lblMenu": "Unidades",
            "imgMenu": "iconlocation.png"
        }, {
            "lblMenu": "Informacoes",
            "imgMenu": "iconprofile.png"
        }, {
            "lblMenu": "Mais",
            "imgMenu": "iconmore.png"
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
    frmCampusDetails.add(
    FlexHeader, FlexContainerMain, FlexContainerTrans, FlexContainerHamburger);
    frmCampusDetails.segMenu && (frmCampusDetails.segMenu.onRowClick = frmCampusDetails_segMenu_onRowClick_mobile);
    frmCampusDetails.imgHeaderLogo && (frmCampusDetails.imgHeaderLogo.onTouchEnd = frmCampusDetails_imgHeaderLogo_onTouchEnd_mobile);
    frmCampusDetails.btnBack && (frmCampusDetails.btnBack.onClick = frmCampusDetails_btnBack_onClick_mobile);
    frmCampusDetails.FlexContainerTrans && (frmCampusDetails.FlexContainerTrans.onTouchEnd = frmCampusDetails_FlexContainerTrans_onTouchEnd_mobile);
    frmCampusDetails.CopybtnMenu && (frmCampusDetails.CopybtnMenu.onClick = frmCampusDetails_CopybtnMenu_onClick_mobile);
    frmCampusDetails.btnMenu && (frmCampusDetails.btnMenu.onClick = frmCampusDetails_btnMenu_onClick_mobile);
    frmCampusDetails.preShow = frmCampusDetails_preShow_mobile;
    frmCampusDetails.postShow = frmCampusDetails_postShow_mobile;
};

function frmCampusDetailsGlobals() {
    var MenuId = [];
    frmCampusDetails = new kony.ui.Form2({
        "id": "frmCampusDetails",
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
        "addWidgets": addWidgetsfrmCampusDetails
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
    frmCampusDetails.setDefaultUnit(kony.flex.DP);
};