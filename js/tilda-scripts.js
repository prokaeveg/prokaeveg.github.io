function t_onReady(func) {
    "loading" != document.readyState ? func() : document.addEventListener("DOMContentLoaded", func)
}

function t_addClass(el, className) {
    document.body.classList ? el.classList.add(className) : el.className += (el.className ? " " : "") + className
}

function t_removeClass(el, className) {
    document.body.classList ? el.classList.remove(className) : el.className = el.className.replace(new RegExp("(^|\\s+)" + className + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "")
}

function t_removeEl(el) {
    el && el.parentNode && el.parentNode.removeChild(el)
}

function t_outerWidth(el) {
    var style = getComputedStyle(el), width = style.width, marginLeft = style.marginLeft,
        marginRight = style.marginRight;
    return "auto" === width && (width = 0), "auto" === marginLeft && (marginLeft = 0), "auto" === marginRight && (marginRight = 0), width = parseInt(width) + parseInt(marginLeft) + parseInt(marginRight)
}

var version, version;
(window.isSearchBot = !1, /Bot/i.test(navigator.userAgent) && (window.isSearchBot = !0), window.isMobile = !1, window.$isMobile = !1, /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (window.isMobile = !0, window.$isMobile = !0), window.isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/i.test(navigator.userAgent), window.isiOS = !1, /iPhone|iPad|iPod/i.test(navigator.userAgent) && (window.isiOS = !0), window.isiOSChrome = !!navigator.userAgent.match("CriOS"), window.isFirefox = /firefox/i.test(navigator.userAgent), window.isOpera = !!window.opr && !!window.opr.addons || !!window.opera || navigator.userAgent.indexOf(" OPR/") >= 0, window.isiOSVersion = "", window.isiOS) && (null !== (version = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)) && (window.isiOSVersion = [parseInt(version[1], 10), parseInt(version[2], 10), parseInt(version[3] || 0, 10)]));
(window.isSafari = !1, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && (window.isSafari = !0), window.isIE = !!document.documentMode, window.isSafariVersion = "", window.isSafari) && (null !== (version = navigator.appVersion.match(/Version\/(\d+)\.(\d+)\.?(\d+)? Safari/)) && (window.isSafariVersion = [parseInt(version[1], 10), parseInt(version[2], 10), parseInt(version[3] || 0, 10)]));

function t_throttle(fn, threshhold, scope) {
    var last, deferTimer;
    return threshhold || (threshhold = 250), function () {
        var context = scope || this, now = +new Date, args = arguments;
        last && now < last + threshhold ? (clearTimeout(deferTimer), deferTimer = setTimeout((function () {
            last = now, fn.apply(context, args)
        }), threshhold)) : (last = now, fn.apply(context, args))
    }
}

function t_onFuncLoad(funcName, okFunc, time) {
    if ("function" == typeof window[funcName] || "object" == typeof window[funcName]) okFunc(); else {
        var startTime = Date.now(), error = new Error(funcName + " is undefined"), callbackError = function () {
            throw error
        };
        setTimeout((function checkFuncExist() {
            var currentTime = Date.now();
            "function" != typeof window[funcName] && "object" != typeof window[funcName] ? ("complete" === document.readyState && currentTime - startTime > 5e3 && "function" != typeof window[funcName] && callbackError(), setTimeout(checkFuncExist, time || 100)) : okFunc()
        }))
    }
}

function t_scrollBarWidthCompensator__setObject() {
    window.scrollBarWidthCompensator = {};
    var obj = window.scrollBarWidthCompensator;
    obj.isInited = !1, obj.scrollBarWidth = Math.abs(window.innerWidth - document.documentElement.clientWidth), obj.delay = 0, obj.cancelTimeout = null;
    var excludedElements = ["t450", "t282__container", "t282__container__bg_opened", "t282__menu__container", "t830m", "t830__panel", "t451m", "t204__menu"],
        allElements = document.querySelectorAll("*");
    allElements = Array.prototype.filter.call(allElements, (function (el) {
        return !el.closest(".t1093") && !excludedElements.some((function (className) {
            return el.classList.contains(className)
        }))
    })), obj.fixedElements = [], Array.prototype.forEach.call(allElements, (function (el) {
        if (!el.classList.contains("t975")) {
            var computedStyle = window.getComputedStyle(el),
                computedPosition = computedStyle.getPropertyValue("position"),
                computedWidth = computedStyle.getPropertyValue("width"),
                computedHeight = computedStyle.getPropertyValue("height"),
                isFullscreenWidth = "100%" === computedWidth || computedWidth === window.innerWidth + "px" || computedWidth === window.innerWidth - obj.scrollBarWidth + "px" || "100vw" === computedWidth,
                isFullscreenHeight = "100%" === computedHeight || computedHeight === window.innerHeight + "px" || computedHeight === window.innerHeight - obj.scrollBarWidth + "px" || "auto" === computedHeight || "100vh" === computedHeight;
            ("fixed" === computedPosition || "absolute" === computedPosition && isFullscreenWidth && !isFullscreenHeight) && obj.fixedElements.push({
                el: el,
                computedStyle: computedStyle
            })
        }
    }))
}

function t_scrollBarWidthCompensator__init() {
    if (!window.isMobile) {
        window.scrollBarWidthCompensator || t_scrollBarWidthCompensator__setObject();
        var obj = window.scrollBarWidthCompensator;
        if (obj.scrollBarWidth = Math.abs(window.innerWidth - document.documentElement.clientWidth), obj.cancelTimeout && (window.clearTimeout(obj.cancelTimeout), obj.cancelTimeout = null), !obj.isInited && obj.scrollBarWidth) {
            obj.isInited = !0;
            var bodyComputedPadding = window.getComputedStyle(document.body).getPropertyValue("padding-right");
            bodyComputedPadding = parseInt(bodyComputedPadding.replace("px", ""), 10);
            var bodyInlinePadding = document.body.style.paddingRight;
            bodyInlinePadding && document.body.setAttribute("data-tilda-initial-padding-right", bodyInlinePadding), document.body.style.paddingRight = obj.scrollBarWidth + bodyComputedPadding + "px", document.body.style.height = "100vh", document.body.style.minHeight = "100vh", document.body.style.overflow = "hidden";
            var transitionDurations = [];
            Array.prototype.forEach.call(obj.fixedElements, (function (entry) {
                var el = entry.el;
                if (document.body.contains(el) && !el.classList.contains("t975") && !el.classList.contains("t975")) {
                    var computedStyle = entry.computedStyle, position = computedStyle.getPropertyValue("position");
                    if ("fixed" === position || "absolute" === position) {
                        var duration = computedStyle.getPropertyValue("transition-duration");
                        duration.indexOf("ms") + 1 ? (duration = parseInt(duration.replace("ms", ""), 10), transitionDurations.push(duration)) : duration.indexOf("s") + 1 && (duration = 1e3 * parseFloat(duration.replace("s", "")), transitionDurations.push(duration));
                        var computedRight = computedStyle.getPropertyValue("right");
                        computedRight = parseInt(computedRight.replace("px", ""), 10);
                        var computedWidth = computedStyle.getPropertyValue("width"),
                            computedHeight = computedStyle.getPropertyValue("height"),
                            elementInlineRight = el.style.right;
                        elementInlineRight && el.setAttribute("data-tilda-initial-right", elementInlineRight);
                        var inlineWidth = el.style.width;
                        inlineWidth && el.setAttribute("data-tilda-initial-width", inlineWidth);
                        var isFullscreenWidth = "100%" === computedWidth || computedWidth === window.innerWidth + "px" || computedWidth === window.innerWidth - obj.scrollBarWidth + "px" || "100vw" === computedWidth,
                            isFullscreenHeight = "100%" === computedHeight || computedHeight === window.innerHeight + "px" || computedHeight === window.innerHeight - obj.scrollBarWidth + "px" || "auto" === computedHeight || "100vh" === computedHeight;
                        !computedRight && 0 !== computedRight || "auto" === el.style.right || "absolute" === position || isFullscreenWidth ? isFullscreenWidth && !isFullscreenHeight && (el.style.width = "calc(100vw - " + obj.scrollBarWidth + "px)") : el.style.right = obj.scrollBarWidth + computedRight + "px"
                    }
                }
            })), transitionDurations.length && (obj.delay = Math.max.apply(null, transitionDurations))
        }
    }
}

function t_scrollBarWidthCompensator__cancel() {
    var obj = window.scrollBarWidthCompensator;
    obj && obj.isInited && (obj.isInited = !1, obj.delay = 0, document.body.hasAttribute("data-tilda-initial-padding-right") ? (document.body.style.paddingRight = document.body.getAttribute("data-tilda-initial-padding-right"), document.body.removeAttribute("data-tilda-initial-padding-right")) : document.body.style.removeProperty("padding-right"), document.body.style.removeProperty("height"), document.body.style.removeProperty("min-height"), document.body.style.removeProperty("overflow"), Array.prototype.forEach.call(obj.fixedElements, (function (entry) {
        var el = entry.el;
        el.hasAttribute("data-tilda-initial-right") ? (el.style.right = el.getAttribute("data-tilda-initial-right"), el.removeAttribute("data-tilda-initial-right")) : el.style.removeProperty("right"), el.hasAttribute("data-tilda-initial-width") ? (el.style.width = el.getAttribute("data-tilda-initial-width"), el.removeAttribute("data-tilda-initial-width")) : el.style.removeProperty("width")
    })))
}

function t_triggerEvent(el, eventName) {
    var event;
    document.createEvent ? (event = document.createEvent("HTMLEvents")).initEvent(eventName, !0, !1) : document.createEventObject && ((event = document.createEventObject()).eventType = eventName), event.eventName = eventName, el.dispatchEvent ? el.dispatchEvent(event) : el.fireEvent ? el.fireEvent("on" + event.eventType, event) : el[eventName] ? el[eventName]() : el["on" + eventName] && el["on" + eventName]()
}

window.browserLang = (window.navigator.userLanguage || window.navigator.language).toUpperCase().slice(0, 2), window.tildaBrowserLang = window.browserLang, t_onReady((function () {
    var allrecords = document.getElementById("allrecords");
    if (allrecords) var projectLang = allrecords.getAttribute("data-tilda-project-lang");
    projectLang && (window.browserLang = projectLang)
})), t_onReady((function () {
    var userAgent = window.navigator.userAgent, isInstagram = -1 !== userAgent.indexOf("Instagram"),
        isFacebook = -1 !== userAgent.indexOf("FBAV"), isYandex = -1 !== userAgent.indexOf("YaSearchBrowser"),
        isSamsung = -1 !== userAgent.indexOf("SamsungBrowser"), isDuckDuckGo = -1 !== userAgent.indexOf("DuckDuckGo"),
        isAndroid;
    if (-1 !== userAgent.indexOf("Android") && (isFacebook || isInstagram || isYandex || isSamsung || isDuckDuckGo)) {
        var textElement = document.createElement("p");
        textElement.style.lineHeight = "100px", textElement.style.padding = "0", textElement.style.margin = "0", textElement.style.height = "auto", textElement.style.position = "absolute", textElement.style.opacity = "0.001", textElement.innerText = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", document.body.appendChild(textElement);
        var factor = 100 / textElement.getBoundingClientRect().height;
        textElement.parentNode.removeChild(textElement), factor < .98 && document.body.insertAdjacentHTML("beforeend", '<style>.t396 [data-elem-type="text"] .tn-atom {zoom: ' + 100 * factor + "%;}</style>")
    }
    window.isiOS && !window.MSStream && (document.body.style.setProperty("-webkit-text-size-adjust", "100%"), document.body.style.setProperty("text-size-adjust", "100%"))
})), t_onReady((function () {
    setTimeout((function () {
        var html = document.querySelector("html"), tildaLabel = document.querySelector(".t-tildalabel"),
            bodyScrollHeight = html.offsetHeight;
        if (document.body && (bodyScrollHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.body.clientHeight, html.offsetHeight)), (document.getElementById("tildacopy") || tildaLabel) && tildaLabel.querySelectorAll("div")) bodyScrollHeight + 70 > window.innerHeight && tildaLabel && tildaLabel.setAttribute("style", "display: block !important; visibility: visible !important; position: relative !important; width: 100% !important; pointer-events: all !important; opacity: 1 !important; margin: 0 !important; z-index: 1 !important"); else {
            for (var childs = document.body.childNodes, arrChilds = [], i = 0; i < childs.length; i++) {
                var element = childs[i];
                8 === element.nodeType && arrChilds.push(element)
            }
            for (var i = 0; i < arrChilds.length; i++) -1 !== arrChilds[i].nodeValue.indexOf("'t remove this l") && document.getElementById("allrecords").insertAdjacentHTML("afterend", '<div class="t-tildalabel t-tildalabel-free" style="display: block !important; visibility: visible !important; position: relative !important; width: 100% !important; pointer-events: all !important; opacity: 1 !important; margin: 0 !important; z-index: 99900 !important"><div class="t-tildalabel-free__main"><a href="https://tilda.cc" target="_blank" style="padding-bottom:12px; display: block;"><img style="width:40px;" src="https://static.tildacdn.com/img/tildacopy.png"></a><div style="padding-bottom: 15px;">This site was made on <a href="https://tilda.cc" target="_blank" style="text-decoration: none; color:inherit;">Tilda — a website builder</a> that helps to&nbsp;create a&nbsp;website without any code</div><a href="https://tilda.cc/registration/" target="_blank" style="display: inline-block; padding: 10px 20px; font-size: 13px; border-radius: 50px; background-color: #fa8669; color: #fff; text-decoration: none;">Create a website</a></div><div class="t-tildalabel-free__links-wr"><a class="t-tildalabel-free__txt-link" href="https://help' + ("RU" === window.browserLang ? "-ru" : "") + '.tilda.cc/white-label" target="_blank">' + ("RU" === window.browserLang ? "Как удалить этот лейбл" : "How to remove this block") + "?</a></div></div>")
        }
    }), 500)
})), t_onReady((function () {
    var allRecords = document.getElementById("allrecords");
    if (!window.isMobile && allRecords && "yes" !== allRecords.getAttribute("data-blocks-animationoff") && !1 === window.isSearchBot) {
        for (var recBlocks = document.querySelectorAll(".r"), i = 0; i < recBlocks.length; i++) {
            var rec, style = (rec = recBlocks[i]).getAttribute("style");
            style && -1 !== style.indexOf("background-color") && rec.setAttribute("data-animationappear", "off")
        }
        for (var recBlocksNot = Array.prototype.slice.call(recBlocks).filter((function (el) {
            return !el.getAttribute("data-animationappear") && !el.getAttribute("data-screen-min") && !el.getAttribute("data-screen-max")
        })), i = 0; i < recBlocksNot.length; i++) {
            var rec, recTop = (rec = recBlocksNot[i]).getBoundingClientRect().top + window.pageYOffset,
                position = window.pageYOffset + window.innerHeight + 300;
            t_addClass(rec, recTop > 1e3 && recTop > position ? "r_hidden" : "r_showed"), t_addClass(rec, "r_anim")
        }
        if (recBlocksNot.length) {
            function t_blocksFade() {
                for (var i = recBlocksNot.length - 1; i >= 0; i--) {
                    var rec = recBlocksNot[i], recTop, position = 0;
                    rec.getBoundingClientRect().top + window.pageYOffset < (position = rec.offsetHeight <= 100 ? window.pageYOffset + window.innerHeight : window.pageYOffset + window.innerHeight - 100) && (t_removeClass(rec, "r_hidden"), t_addClass(rec, "r_showed"), (recBlocksNot = Array.prototype.slice.call(recBlocksNot)).splice(i, 1))
                }
            }

            var recBlocksT400 = document.querySelectorAll('[data-record-type="400"]');
            if (recBlocksT400.length > 0) var countCompleted = 0, count = 0, timer = setInterval((function () {
                300 === (count += 1) && clearInterval(timer);
                for (var i = 0; i < recBlocksT400.length; i++) {
                    var rec;
                    "yes" === recBlocksT400[i].getAttribute("data-hiding-completed") && (countCompleted += 1)
                }
                countCompleted === recBlocksT400.length && (t_blocksFade(), clearInterval(timer))
            }), 100);
            window.addEventListener("scroll", t_throttle((function () {
                t_blocksFade()
            }), 200)), setTimeout((function () {
                t_blocksFade()
            }))
        }
    }
    var html = document.querySelector("html"), body = document.body;
    "none" === html.style.display && (html.style.display = "block");
    var tildaLabel = document.querySelector(".t-tildalabel"), bodyScrollHeight;
    (bodyScrollHeight = body ? Math.max(body.scrollHeight, body.offsetHeight, body.clientHeight, html.offsetHeight) : html.offsetHeight) + 70 < window.innerHeight ? tildaLabel && (tildaLabel.style.display = "none") : tildaLabel && tildaLabel.setAttribute("style", "display: block !important")
})), function () {
    function t_setWindowVars() {
        window.winWidth = window.innerWidth, window.winHeight = window.innerHeight
    }

    function t_blocksdisplay() {
        var windowWidth = window.isMobile ? document.documentElement.clientWidth : window.innerWidth,
            recBlocks = document.querySelectorAll(".r[data-screen-max], .r[data-screen-min]"), max, min, display;
        -1 !== navigator.userAgent.indexOf("Instagram") && (windowWidth = screen.width);
        for (var i = 0; i < recBlocks.length; i++) {
            var rec = recBlocks[i];
            if ("yes" === rec.getAttribute("data-connect-with-tab")) return;
            display = getComputedStyle(rec).display, (max = rec.getAttribute("data-screen-max")) || (max = 1e4), (min = rec.getAttribute("data-screen-min")) || (min = 0), max = parseInt(max), (min = parseInt(min)) <= max && (windowWidth <= max && windowWidth > min ? "block" !== display && (rec.style.display = "block") : "none" !== display && (rec.style.display = "none"))
        }
    }

    t_onReady((function () {
        t_setWindowVars(), t_blocksdisplay(), window.addEventListener("resize", t_throttle((function () {
            t_setWindowVars()
        }), 200)), window.addEventListener("resize", t_throttle((function () {
            t_blocksdisplay()
        }), 200))
    }))
}(), function () {
    var isInstagram = -1 !== navigator.userAgent.indexOf("Instagram");

    function t_correctHeight() {
        for (var coverCarries = document.querySelectorAll(".t-cover__carrier"), factor = 0, i = 0; i < coverCarries.length; i++) {
            var element, elementStyle;
            if ((elementStyle = (element = coverCarries[i]).style).height.indexOf("vh") > -1) {
                factor = parseInt(elementStyle.height, 10) / 100;
                var div = document.createElement("div");
                div.id = "tempDiv", div.style.cssText = "position:absolute;top:0;left:0;width:100%;height:100vh;visibility:hidden;", document.body.appendChild(div);
                var tempDiv = document.getElementById("tempDiv"),
                    tempDivHeight = parseInt(getComputedStyle(tempDiv).height.replace("px", ""));
                t_removeEl(tempDiv);
                var newHeight = Math.round(tempDivHeight * factor) + "px", cover = element.closest(".t-cover");
                if (cover) {
                    var coverFilter = cover.querySelector(".t-cover__filter"),
                        textBox = cover.querySelector(".t-cover__wrapper");
                    cover.style.height = newHeight, coverFilter && (coverFilter.style.height = newHeight), textBox && (textBox.style.height = newHeight)
                }
                elementStyle.height = newHeight
            }
        }
        var elCarries = document.querySelectorAll("[data-height-correct-vh]"), windowHeight = window.innerHeight;
        factor = 0;
        for (var i = 0; i < elCarries.length; i++) {
            var element, elementStyle;
            (elementStyle = (element = elCarries[i]).style).height.indexOf("vh") > -1 && (factor = parseInt(elementStyle.height) / 100, newHeight = windowHeight + "px", elementStyle.height = newHeight)
        }
    }

    function setBreakWords() {
        var windowWidth = isInstagram ? screen.width : window.innerWidth;
        window.isMobile && !isInstagram && (windowWidth = document.documentElement.clientWidth);
        for (var recBlocks = document.querySelectorAll('.r:not([data-record-type="396"]):not([data-record-type="1003"])'), visibleRecBlocks = [], k = 0; k < recBlocks.length; k++) {
            var record = recBlocks[k], recStyles = getComputedStyle(record);
            "none" !== recStyles.display && "hidden" !== recStyles.visibility && "0" !== recStyles.opacity && visibleRecBlocks.push(record)
        }
        for (var i = 0; i < visibleRecBlocks.length; i++) for (var rec = visibleRecBlocks[i], blocks = rec.querySelectorAll('div:not([data-auto-correct-mobile-width="false"]):not(.tn-elem):not(.tn-atom):not(.tn-atom__sbs-anim-wrapper):not(.tn-atom__prx-wrapper):not(.tn-atom__videoiframe):not(.tn-atom__sticky-wrapper):not(.t-store__relevants__container):not(.t-slds__items-wrapper):not(.js-product-controls-wrapper):not(.js-product-edition-option):not(.t-product__option-variants)'), j = 0; j < blocks.length; j++) {
            var block = blocks[j];
            rec.style.wordBreak = "";
            var blockWidth = t_outerWidth(block);
            if (blockWidth > windowWidth) {
                if ("yes" === block.getAttribute("[data-customstyle]") && "false" === block.parentNode.getAttribute("[data-auto-correct-mobile-width]")) return;
                console.log("Block not optimized for mobile width. Block width:" + blockWidth + " Block id:" + rec.getAttribute("id")), console.log(block), rec.style.overflow = "auto", rec.style.wordBreak = blockWidth - 3 > windowWidth ? "break-word" : ""
            }
        }
    }

    function updateFontSize(breakpoint) {
        for (var elements = document.querySelectorAll('.t-text:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"]), .t-name:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"]), .t-title:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"]), .t-descr:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"]), .t-heading:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"]), .t-text-impact:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"]), .t-subtitle:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"]), .t-uptitle:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"])'), i = 0; i < elements.length; i++) {
            var element = elements[i], elementStyle = element.getAttribute("style");
            if (elementStyle) {
                var isREMValue = "rem" === element.getAttribute("data-auto-correct-font-size"), newStyle;
                if (document.documentElement.clientWidth > breakpoint) newStyle = (newStyle = elementStyle.replace("lineheight", "line-height")).replace("fontsize", "font-size"), element.setAttribute("style", newStyle); else {
                    if (-1 === elementStyle.indexOf("font-size")) continue;
                    if (parseInt(getComputedStyle(element).fontSize.replace("px", "")) < 26) continue;
                    newStyle = elementStyle.replace("line-height", "lineheight"), newStyle = isREMValue ? newStyle.replace(/font-size.*px;/gi, "font-size: 1.6rem;") : newStyle.replace("font-size", "fontsize"), element.setAttribute("style", newStyle)
                }
            }
        }
    }

    (window.isMobile || window.parent.isPagePreview) && (t_onReady((function () {
        setTimeout(t_correctHeight, 400)
    })), window.addEventListener("load", (function () {
        setTimeout(t_correctHeight, 400)
    })), window.innerWidth < 480 || window.isMobile && document.documentElement.clientWidth < 480 || isInstagram && screen.width < 480 ? (t_onReady((function () {
        for (var customStyleElements = document.querySelectorAll('[data-customstyle="yes"]'), fieldElements = document.querySelectorAll("[field] span, [field] strong, [field] em, [field] a"), i = 0; i < customStyleElements.length; i++) {
            var element = customStyleElements[i];
            parseInt(getComputedStyle(element).fontSize.replace("px", "")) > 26 && (element.style.fontSize = null, element.style.lineHeight = null)
        }
        for (var i = 0; i < fieldElements.length; i++) {
            var element = fieldElements[i];
            parseInt(getComputedStyle(element).fontSize.replace("px", "")) > 26 && (element.style.fontSize = null)
        }
        updateFontSize(480), window.addEventListener("orientationchange", (function () {
            setTimeout((function () {
                updateFontSize(480)
            }), 500)
        }))
    })), window.addEventListener("load", setBreakWords), window.addEventListener("orientationchange", (function () {
        setTimeout((function () {
            setBreakWords()
        }), 500)
    }))) : (window.innerWidth < 900 || window.isMobile && document.documentElement.clientWidth < 900 || isInstagram && screen.width < 900) && t_onReady((function () {
        for (var customStyleElements = document.querySelectorAll('[data-customstyle="yes"]'), fieldElements = document.querySelectorAll("[field] span, [field] strong, [field] em, [field] a"), i = 0; i < customStyleElements.length; i++) {
            var element = customStyleElements[i];
            parseInt(getComputedStyle(element).fontSize.replace("px", "")) > 30 && (element.style.fontSize = null, element.style.lineHeight = null)
        }
        for (var i = 0; i < fieldElements.length; i++) {
            var element = fieldElements[i];
            parseInt(getComputedStyle(element).fontSize.replace("px", "")) > 30 && (element.style.fontSize = null)
        }
        for (var elements = document.querySelectorAll('.t-text:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"]), .t-name:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"]), .t-title:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"]), .t-descr:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"]), .t-heading:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"]), .t-text-impact:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"]), .t-subtitle:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"]), .t-uptitle:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"])'), i = 0; i < elements.length; i++) {
            var element, elementStyle = (element = elements[i]).getAttribute("style");
            if (elementStyle && elementStyle.indexOf("font-size") > -1 && parseInt(getComputedStyle(element).fontSize.replace("px", "")) > 30) if ("rem" === element.getAttribute("data-auto-correct-font-size")) {
                var newStyle = elementStyle.replace(/font-size.*px;/gi, "font-size: 1.6rem;").replace("line-height", "lineheight");
                element.setAttribute("style", newStyle)
            } else {
                var newStyle = elementStyle.replace("font-size", "fontsize").replace("line-height", "lineheight");
                element.setAttribute("style", newStyle)
            }
        }
    })))
}(), t_onReady((function () {
    setTimeout((function () {
        for (var links = document.querySelectorAll('a[href^="http"][target="_blank"]'), i = 0; i < links.length; i++) {
            var link = links[i], attrRel = link.getAttribute("rel") || "";
            "" === attrRel ? link.setAttribute("rel", "noopener") : -1 === attrRel.indexOf("noopener") && link.setAttribute("rel", attrRel + " noopener")
        }
    }), 2500)
})), function (window, Math) {
    window.onerror = function (message, filename, lineno, colno, error) {
        "object" != typeof window.t_jserrors && (window.t_jserrors = []), window.t_jserrors.push({
            message: message,
            filename: filename,
            lineno: lineno,
            colno: colno,
            error: error
        })
    }
}(window, Math), t_onReady((function () {
    document.body.addEventListener("popupShowed", t_scrollBarWidthCompensator__init), document.body.addEventListener("popupHidden", (function () {
        var obj = window.scrollBarWidthCompensator;
        obj && (obj.cancelTimeout && (window.clearTimeout(obj.cancelTimeout), obj.cancelTimeout = null), obj.cancelTimeout = window.setTimeout((function () {
            obj.cancelTimeout = null, t_scrollBarWidthCompensator__cancel()
        }), Math.min(300, obj.delay)))
    }))
}));