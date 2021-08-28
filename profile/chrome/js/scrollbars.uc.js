(function () {
    var prefs = Services.prefs,
        enabled;
    if (prefs.prefHasUserValue('userChromeJS.floating_scrollbar.enabled')) {
        enabled = prefs.getBoolPref('userChromeJS.floating_scrollbar.enabled')
    } else {
        prefs.setBoolPref('userChromeJS.floating_scrollbar.enabled', true);
        enabled = true;
    }

    var css_code = '\
    @namespace url(http: //www.mozilla.org/keymaster/gatekeeper/there.is.only.xul);\
    /* default scrollbars  */\
	:not(select):not(hbox) > scrollbar {\
        -moz-appearance: none !important;\
        position: relative !important;\
        background-color: transparent !important;\
        background-image: none !important;\
        padding: 2px !important;\
        transition: background-color 0.25s, padding 0.25s !important;\
        transition-timing-function: cubic-bezier(.25,.1,0,1) !important;\
		/*transition-delay: 1.0s !important;*/\
    }\
    :not(select):not(hbox) > scrollbar scrollbarbutton, :not(select):not(hbox) > scrollbar gripper {\
        -moz-appearance: none !important;\
        display: none !important;\
    }\
    :not(select):not(hbox) > scrollbar[orient = "vertical"] {\
        -moz-margin-start: -16px !important;\
        width: 16px !important;\
    }\
    :not(select):not(hbox) > scrollbar[orient = "horizontal"] {\
        margin-top: -16px !important;\
        height: 16px !important;\
    }\
    /*  default scrollbar thumbs  */\
    :not(select):not(hbox) > scrollbar thumb {\
        -moz-appearance: none !important;\
        background-color: rgba(100, 100, 100, 0.8) !important;\
        pointer-events: auto !important;\
        transition: transform 0.25s !important;\
        transition-timing-function: cubic-bezier(.25,.1,0,1) !important;\
		/*transition-delay: 1.0s !important;*/\
    }\
    :not(select):not(hbox) > scrollbar[orient = "vertical"] thumb {\
        min-height: 16px !important;\
        transform: scaleX(0.25) !important;\
		transform-origin: right !important;\
    }\
    :not(select):not(hbox) > scrollbar[orient = "horizontal"] thumb {\
        min-width: 16px !important;\
        transform: scaleY(0.25) !important;\
		transform-origin: bottom !important;\
    }\
    /*  hover over scrollbars  */\
    :not(select):not(hbox) > scrollbar:hover {\
        background-color: rgba(100, 100, 100, 0.2) !important;\
		padding: 0 !important;\
        transition: background-color 0.25s, padding 0.25s !important;\
        transition-timing-function: cubic-bezier(.25,.1,0,1) !important;\
		/*transition-delay: 0.1s !important;*/\
    }\
    :not(select):not(hbox) > scrollbar:hover thumb {\
        background-color: rgba(100, 100, 100, 1) !important;\
        transform: scale(1,1) !important;\
        transition: transform 0.25s !important;\
        transition-timing-function: cubic-bezier(.25,.1,0,1) !important;\
		/*transition-delay: 0.1s !important;*/\
    }\
    /*  hover over thumbs  */\
    :not(select):not(hbox) > scrollbar:hover thumb:hover {\
        background-color: rgba(110, 110, 110, 1) !important;\
        transition: background-color 0.25s !important;\
        transition-timing-function: cubic-bezier(.25,.1,0,1) !important;\
		/*transition-delay: 0.1s !important;*/\
    }\
	/*  active over thumbs  */\
    :not(select):not(hbox) > scrollbar:active thumb:active {\
        background-color: rgba(150, 150, 150, 1) !important;\
        transition: background-color 0.25s !important;\
        transition-timing-function: cubic-bezier(.25,.1,0,1) !important;\
		/*transition-delay: 0.1s !important;*/\
    }';

    var sss = Cc['@mozilla.org/content/style-sheet-service;1'].getService(Ci.nsIStyleSheetService);
    var uri = makeURI('data:text/css;charset=UTF=8,' + encodeURIComponent(css_code));

    var p = document.getElementById('devToolsSeparator');
    var m = document.createElement('menuitem');
    m.setAttribute('label', "Floating scrollbars");
    m.setAttribute('type', 'checkbox');
    m.setAttribute('autocheck', 'false');
    m.setAttribute('checked', enabled);
    p.parentNode.insertBefore(m, p);
    m.addEventListener('command', command, false);

    if (enabled) {
        sss.loadAndRegisterSheet(uri, sss.AGENT_SHEET);
    }

    function command() {
        if (sss.sheetRegistered(uri, sss.AGENT_SHEET)) {
            prefs.setBoolPref('userScript.floating_scrollbars.enabled', false);
            sss.unregisterSheet(uri, sss.AGENT_SHEET);
            m.setAttribute('checked', false);
        } else {
            prefs.setBoolPref('userScript.floating_scrollbars.enabled', true);
            sss.loadAndRegisterSheet(uri, sss.AGENT_SHEET);
            m.setAttribute('checked', true);
        }

        let root = document.documentElement;
        let display = root.style.display;
        root.style.display = 'none';
        window.getComputedStyle(root).display; // Flush
        root.style.display = display;
    }

})();
