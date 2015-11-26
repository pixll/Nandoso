var appInsights = window.appInsights || function (config) {
    function r(config) { t[config] = function () { var i = arguments; t.queue.push(function () { t[config].apply(t, i) }) } } var t = { config: config }, u = document, e = window, o = "script", s = u.createElement(o), i, f; for (s.src = config.url || "//az416426.vo.msecnd.net/scripts/a/ai.0.js", u.getElementsByTagName(o)[0].parentNode.appendChild(s), t.cookie = u.cookie, t.queue = [], i = ["Event", "Exception", "Metric", "PageView", "Trace"]; i.length;) r("track" + i.pop()); return r("setAuthenticatedUserContext"), r("clearAuthenticatedUserContext"), config.disableExceptionTracking || (i = "onerror", r("_" + i), f = e[i], e[i] = function (config, r, u, e, o) { var s = f && f(config, r, u, e, o); return s !== !0 && t["_" + i](config, r, u, e, o), s }), t
}({
    instrumentationKey: "8a53d9ee-9621-4478-9a04-453dbbfc53e5"
});

window.appInsights = appInsights;
appInsights.trackPageView();


var SpecialsModule = (function () {
    // Return anything that you want to expose outside the closure
    return {
        getSpecials: function (callback) {

            $.ajax({
                type: "GET",
                dataType: "jsonp",
                url: "http://api.uinames.com/?amount=25",
                success: function (data) {
                    console.log(data);
                    callback(data);
                }
            });

        }
    };
}());