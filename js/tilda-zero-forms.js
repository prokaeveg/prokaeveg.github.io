var version;

function t_zeroForms__init(t, e, r) {
    var o, n, i = document.getElementById("rec" + t),
        a = i ? i.querySelector('.tn-elem[data-elem-id="' + e + '"]') : null;
    a && (o = t_zeroForms__getTildaMode(), n = document.querySelector('script[src*="tilda-blocks-2.7"]'), t_zeroForms__waitForTN(function () {
        t_zeroForms__renderForm(a, r, t, o)
    }), t_zeroForms__onFuncLoad("t396_elem__renderViewOneField", function () {
        t396_elem__renderViewOneField(n ? $(a) : a, "left"), t396_elem__renderViewOneField(n ? $(a) : a, "top")
    }))
}

function t_zeroForms__waitForTN(t) {
    window.tn && window.tn.curResolution ? t() : setTimeout(function () {
        t_zeroForms__waitForTN(t)
    }, 300)
}

function t_zeroForms__renderForm(t, e, r, o) {
    if (t = t_zeroForms__getEl(t), o = o || t_zeroForms__getTildaMode(), r = r || t_zeroForms__getRecID(t), "string" == typeof e) try {
        e = JSON.parse(e)
    } catch (t) {
    }
    var n = document.querySelector(".t-records"),
        n = (n = !!n && "edit" === n.getAttribute("data-tilda-mode")) || "published" !== o;
    if (!t.classList.contains("zero-form-rendered") || n) {
        n = t.closest(".r");
        if (!t_zeroForms__isRecordHidden(n) && !t_zeroForms__isFormOutside(t) || "published" !== o) {
            if (!e) {
                n = t.querySelector(".tn-atom__inputs-textarea");
                if (n && n.value) try {
                    e = JSON.parse(n.value)
                } catch (t) {
                    e = {}
                } else e = {}
            }
            n = t_zeroForms__fromObjToArray(e), e = t.querySelector(".tn-atom");
            if ("zero" === o || "edit" === o) e.innerHTML = ""; else if (e.querySelector(".t-form")) return;
            r = t_zeroForms__createForm(r, o, n, t);
            r && (e.insertAdjacentElement("beforeend", r), t_zeroForms__placeFormIntoColumns(t), (o = document.createEvent("Event")).initEvent("render", !0, !0), t.dispatchEvent(o), t.classList.add("zero-form-rendered"), t_zeroForms__initMaskAfterRender(t), t_zeroForms__updateTopPosition(t))
        }
    }
}

function t_zeroForms__initMaskAfterRender(t) {
    t_zeroForms__onRender(t, !0, function () {
        t.querySelector(".js-tilda-mask") && t_zeroForms__onFuncLoad("tildaForm_initMasks", function () {
            setTimeout(function () {
                t.querySelector('.js-tilda-mask:not([data-tilda-mask-init="1"])') && tildaForm_initMasks()
            }, 500)
        })
    })
}

function t_zeroForms__updateCurrentResolution(t, e) {
    void 0 !== window.t396_detectResolution && void 0 !== window.t396_switchResolution && "edit" !== e && (e = t396_detectResolution(t), t396_switchResolution(t, e))
}

function t_zeroForms__updateStylesOnResize(t, e) {
    var r = t_zeroForms__createFormObj(e), o = e.getAttribute("data-elem-id"), n = e.querySelector(".t-form"),
        i = "variation" === r.inputfontweight ? r.inputvariationweight : r.inputfontweight,
        a = document.querySelectorAll(".t-input-phonemask__wrap"), s = (Array.prototype.forEach.call(a, function (t) {
            t.classList.add("t-input-inline-styles")
        }), "h" === r.inputpos ? (n && n.classList.add("tn-form_horiz"), t_zeroForms__setScriptOrStyle("t-zero-form-h-styles", "tilda-zero-form-horizontal.min.css", "", "link", !1)) : n && n.classList.remove("tn-form_horiz"), t_zeroForms__initInputStyles(r, i)),
        a = e.querySelectorAll(".t-input-inline-styles:not(.t-input__own-answer)"),
        l = (Array.prototype.forEach.call(a, function (t) {
            t_zeroForms__appendStylesToField(t, s);
            var e = t.getAttribute("data-rows");
            e && (t.style.height = 25 * e + 10 + "px")
        }), {
            color: r.inputtitlecolor || "",
            fontWeight: r.inputtitlefontweight || "",
            fontFamily: r.inputfontfamily || "",
            fontSize: r.inputtitlefontsize || "",
            paddingBottom: r.inputtitlemargbottom || ""
        }), _ = "variation" === r.inputtitlefontweight ? r.inputtitlevariationweight : r.inputtitlefontweight,
        n = e.querySelectorAll(".t-input-title"), i = (Array.prototype.forEach.call(n, function (t) {
            t_zeroForms__setTitleStyles(t, l, _)
        }), Array.prototype.slice.call(e.querySelectorAll(".t-input-group"))),
        a = (Array.prototype.forEach.call(i, function (t) {
            t_zeroForms__setStylesForFormGroup(r, t)
        }), e.querySelector(".t-submit"));
    a && (t_zeroForms__setBtnInlineStyles(r, a), t_zeroForms__generateBtnStyles(a, t, o, r, e), (n = a.closest(".tn-form__submit")) && (n.style.textAlign = r.buttonalign, n.style.marginTop = r.buttonmargtop + "px", t_zeroForms__updateTopPosition(e)))
}

function t_zeroForms__updateTopPosition(t) {
    void 0 !== window.t396_elem__getFieldValue && void 0 !== window.t396_elem__renderViewOneField && "top" !== t396_elem__getFieldValue(t, "axisy") && t396_elem__renderViewOneField(t, "top")
}

function t_zeroForms__createCommentField() {
    var t = document.createElement("div"),
        e = (t.style.position = "absolute", t.style.left = "-5000px", t.style.bottom = "0", t.style.display = "none", document.createElement("input"));
    return e.type = "text", e.name = "form-spec-comments", e.value = "Its good", e.classList.add("js-form-spec-comments"), e.tabIndex = -1, t.insertAdjacentElement("beforeend", e), t
}

function t_zeroForms__generateInputsBlock(e, r, t, o, n) {
    var i = r.getAttribute("data-elem-id"), t = t.filter(function (t) {
        return "y" !== t.loff && t.li_type
    }), a = document.createElement("div");
    return a.classList.add("t-form__inputsbox"), t.forEach(function (t) {
        t = t_zeroForms__parseIntoElement(e, r, t, o, n, i);
        t && a.insertAdjacentElement("beforeend", t)
    }), a.insertAdjacentElement("beforeend", t_zeroForms__createErrorBox(o, "middle")), a.insertAdjacentElement("beforeend", t_zeroForms__createFormButton(e, r, i, o)), a
}

function t_zeroForms__parseIntoElement(e, r, o, n, t, i) {
    if ("hd" === o.li_type) return t_zeroForms__createHiddenField(o.li_value, o.li_nm, "");
    var a, s, l = document.createElement("div"),
        _ = (l.classList.add("t-input-group"), l.classList.add("t-input-group_" + o.li_type), l.setAttribute("data-input-lid", o.lid), t_zeroForms__setStylesForFormGroup(n, l), "variation" === n.inputfontweight ? n.inputvariationweight : n.inputfontweight),
        d = "variation" === n.inputelsfontweight ? n.inputelsvariationweight : n.inputelsfontweight,
        c = "variation" === n.inputtitlefontweight ? n.inputtitlevariationweight : n.inputtitlefontweight,
        u = (o.li_title && t_zeroForms__generateTitle(o, t, l, c), o.li_subtitle && t_zeroForms__generateSubtitle(o, t, l), t_zeroForms__initInputStyles(n, _)),
        m = {fontSize: n.inputelsfontsize || "", fontWeight: d || ""}, p = {
            name: o.li_nm,
            placeholder: o.li_ph || "",
            secondaryClassName: n.inputsstyle ? "t-input_bbonly" : "",
            require: "y" === o.li_req,
            rule: o.li_rule || "",
            mask: o.li_mask || "",
            inputWidth: o.li_inputwidth,
            inputInRow: o.li_inputinrow,
            radioPosition: o.li_radioposition,
            radioPositionMobile: o.li_radiowidthmobile
        }, c = document.createElement("div");
    switch (c.classList.add("t-input-block"), o.li_type) {
        case"em":
            b = t_zeroForms__createInput(o, u, p, "email");
            break;
        case"ph":
            b = t_zeroForms__createPhoneInput(e, o, u, p), "a" === o.li_masktype && (t_zeroForms__setScriptOrStyle("t-zero-phonemask", "tilda-phone-mask-1.1.min.js", "", "script", !1), t_zeroForms__onRender(r, !0, function () {
                t_zeroForms__onFuncLoad("t_form_phonemask_load", function () {
                    var t = "#rec" + e + ' .js-phonemask-input[data-phonemask-lid="' + o.lid + '"]',
                        t = document.querySelector(t);
                    t && t_form_phonemask_load(t)
                })
            }));
            break;
        case"nm":
            b = t_zeroForms__createInput(o, u, p, "name");
            break;
        case"in":
            b = t_zeroForms__createInput(o, u, p, "oneline");
            break;
        case"ta":
            b = t_zeroForms__createInput(o, u, p, "textarea");
            break;
        case"sb":
            var f = "y" === n.inputsstyle, b = t_zeroForms__createSelect(o, u, p, f);
            (n.inputsstyle && n.inputelscolor || u.color) && (f = document.createElement("style"), g = t_zeroForms__createSelector(e, i, ".t-select__wrapper:after"), y = n.inputsstyle ? n.inputelscolor : u.color, f.textContent = g + "{border-top-color:" + y + ";}", b.insertAdjacentElement("beforeend", f));
            break;
        case"rd":
            var g = "cb" === o.li_radcb ? "checkbox" : "radio",
                y = (b = t_zeroForms__createRadio(o, n, p, m, g, e, i), t_zeroForms__setIndicatorStyles(e, i, n.inputelscolor, g, b), e ? "#rec" + e + " " : "");
            t_zeroForms__setScriptOrStyle("t-zero-form-fieldset-" + e, "", y += "fieldset {padding: 0; margin: 0; border: none;}", "style", r), "checkbox" == g && t_zeroForms__onRender(r, !1, function () {
                var t = r.querySelector('[data-input-lid="' + o.lid + '"]');
                t && Array.prototype.slice.call(t.querySelectorAll(".t-checkbox")).forEach(function (t) {
                    t.addEventListener("input", t_zeroForms__updateCheckboxesValues)
                })
            });
            break;
        case"ri":
            b = t_zeroForms__createRadioImage(o, n, p), t_zeroForms__setIndicatorStyles(e, i, n.inputelscolor, "img-select", b), t_zeroForms__setScriptOrStyle("t-zero-img-select-styles", "tilda-img-select-1.0.min.css", "", "link", !1), t_zeroForms__setScriptOrStyle("t-zero-img-select-script", "tilda-img-select-1.0.min.js", "", "script", !1), t_zeroForms__onRender(r, !1, function () {
                t_zeroForms__onFuncLoad("t_input_imgselect_init", function () {
                    t_input_imgselect_init(e, o.lid), t_input_imgselect_invertColor(e)
                })
            });
            break;
        case"cb":
            b = t_zeroForms__createCheckbox(o, m, n, p), t_zeroForms__setIndicatorStyles(e, i, n.inputelscolor, "checkbox", b);
            break;
        case"uw":
            b = t_zeroForms__createUploadField(o, p, "uw"), "published" === window.tildamode && t_zeroForms__onRender(r, !0, function () {
                t_zeroForms__onFuncLoad("t_upwidget__init", function () {
                    t_upwidget__init()
                })
            });
            break;
        case"uc":
            b = t_zeroForms__createUploadField(o, p, "uc");
            f = 'UPLOADCARE_LOCALE ="' + o.li_inp + '";';
            t_zeroForms__setScriptOrStyle("t-zero-uploadcare-" + i, "", f += 'UPLOADCARE_TABS = "all";', "script", !1);
            break;
        case"da":
            b = t_zeroForms__createDateField(o, p, u, n), t_zeroForms__onRender(r, !0, function () {
                t_zeroForms__onFuncLoad("t_datepicker_init", function () {
                    t_datepicker_init(e, o.lid, i)
                })
            });
            break;
        case"tm":
            b = t_zeroForms__createInput(o, u, p, "time");
            break;
        case"qn":
            b = t_zeroForms__createQuantityField(o, u, n.inputelscolor, p), r.removeEventListener("click", t_zeroForms__initQuanityClickCount), r.addEventListener("click", t_zeroForms__initQuanityClickCount);
            break;
        case"rg":
            b = t_zeroForms__createQuantityRange(o, u, n, p), n.inputelscolor && (a = document.createElement("style"), s = t_zeroForms__createSelector(e, i, ".t-range"), ["::-webkit-slider-thumb", "::-moz-range-thumb", "::-ms-thumb"].forEach(function (t) {
                a.textContent += s + t + "{background:" + n.inputelscolor + ";}"
            }), b.insertAdjacentElement("beforeend", a)), t_zeroForms__onRender(r, !1, function () {
                t_zeroForms__onFuncLoad("t_input_range_init", function () {
                    try {
                        t_input_range_init(e, o.lid)
                    } catch (t) {
                        console.log(t)
                    }
                })
            });
            break;
        case"ur":
            b = t_zeroForms__createInput(o, u, p, "url");
            break;
        case"tx":
            (b = document.createElement("div")).classList.add("t-text"), b.setAttribute("field", "li_text__" + o.lid), b.style.fontWeight = m.fontWeight, b.style.fontSize = m.fontSize + "px", b.style.fontFamily = t.fontFamily, b.style.color = t.color, b.innerHTML = o.li_text || "";
            break;
        case"ws":
            (b = document.createElement("div")).innerHTML = "&nbsp";
            o.li_rows && (b.style.height = 34 * o.li_rows + "px");
            break;
        case"fr":
            b = t_zeroForms__createCalculation(o, u, p, t), n.inputfrbgcolor && (y = document.createElement("style"), g = t_zeroForms__createSelector(e, i, ".t-input-group_fr"), y.textContent = g + "{background-color:" + n.inputfrbgcolor + "; padding: 20px 30px 25px;}", b.insertAdjacentElement("beforeend", y)), t_zeroForms__onRender(r, !1, function () {
                t_zeroForms__onFuncLoad("tcalc__init", function () {
                    t_zeroForms__waitCalcFields(e, o, r)
                })
            })
    }
    b && c.appendChild(b);
    _ = document.createElement("div");
    return _.classList.add("t-input-error"), c.insertAdjacentElement("beforeend", _), l.insertAdjacentElement("beforeend", c), "h" !== n.inputpos && ("em" !== (d = o.li_type) && "ph" !== d && "nm" !== d && "in" !== d && "ta" !== d && "sb" !== d && "cb" !== d && "uw" !== d && "da" !== d && "tm" !== d && "qn" !== d && "rg" !== d && "ur" !== d && "tx" !== d || t_zeroForms__setFieldsRowClasses(p, l), "rd" === o.li_type && t_zeroForms__setRadioRowClasses(p, c)), l
}

function t_zeroForms__waitCalcFields(t, e, r) {
    var o = t_zeroForms__removeStringQuotes(e.li_expr).match(/[A-z0-9_]+/gi);
    o && ((o = o.filter(function (t) {
        return isNaN(parseInt(t, 10))
    })).every(function (t) {
        return r.querySelector('[name="' + t + '"]')
    }) ? tcalc__init(t, e.lid) : setTimeout(function () {
        tcalc__init(t, e.lid)
    }, 500))
}

function t_zeroForms__setStylesForFormGroup(t, e) {
    var r, o;
    e && (o = "", (r = "h" === t.inputpos) && t.inputmargright ? o += "padding-right:" + t.inputmargright + "px;" : !r && t.inputmargbottom && (o += "margin-bottom:" + t.inputmargbottom + "px;"), o && (e.style = o))
}

function t_zeroForms__generateSubtitle(e, t, r) {
    var o = ["rd", "ri", "uw", "uc", "fr", "cb"].some(function (t) {
        return t === e.li_type
    }), o = document.createElement(e.li_title || o ? "div" : "label");
    "LABEL" === o.tagName && (o.style.display = "block"), "LABEL" === o.tagName && o.setAttribute("for", e.li_type + "-" + e.lid), o.classList.add("t-input-subtitle"), o.classList.add("t-descr"), o.classList.add("t-descr_xxs"), o.classList.add("t-opacity_70"), o.setAttribute("field", "nullli_subtitle__" + e.lid), t_zeroForms__setTitleStyles(o, t, ""), o.textContent = e.li_subtitle, r.insertAdjacentElement("beforeend", o)
}

function t_zeroForms__generateTitle(e, t, r, o) {
    var n = ["rd", "ri", "uw", "uc", "fr", "cb"].some(function (t) {
        return t === e.li_type
    }), n = document.createElement(n ? "div" : "label");
    "LABEL" === n.tagName && (n.style.display = "block"), "LABEL" === n.tagName && n.setAttribute("for", e.li_type + "-" + e.lid), n.classList.add("t-input-title"), n.setAttribute("data-redactor-toolbar", "no"), n.setAttribute("field", "nullli_title__" + e.lid), t_zeroForms__setTitleStyles(n, t, o), n.textContent = e.li_title, r.insertAdjacentElement("beforeend", n)
}

function t_zeroForms__createPhoneInput(t, e, r, o) {
    var n = e.li_masktype, i = document.createElement("input");
    return e.li_title || e.li_subtitle ? i.id = e.li_type + "-" + e.lid : i.ariaLabel = "phone", t_zeroForms__appendMainSettingToField(i, o, "tel", ""), "a" === n ? i.classList.add("js-phonemask-input") : e.li_mask && i.classList.add("js-tilda-mask"), "a" === n ? (n = "RU" === window.t_zeroForms__browserLang ? "+7" : "+1", i.placeholder = n + "(999)999-9999", i.setAttribute("data-phonemask-init", "no"), i.setAttribute("data-phonemask-id", t), i.setAttribute("data-phonemask-lid", e.lid), e.li_maskcountry && i.setAttribute("data-phonemask-maskcountry", e.li_maskcountry), o.secondaryClassName && i.classList.add(o.secondaryClassName), o.require && i.setAttribute("data-tilda-req", "1")) : (t_zeroForms__appendAttributes(i, o), i.setAttribute("data-tilda-rule", "phone"), o.mask && i.setAttribute("data-tilda-mask", o.mask)), t_zeroForms__appendStylesToField(i, r), i
}

function t_zeroForms__createInput(t, e, r, o) {
    var n = document.createElement("textarea" === o ? "textarea" : "input");
    t.li_title || t.li_subtitle ? n.id = t.li_type + "-" + t.lid : n.ariaLabel = o, t_zeroForms__appendMainSettingToField(n, r, "textarea" === o ? "" : "text", "");
    return ["name", "time", "url", "email"].some(function (t) {
        return t === o
    }) && n.setAttribute("data-tilda-rule", o), "time" === o && (n.setAttribute("data-tilda-mask", "99:99"), n.classList.add("t-inputtime")), ("time" === o || "oneline" === o && t.li_mask) && n.classList.add("js-tilda-mask"), "oneline" === o && (r.rule && n.setAttribute("data-tilda-rule", r.rule), r.mask && n.setAttribute("data-tilda-mask", r.mask)), t_zeroForms__appendAttributes(n, r), t_zeroForms__appendStylesToField(n, e), "textarea" === o && (t_zeroForms__setScriptOrStyle("zero-forms-textarea-styles", "", ".t396__elem .t-input-group_ta textarea.t-input {padding-top:10px; vertical-align: bottom; resize: none;}", "style", !1), t_zeroForms__setTextareaHeight(t, n)), n
}

function t_zeroForms__setTextareaHeight(t, e) {
    1 < t.li_rows && (e.style.height = 25 * t.li_rows + 10 + "px", e.setAttribute("data-rows", t.li_rows)), e.rows = parseInt(t.li_rows, 10) || 3
}

function t_zeroForms__createSelect(t, o, e, r) {
    var n = t.li_variants ? t.li_variants.split("\n") : [], i = parseInt(t.li_defselitem, 10),
        a = document.createElement("div"),
        s = (a.classList.add("t-select__wrapper"), e.secondaryClassName && a.classList.add("t-select__wrapper_bbonly"), document.createElement("select")),
        l = (s.id = t.li_type + "-" + t.lid, t_zeroForms__appendMainSettingToField(s, e, "", "t-select"), e.secondaryClassName && s.classList.add("t-select_bbonly"), e.require && s.setAttribute("data-tilda-req", "1"), t_zeroForms__appendStylesToField(s, o), t.li_selfirstvar && ((e = document.createElement("option")).textContent = t.li_selfirstvar, e.setAttribute("value", ""), s.insertAdjacentElement("beforeend", e)), o && o.color && !r);
    return n.forEach(function (t, e) {
        var r = document.createElement("option");
        r.value = t, r.textContent = t, l && (r.style.color = o.color), i && i === e + 1 && (r.selected = !0), s.insertAdjacentElement("beforeend", r)
    }), a.insertAdjacentElement("beforeend", s), a
}

function t_zeroForms__createRadio(i, a, s, l, _, d, c) {
    var t = i.li_variants ? i.li_variants.split("\n") : [], e = "y" === i.li_isownvariant,
        u = (e && i.li_ownvariant && i.li_ownvariant.trim() && t.push(i.li_ownvariant.trim()), "cb" === i.li_radcb),
        m = parseInt(i.li_defselitem, 10), r = document.createDocumentFragment(),
        o = t_zeroForms__createWrapper((u ? "t-checkboxes" : "t-radio") + "__wrapper"),
        p = (u && r.appendChild(t_zeroForms__createNameFieldForCheckbox(s, o, "checkboxes")), r.appendChild(o), document.createElement("fieldset")),
        f = (o.insertAdjacentElement("beforeend", p), []);
    return t.forEach(function (t, e) {
        var r = t_zeroForms__createLabel(_, l, a), o = document.createElement("input"),
            n = (o.type = _, o.value = t, o.classList.add("t-" + _), u || o.classList.add("js-tilda-rule"), u || (o.name = s.name), i.li_title || i.li_subtitle),
            n = (!u && n && (o.ariaLabel = n), m && m === e + 1 && (o.checked = !0), s.require && o.setAttribute("data-tilda-req", "1"), f.push(o), r.insertAdjacentElement("beforeend", o), t_zeroForms__createIndicator(_, a.inputelscolor, !1)),
            e = (r.insertAdjacentElement("beforeend", n), document.createElement("span"));
        e.textContent = t, r.insertAdjacentElement("beforeend", e), t === i.li_ownvariant ? (n = t_zeroForms__createStyleObjectForOwnAnswer(l, a), e = t_zeroForms__createOwnAnswer(o, r, i, n, s, d, c), p.insertAdjacentElement("beforeend", e)) : p.insertAdjacentElement("beforeend", r)
    }), e && i.li_ownvariant && t_zeroForms__updateOwnAnswerVisibility(f, p), r
}

function t_zeroForms__createStyleObjectForOwnAnswer(t, e) {
    t = Object.create(t);
    return t && t.fontSize && (t.fontSize += "px"), e.inputfontfamily && (t.fontFamily = e.inputfontfamily), e.inputtitlecolor && (t.color = e.inputtitlecolor, t.borderColor = e.inputtitlecolor), t
}

function t_zeroForms__createOwnAnswer(t, e, r, o, n, i, a) {
    t.classList.add("t-input__own-answer-input"), t.defaultRadioValue = t.value;
    var s = document.createElement("div"),
        n = (s.classList.add("t-input__own-answer-wrapper"), "checkbox" === t.type && s.classList.add("t-input__own-answer-wrapper-checkbox"), t_zeroForms__createOwnAnswerInput(r, o, n, t.checked));
    return t_zeroForms__processOwnAnswerPlaceholder(r.li_ownvariantph, n, o, i, a, t), s.insertAdjacentElement("beforeend", e), s.insertAdjacentElement("beforeend", n), t_zeroForms__setListenersForOwnAnswer(t, n), s
}

function t_zeroForms__processOwnAnswerPlaceholder(t, e, r, o, n, i) {
    t && (e.placeholder = t, r.color && (e = document.createElement("style"), t = t_zeroForms__createSelector(o, n, ".t-input__own-answer::placeholder"), e.textContent = t + "{color:" + r.color + ";}", i.insertAdjacentElement("afterend", e)))
}

function t_zeroForms__setListenersForOwnAnswer(o, n) {
    n.addEventListener("blur", function (t) {
        var e = n.value && n.value.trim(), r = o.defaultRadioValue || "";
        e && (r += ": " + e), o.value = r, "checkbox" === o.type && t_zeroForms__updateCheckboxesValues(t)
    })
}

function t_zeroForms__createOwnAnswerInput(t, e, r, o) {
    t = t_zeroForms__createInput(t, e, r, "oneline"), t.classList.add("t-input__own-answer"), t.classList.add("t-input_bbonly"), t.removeAttribute("data-tilda-req"), t.removeAttribute("name"), e = t_zeroForms__getTildaMode();
    return !o && "zero" !== e || t.classList.add("t-input__own-answer--active"), t
}

function t_zeroForms__updateOwnAnswerVisibility(t, n) {
    t.forEach(function (o) {
        o.addEventListener("change", function () {
            var t, e = n.querySelector(".t-input__own-answer"), r = n.querySelector(".t-input__own-answer-input");
            e && r && (t = r.checked, e.classList[t ? "add" : "remove"]("t-input__own-answer--active"), t && o === r && e.focus())
        })
    })
}

function t_zeroForms__createRadioImage(n, i, a) {
    var t, s, e, l, _, d, c = "cb" === n.li_radcb;
    if (n.li_gallery) try {
        t = JSON.parse(n.li_gallery)
    } catch (t) {
    }
    if (t) return t = t_zeroForms__fromObjToArray(t), s = parseInt(n.li_defselitem, 10), e = document.createDocumentFragment(), l = t_zeroForms__createWrapper("t-img-select__container"), l.setAttribute("data-check-bgcolor", i.inputelscolor || "#000"), c && e.appendChild(t_zeroForms__createNameFieldForCheckbox(a, l, "img-select")), e.appendChild(l), _ = c ? "checkbox" : "radio", d = "t-img-select__indicator_" + (n.li_imgratio ? n.li_imgratio.replace("_", "-") : "1-1"), t.forEach(function (t, e) {
        var r = t_zeroForms__createLabel("img-select", "", !1), o = document.createElement("input"),
            e = (o.type = _, o.value = t.alt || t.img, o.classList.add("t-img-select"), c || (o.name = n.li_nm), c || o.classList.add("js-tilda-rule"), s && s === e + 1 && (o.checked = !0), a.require && o.setAttribute("data-tilda-req", "1"), r.insertAdjacentElement("beforeend", o), t_zeroForms__createIndicator("img-select", !1, {
                ratio: d,
                img: t.img
            }));
        e.classList.add("t-bgimg"), e.classList.add("t-img-select__indicator"), e.classList.add(d), e.setAttribute("data-original", t.img), e.style.backgroundImage = 'url("' + t.img + '")', r.insertAdjacentElement("beforeend", e), t.alt && ((o = document.createElement("div")).classList.add("t-img-select__text"), o.classList.add("t-text"), o.classList.add("t-text_xs"), o.textContent = t.alt, i.inputtitlecolor && (o.style.color = i.inputtitlecolor), r.insertAdjacentElement("beforeend", o)), l.insertAdjacentElement("beforeend", r)
    }), e
}

function t_zeroForms__createCheckbox(t, e, r, o) {
    var e = t_zeroForms__createLabel("checkbox", e, r), n = document.createElement("input"),
        o = (t_zeroForms__appendMainSettingToField(n, o, "checkbox", "t-checkbox"), n.value = "yes", t.li_checked && (n.checked = !0), o.require && n.setAttribute("data-tilda-req", "1"), e.insertAdjacentElement("beforeend", n), t_zeroForms__createIndicator("checkbox", r.inputelscolor, !1)),
        n = (e.insertAdjacentElement("beforeend", o), document.createElement("span"));
    return n.classList.add("t-checkbox__labeltext"), n.innerHTML = t.li_label || "", e.insertAdjacentElement("beforeend", n), e
}

function t_zeroForms__createUploadField(t, e, r) {
    r = "uw" === r;
    if ("published" !== window.tildamode) return (n = document.createElement("div")).setAttribute("style", "color:#fff;background-color:#000; padding:10px 20px; display:inline-block; margin-bottom:10px;"), o = r && "" === t.li_uwkey, n.textContent = o ? "Please set the key" : "Upload button will be here", n;
    var o = r ? "t-upwidget" : "t-uploadcare", n = t_zeroForms__createWrapper(o),
        i = (n.setAttribute("style", r ? "margin-bottom:5px;min-height:38px;" : "margin-bottom:10px;"), document.createElement("input")),
        e = (t_zeroForms__appendMainSettingToField(i, e, "hidden", ""), i.setAttribute("role", r ? "upwidget-uploader" : "uploadcare-uploader"), e.require && i.setAttribute("data-tilda-req", "1"), i.style.display = "none", r ? (i.setAttribute("data-tilda-upwidget-key", t.li_uwkey || ""), "y" === t.li_multiupl && i.setAttribute("data-tilda-upwidget-multiple", "1")) : i.setAttribute("data-public-key", t.li_uckey || "demopublickey"), n.insertAdjacentElement("beforeend", i), r ? "tilda-upwidget-1.1.min.js" : "uploadcare-3.x.min.js");
    return t_zeroForms__setScriptOrStyle(o + "-zero-form", e = "uploadcare-3.x.min.js" !== e || window.jQuery ? e : "uploadcare-3.x.full.min.js", "", "script", !1), n
}

function t_zeroForms__createDateField(t, e, r, o) {
    var n = t_zeroForms__createWrapper("t-datepicker__wrapper"), i = document.createElement("input"),
        a = (t.li_dateUnavailPast ? "past," : "") + (t.li_dateUnavailMo ? "mo," : "") + (t.li_dateUnavailTu ? "tu," : "") + (t.li_dateUnavailWe ? "we," : "") + (t.li_dateUnavailTh ? "th," : "") + (t.li_dateUnavailFr ? "fr," : "") + (t.li_dateUnavailSa ? "sa," : "") + (t.li_dateUnavailSu ? "su," : "") + (t.li_dateUnavailFuture ? "future," : "") + (t.li_dateUnavailToday ? "today," : ""),
        e = (a.length && "," === a[a.length - 1] && (a = a.slice(0, -1)), t_zeroForms__appendMainSettingToField(i, e, "text", ["t-input", "t-datepicker", "js-tilda-mask"]), t_zeroForms__appendAttributes(i, e), t_zeroForms__appendStylesToField(i, r), i.setAttribute("data-tilda-rule", "date"), i.setAttribute("data-tilda-dateformat", t.li_dateformat), i.setAttribute("data-tilda-datediv", t.li_datediv), i.setAttribute("data-tilda-mask", t.li_datemask), i.setAttribute("data-tilda-dateunvailable", a), i.id = t.li_type + "-" + t.lid, n.insertAdjacentElement("beforeend", i), o.inputsstyle ? o.inputelscolor : r.color);
    return n.insertAdjacentHTML("beforeend", '<svg class="t-datepicker__icon" fill="' + e + '" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 69.5 76.2" style="width:25px;"><path d="M9.6 42.9H21V31.6H9.6v11.3zm3-8.3H18v5.3h-5.3v-5.3zm16.5 8.3h11.3V31.6H29.1v11.3zm3-8.3h5.3v5.3h-5.3v-5.3zM48 42.9h11.3V31.6H48v11.3zm3-8.3h5.3v5.3H51v-5.3zM9.6 62H21V50.6H9.6V62zm3-8.4H18V59h-5.3v-5.4zM29.1 62h11.3V50.6H29.1V62zm3-8.4h5.3V59h-5.3v-5.4zM48 62h11.3V50.6H48V62zm3-8.4h5.3V59H51v-5.4z"></path><path d="M59.7 6.8V5.3c0-2.9-2.4-5.3-5.3-5.3s-5.3 2.4-5.3 5.3v1.5H40V5.3C40 2.4 37.6 0 34.7 0s-5.3 2.4-5.3 5.3v1.5h-9.1V5.3C20.3 2.4 18 0 15 0c-2.9 0-5.3 2.4-5.3 5.3v1.5H0v69.5h69.5V6.8h-9.8zm-7.6-1.5c0-1.3 1-2.3 2.3-2.3s2.3 1 2.3 2.3v7.1c0 1.3-1 2.3-2.3 2.3s-2.3-1-2.3-2.3V5.3zm-19.7 0c0-1.3 1-2.3 2.3-2.3S37 4 37 5.3v7.1c0 1.3-1 2.3-2.3 2.3s-2.3-1-2.3-2.3V5.3zm-19.6 0C12.8 4 13.8 3 15 3c1.3 0 2.3 1 2.3 2.3v7.1c0 1.3-1 2.3-2.3 2.3-1.3 0-2.3-1-2.3-2.3V5.3zm53.7 67.9H3V9.8h6.8v2.6c0 2.9 2.4 5.3 5.3 5.3s5.3-2.4 5.3-5.3V9.8h9.1v2.6c0 2.9 2.4 5.3 5.3 5.3s5.3-2.4 5.3-5.3V9.8h9.1v2.6c0 2.9 2.4 5.3 5.3 5.3s5.3-2.4 5.3-5.3V9.8h6.8l-.1 63.4z"></path></svg>'), t_zeroForms__setScriptOrStyle("t-zero-date-styles", "tilda-date-picker-1.0.min.css", "", "link", !1), t_zeroForms__setScriptOrStyle("t-zero-date-script", "tilda-date-picker-1.0.min.js", "", "script", !1), n
}

function t_zeroForms__createQuantityField(t, e, r, o) {
    var n = t_zeroForms__createWrapper("t-inputquantity__wrapper"), i = t_zeroForms__createQuantityBtn("minus", r),
        r = t_zeroForms__createQuantityBtn("plus", r), a = document.createElement("input");
    return t_zeroForms__appendMainSettingToField(a, o, "text", ["t-input", "t-inputquantity"]), t_zeroForms__appendAttributes(a, o), t_zeroForms__appendStylesToField(a, e), a.value = t.li_value || "", a.id = t.li_type + "-" + t.lid, a.setAttribute("data-tilda-rule", "number"), n.insertAdjacentElement("beforeend", i), n.insertAdjacentElement("beforeend", a), n.insertAdjacentElement("beforeend", r), n
}

function t_zeroForms__createQuantityBtn(t, e) {
    var r = document.createElement("span");
    return r.classList.add("t-inputquantity__btn"), r.classList.add("t-inputquantity__btn-" + t), e && (r.style.color = e), r.innerHTML = "minus" === t ? "&ndash;" : "+", r
}

function t_zeroForms__createQuantityRange(t, e, r, o) {
    var n = t_zeroForms__createWrapper("t-range__wrapper"), i = document.createElement("input"),
        o = (t_zeroForms__appendMainSettingToField(i, o, "range", "t-range"), r.inputelscolor && i.setAttribute("data-range-color", r.inputelscolor), i.min = t.li_vmin || "0", i.max = t.li_vmax || "10", i.step = t.li_step || "1", i.value = t.li_value, i.style.width = "100%", t.li_title || t.li_subtitle ? i.id = t.li_type + "-" + t.lid : i.ariaLabel = "range", n.insertAdjacentElement("beforeend", i), document.createElement("div")),
        i = (o.classList.add("t-range__value-txt"), o.classList.add("t-descr"), o.classList.add("t-descr_xxs"), o.style.display = "none", n.insertAdjacentElement("beforeend", o), document.createElement("div")),
        o = (i.classList.add("t-range__interval-txt-wrapper"), t_zeroForms__createRangeField("min", r.inputtitlecolor, t.li_vmin || "0")),
        r = t_zeroForms__createRangeField("max", r.inputtitlecolor, t.li_vmax || "10");
    return i.insertAdjacentElement("beforeend", o), i.insertAdjacentElement("beforeend", r), n.insertAdjacentElement("beforeend", i), t_zeroForms__setScriptOrStyle("t-zero-range-script", "tilda-range-1.0.min.js", "", "script", !1), t_zeroForms__setScriptOrStyle("t-zero-range-styles", "tilda-range-1.0.min.css", "", "link", !1), n
}

function t_zeroForms__createRangeField(t, e, r) {
    var o = document.createElement("div");
    return o.classList.add("t-range__interval-txt"), o.classList.add("t-range__interval-txt_" + t), o.classList.add("t-descr"), o.classList.add("t-descr_xxs"), e && (o.style.color = e), o.textContent = r, o
}

function t_zeroForms__createCalculation(t, e, r, o) {
    var n = document.createDocumentFragment(), i = document.createElement("input"),
        r = (t_zeroForms__appendMainSettingToField(i, r, "hidden", "t-calc__hiddeninput"), i.tabIndex = -1, i.value = "0", n.appendChild(i), t_zeroForms__createWrapper(["t-calc__wrapper", "t-name", "t-name_md"])),
        i = (r.style.color = e.color, r.style.fontFamily = o.fontFamily, r.style.fontSize = e.fontSize, r.style.fontWeight = e.fontWeight, t_zeroForms__createCalcTextField(t.li_prefix, "prefix", r), document.createElement("span"));
    return i.classList.add("t-calc"), i.setAttribute("data-calc-expr", t_zeroForms__removeStringQuotes(t.li_expr)), i.textContent = "0", r.insertAdjacentElement("beforeend", i), t_zeroForms__createCalcTextField(t.li_postfix, "postfix", r), t_zeroForms__setScriptOrStyle("t-zero-calc", "tilda-calc-1.0.min.js", "", "script", !1), n.appendChild(r), "y" !== t.li_addtocart || (t.li_prod_title && (o = t_zeroForms__createHiddenField(t.li_prod_title, "prod_title", "t-calc__hidden__prod_title"), r.insertAdjacentElement("beforeend", o)), t.li_prod_img && (e = t_zeroForms__createHiddenField(t.li_prod_img, "prod_img", "t-calc__hidden__prod_img"), r.insertAdjacentElement("beforeend", e))), n
}

function t_zeroForms__createCalcTextField(t, e, r) {
    var o;
    t && ((o = document.createElement("span")).classList.add("t-calc__" + e + "-text"), o.textContent = t, r.insertAdjacentElement("beforeend", o))
}

function t_zeroForms__createFormButton(t, e, r, o) {
    var n = document.createElement("div"),
        i = (n.classList.add("tn-form__submit"), n.style.textAlign = o.buttonalign, n.style.marginTop = o.buttonmargtop + "px", document.createElement("button")),
        a = (i.type = "submit", i.classList.add("t-submit"), i.style.padding = "0 15px", i.style.display = "block", o.buttontitle);
    return a && (-1 !== a.indexOf("<br") ? i.innerHTML = a : i.textContent = a), t_zeroForms__setBtnInlineStyles(o, i), n.insertAdjacentElement("beforeend", i), "zero" === window.tildamode || "edit" === window.tildamode ? (window.tn && window.tn.curResolution < 640 && (i.style.whiteSpace = "normal"), t_zeroForms__generateBtnStyles(i, t, r, o, e)) : t_zeroForms__onRender(e, !0, function () {
        t_zeroForms__generateBtnStyles(i, t, r, o, e)
    }), n
}

function t_zeroForms__setBtnInlineStyles(t, e) {
    var r = "variation" === t.buttonfontweight ? t.buttonvariationweight : t.buttonfontweight;
    e.style.width = t.buttonwidth ? t.buttonwidth + "px" : "100%", r && (e.style.fontWeight = r), t.buttonheight && (e.style.height = t.buttonheight + "px"), "center" === t.buttonalign ? (e.style.marginLeft = "auto", e.style.marginRight = "auto") : (e.style.marginLeft = "", e.style.marginRight = ""), (t.buttonshadowsize || t.buttonshadowopacity) && (e.style.boxShadow = "0px 0px " + (t.buttonshadowsize ? t.buttonshadowsize + "px" : "10px") + " 0px rgba(0, 0, 0, " + (t.buttonshadowopacity ? t.buttonshadowopacity / 100 : "0.3") + ")")
}

function t_zeroForms__generateBtnStyles(t, e, r, o, n) {
    var i = t_zeroForms__generateButtonStyles(o, window.getComputedStyle(t).fontFamily),
        a = t_zeroForms__generateButtonHoverStyles(o), s = document.getElementById("t-uploadcare-zero-form"),
        l = document.getElementById("t-upwidget-zero-form"), _ = t_zeroForms__createSelector(e, r, ""),
        d = _ + ".t-submit", o = t_zeroForms__getGradientBGStyles(o, d),
        s = (s && (d = d + ", " + _ + ".uploadcare--widget__button.uploadcare--widget__button_type_open"), a ? "transition: 0.3s ease all;" : ""),
        l = (d = l ? d + ", " + _ + ".t-upwidget-container__button" : d) + "{" + i + s + "}",
        _ = (o && (l += o, t.classList.add("tn-form__submit-gradient")), "t-zero-form-btn-styles-" + r + "-" + e),
        i = document.getElementById(_);
    i && i.parentElement && i.parentElement.removeChild(i), t_zeroForms__setScriptOrStyle(_, "", l, "style", n), a && (s = d.split(", ").map(function (t) {
        return t + ":hover"
    }).join(", ") + "{" + a + "}", o = "t-zero-form-btn-hover-styles-" + r + "-" + e, (t = document.getElementById(o)) && t.parentElement && t.parentElement.removeChild(t), t_zeroForms__setScriptOrStyle(o, "", s, "style", n))
}

function t_zeroForms__generateButtonStyles(t, e) {
    var r, o = {
        color: t.buttoncolor || "",
        border: t.buttonbordersize ? t.buttonbordersize + "px solid " + (t.buttonbordercolor || "transparent") : "",
        "border-radius": t.buttonradius || "0",
        "font-size": t.buttonfontsize || "",
        "font-family": t.buttonfontfamily || e,
        cursor: "pointer"
    }, n = "", i = ["font-size", "height", "border-radius"];
    for (r in o) o[r] && (i.some(function (t) {
        return t === r.toString()
    }) && (o[r] += "px"), n += r + ":" + o[r] + ";");
    return n += t_zeroForms__processButtonBG(t, !1)
}

function t_zeroForms__processButtonBG(t, e) {
    var t = t_zeroForms__getButtonBGObj(t), r = e ? t.buttonHoverBG : t.buttonBG;
    return t.buttonBGHasGradient || t.buttonHoverBGHasGradient ? "" : r ? "background-color: " + r + ";" : e ? "" : "background-color: transparent;"
}

function t_zeroForms__getButtonBGObj(t) {
    var e = t.buttonbgcolor, t = t.buttonhoverbgcolor;
    return {
        buttonBG: e,
        buttonHoverBG: t,
        buttonBGHasGradient: t_zeroForms__isColorContainsGradient(e),
        buttonHoverBGHasGradient: t_zeroForms__isColorContainsGradient(t)
    }
}

function t_zeroForms__isColorContainsGradient(t) {
    return t && -1 !== t.indexOf("-gradient(")
}

function t_zeroForms__getGradientBGStyles(t, e) {
    var t = t_zeroForms__getButtonBGObj(t), r = t.buttonBGHasGradient, o = t.buttonHoverBGHasGradient, n = t.buttonBG,
        t = t.buttonHoverBG;
    if (!r && !o) return "";
    var i = "";
    return (i += e + ".tn-form__submit-gradient::before {") + t_zeroForms__generateButtonBGStyle(n, r) + "}" + (e + ".tn-form__submit-gradient::after {") + t_zeroForms__generateButtonBGStyle(t, o) + "}"
}

function t_zeroForms__generateButtonBGStyle(t, e) {
    return t = t || (e ? "none" : "transparent"), e ? "background-image: " + t + ";" : "background-color: " + t + ";"
}

function t_zeroForms__generateButtonHoverStyles(t) {
    if (!(t.buttonhovercolor || t.buttonhoverbordercolor || t.buttonhoverbgcolor || t.buttonhovershadowsize)) return "";
    var e, r = {color: t.buttonhovercolor || "", "border-color": t.buttonhoverbordercolor || ""},
        o = ((t.buttonhovershadowsize || t.buttonshadowopacity) && (r["box-shadow"] = "0px 0px " + (t.buttonhovershadowsize ? t.buttonhovershadowsize + "px" : "10px") + " 0px rgba(0, 0, 0, " + (t.buttonshadowopacity ? t.buttonshadowopacity / 100 : "0.3") + ")"), "");
    for (e in r) r[e] && (o += e + ":" + r[e] + ";");
    return o += t_zeroForms__processButtonBG(t, !0)
}

function t_zeroForms__createErrorBox(r, t) {
    var e = document.createElement("div"),
        t = (e.classList.add("t-form__errorbox-" + t), document.createElement("div")),
        o = (t.classList.add("js-errorbox-all"), t.classList.add("t-form__errorbox-wrapper"), t.style.display = "none", e.insertAdjacentElement("beforeend", t), document.createElement("div")),
        n = (o.classList.add("t-form__errorbox-text"), o.classList.add("t-text_xs"), o.classList.add("t-text"), ["all", "req", "email", "name", "phone", "string"].forEach(function (t) {
            var e = document.createElement("p");
            e.classList.add("t-form__errorbox-item"), e.classList.add("js-rule-error"), e.classList.add("js-rule-error-" + t), "all" !== t && "string" !== t && (e.textContent = r["formerr" + t]), o.insertAdjacentElement("beforeend", e)
        }), t.insertAdjacentElement("beforeend", o), document.createElement("div"));
    return n.classList.add("tn-form__errorbox-close"), n.classList.add("js-errorbox-close"), n.insertAdjacentElement("beforeend", t_zeroForms__createErrorBoxBtn("left")), n.insertAdjacentElement("beforeend", t_zeroForms__createErrorBoxBtn("right")), t.insertAdjacentElement("beforeend", n), document.removeEventListener("click", t_zeroForms__initErrorBoxClose), document.addEventListener("click", t_zeroForms__initErrorBoxClose), t_zeroForms__setScriptOrStyle("t-zero-form-errorbox-styles", "tilda-zero-form-errorbox.min.css", "", "link", !1), e
}

function t_zeroForms__createErrorBoxBtn(t) {
    var e = document.createElement("div");
    return e.classList.add("tn-form__errorbox-close-line"), e.classList.add("tn-form__errorbox-close-line-" + t), e
}

function t_zeroForms__getBottomText(t, e, r, o, n) {
    var i, a;
    return ["cb", "cbx"].some(function (t) {
        return e.formbottomcb === t
    }) ? ((i = t_zeroForms__createLabel("checkbox", "", !1)).classList.add("t-text"), i.classList.add("t-text_xxs"), e.inputtitlecolor && (i.style.color = e.inputtitlecolor), t_zeroForms__appendMainSettingToField(a = document.createElement("input"), {name: "form_bottom_checkbox"}, "checkbox", "t-checkbox"), a.setAttribute("data-tilda-req", "1"), "cbx" === e.formbottomcb && (a.checked = !0), i.insertAdjacentElement("beforeend", a), (a = t_zeroForms__createIndicator("checkbox", e.inputelscolor, !1)).style.width = "15px", a.style.height = "15px", a.style.marginRight = "5px", i.insertAdjacentElement("beforeend", a), (a = document.createElement("span")).classList.add("t-checkbox__labeltext"), a.innerHTML = n, i.insertAdjacentElement("beforeend", a), a = t_zeroForms__createSelector(r, t, ".t-form__bottom-text .t-checkbox__indicator:after"), r = e.inputelscolor ? "color: " + e.inputelscolor + ";" : "", t_zeroForms__setScriptOrStyle("t-zero-form-btn-styles-" + t, "", a + "{" + (r += "left:3px;top:0;height:6px;") + "}", "style", o), i) : ((t = document.createElement("span")).innerHTML = n, t)
}

function t_zeroForms__animateInputs(t, o, e, r) {
    var n = t_zeroForms__createSelector(e, r, ""),
        i = n + ".t-input-group:not(.t-input-group_da):not(.t-input-group_ph):not(.t-input-group_uw):not(.t-input-group_ri):not(.t-input-group_cb):not(.t-input-group_rg) .t-input-block, .t-datepicker__wrapper",
        a = (i += "{position: relative; overflow: hidden;}", t_zeroForms__setScriptOrStyle("t-zero-form-anim-styles-" + e + "-" + r, "", i = o.inputcolor ? i + (n + ".t-input__vis-ph") + "{color:" + o.inputcolor + ";}" : i, "style", t), (Number(o.inputheight) - Number(o.inputfontsize)) / 2),
        s = "variation" === o.inputfontweight ? o.inputvariationweight : o.inputfontweight;
    Array.prototype.slice.call(document.querySelectorAll(n + ".t-input:not(.t-inputquantity):not(.t-input-phonemask__wrap):not(.t-input-phonemask):not(.t-input__own-answer)")).forEach(function (t) {
        t.classList.add("t-input_pvis"), t.addEventListener("blur", function (t) {
            "1" === t.target.getAttribute("data-tilda-mask-init") ? setTimeout(function () {
                t.target.value ? t.target.classList.add("t-input_has-content") : t.target.classList.remove("t-input_has-content")
            }) : t.target.value ? t.target.classList.add("t-input_has-content") : t.target.classList.remove("t-input_has-content")
        });
        var e, r = t.getAttribute("placeholder");
        r && ((e = document.createElement("div")).classList.add("t-input__vis-ph"), a && (e.style.top = a + "px"), s && (e.style.fontWeight = s), o.inputfontsize && (e.style.fontSize = o.inputfontsize + "px", e.style.height = parseInt(o.inputfontsize, 10) + 1 + "px"), e.textContent = r, t.insertAdjacentElement("afterend", e), t.removeAttribute("placeholder"))
    }), window.t_zeroForms__isiOS && window.t_zeroForms__iOSMajorVersion < 13 && (e = t.querySelectorAll("textarea:not(.t-input_bbonly)"), r = t.querySelectorAll("textarea.t-input_bbonly"), Array.prototype.forEach.call(e, function (t) {
        t.style.paddingLeft = "17px"
    }), Array.prototype.forEach.call(r, function (t) {
        t.style.textIndent = "-3px"
    }))
}

function t_zeroForms__appendAttributes(t, e) {
    e.secondaryClassName && t.classList.add(e.secondaryClassName), e.placeholder && (t.placeholder = e.placeholder), e.require && t.setAttribute("data-tilda-req", "1")
}

function t_zeroForms__appendStylesToField(t, e) {
    for (var r in t.classList.contains("t-input-inline-styles") || t.classList.add("t-input-inline-styles"), e) t.style[r] = e[r];
    var o;
    t.classList.contains("t-input-phonemask__wrap") && ((o = t.querySelector(".t-input-phonemask__select-code")) && (o.style.fontSize = e.fontSize), o && (o.style.fontWeight = e.fontWeight), (o = t.querySelector(".t-input-phonemask")) && (o.style.fontSize = e.fontSize), o && (o.style.fontWeight = e.fontWeight))
}

function t_zeroForms__setIndicatorStyles(t, e, r, o, n) {
    var i, a;
    r && n && (i = ".t-" + o + "__indicator:after", o = "checkbox" === o ? "border-color" : "background-color", a = document.createElement("style"), t = t_zeroForms__createSelector(t, e, i), a.textContent = t + "{" + o + ":" + r + ";}", n.appendChild(a))
}

function t_zeroForms__createInputPlaceholderStyles(t, r, e, o) {
    var n = ["::-webkit-input-placeholder", "::-moz-placeholder", ":-moz-placeholder", ":-ms-input-placeholder"],
        i = t_zeroForms__createSelector(e, t, ""), a = "";
    ["input", "textarea"].forEach(function (e) {
        n.forEach(function (t) {
            a += i + e + t + "{color:" + r.inputcolor + ";opacity:0.5;}"
        })
    }), t_zeroForms__setScriptOrStyle("t-zero-placeholder-" + e + "-" + t, "", a, "style", o)
}

function t_zeroForms__setScriptOrStyle(t, e, r, o, n) {
    var i, a;
    document.getElementById(t) || (i = "https://static.tildacdn.com", a = document.createElement(o), r ? a.textContent = r : ("script" === o ? (a.src = i + "/js/" + e, a.async = !0, a.charset = "utf-8") : "link" === o && (a.href = i + "/css/" + e, a.rel = "stylesheet"), a.onerror = function () {
        t_zeroForms__onFuncLoad("t_fallback__reloadSRC", function () {
            t_fallback__reloadSRC(a)
        })
    }), a.id = t, r = "style" === o && n ? n.querySelector(".tn-atom") : null, ("style" === o && r ? r : document.body).insertAdjacentElement("beforeend", a))
}

function t_zeroForms__createLabel(t, e, r) {
    var o = document.createElement("label");
    return o.classList.add("t-" + t + "__control"), e && e.fontSize && (o.style.fontSize = e.fontSize + "px"), e && (o.style.fontWeight = e.fontWeight), r && r.inputtitlecolor && (o.style.color = r.inputtitlecolor), r && r.inputfontfamily && (o.style.fontFamily = r.inputfontfamily, o.style.fontFamily || (o.style.fontFamily = '"' + r.inputfontfamily + '"')), o
}

function t_zeroForms__createIndicator(t, e, r) {
    var o = document.createElement("div");
    return o.classList.add("t-" + t + "__indicator"), e && (o.style.borderColor = e), "img-select" === t && (o.classList.add("t-bgimg"), o.classList.add(r.ratio), o.setAttribute("data-original", r.img), o.style.backgroundImage = r.img), o
}

function t_zeroForms__createNameFieldForCheckbox(t, e, r) {
    var o = document.createElement("input");
    return t_zeroForms__appendMainSettingToField(o, t, "hidden", "t-" + r + "__hiddeninput"), o.tabIndex = -1, t.require && o.setAttribute("data-tilda-req", "1"), o
}

function t_zeroForms__createHiddenField(t, e, r) {
    var o = document.createElement("input");
    return o.type = "hidden", o.tabIndex = -1, t && (o.value = t), e && (o.name = e), r && o.classList.add(r), o
}

function t_zeroForms__createWrapper(t) {
    var e = document.createElement("div");
    return "string" == typeof t ? e.classList.add(t) : t.forEach(function (t) {
        e.classList.add(t)
    }), e
}

function t_zeroForms__appendMainSettingToField(e, t, r, o) {
    r && "select" !== r && (e.type = r), e.name = t.name || "", o || e.classList.add("t-input"), o && ("object" == typeof o ? o.forEach(function (t) {
        e.classList.add(t)
    }) : "string" == typeof o && e.classList.add(o)), e.classList.add("js-tilda-rule")
}

function t_zeroForms__initInputStyles(t, e) {
    var r, o = {
        color: t.inputcolor || "",
        border: t.inputbordersize ? t.inputbordersize + "px solid " + (t.inputbordercolor || "#000") : "",
        backgroundColor: t.inputbgcolor || "transparent",
        borderRadius: t.inputradius || "",
        fontSize: t.inputfontsize || "",
        fontWeight: e || "",
        height: t.inputheight || ""
    }, n = ["fontSize", "height", "borderRadius"];
    for (r in o) o[r] ? n.some(function (t) {
        return t === r.toString()
    }) && (o[r] += "px") : delete o[r];
    return o
}

function t_zeroForms__setTitleStyles(t, e, r) {
    var o = t.classList.contains("t-input-title");
    t.style.color = e.color || "", t.style.fontFamily = e.fontFamily || "", !t.style.fontFamily && e.fontFamily && (t.style.fontFamily = '"' + e.fontFamily + '"'), t.style.paddingBottom = e.paddingBottom ? e.paddingBottom + "px" : "", o && (t.style.fontSize = e.fontSize ? e.fontSize + "px" : ""), o && r && (t.style.fontWeight = r)
}

function t_zeroForms__isRecordHidden(e) {
    if (!e) return !1;
    if ("yes" !== e.getAttribute("data-connect-with-tab")) return !1;
    return ["t397__off", "t395__off", "t400__off"].some(function (t) {
        return e.classList.contains(t)
    })
}

function t_zeroForms__isFormOutside(t) {
    var e = t.closest(".t396__artboard");
    if (!e || t.hasAttribute("data-animate-sbs-opts")) return !1;
    var r = e.getBoundingClientRect(), o = t.getBoundingClientRect(), n = r.right + window.pageXOffset;
    if (o.right < 0 && 0 < n) return !0;
    var i = !!e && e.getAttribute("data-artboard-ovrflw");
    if ("auto" === i || "visible" === i) return !1;
    var i = (i = e.classList.contains("t396__artboard_scale")) || "window" === t_zeroForms__getFieldValue(e, "data-artboard", "upscale"),
        e = -1 !== navigator.userAgent.search("Firefox") || Boolean(window.opr && window.opr.addons || window.opera || -1 !== navigator.userAgent.indexOf(" OPR/")),
        o = o.left, a = t.style.top,
        i = ((a = "number" == typeof (a = a && a.indexOf("px") ? parseInt(a, 10) : a) ? a : 0) < 0 && -50 < a && (a = 0), i && !e && (o *= window.tn_scale_factor, a *= window.tn_scale_factor), t.hasAttribute("data-animate-fix")),
        e = "scroll" === t.getAttribute("data-animate-prx"), t = 0 < r.height && a > r.height && !e;
    return a < 0 && !i && !e || t || n < o
}

function t_zeroForms__getFieldValue(e, r, o) {
    if (e && void 0 !== window.tn) {
        var n = t_zeroForms__getResOpts(e.closest(".t396__artboard, .tn-artboard")),
            i = "data-field" === r ? "-value" : "", t = t_zeroForms__generateAttribute(r, o, i, !1);
        if (n.res === n.resMax) return e.getAttribute(t);
        var a = t_zeroForms__generateAttribute(r, o, i, n.res), s = e.getAttribute(a);
        return "string" == typeof s ? s : (n.breakpoints.forEach(function (t) {
            t <= n.res || "string" == typeof s || (t = t_zeroForms__generateAttribute(r, o, i, t), s = e.getAttribute(t))
        }), "string" == typeof s ? s : e.getAttribute(t) || "")
    }
}

function t_zeroForms__getEl(t) {
    return window.jQuery && t instanceof jQuery && t.length ? t.get(0) : t
}

function t_zeroForms__generateAttribute(t, e, r, o) {
    t = t + "-" + e;
    return o && (t += "-res-" + o), t += r
}

function t_zeroForms__getResOpts(t) {
    t = t_zeroForms__getRecID(t);
    return t && window.tn["ab" + t] ? {
        res: window.t396_detectResolution ? t396_detectResolution(t) : window.tn["ab" + t].curResolution,
        resMax: window.tn["ab" + t].curResolution_max,
        breakpoints: window.tn["ab" + t].screens.slice(0, -1)
    } : window.tn.screens ? {
        res: window.tn.curResolution,
        resMax: window.tn.topResolution,
        breakpoints: window.tn.screens.slice(0, -1)
    } : {res: window.tn.curResolution, resMax: 1200, breakpoints: [320, 480, 640, 960]}
}

function t_zeroForms__getRecID(t) {
    if (!t) return "";
    t = t.closest(".t396__artboard, .tn-artboard");
    return t ? t.getAttribute("data-artboard-recid") || t.getAttribute("data-record-id") : ""
}

function t_zeroForms__createSelector(t, e, r) {
    return ("zero" === window.tildamode ? '[data-record-id="' + t + '"]' : "#rec" + t) + ' [data-elem-id="' + e + '"] ' + r
}

function t_zeroForms__removeStringQuotes(t) {
    return t ? t.replace(/"/g, "&quot;").replace(/'/g, "&apos;") : ""
}

function t_zeroForms__fromObjToArray(t) {
    if (Array.isArray(t)) return t;
    if (void 0 !== Object.values) return Object.values(t);
    var e, r = [];
    for (e in t) r.push(t[e]);
    return r
}

function t_zeroForms__updateCheckboxesValues(t) {
    var t = t.target.closest("[data-input-lid]"),
        e = Array.prototype.slice.call(t.querySelectorAll(".t-checkbox:checked")), r = "", e = (e.forEach(function (t) {
            r && (r += "; "), r += t.value
        }), t.querySelector(".t-checkboxes__hiddeninput"));
    e && (e.value = r)
}

function t_zeroForms__initQuanityClickCount(t) {
    var e, r, t = t.target.closest(".t-inputquantity__btn");
    t && (e = t.closest("[data-input-lid]").querySelector(".t-inputquantity"), t = t.closest(".t-inputquantity__btn-minus"), (r = document.createEvent("Event")).initEvent("input", !0, !0), t ? 0 < e.value && (e.value = Number(e.value) - 1, e.dispatchEvent(r)) : 0 <= e.value && (e.value = Number(e.value) + 1, e.dispatchEvent(r)))
}

function t_zeroForms__initErrorBoxClose(t) {
    t = t.target.closest(".js-errorbox-close");
    t && (t.parentElement.style.display = "none")
}

function t_zeroForms__onReady(t) {
    "loading" !== document.readyState ? t() : document.addEventListener("DOMContentLoaded", t)
}

function t_zeroForms__onRender(t, e, r) {
    ("edit" === window.tildamode || "zero" === window.tildamode) && e || t_zeroForms__onReady(function () {
        t.classList.contains("zero-form-rendered") ? r() : t.addEventListener("render", r)
    })
}

function t_zeroForms__getTildaMode() {
    if (void 0 !== window.tildamode) return window.tildamode;
    var t = document.getElementById("allrecords");
    if (t) switch (t.getAttribute("data-tilda-mode")) {
        case"edit":
            window.tildamode = "edit";
            break;
        case"preview":
            window.tildamode = "preview";
            break;
        default:
            window.tildamode = "published"
    }
    return window.tildamode
}

function t_zeroForms__createFormObj(e) {
    var r = {};
    return ["inputpos", "inputfontfamily", "fieldfontfamily", "inputfontsize", "inputfontweight", "inputvariationweight", "inputcolor", "inputbgcolor", "inputbordercolor", "inputbordersize", "inputradius", "inputheight", "inputmargbottom", "inputmargright", "inputtitlefontsize", "inputtitlefontweight", "inputtitlevariationweight", "inputtitlecolor", "inputelscolor", "inputelsfontsize", "inputelsfontweight", "inputelsvariationweight", "inputtitlemargbottom", "inputsstyle", "inputsstyle2", "buttontitle", "buttonalign", "buttoncolor", "buttonbgcolor", "buttonbordercolor", "buttonbordersize", "buttonradius", "buttonmargtop", "buttonwidth", "buttonheight", "buttonshadowsize", "buttonshadowopacity", "buttonfontfamily", "buttonfontsize", "buttonfontweight", "buttonvariationweight", "buttonuppercase", "buttonbgcolorhover", "buttoncolorhover", "buttonbordercolorhover", "buttonshadowsizehover", "buttonshadowopacityhover", "buttonspeedhover", "formmsgsuccess", "formmsgurl", "formerrreq", "formerremail", "formerrphone", "formerrname", "formbottomtext", "formbottomcb", "formname", "receivers", "buttonhovercolor", "buttonhoverbgcolor", "buttonhoverbordercolor", "buttonhovershadowsize"].forEach(function (t) {
        r[t] = t_zeroForms__getFieldValue(e, "data-field", t)
    }), r
}

function t_zeroForms__onFuncLoad(r, o) {
    var n, i;
    "function" == typeof window[r] ? o() : (n = Date.now(), i = new Error(r + " is undefined"), setTimeout(function t() {
        var e = Date.now();
        if ("function" == typeof window[r]) o(); else {
            if ("complete" === document.readyState && 7e3 < e - n && "function" != typeof window[r]) throw i;
            setTimeout(t, 100)
        }
    }))
}

function t_zeroForms__placeFormIntoColumns(t) {
    var e, r;
    "h" !== t_zeroForms__getFieldValue(t, "data-field", "inputpos") && (e = t.querySelector(".t-form__inputsbox")) && 0 !== (r = t.querySelectorAll(".t-input-group_widthdef, .t-input-group_inrow")).length && (e.classList.add("t-form__inputsbox_flex"), e.classList.add("t-form__inputsbox_inrow"), Array.prototype.forEach.call(r, function (t) {
        if (t && t.classList.contains("t-input-group_inrow-withsibling")) {
            var e = t.nextElementSibling, r = ["rd", "ri", "uc", "ws", "hd", "fr", "st"].filter(function (t) {
                return e.classList.contains("t-input-group_" + t)
            });
            if (!e || 0 !== r.length || !(e.classList.contains("t-input-group_inrow") && !t.classList.contains("t-input-group_widthdef") || t.classList.contains("t-input-group_widthdef") && e.classList.contains("t-input-group") && !e.classList.contains("t-input-group_inrow"))) return t.classList.remove("t-input-group_inrow-withsibling"), void t.classList.add("t-input-group_inrow-last");
            e.classList.add("t-input-group_inonerow")
        } else t.classList.add("t-input-group_inrow-last");
        e && t.classList.contains("t-input-group_widthdef") && t.classList.contains("t-input-group_inrow-withsibling") && e.classList.contains("t-input-group_inonerow") && !e.classList.contains("t-input-group_inrow") && (e.classList.add("t-input-group_widthdef"), e.classList.contains("t-input-group_inrow-withsibling") || e.classList.add("t-input-group_inrow-last"), e.classList.contains("t-input-group_inrow") && t.classList.add("t-input-group_inrow-last"))
    }), 0 < (e = t.querySelectorAll(".t-input-group_inrow.t-input-group_inonerow.t-input-group_inrow-last")).length && t_zeroForms__moveFieldToNextRow(e), 0 < (r = t.querySelectorAll(".t-input-group_widthdef.t-input-group_inrow-last")).length && t_zeroForms__combineFieldsWithDefWidth(r))
}

function t_zeroForms__moveFieldToNextRow(t) {
    t_zeroForms__createArrWithAllRows(t, "t-input-group_inrow").forEach(function (t) {
        var e, r = !1;
        t.forEach(function (t) {
            t.classList.contains("t-input-group_inrow-last") && t.nextElementSibling && !t.nextElementSibling.classList.contains("t-input-group_inonerow") && (r = !0)
        }), r || ((e = t.reduce(function (t, e) {
            var e = e.classList.value.split(" ").filter(function (t) {
                return -1 !== t.indexOf("t-input-group_width")
            }), r = 2;
            return -1 !== (e = e[0]).indexOf("100") && (r = 3), t + Number(e.substr(e.length - 2, r))
        }, 0)) <= 100 || t.forEach(function (t) {
            t.classList.contains("t-input-group_inrow-last") && (t.style.marginRight = "calc(100% - (" + (e - 100) + "%)", t.style.flex = "0 0 auto")
        }))
    })
}

function t_zeroForms__combineFieldsWithDefWidth(t) {
    var o = [];
    t_zeroForms__createArrWithAllRows(t, "t-input-group_widthdef").forEach(function (t) {
        if (4 < t.length) for (var e = 0; e < t.length; e += 4) {
            var r = t.slice(e, e + 4);
            o.push(r)
        } else o.push(t)
    }), o.forEach(function (t) {
        var e = "t-input-group_width" + ({4: "25", 3: "33", 2: "50"}[t.length] || "100");
        t.forEach(function (t) {
            t.classList.add(e)
        })
    })
}

function t_zeroForms__createArrWithAllRows(t, e) {
    var r = [], o = [];
    return Array.prototype.forEach.call(t, function (t) {
        for (o.push(t); t.previousElementSibling && t.previousElementSibling.classList.contains(e) && !t.previousElementSibling.classList.contains("t-input-group_inrow-last");) t = t.previousElementSibling, o.push(t);
        r.push(o.reverse()), o = []
    }), r
}

function t_zeroForms__setFieldsRowClasses(t, e) {
    var r = t.inputWidth;
    void 0 !== r && (e.classList.add("t-input-group_inrow"), e.classList.add({
        "1_4": "t-input-group_width25",
        "1_3": "t-input-group_width33",
        "1_2": "t-input-group_width50",
        1: "t-input-group_width100"
    }[r])), void 0 !== t.inputInRow && "y" === t.inputInRow && (e.classList.add("t-input-group_inonerow"), e.classList.add("t-input-group_inrow-withsibling"), t.inputWidth || e.classList.add("t-input-group_widthdef"))
}

function t_zeroForms__setRadioRowClasses(t, e) {
    var r = t.radioPosition, o = (void 0 !== r && "" !== r && (e.classList.add("t-input-block_rd-flex"), (o = {
        hor: "",
        "1_4": "t-input-block_rd-width25",
        "1_3": "t-input-block_rd-width33",
        "1_2": "t-input-block_rd-width50"
    }[r]) && e.classList.add(o)), t.radioPositionMobile);
    void 0 === o || "y" !== o || "1_2" !== r && "1_3" !== r && "1_4" !== r || e.classList.add("t-input-block_rd-mobile-half")
}

window.t_zeroForms__browserLang = (window.navigator.userLanguage || window.navigator.language).toUpperCase().slice(0, 2), window.t_zeroForms__isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), window.t_zeroForms__isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent), window.t_zeroForms__isiOS = /iPhone|iPad|iPod/i.test(navigator.userAgent), window.t_zeroForms__iOSMajorVersion = "", window.t_zeroForms__isiOS && null !== (version = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)) && (window.t_zeroForms__iOSMajorVersion = parseInt(version[1], 10)), t_zeroForms__onReady(function () {
    var t = document.getElementById("allrecords");
    !t || (t = t.getAttribute("data-tilda-project-lang")) && (window.t_zeroForms__browserLang = t)
});