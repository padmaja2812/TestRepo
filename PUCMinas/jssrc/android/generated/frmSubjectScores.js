//Form JS File
function addWidgetsfrmSubjectScores() {
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
    var lblSubjectName = new kony.ui.Label({
        "id": "lblSubjectName",
        "top": "0%",
        "left": "0%",
        "width": "100%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "text": "INSTALCOES ELECRTICAS INDUSTRIAIS",
        "skin": "CopyslLabel051b3a8379f5f4f"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
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
    var lblHeader = new kony.ui.Label({
        "id": "lblHeader",
        "top": "0%",
        "left": "0%",
        "width": "100%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Frequencia",
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
    var FlexContainer0555448ab99324e = new kony.ui.FlexContainer({
        "id": "FlexContainer0555448ab99324e",
        "top": "8.760000000000005%",
        "left": "0%",
        "width": "100%",
        "height": "6.10%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,35]",
        "skin": "slFbox",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    FlexContainer0555448ab99324e.setDefaultUnit(kony.flex.DP)
    FlexContainer0555448ab99324e.add(
    lblHeader);
    var lblAulas = new kony.ui.Label({
        "id": "lblAulas",
        "top": "0%",
        "left": "0%",
        "width": "25%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Aulas",
        "skin": "CopyslLabel03bc69319c44144"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var lblFaltas = new kony.ui.Label({
        "id": "lblFaltas",
        "top": "0%",
        "left": "25%",
        "width": "25%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Faltas",
        "skin": "CopyslLabel03bc69319c44144"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var lblPercentual = new kony.ui.Label({
        "id": "lblPercentual",
        "top": "0%",
        "left": "50%",
        "width": "50%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Percentual",
        "skin": "CopyslLabel03bc69319c44144"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var FlexContainer0d7636555310246 = new kony.ui.FlexContainer({
        "id": "FlexContainer0d7636555310246",
        "top": "0%",
        "left": "25%",
        "width": "0.20%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[112,0]",
        "skin": "CopyslFbox08dee8024172d47",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    FlexContainer0d7636555310246.setDefaultUnit(kony.flex.DP)
    FlexContainer0d7636555310246.add();
    var CopyFlexContainer06243fc07c9fb46 = new kony.ui.FlexContainer({
        "id": "CopyFlexContainer06243fc07c9fb46",
        "top": "0%",
        "left": "50%",
        "width": "0.20%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[225,0]",
        "skin": "CopyslFbox08dee8024172d47",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    CopyFlexContainer06243fc07c9fb46.setDefaultUnit(kony.flex.DP)
    CopyFlexContainer06243fc07c9fb46.add();
    var FlexContainer00e84c1ae25e540 = new kony.ui.FlexContainer({
        "id": "FlexContainer00e84c1ae25e540",
        "top": "0%",
        "left": "0%",
        "width": "100%",
        "height": "50%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,0]",
        "skin": "CopyslFbox057fd62a0e8e54a",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    FlexContainer00e84c1ae25e540.setDefaultUnit(kony.flex.DP)
    FlexContainer00e84c1ae25e540.add(
    lblAulas, lblFaltas, lblPercentual, FlexContainer0d7636555310246, CopyFlexContainer06243fc07c9fb46);
    var lblAulasValue = new kony.ui.Label({
        "id": "lblAulasValue",
        "top": "0%",
        "left": "0%",
        "width": "25%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "text": "68",
        "skin": "CopyslLabel043b1d7c9f1714d"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var lblFaltasValue = new kony.ui.Label({
        "id": "lblFaltasValue",
        "top": "0%",
        "left": "25%",
        "width": "25%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "text": "4",
        "skin": "CopyslLabel03ca6206d097d44"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var lblPercentualValue = new kony.ui.Label({
        "id": "lblPercentualValue",
        "top": "-0.45%",
        "left": "50.23%",
        "width": "50%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "text": "64.12%",
        "skin": "CopyslLabel059469c32d6174d"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var CopyFlexContainer0c78fb6c1042346 = new kony.ui.FlexContainer({
        "id": "CopyFlexContainer0c78fb6c1042346",
        "top": "0%",
        "left": "25%",
        "width": "0.20%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[112,0]",
        "skin": "CopyslFbox08dee8024172d47",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    CopyFlexContainer0c78fb6c1042346.setDefaultUnit(kony.flex.DP)
    CopyFlexContainer0c78fb6c1042346.add();
    var CopyFlexContainer0f98f7ffa4cf043 = new kony.ui.FlexContainer({
        "id": "CopyFlexContainer0f98f7ffa4cf043",
        "top": "0%",
        "left": "50%",
        "width": "0.20%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[225,0]",
        "skin": "CopyslFbox08dee8024172d47",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    CopyFlexContainer0f98f7ffa4cf043.setDefaultUnit(kony.flex.DP)
    CopyFlexContainer0f98f7ffa4cf043.add();
    var CopyFlexContainer097d64cbc0c7149 = new kony.ui.FlexContainer({
        "id": "CopyFlexContainer097d64cbc0c7149",
        "top": "50%",
        "left": "0%",
        "width": "100%",
        "height": "50%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,34]",
        "skin": "CopyslFbox0e94afdfb857942",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    CopyFlexContainer097d64cbc0c7149.setDefaultUnit(kony.flex.DP)
    CopyFlexContainer097d64cbc0c7149.add(
    lblAulasValue, lblFaltasValue, lblPercentualValue, CopyFlexContainer0c78fb6c1042346, CopyFlexContainer0f98f7ffa4cf043);
    var FlexContainer01067e40ba69346 = new kony.ui.FlexContainer({
        "id": "FlexContainer01067e40ba69346",
        "top": "15%",
        "left": "0%",
        "width": "100%",
        "height": "17%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,60]",
        "skin": "slFbox",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    FlexContainer01067e40ba69346.setDefaultUnit(kony.flex.DP)
    FlexContainer01067e40ba69346.add(
    FlexContainer00e84c1ae25e540, CopyFlexContainer097d64cbc0c7149);
    var CopylblHeader03acded478fdd4e = new kony.ui.Label({
        "id": "CopylblHeader03acded478fdd4e",
        "top": "0%",
        "left": "0%",
        "width": "100%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Notas",
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
    var CopyFlexContainer0573742130dca4d = new kony.ui.FlexContainer({
        "id": "CopyFlexContainer0573742130dca4d",
        "top": "33.760000000000005%",
        "left": "0%",
        "width": "100%",
        "height": "6.10%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,135]",
        "skin": "slFbox",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    CopyFlexContainer0573742130dca4d.setDefaultUnit(kony.flex.DP)
    CopyFlexContainer0573742130dca4d.add(
    CopylblHeader03acded478fdd4e);
    var CopylblAulas0ad1b93794c2b49 = new kony.ui.Label({
        "id": "CopylblAulas0ad1b93794c2b49",
        "top": "0%",
        "left": "0%",
        "width": "50%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Avaliacao",
        "skin": "CopyslLabel03bc69319c44144"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var CopylblFaltas015477c2354734f = new kony.ui.Label({
        "id": "CopylblFaltas015477c2354734f",
        "top": "0%",
        "left": "50%",
        "width": "25%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Valor",
        "skin": "CopyslLabel03bc69319c44144"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var CopylblPercentual04c27f32d56ea45 = new kony.ui.Label({
        "id": "CopylblPercentual04c27f32d56ea45",
        "top": "0%",
        "left": "75%",
        "width": "25%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Nota",
        "skin": "CopyslLabel03bc69319c44144"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var CopyFlexContainer0bccdcba1e30047 = new kony.ui.FlexContainer({
        "id": "CopyFlexContainer0bccdcba1e30047",
        "top": "0%",
        "left": "50%",
        "width": "0.20%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[225,0]",
        "skin": "CopyslFbox08dee8024172d47",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    CopyFlexContainer0bccdcba1e30047.setDefaultUnit(kony.flex.DP)
    CopyFlexContainer0bccdcba1e30047.add();
    var CopyFlexContainer07831088c800a4c = new kony.ui.FlexContainer({
        "id": "CopyFlexContainer07831088c800a4c",
        "top": "0%",
        "left": "75%",
        "width": "0.20%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[337,0]",
        "skin": "CopyslFbox08dee8024172d47",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    CopyFlexContainer07831088c800a4c.setDefaultUnit(kony.flex.DP)
    CopyFlexContainer07831088c800a4c.add();
    var CopyFlexContainer066b6e819485342 = new kony.ui.FlexContainer({
        "id": "CopyFlexContainer066b6e819485342",
        "top": "0%",
        "left": "0%",
        "width": "100%",
        "height": "13%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,0]",
        "skin": "CopyslFbox057fd62a0e8e54a",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    CopyFlexContainer066b6e819485342.setDefaultUnit(kony.flex.DP)
    CopyFlexContainer066b6e819485342.add(
    CopylblAulas0ad1b93794c2b49, CopylblFaltas015477c2354734f, CopylblPercentual04c27f32d56ea45, CopyFlexContainer0bccdcba1e30047, CopyFlexContainer07831088c800a4c);
    var SegScoresbox = new kony.ui.FlexContainer({
        "id": "SegScoresbox",
        "isVisible": true,
        "orientation": null,
        "width": "100%",
        "height": "15%",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": null
    }, {});
    var SegScores = new kony.ui.SegmentedUI2({
        "id": "SegScores",
        "top": "0%",
        "left": "0%",
        "width": "100%",
        "height": "98.21%",
        "zIndex": 1,
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "FlexContainer0993168fa3c9042": "FlexContainer0993168fa3c9042",
            "FlexContainer0e5406f5dfbf34b": "FlexContainer0e5406f5dfbf34b",
            "lblNota": "lblNota",
            "lblValor": "lblValor",
            "lblSubjectName": "lblSubjectName"
        },
        "data": [{
            "lblNota": "7",
            "lblValor": "8",
            "lblSubjectName": "Estudo dirigido 1"
        }, {
            "lblNota": "8",
            "lblValor": "8",
            "lblSubjectName": "Estudo dirigido 1"
        }, {
            "lblNota": "17",
            "lblValor": "23",
            "lblSubjectName": "Primeira Prova"
        }, {
            "lblNota": "8",
            "lblValor": "8",
            "lblSubjectName": "Estudo dirigido 3"
        }, {
            "lblNota": "29",
            "lblValor": "30",
            "lblSubjectName": "Avaliacao final"
        }],
        "Location": "[0,0]",
        "rowTemplate": SegScoresbox,
        "rowSkin": "Copyseg0aa7c0bbc027f4e",
        "rowFocusSkin": "seg2Focus",
        "alternateRowSkin": "Copyseg024b7c0014f0e4e",
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "ffffff19",
        "showScrollbars": false,
        "groupCells": false,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});
    var lblSubjectName = new kony.ui.Label({
        "id": "lblSubjectName",
        "top": "0%",
        "left": "0%",
        "width": "50%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "skin": "CopyslLabel089f7c8c92f7343"
    }, {
        "padding": [2, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var lblValor = new kony.ui.Label({
        "id": "lblValor",
        "top": "0%",
        "left": "50%",
        "width": "25%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "skin": "CopyslLabel089f7c8c92f7343"
    }, {
        "padding": [2, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var lblNota = new kony.ui.Label({
        "id": "lblNota",
        "top": "0%",
        "left": "75%",
        "width": "25%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "skin": "CopyslLabel089f7c8c92f7343"
    }, {
        "padding": [2, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var FlexContainer0993168fa3c9042 = new kony.ui.FlexContainer({
        "id": "FlexContainer0993168fa3c9042",
        "top": "0%",
        "left": "74.30%",
        "width": "1.50%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[334,0]",
        "skin": "CopyslFbox0f5fb367e16bd4e",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    FlexContainer0993168fa3c9042.setDefaultUnit(kony.flex.DP)
    FlexContainer0993168fa3c9042.add();
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
    lblSubjectName, lblValor, lblNota, FlexContainer0993168fa3c9042);
    SegScoresbox.add(
    FlexContainer0e5406f5dfbf34b);
    var FlexScrollContainerNews = new kony.ui.FlexScrollContainer({
        "id": "FlexScrollContainerNews",
        "top": "13%",
        "left": "0%",
        "width": "100%",
        "height": "87%",
        "centerX": "50%",
        "zIndex": 1,
        "isVisible": true,
        "enableScrolling": true,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "verticalScrollIndicator": true,
        "bounces": false,
        "pagingEnabled": false,
        "Location": "[0,31]",
        "skin": "CopyslFSbox0c11eba19b2f049",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    FlexScrollContainerNews.setDefaultUnit(kony.flex.DP);
    FlexScrollContainerNews.add(
    SegScores);
    var CopyFlexContainer0420d3d1c35c342 = new kony.ui.FlexContainer({
        "id": "CopyFlexContainer0420d3d1c35c342",
        "top": "40%",
        "left": "0%",
        "width": "100%",
        "height": "60.45%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,160]",
        "skin": "slFbox",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    CopyFlexContainer0420d3d1c35c342.setDefaultUnit(kony.flex.DP)
    CopyFlexContainer0420d3d1c35c342.add(
    CopyFlexContainer066b6e819485342, FlexScrollContainerNews);
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
    FlexContainer04504ac15399e47, FlexContainer0555448ab99324e, FlexContainer01067e40ba69346, CopyFlexContainer0573742130dca4d, CopyFlexContainer0420d3d1c35c342);
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
    frmSubjectScores.add(
    FlexHeader, FlexContainerMain, FlexContainerTrans, FlexContainerHamburger);
    frmSubjectScores.btnBack && (frmSubjectScores.btnBack.onClick = frmSubjectScores_btnBack_onClick_mobile);
    frmSubjectScores.CopybtnMenu && (frmSubjectScores.CopybtnMenu.onClick = frmSubjectScores_CopybtnMenu_onClick_mobile);
    frmSubjectScores.FlexContainerTrans && (frmSubjectScores.FlexContainerTrans.onTouchEnd = frmSubjectScores_FlexContainerTrans_onTouchEnd_mobile);
    frmSubjectScores.segMenu && (frmSubjectScores.segMenu.onRowClick = frmSubjectScores_segMenu_onRowClick_mobile);
    frmSubjectScores.btnMenu && (frmSubjectScores.btnMenu.onClick = frmSubjectScores_btnMenu_onClick_mobile);
    frmSubjectScores.imgHeaderLogo && (frmSubjectScores.imgHeaderLogo.onTouchEnd = frmSubjectScores_imgHeaderLogo_onTouchEnd_mobile);
    frmSubjectScores.preShow = frmSubjectScores_preShow_mobile;
};

function frmSubjectScoresGlobals() {
    var MenuId = [];
    frmSubjectScores = new kony.ui.Form2({
        "id": "frmSubjectScores",
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
        "addWidgets": addWidgetsfrmSubjectScores
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
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
    frmSubjectScores.setDefaultUnit(kony.flex.DP);
};