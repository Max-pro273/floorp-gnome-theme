/* user.js
 * https://github.com/rafaelmardojai/firefox-gnome-theme/
 */

// Enable customChrome.css
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Set UI density to normal
user_pref("browser.uidensity", 0);

// Enable SVG context-propertes
user_pref("svg.context-properties.content.enabled", true);

// Disable private window dark theme
user_pref("browser.theme.dark-private-windows", false);

// Enable rounded bottom window corners
user_pref("widget.gtk.rounded-bottom-corners.enabled", true);

// My prefered gnomeTheme settings
user_pref("gnomeTheme.activeTabContrast", true);
user_pref("gnomeTheme.hideSingleTab", true);
user_pref("gnomeTheme.hideWebrtcIndicator", true);
user_pref("gnomeTheme.normalWidthTabs", false);
user_pref("gnomeTheme.tabsAsHeaderbar", true);

// My prefered Floorp settings
user_pref("gnomeTheme.activeTabContrast", true);
user_pref("gnomeTheme.hideSingleTab", true);
user_pref("gnomeTheme.hideWebrtcIndicator", true);
user_pref("gnomeTheme.normalWidthTabs", false);
user_pref("gnomeTheme.tabsAsHeaderbar", true);

// My prefered Floorp settings
user_pref("findbar.highlightAll", true);
user_pref("floorp.browser.deletedWidgets", "[\"firefox-view-button\",\"undo-closed-tab\",\"import-button\",\"fxa-toolbar-menu-button\"]");
user_pref("floorp.browser.splitView.working", false);
user_pref("floorp.browser.ssb.config", "{\"showToolbar\":true}");
user_pref("floorp.browser.ssb.enabled", true);
user_pref("floorp.browser.tabs.openNewTabPosition", -1);
user_pref("floorp.browser.welcome.page.shown", true);
user_pref("floorp.design.configs", "{\"globalConfigs\":{\"userInterface\":\"protonfix\",\"faviconColor\":false,\"appliedUserJs\":\"\"},\"tabbar\":{\"tabbarStyle\":\"horizontal\",\"tabbarPosition\":\"default\",\"multiRowTabBar\":{\"maxRowEnabled\":false,\"maxRow\":3}},\"tab\":{\"tabScroll\":{\"enabled\":true,\"reverse\":false,\"wrap\":false},\"tabMinHeight\":30,\"tabMinWidth\":76,\"tabPinTitle\":false,\"tabDubleClickToClose\":false,\"tabOpenPosition\":-1},\"uiCustomization\":{\"navbar\":{\"position\":\"top\",\"searchBarTop\":false},\"display\":{\"disableFullscreenNotification\":false,\"deleteBrowserBorder\":false},\"special\":{\"optimizeForTreeStyleTab\":false,\"hideForwardBackwardButton\":false,\"stgLikeWorkspaces\":false},\"multirowTab\":{\"newtabInsideEnabled\":false},\"bookmarkBar\":{\"focusExpand\":false,\"position\":\"top\"},\"qrCode\":{\"disableButton\":true},\"disableFloorpStart\":false}}");
user_pref("floorp.keyboardshortcut.enabled", true);
user_pref("floorp.mousegesture.enabled", false);
user_pref("floorp.mousegesture.last_enabled_state", false);
user_pref("floorp.panelSidebar.enabled", true);
user_pref("floorp.splitView.config", "{\"layout\":\"horizontal\",\"maxPanes\":4}");
user_pref("floorp.splitView.paneSizes", "{\"flexRatios\":[0.5,0.5],\"gridColRatio\":0.5,\"gridRowRatio\":0.5}");
user_pref("floorp.tabs.sleep.exclusion", "{\"enabled\":true,\"patterns\":[\"docs.google.com\"]}");
user_pref("floorp.workspaces.enabled", true);
user_pref("floorp.workspaces.pending-exit-from-workspace-empty", false);
user_pref("floorp.zenmode.enabled", false);