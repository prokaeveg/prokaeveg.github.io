function t396_init(e) {
    var i, t, n, o, r, a = document.getElementById("rec" + e), l = a ? a.querySelector(".t396") : null,
        d = a ? a.querySelector(".t396__artboard") : null;
    d && (t396_initTNobj(e, d), o = t396_detectResolution(e), i = document.getElementById("allrecords"), window.tn_window_width = document.documentElement.clientWidth, window.tn["ab" + e].scaleFactor = parseFloat((window.tn_window_width / o).toFixed(3)), window.tn_scale_factor = parseFloat((window.tn_window_width / o).toFixed(3)), t396_switchResolution(e, o), t396_updateTNobj(e), t396_artboard_build("", e), t = "ontouchend" in document, window.addEventListener("resize", function () {
        d.classList.add("t396_resizechange"), t396_waitForFinalEvent(function () {
            window.t396__isMobile || t ? document.documentElement.clientWidth !== window.tn_window_width && a && t396_isBlockVisible(a) && (t396_doResize(e), d.classList.remove("t396_resizechange")) : a && t396_isBlockVisible(a) && (t396_doResize(e), d.classList.remove("t396_resizechange"))
        }, 500, "resizeruniqueid" + e)
    }), window.addEventListener("orientationchange", function () {
        t396_waitForFinalEvent(function () {
            a && t396_isBlockVisible(a) && t396_doResize(e)
        }, 600, "orientationuniqueid" + e)
    }), window.addEventListener("load", function () {
        t396_allelems__renderView(d), t396_allgroups__renderView(d);
        var t = d ? window.getComputedStyle(d).getPropertyValue("overflow") : "";
        "function" == typeof t_lazyload_update && "auto" === t && d && d.addEventListener("scroll", t_throttle(function () {
            var t = i ? i.getAttribute("data-tilda-lazy") : null;
            "y" !== window.lazy && "yes" !== t || t_onFuncLoad("t_lazyload_update", function () {
                t_lazyload_update()
            })
        }, 500)), "" !== window.location.hash && "visible" === t && (d && (d.style.overflow = "hidden"), setTimeout(function () {
            d && (d.style.overflow = "visible")
        }, 1))
    }), window.tildaMembers && "MutationObserver" in window && (n = new MutationObserver(function (t) {
        t.forEach(function (t) {
            "attributes" === t.type && "class" === t.attributeName && t.target.classList.contains("tlk-courses_page") && (t396_doResize(e), n.disconnect())
        })
    })).observe(document.body, {attributes: !0}), document.querySelector(".t830") && t_onReady(function () {
        ["t830__allrecords_padd", "t830__allrecords_padd-small"].some(function (t) {
            return i.classList.contains(t)
        }) ? t396_doResize(e) : i.addEventListener("allRecPaddingInit", function () {
            t396_doResize(e)
        })
    }), a && l && d && "yes" === a.getAttribute("data-connect-with-tab") && l.addEventListener("displayChanged", function () {
        t396_allelems__renderView(d), t396_allgroups__renderView(d), t396_doResize(e)
    }), setTimeout(function () {
        a && a.closest("#allrecordstable") && l && d && l.addEventListener("displayChanged", function () {
            t396_allelems__renderView(d), t396_allgroups__renderView(d), t396_doResize(e)
        })
    }, 1e3), o = !!document.querySelector(".t635__textholder"), a && o && l && d && l.addEventListener("animationInited", function () {
        t396_allelems__renderView(d), t396_allgroups__renderView(d), t396_doResize(e)
    }), /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && l && l.classList.add("t396_safari"), o = "window" === t396_ab__getFieldValue(d, "upscale"), r = i ? "edit" === i.getAttribute("data-tilda-mode") : null, o && !r && t_onFuncLoad("t396_scaleBlock", function () {
        t396_scaleBlock(e)
    }), r || "y" !== t396_ab__getFieldValue(d, "fixed-need-js") || t_onFuncLoad("t396__processFixedArtBoard", function () {
        t396__processFixedArtBoard(d)
    }), t396__processAbsoluteArtBoard(d), t396__processTopShift(d, e, !1))
}

function t396_isOnlyScalableBrowser() {
    var t = -1 !== navigator.userAgent.search("Firefox"),
        e = !!window.opr && !!window.opr.addons || !!window.opera || -1 !== navigator.userAgent.indexOf(" OPR/");
    return t || e
}

function t396__processTopShift(t, e, i) {
    "function" != typeof window.t396__updateTopShift || "y" !== t396_ab__getFieldValue(t, "shift-processed") && "y" !== t396_ab__getFieldValue(t, "fixed-shift") || t396__updateTopShift(e, i)
}

function t396_doResize(t) {
    var e = t396_isOnlyScalableBrowser(), i = document.getElementById("rec" + t),
        n = document.getElementById("allrecords"), o = t396_detectResolution(t),
        r = (t396_removeElementFromDOM(i ? i.querySelector(".t396__scale-style") : null), e ? (e = i ? i.querySelectorAll(".tn-molecule, .tn-atom") : [], Array.prototype.forEach.call(e, function (t) {
            var e, i;
            t.classList.contains("tn-atom") && t.closest(".tn-molecule") || ((i = (e = t.closest(".tn-atom__scale-wrapper")) ? e.parentNode : null) && i.removeChild(e), i && i.appendChild(t))
        })) : (e = i ? i.querySelectorAll(".t396__elem") : [], Array.prototype.forEach.call(e, function (t) {
            t.style.zoom = "";
            t = t.querySelector(".tn-atom");
            t && (t.style.transformOrigin = "", t.style.fontSize = "", t.style.webkitTextSizeAdjust = "")
        })), i ? i.querySelector(".t396__artboard") : null), e = "ab" + t, i = r ? r.clientWidth : 0,
        e = (window.tn_window_width = document.documentElement.clientWidth, window.tn[e].scaleFactor = parseFloat((window.tn_window_width / o).toFixed(3)), window.tn_scale_factor = parseFloat((window.tn_window_width / o).toFixed(3)), window.tn_scale_offset = (i * window.tn_scale_factor - i) / 2, t396_switchResolution(t, o), t396_updateTNobj(t), t396_ab__renderView(r), n ? n.getAttribute("data-tilda-mode") : "");
    "window" === t396_ab__getFieldValue(r, "upscale") && "edit" !== e && t_onFuncLoad("t396_scaleBlock", function () {
        t396_scaleBlock(t)
    }), "edit" !== e && "y" === t396_ab__getFieldValue(r, "fixed-need-js") && t_onFuncLoad("t396__processFixedArtBoard", function () {
        t396__processFixedArtBoard(r)
    }), t396__processAbsoluteArtBoard(r), t396__processTopShift(r, t, !0), t396_allelems__renderView(r), t396_allgroups__renderView(r), r && [r, r.querySelector(".t396__carrier"), r.querySelector(".t396__filter")].forEach(function (t) {
        t && (t.style.height = "")
    })
}

function t396__processAbsoluteArtBoard(t) {
    var e, i, n;
    !t || "fixed" !== (n = t396_ab__getFieldValue(t, "pos")) && (e = "t396__artboard-fixed-no-bg", "absolute" !== n ? t.classList.remove(e) : (n = getComputedStyle(t), i = !(i = t.querySelector(".t396__filter")) || "none" === getComputedStyle(i).backgroundImage, n = "rgba(0, 0, 0, 0)" === n.backgroundColor && "none" === n.backgroundImage, t.classList[n && i ? "add" : "remove"](e)))
}

function t396_detectResolution(t) {
    var e, i;
    if (t) return t = "ab" + t, e = window.innerWidth, (window.t396__isMobile || window.t396__isIPad) && (e = document.documentElement.clientWidth), window.tn[t].screens.forEach(function (t) {
        t <= e && (i = t)
    }), i = void 0 === i ? window.tn[t].screens[0] : i
}

function t396_initTNobj(t, e) {
    e && (void 0 === window.tn && (window.tn = {}, window.tn.ab_fields = ["height", "width", "bgcolor", "bgimg", "bgattachment", "bgposition", "filteropacity", "filtercolor", "filteropacity2", "filtercolor2", "height_vh", "valign"]), t396_setScreensTNobj(t, e))
}

function t396_setScreensTNobj(t, e) {
    var i = "ab" + t, t = (window.tn[i] = {}, window.tn[i].screens = [], e.getAttribute("data-artboard-screens"));
    t ? (t = t.split(",")).forEach(function (t) {
        t = parseInt(t, 10), window.tn[i].screens.push(t)
    }) : window.tn[i].screens = [320, 480, 640, 960, 1200]
}

function t396__getAxisXPadding() {
    var t = document.getElementById("allrecords"),
        e = Boolean(window.tildaMembers) || "allrecords" === window.zero_window_width_hook;
    return t && e && [document.body, t].reduce(function (t, e) {
        var i = window.getComputedStyle(e).paddingLeft, e = window.getComputedStyle(e).paddingRight;
        return t + parseInt(i, 10) + parseInt(e, 10)
    }, 0) || 0
}

function t396_updateTNobj(t) {
    for (var e = t396__getAxisXPadding(), i = (window.tn.window_width = document.documentElement.clientWidth, e && (window.tn.window_width -= e), window.tn.window_height = window.t396__isMobile ? document.documentElement.clientHeight : window.innerHeight, "ab" + t), n = window.tn[i].screens.slice().reverse(), o = 0; o < n.length; o++) window.tn[i].curResolution === n[o] && (window.tn[i].canvas_min_width = n[o], window.tn[i].canvas_max_width = 0 === o ? window.tn.window_width : n[o - 1]);
    window.tn[i].grid_width = window.tn[i].canvas_min_width, window.tn[i].grid_offset_left = (window.tn.window_width - window.tn[i].grid_width) / 2
}

window.t396__isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || -1 < navigator.userAgent.indexOf("Instagram"), window.t396__isIPad = "ontouchend" in document && -1 !== navigator.userAgent.indexOf("AppleWebKit");
var t396_waitForFinalEvent = function () {
    var n = {};
    return function (t, e, i) {
        n[i = i || "Don't call this twice without a uniqueId"] && clearTimeout(n[i]), n[i] = setTimeout(t, e)
    }
}();

function t396_switchResolution(t, e) {
    var t = "ab" + t, i = window.tn[t].screens[window.tn[t].screens.length - 1];
    window.tn[t].curResolution = e, window.tn[t].curResolution_max = i, window.tn.curResolution = e, window.tn.curResolution_max = i
}

function t396_artboard_build(t, e) {
    var i = document.getElementById("rec" + e), n = document.getElementById("allrecords"),
        o = i ? i.querySelector(".t396__artboard") : null;
    if (!o) return !1;
    t396_ab__renderView(o), t396_allgroups__renderView(o);
    var r = document.createEvent("Event"),
        a = (r.initEvent("artBoardRendered", !0, !0), o.querySelectorAll(".tn-elem")),
        a = (Array.prototype.forEach.call(a, function (t) {
            switch (t.getAttribute("data-elem-type")) {
                case"text":
                    t396_addText(o, t);
                    break;
                case"image":
                    t396_addImage(o, t);
                    break;
                case"shape":
                    t396_addShape(o, t);
                    break;
                case"button":
                    t396_addButton(o, t);
                    break;
                case"video":
                    t396_addVideo(o, t);
                    break;
                case"html":
                    t396_addHtml(o, t);
                    break;
                case"tooltip":
                    t396_addTooltip(o, t);
                    break;
                case"form":
                    t396_addForm(o, t, e);
                    break;
                case"gallery":
                    t396_addGallery(o, t, e);
                    break;
                case"vector":
                    t396_addVector(o, t)
            }
        }), o.classList.remove("rendering"), o.classList.add("rendered"), o.dispatchEvent(r), o.getAttribute("data-artboard-ovrflw"));
    "visible" !== a && "visibleX" !== a || !n || (n.style.overflow = "hidden", document.querySelector(".t951__sidebar_sticky,.t-store__prod-popup__col_fixed") && (n.style.cssText += "overflow:clip;")), "auto" === a && 0 !== (r = Math.abs(o.offsetHeight - o.clientHeight)) && (o.style.paddingBottom = r + "px"), (window.t396__isMobile || window.t396__isIPad) && ((n = document.createElement("style")).textContent = "@media only screen and (min-width:1366px) and (orientation:landscape) and (-webkit-min-device-pixel-ratio:2) {.t396__carrier {background-attachment:scroll!important;}}", i.insertAdjacentElement("beforeend", n))
}

function t396_ab__renderView(t) {
    if (!t) return !1;
    for (var e = window.tn.ab_fields, i = document.getElementById("allrecords"), n = 0; n < e.length; n++) t396_ab__renderViewOneField(t, e[n]);
    var o, r, a = t396_ab__getFieldValue(t, "height"), l = t396_ab__getHeight(t),
        d = t396__getCurrentScaleFactor(t.getAttribute("data-artboard-recid")),
        i = !!i && "edit" === i.getAttribute("data-tilda-mode"), _ = "window" === t396_ab__getFieldValue(t, "upscale"),
        s = t396_ab__getFieldValue(t, "height_vh");
    if (_ && !i && s && (o = parseInt(a, 10) * d), a === l || o && l <= o) r = 0; else switch (t396_ab__getFieldValue(t, "valign")) {
        case"top":
            r = 0;
            break;
        case"center":
            r = o ? parseFloat(((l - o) / 2).toFixed(1)) : parseFloat(((l - a) / 2).toFixed(1));
            break;
        case"bottom":
            r = o ? parseFloat((l - o).toFixed(1)) : parseFloat((l - a).toFixed(1));
            break;
        case"stretch":
            r = 0, a = l;
            break;
        default:
            r = 0
    }
    t.setAttribute("data-artboard-proxy-min-offset-top", r), t.setAttribute("data-artboard-proxy-min-height", a), t.setAttribute("data-artboard-proxy-max-height", l);
    _ = t.querySelector(".t396__filter"), i = t.querySelector(".t396__carrier");
    s = t396_ab__getFieldValue(t, "height_vh"), s = parseFloat(s), (window.t396__isMobile || window.t396__isIPad) && s && (d = document.documentElement.clientHeight * s / 100, t.style.height = d + "px", _ && (_.style.height = d + "px"), i && (i.style.height = d + "px"))
}

function t396__getCurrentScaleFactor(t) {
    t = "ab" + t;
    return window.tn && window.tn[t] && window.tn[t].scaleFactor || window.tn_scale_factor
}

function t396_addText(t, e) {
    (e = t396_getEl(e)) && (e.setAttribute("data-fields", "top,left,width,container,axisx,axisy,widthunits,leftunits,topunits"), t396_elem__renderView(e))
}

function t396_addImage(t, e) {
    var i;
    (e = t396_getEl(e)) && (e.setAttribute("data-fields", "img,width,filewidth,fileheight,top,left,container,axisx,axisy,widthunits,leftunits,topunits"), t396_elem__renderView(e), t396_processElemTransform(e), (i = e.querySelector("img")) && (i.addEventListener("load", function () {
        t396_elem__renderViewOneField(e, "top"), i.src && setTimeout(function () {
            t396_elem__renderViewOneField(e, "top")
        }, 2e3)
    }), i.complete && (t396_elem__renderViewOneField(e, "top"), i.src && setTimeout(function () {
        t396_elem__renderViewOneField(e, "top")
    }, 2e3)), i.addEventListener("tuwidget_done", function () {
        t396_elem__renderViewOneField(e, "top")
    }), t396_changeFilterOnSafari(e)))
}

function t396_addShape(t, e) {
    (e = t396_getEl(e)) && (e.setAttribute("data-fields", "width,height,top,left,container,axisx,axisy,widthunits,heightunits,leftunits,topunits"), t396_elem__renderView(e), t396_processElemTransform(e))
}

function t396_processElemTransform(t) {
    var e, i = getComputedStyle(t);
    !(i.backdropFilter && "none" !== i.backdropFilter || i.webkitBackdropFilter && "none" !== i.webkitBackdropFilter) || "none" !== (e = "matrix(1, 0, 0, 1, 0, 0)" === (e = (i = t.querySelector(".tn-atom")) ? window.getComputedStyle(i).transform : "none") ? "none" : e) && (i.style.transform = "none", t.style.transform = e)
}

function t396_changeFilterOnSafari(i) {
    var t;
    /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && t396__checkContainBackdropFilter(i) && "IntersectionObserver" in window && (t = i.querySelector(".tn-atom"), new IntersectionObserver(function (t, e) {
        t.forEach(function (t) {
            t.isIntersecting && (t = t.target, e.unobserve(t), t396__processBackdropFilterOnImage(i))
        })
    }).observe(t))
}

function t396__checkContainBackdropFilter(t) {
    if (!t) return !1;
    var e = window.getComputedStyle(t).webkitBackdropFilter;
    if (e && "none" !== e) return !0;
    e = t.querySelector(".tn-atom__sbs-anim-wrapper, .tn-atom__prx-wrapper, .tn-atom__sticky-wrapper");
    if (!e) return !1;
    t = window.getComputedStyle(e).webkitBackdropFilter;
    return t && "none" !== t
}

function t396__processBackdropFilterOnImage(t) {
    var e, i;
    t && (e = t.getAttribute("data-animate-sbs-opts"), i = t.getAttribute("data-animate-prx") || t.getAttribute("data-animate-fix"), e = e || i, i = t.classList.contains("t396__elem--backdrop-filter-img-wrappered"), e && i || !e ? t396__updateBackdropFilterOnImage(t) : t.addEventListener("backdropFilterImgWrappered", function () {
        t396__updateBackdropFilterOnImage(t)
    }))
}

function t396__updateBackdropFilterOnImage(t) {
    var e, i, n;
    t && (e = t.querySelector("img"), i = t.querySelector(".tn-atom__sbs-anim-wrapper, .tn-atom__prx-wrapper, .tn-atom__sticky-wrapper"), n = "", i && (t = i, n = window.getComputedStyle(t).webkitBackdropFilter || ""), t.style.webkitBackdropFilter = "none", t396_waitForUploadImg(e, function () {
        t.style.webkitBackdropFilter = n
    }))
}

function t396_waitForUploadImg(t, e) {
    var i;
    "y" !== window.lazy ? e() : i = setTimeout(function () {
        t.classList.contains("loaded") && t.clientWidth && t.src ? (e(), clearTimeout(i)) : t396_waitForUploadImg(t, e)
    }, 300)
}

function t396_addButton(t, e) {
    if (e = t396_getEl(e)) return e.setAttribute("data-fields", "top,left,width,height,container,axisx,axisy,caption,leftunits,topunits"), t396_elem__renderView(e), t396_processElemTransform(e), e
}

function t396_addVideo(t, e) {
    (e = t396_getEl(e)) && (e.setAttribute("data-fields", "width,height,top,left,container,axisx,axisy,widthunits,heightunits,leftunits,topunits"), t396_elem__renderView(e), t_onFuncLoad("t396_initVideo", function () {
        t396_initVideo(e)
    }))
}

function t396_addHtml(t, e) {
    (e = t396_getEl(e)) && (e.setAttribute("data-fields", "width,height,top,left,container,axisx,axisy,widthunits,heightunits,leftunits,topunits"), t396_elem__renderView(e))
}

function t396_addTooltip(t, e) {
    (e = t396_getEl(e)) && (e.setAttribute("data-fields", "width,height,top,left,container,axisx,axisy,widthunits,heightunits,leftunits,topunits,tipposition"), t396_elem__renderView(e), t_onFuncLoad("t396_initTooltip", function () {
        t396_initTooltip(e)
    }))
}

function t396_addForm(t, e, i) {
    var n, o, r;
    (e = t396_getEl(e)) && (e.setAttribute("data-fields", "width,top,left,inputs,container,axisx,axisy,widthunits,leftunits,topunits"), o = e.getAttribute("data-elem-id"), (r = e.querySelector(".tn-atom__inputs-textarea")) && (n = r.value), t_onFuncLoad("t_zeroForms__init", function () {
        t396_elem__renderView(e), t_zeroForms__init(i, o, n), t396_elem__renderView(e)
    }))
}

function t396_addGallery(t, e, i) {
    var n;
    (e = t396_getEl(e)) && (e.setAttribute("data-fields", "width,height,top,left,imgs,container,axisx,axisy,widthunits,heightunits,leftunits,topunits"), t396_elem__renderView(e), n = e.getAttribute("data-elem-id"), t_onFuncLoad("t_zeroGallery__init", function () {
        t_zeroGallery__init(i, n)
    }))
}

function t396_addVector(t, e) {
    (e = t396_getEl(e)) && (e.setAttribute("data-fields", "width,filewidth,fileheight,top,left,container,axisx,axisy,widthunits,leftunits,topunits"), t396_elem__renderView(e), t396_processElemTransform(e))
}

function t396_elem__getFieldValue(t, e) {
    if (t = t396_getEl(t)) {
        if (t.classList.contains("tn-group")) return t396_group__getFieldValue(t, e);
        var i = t.closest(".t396__artboard"), n = i.getAttribute("data-artboard-recid"), o = "ab" + n,
            r = (void 0 === window.tn[o] && (t396_initTNobj(n, i), t396_switchResolution(n, t396_detectResolution(n))), window.tn[o].curResolution),
            a = window.tn[o].curResolution_max, l = window.tn[o].screens,
            d = r === a ? t.getAttribute("data-field-" + e + "-value") : t.getAttribute("data-field-" + e + "-res-" + r + "-value");
        if (!d && "" !== d) for (var _ = 0; _ < l.length; _++) {
            var s = l[_];
            if (!(s <= r) && (d = s === a ? t.getAttribute("data-field-" + e + "-value") : t.getAttribute("data-field-" + e + "-res-" + s + "-value"))) break
        }
        return d
    }
}

function t396_elem__renderView(e) {
    var t = (e = t396_getEl(e)) ? e.getAttribute("data-fields") : "";
    if (!t) return !1;
    (t = t.split(",")).forEach(function (t) {
        t396_elem__renderViewOneField(e, t)
    }), t396_elem_fixLineHeight(e)
}

function t396_group__renderView(i) {
    var t = i ? i.getAttribute("data-fields") : "";
    if (!t) return !1;
    (t = t.split(",")).forEach(function (t) {
        var e = t396_group__getFieldValue(i, t);
        switch (t) {
            case"left":
                e = t396_elem__convertPosition__Local__toAbsolute(i, t, e), i.style.left = parseFloat(e).toFixed(1) + "px";
                break;
            case"top":
                e = t396_elem__convertPosition__Local__toAbsolute(i, t, e), i.style.top = parseFloat(e).toFixed(1) + "px"
        }
    })
}

function t396_elem__renderViewOneField(t, e) {
    if (t = t396_getEl(t)) {
        var i = document.getElementById("allrecords"), i = i ? i.getAttribute("data-tilda-mode") : "",
            n = "window" === t396_ab__getFieldValue(t.closest(".t396__artboard"), "upscale");
        if ("yes" !== t.getAttribute("data-scale-off") || !n || "edit" === i) {
            var o, r, a, l, d, _ = t396_elem__getFieldValue(t, e);
            switch (e) {
                case"left":
                    _ = t396_elem__convertPosition__Local__toAbsolute(t, e, _), t.style.left = parseFloat(_).toFixed(1) + "px";
                    break;
                case"top":
                    _ = t396_elem__convertPosition__Local__toAbsolute(t, e, _), t.style.top = parseFloat(_).toFixed(1) + "px";
                    break;
                case"width":
                    switch (_ = t396_elem__getWidth(t, _), t.style.width = parseFloat(_).toFixed(1) + "px", u = t.getAttribute("data-elem-type")) {
                        case"tooltip":
                            var s = t.querySelectorAll(".tn-atom__pin-icon");
                            Array.prototype.forEach.call(s, function (t) {
                                var e = parseFloat(_).toFixed(1) + "px";
                                t.style.width = e, t.style.height = e
                            }), t.style.height = parseInt(_).toFixed(1) + "px";
                            break;
                        case"gallery":
                            o = t396_elem__getFieldValue(t, "borderwidth"), r = t396_elem__getFieldValue(t, "borderstyle"), _ -= 2 * (o = r && o && "none" !== r ? o : 0), a = Math.round(parseFloat(_)) + "px", l = t.querySelector(".t-slds__main"), d = t.querySelectorAll(".tn-atom__slds-img"), t.style.width = a, l && (l.style.width = a), Array.prototype.forEach.call(d, function (t) {
                                t.style.width = a
                            })
                    }
                    break;
                case"height":
                    if ("tooltip" === (u = t.getAttribute("data-elem-type"))) return;
                    _ = t396_elem__getHeight(t, _), t.style.height = parseFloat(_).toFixed(1) + "px", "gallery" === u && (o = t396_elem__getFieldValue(t, "borderwidth"), r = t396_elem__getFieldValue(t, "borderstyle"), _ -= 2 * (o = r && o && "none" !== r ? o : 0), a = Math.round(parseFloat(_)) + "px", l = t.querySelector(".t-slds__main"), d = t.querySelectorAll(".tn-atom__slds-img"), t.style.height = a, l && (l.style.height = a), Array.prototype.forEach.call(d, function (t) {
                        t.style.height = a
                    }));
                    break;
                case"container":
                    t396_elem__renderViewOneField(t, "left"), t396_elem__renderViewOneField(t, "top");
                    break;
                case"inputs":
                    var u = t.querySelector(".tn-atom__inputs-textarea"), _ = u ? u.value : "";
                    try {
                        t_zeroForms__renderForm(t, _)
                    } catch (t) {
                    }
            }
            "width" !== e && "height" !== e && "fontsize" !== e && "fontfamily" !== e && "letterspacing" !== e && "fontweight" !== e && "img" !== e || (t396_elem__renderViewOneField(t, "left"), t396_elem__renderViewOneField(t, "top"))
        }
    }
}

function t396_elem__convertPosition__Local__toAbsolute(t, e, i) {
    if (t = t396_getEl(t)) {
        var n = t.closest(".t396__artboard"), o = n.getAttribute("data-artboard-recid"), r = "ab" + o,
            a = t396_ab__getFieldValue(n, "valign"), l = "window" === t396_ab__getFieldValue(n, "upscale"),
            n = document.getElementById("allrecords"), d = "edit" === (n ? n.getAttribute("data-tilda-mode") : ""),
            _ = t396_isOnlyScalableBrowser(), s = !d && l && _, u = !d && l && !_,
            c = t396_elem__getFieldValue(t, "axisy"), w = t396_elem__getFieldValue(t, "axisx"),
            g = t396_elem__getFieldValue(t, "container"),
            n = t.classList.contains("tn-group") && "physical" === t396_group__getFieldValue(t, "type"),
            p = t.parentNode.closest(".tn-group"), m = "physical" === t396_group__getFieldValue(p, "type"),
            f = (n && (g = "grid"), i = parseInt(i), t396__getCurrentScaleFactor(o));
        switch (e) {
            case"left":
                var h = "grid" === g ? "grid" : "window", b = "grid" === g ? window.tn[r].grid_offset_left : 0,
                    y = "grid" === g ? window.tn[r].grid_width : window.tn.window_width;
                if ("%" === t396_elem__getFieldValue(t, "leftunits") && (i = t396_roundFloat(y * i / 100)), m) {
                    var F = parseInt(t396_group__getFieldValue(p, "left"), 10);
                    i -= F = "%" === t396_group__getFieldValue(p, "leftunits") ? t396_roundFloat(y * F / 100) : F;
                    break
                }
                !d && l ? "grid" === g && _ && (i *= f) : i = b + i, "center" === w && (x = t396_elem__getWidth(t), s && "window" !== h && (y *= f, x *= f), i = y / 2 - x / 2 + i), "right" === w && (x = t396_elem__getWidth(t), s && "window" !== h && (y *= f, x *= f), i = y - x + i), s && "window" !== h && (i += ((x = t396_elem__getWidth(t)) * f - x) / 2);
                break;
            case"top":

            function v(t) {
                var e, i, n = t396_elem__getHeight(t);
                return t && "image" === t.getAttribute("data-elem-type") && (e = t396_elem__getWidth(t), i = t396_elem__getFieldValue(t, "filewidth"), t = t396_elem__getFieldValue(t, "fileheight"), i && t && (n = e / (parseInt(i) / parseInt(t)))), n
            }

                var F = t.closest(".t396__artboard"),
                    b = F ? F.getAttribute("data-artboard-proxy-min-offset-top") : "0",
                    y = F ? F.getAttribute("data-artboard-proxy-min-height") : "0",
                    x = F ? F.getAttribute("data-artboard-proxy-max-height") : "0";
                if (h = "grid" === g ? "grid" : "window", b = "grid" === g ? parseFloat(b) : 0, y = "grid" === g ? parseFloat(y) : parseFloat(x), "%" === t396_elem__getFieldValue(t, "topunits") && (i = y * (i / 100)), m) {
                    x = parseInt(t396_group__getFieldValue(p, "top"), 10);
                    i -= x = "%" === t396_group__getFieldValue(p, "topunits") ? t396_roundFloat(y * x / 100) : x;
                    break
                }
                s && "window" !== h && (i *= f), i = (b = u && "window" !== h ? "stretch" === a ? 0 : b / f : b) + i;
                var A, V, x = t396_ab__getFieldValue(F, "height_vh"), b = t396_ab__getFieldValue(F, "height"),
                    E = t396_ab__getHeight(F);
                l && !d && x && (A = parseInt(b, 10) * f), "center" === c && (V = v(t), s && "window" !== h && ("stretch" !== a ? y *= f : y = A ? E < A ? A : E : F.clientHeight, V *= f), d || !l || _ || "window" === h || "stretch" !== a || (y = A ? E < A ? A : E : F.clientHeight, y /= f), i = y / 2 - V / 2 + i), "bottom" === c && (V = v(t), s && "window" !== h && ("stretch" !== a ? y *= f : y = A ? E < A ? A : E : F.clientHeight, V *= f), d || !l || _ || "window" === h || "stretch" !== a || (y = A ? E < A ? A : E : F.clientHeight, y /= f), i = y - V + i), s && "window" !== h && (x = ((V = v(t)) * f - V) / 2, i += x = Math.round(x))
        }
        return i
    }
}

function t396_elem_fixLineHeight(t) {
    var e, i, n, o;
    "text" === t.getAttribute("data-elem-type") && (e = t.querySelector(".tn-atom")) && (i = /^((?!chrome|android).)*safari/i.test(navigator.userAgent), n = t.style.zoom, e.style.removeProperty("line-height"), o = parseFloat(window.getComputedStyle(e).lineHeight), (o = i && n ? t396_elem__getCorrectStylesForSafari(t, "lineHeight") : o) && !isNaN(o) && (e.style.lineHeight = Math.round(o) + "px"))
}

function t396_elem__getCorrectStylesForSafari(t, e) {
    var i = t.querySelector(".tn-atom"), n = t.style.zoom, o = i.style.webkitTextSizeAdjust, r = i.style.fontSize,
        e = (i.style.webkitTextSizeAdjust = "none", i.style.fontSize = "", t.style.zoom = "", parseFloat(window.getComputedStyle(i)[e]));
    return i.style.webkitTextSizeAdjust = o, i.style.fontSize = r, n && (t.style.zoom = n), e
}

function t396_ab__getFieldValue(t, e) {
    if (t) {
        var i = t.getAttribute("data-artboard-recid"), n = "ab" + i,
            o = (void 0 === window.tn[n] && (t396_initTNobj(i, t), t396_switchResolution(i, t396_detectResolution(i))), window.tn[n].curResolution),
            r = window.tn[n].curResolution_max, a = window.tn[n].screens,
            l = o === r ? t.getAttribute("data-artboard-" + e) : t.getAttribute("data-artboard-" + e + "-res-" + o);
        if (null === l) for (var d = 0; d < a.length; d++) {
            var _ = a[d];
            if (!(_ <= o) && null !== (l = _ === r ? t.getAttribute("data-artboard-" + e) : t.getAttribute("data-artboard-" + e + "-res-" + _))) break
        }
        return l
    }
}

function t396_ab__renderViewOneField(t, e) {
    t396_ab__getFieldValue(t, e)
}

function t396_group__getFieldValue(t, e) {
    if (t) {
        var i = "ab" + t.closest(".t396__artboard").getAttribute("data-artboard-recid"), n = window.tn[i].curResolution,
            o = window.tn[i].curResolution_max, r = window.tn[i].screens,
            a = n === o ? t.getAttribute("data-group-" + e + "-value") : t.getAttribute("data-group-" + e + "-res-" + n + "-value");
        if (null === a) for (var l = 0; l < r.length; l++) {
            var d = r[l];
            if (!(d <= n) && null !== (a = d === o ? t.getAttribute("data-group-" + e + "-value") : t.getAttribute("data-group-" + e + "-res-" + d + "-value"))) break
        }
        return a
    }
}

function t396_allgroups__renderView(t) {
    t && (t = t.querySelectorAll(".tn-group"), t = Array.prototype.filter.call(t, function (t) {
        return "physical" === t396_group__getFieldValue(t, "type")
    }), Array.prototype.forEach.call(t, function (t) {
        t396_group__renderView(t)
    }))
}

function t396_allelems__renderView(t) {
    if (!t) return !1;
    t = t.querySelectorAll(".tn-elem");
    Array.prototype.forEach.call(t, function (t) {
        t396_elem__renderView(t)
    })
}

function t396_ab__getHeight(t, e) {
    e = e || t396_ab__getFieldValue(t, "height"), e = parseFloat(e);
    var t = t396_ab__getFieldValue(t, "height_vh");
    return t && (t = parseFloat(t), isNaN(t) || e < (t = window.tn.window_height * t / 100) && (e = t)), e
}

function t396_elem__getWidth(t, e) {
    var i = "ab" + (t = t396_getEl(t)).closest(".t396__artboard").getAttribute("data-artboard-recid");
    return e = e || t396_elem__getFieldValue(t, "width"), e = parseFloat(e), e = "%" === t396_elem__getFieldValue(t, "widthunits") ? "window" === t396_elem__getFieldValue(t, "container") ? window.tn.window_width * e / 100 : window.tn[i].grid_width * e / 100 : e
}

function t396_elem__getHeight(t, e) {
    t = t396_getEl(t), e = e || t396_elem__getFieldValue(t, "height"), e = parseFloat(e);
    var i, n, o = t.getAttribute("data-elem-type");
    return "shape" === o || "video" === o || "html" === o || "gallery" === o || "button" === o ? "%" === t396_elem__getFieldValue(t, "heightunits") && (i = (n = t.closest(".t396__artboard")) ? n.getAttribute("data-artboard-proxy-min-height") : "0", n = n ? n.getAttribute("data-artboard-proxy-max-height") : "0", i = parseFloat(i), n = parseFloat(n), e = "window" === t396_elem__getFieldValue(t, "container") ? n * (e / 100) : i * (e / 100)) : ("text" === o && (n = t.querySelector(".tn-atom")) && (n.style.lineHeight = ""), e = t.clientHeight), e
}

function t396_roundFloat(t) {
    return t = Math.round(100 * t) / 100
}

function t396_removeElementFromDOM(t) {
    (t = t396_getEl(t)) && t.parentNode && t.parentNode.removeChild(t)
}

function t396_getEl(t) {
    return window.jQuery && t instanceof jQuery ? t.length ? t.get(0) : null : t
}

function t396_isBlockVisible(t) {
    var e = window.innerWidth, i = t.getAttribute("data-screen-min"), t = t.getAttribute("data-screen-max");
    return !(i && e < parseInt(i, 10)) && !(t && e > parseInt(t, 10))
}