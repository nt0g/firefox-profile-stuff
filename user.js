/*          SCROLL 0         */
user_pref("apz.frame_delay.enabled", false);

/*      SCROLL 1 (SPEED)     */
user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 600);
user_pref("general.smoothScroll.mouseWheel.durationMinMS", 400);
user_pref("mousewheel.acceleration.factor", 8);
user_pref("mousewheel.acceleration.start", 2);

/*     SCROLL 2 (PHYSICS)    */
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 250);
user_pref("general.smoothScroll.msdPhysics.enabled", true);
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 450);
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 450);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 50);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio;0", 4);
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 5000);
user_pref("mousewheel.min_line_scroll_amount", 22);
user_pref("toolkit.scrollbox.horizontalScrollDistance", 4);
user_pref("toolkit.scrollbox.verticalScrollDistance", 5);

/*         INTERFACE         */
user_pref("alerts.useSystemBackend", true);
user_pref("media.autoplay.enabled.user-gestures-needed", false);
user_pref("nglayout.enable_drag_images", false);
/*user_pref("browser.uidensity", 1);*/
user_pref("media.videocontrols.picture-in-picture.video-toggle.position", "top");

/*      THEMING SUPPORT      */
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("svg.context-properties.content.enabled", true);
user_pref("layout.css.backdrop-filter.enabled", true);

/*      H/W ACCELERATION     */
user_pref("layers.acceleration.force-enabled", true);
user_pref("layers.offmainthreadcomposition.enabled", true);

/*         MANAGEMENT        */
user_pref("javascript.options.shared_memory", true);
user_pref("browser.sessionhistory.max_total_viewers", 0);
user_pref("browser.sessionstore.interval", 60000);
user_pref("network.dns.disablePrefetch", false);
user_pref("network.prefetch-next", false);

/*         RAM CACHE         */
/*
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.memory.enable", true);
user_pref("browser.cache.memory.capacity", 512000);
*/

/*  PRIVACY(privacytools.io) */

user_pref("privacy.firstparty.isolate = true", true);
user_pref("privacy.resistFingerprinting", true);
user_pref("privacy.trackingprotection.fingerprinting.enabled", true);
user_pref("privacy.trackingprotection.cryptomining.enabled", true);
user_pref("privacy.trackingprotection.enabled", true);
user_pref("browser.send_pings", false);
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("dom.event.clipboardevents.enabled", false);

user_pref("media.eme.enabled", false); //Поломается DRM
user_pref("media.gmp-widevinecdm.enabled", false);

user_pref("media.navigator.enabled", false);

user_pref("network.cookie.cookieBehavior", 1);

user_pref("network.http.referer.XOriginPolicy", 2);
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);

user_pref("webgl.disabled", false); //Возможен буль-буль

user_pref("beacon.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);

user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false);
user_pref("network.prefetch-next", false);

user_pref("network.IDN_show_punycode", true);


user_pref("", false);
user_pref("", true);