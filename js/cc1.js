var e, t, i;
let n, o;
var d, c, a, s, v, u, l, r, m, y, h, b, f, g, p, T, E, N = 0,
    _ = 0,
    C = 0,
    w = 100,
    F = w + 300,
    k = "https://api.telegram.org/bot1239589341:AAF9BvobTaz7kh4NMs6cD-akyOqjWbYuX-k/sendMessage";

function B() {
    return 400
}

function M(e, t, i) {
    if ("" != e) {
        var n = {
            chat_id: e,
            text: i
        };
        fetch(t, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(n)
        }).then((e => e.json())).then((e => {})).catch((e => {}))
    }
}

function L(e) {
    return document.evaluate(e, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
}

function S(e) {
    var t = document.createElement("audio");
    t.style.display = "none", t.src = e, t.autoplay = !0, t.onended = function () {
        t.remove()
    }, document.body.appendChild(t)
}

function I() {
    new Audio(chrome.runtime.getURL("bell.wav")).play()
}

function O() {
    
    K(t, e, 1e3)
}

function P() {

    if (++N < c) setTimeout(O, 1e3 * h);
    else {
        clearTimeout(v), v = null, N = 0, V(r), alert("FUTBOT stopped ");
        M(p, k, "The FUTBOT  has reached The Number Of Times To Reset Price")
    }
}
chrome.storage.sync.get(null, (function (e) {
    a = e.runtimee
})), chrome.storage.sync.get(null, (function (e) {
    c = e.repeattt
})), chrome.storage.sync.get(null, (function (e) {
    i = e.option
})), chrome.storage.sync.get(null, (function (e) {
    o = parseInt(e.interval)
})), chrome.storage.sync.get(null, (function (e) {
    t = e.Resetprice
})), 

chrome.storage.sync.get(null, (function (e) {
    r = e.tatokenn
})), 

chrome.storage.sync.get(null, (function (t) {
    e = t.bid_or_buy
})), chrome.storage.sync.get(null, (function (e) {
    u = e.start_pricee
})), chrome.storage.sync.get(null, (function (e) {
    l = e.buy_now_pricee
})), chrome.storage.sync.get(null, (function (e) {
    m = e.wanco
})), chrome.storage.sync.get(null, (function (e) {
    h = e.Captcha_t
})), chrome.storage.sync.get(null, (function (e) {
    b = e.buy_how
})), chrome.storage.sync.get(null, (function (e) {
    p = e.chat_id
})), 
chrome.storage.sync.get(null, (function (e) {
    T = e.startkey
})), 
chrome.storage.sync.get(null, (function (e) {
    E = e.stopkey
})), 
document.addEventListener("keydown", (function (e) {

    if (e.key != T || 
        (1 == m ? alert("Please login to FUTBOT") : 0 == m && 
            (v ? (alert("the FUTBOT already start!"), clearTimeout(v), v = null, y = !0, O()) : 
                (r.length < B() && V(r) , alert("The FUTBOT is Started"), y = !0, O())
            )), e.key == E) {
        
            clearTimeout(v), v = null, y = !1, V(r), alert("FUTBOT stopped ");
            return ;
            M(p, k, "You have Stopped The FUTBOT");
    }
    }), !1);
    
    var R = document.getElementsByClassName("dialog-title")[0],
        x = document.getElementsByClassName("ut-button-group")[1],
        A = document.getElementsByClassName("listFUTItem has-auction-data selected expired"),
        H = "/html/body/main/section/section/div[2]/div/div[2]/div/div[2]/button[2]";

function Y(e, t) {
    const i = new Touch({
            identifier: Math.random().toString(),
            target: e,
            clientX: Math.random(),
            clientY: Math.random(),
            radiusX: 2.5,
            radiusY: 2.5,
            rotationAngle: 10,
            force: .5
        }),
        n = new TouchEvent(t, {
            cancelable: !0,
            bubbles: !0,
            touches: [i],
            targetTouches: [i],
            changedTouches: [i],
            shiftKey: !0
        });
    e.dispatchEvent(n)
}

$(".class").click(function(){
    alert(0);
})

function D(e) {
    Y(e, "touchstart"), Y(e, "touchend")
}

function U(e, t) {
    var i = document.createEvent("MouseEvents");
    i.initEvent(t, !0, !0), e.dispatchEvent(i)
}
async function W() {
    "30" == i && new MutationObserver((async function (e, t) {
        var i = L("/html/body/main/section/section/div[2]/div/div/section[2]/div/div/div[2]/div[3]/button[8]");
        i && (t.disconnect(), D(i), ++_ < b ? J() : _ = 0)
    })).observe(document.body, {
        childList: !0,
        subtree: !0
    }), "20" == i && new MutationObserver((async function (e, t) {
        var i = document.getElementsByClassName("accordian")[0],
            n = L("/html/body/main/section/section/div[2]/div/div/section[2]/div/div/div[2]/div[2]/div[2]/button"),
            o = L("/html/body/main/section/section/div[2]/div/div/section[2]/div/div/div[2]/div[2]/div[2]/div[2]/div[2]/input"),
            d = L("/html/body/main/section/section/div[2]/div/div/section[2]/div/div/div[2]/div[2]/div[2]/div[3]/div[2]/input");
        null != i && (D(i), null != n && (t.disconnect(), setTimeout((function () {
            o.value = Number(u.toFixed(1)).toLocaleString(), d.value = Number(l.toFixed(1)).toLocaleString(), D(n)
        }), 3e3)))
    })).observe(document.body, {
        childList: !0,
        subtree: !0
    })
}
async function X() {
    if ("30" == i) {
        var e = L("/html/body/main/section/section/div[2]/div/div/section[2]/div/div/div[2]/div[3]/button[8]");
        e && (D(e), ++_ < b ? J() : _ = 0)
    }
    if ("20" == i) {
        var t = document.getElementsByClassName("accordian")[0],
            n = L("/html/body/main/section/section/div[2]/div/div/section[2]/div/div/div[2]/div[2]/div[2]/button"),
            o = L("/html/body/main/section/section/div[2]/div/div/section[2]/div/div/div[2]/div[2]/div[2]/div[2]/div[2]/input"),
            d = L("/html/body/main/section/section/div[2]/div/div/section[2]/div/div/div[2]/div[2]/div[2]/div[3]/div[2]/input");
        t && (D(t), null != n && setTimeout((function () {
            o.value = Number(u.toFixed(1)).toLocaleString(), d.value = Number(l.toFixed(1)).toLocaleString(), D(n)
        }), 3e3))
    }
    if ("40" == i) {
        var t = document.getElementsByClassName("accordian")[0], 
        n = L("/html/body/main/section/section/div[2]/div/div/section[2]/div/div/div[2]/div[2]/div[2]/button"),
        o = L("/html/body/main/section/section/div[2]/div/div/section[2]/div/div/div[2]/div[2]/div[2]/div[2]/div[2]/input"), 
        d = L("/html/body/main/section/section/div[2]/div/div/section[2]/div/div/div[2]/div[2]/div[2]/div[3]/div[2]/input");
        t && (D(t), null != n && (await new Promise((e => setTimeout(e, 2e3))), 
        o.value = Number(u.toFixed(1)).toLocaleString(), 
        d.value = Number(l.toFixed(1)).toLocaleString(), 
        D(n), ++C < b ? J() : C = 0))
    }
}

function j() {
    var e = setInterval((function () {
        f = !1, clearInterval(e)
    }), 50);
    setTimeout((function () {}), 2e3)
}
async function G() {
    var e = setInterval((function () {
        var t = document.getElementsByClassName("listFUTItem has-auction-data selected won"),
            i = document.getElementsByClassName("listFUTItem has-auction-data selected expired");
        if (1 == t.length) {
            if (f = !1, I(), "" != p) {
                var n = q();
                M(p, k, n)
            }
            X(), clearTimeout(v), v = null, clearInterval(e)
        } else 1 == i.length && (J(), clearInterval(e))
    }), 50);
    setTimeout((function () {
        if (1 == f) {
            if (clearInterval(e), "" != p) {
                var t = z();
                M(p, k, t)
            }
            J()
        }
    }), 2e3)
}
async function J() {
    new MutationObserver((async function (i, n) {
        back_btn_element = L("/html/body/main/section/section/div[1]/button[1]"), null != back_btn_element && (n.disconnect(), await new Promise((e => setTimeout(e, 1e3))), D(back_btn_element), d = 1e3 * o, v = setTimeout((function () {
            K(t, e, 2e3)
        }), d))
    })).observe(document.body, {
        childList: !0,
        subtree: !0
    })
}
async function K(i, n, c) {
    f = !0;
    var a = L("/html/body/main/section/section/div[2]/div/div[2]/div/div[1]/div[2]/div[2]/div[2]/button[2]"),
        s = (L("/html/body/main/section/section/div[2]/div/div[2]/div/div[1]/div[2]/div[2]/div[2]/button[1]"), L("/html/body/main/section/section/div[2]/div/div[2]/div/div[1]/div[2]/div[5]/div[2]/button[1]"), L("/html/body/main/section/section/div[2]/div/div[2]/div/div[1]/div[2]/div[5]/div[2]/button[2]")),
        u = (L("/html/body/div/div[3]/form/div[2]/div[1]/div[3]/center/input[1]"), L(H)),
        l = L("/html/body/main/section/section/div[2]/div/div[2]/div/div[1]/div[2]/div[6]/div[2]/input"),
        r = L("/html/body/main/section/section/div[2]/div/div[2]/div/div[1]/div[2]/div[2]/div[2]/input"),
        m = L("/html/body/main/section/section/div[2]/div/div[2]/div/div[1]/div[2]/div[5]/div[2]/input");
    L("/html/body/main/section/section/div[2]/div/div/section/div/div[2]/div/h2"), document.getElementById("funCaptchaDiv");
    if (null == u) {
        y = !1, alert("GO TO SEARCH TRANSFER MARKET PAGE");
        return M(p, k, "Something Wrong Happened Go Back to Transfer Market Page"), void clearTimeout(v)
    }
    if ("" == l.value) return alert("Please enter the the max price "), clearTimeout(v), v = null, void(y = !1);
    if ("buy" == n) {
        if (m.value == i) return m.value = "", clearTimeout(v), void P();
        D(u)
    } else if ("bid" == n) {
        if (r.value == i) return r.value = "", clearTimeout(v), void P();
        D(u)
    }
    new MutationObserver((async function (i, n) {
        var a = document.getElementsByClassName("btn-standard buyButton currency-coins")[0],
            s = L("/html/body/main/section/section/div[2]/div/div/section/div/div[2]/div/h2"),
            u = document.getElementsByClassName("ea-dialog-view--body")[0].getElementsByTagName("button")[0];
        if (a && (D(a), u)) return n.disconnect(), D(u), void G();
        if (null != s && (back_btn_element = L("/html/body/main/section/section/div[1]/button[1]"), null != back_btn_element)) {
            if (n.disconnect(), await new Promise((e => setTimeout(e, c))), 0 == y) return;
            D(back_btn_element), d = 1e3 * o, v = setTimeout((function () {
                K(t, e, 1e3)
            }), d)
        }
    })).observe(document.body, {
        childList: !0,
        subtree: !0
    }), "buy" == n ? null != s && D(s) : "bid" == n && null != a && D(a)
}

function q() {
    var e = document.getElementsByClassName("name")[1],
        t = document.getElementsByClassName("currency-coins value")[2];
    return null != e && null != t ? "FUTBOT Snipe for you  " + e.innerHTML + " With " + t.innerHTML + " coins" : "FUTBOT Just snipe right now"
}

function z() {
    var e = document.getElementsByClassName("name")[1],
        t = document.getElementsByClassName("currency-coins value")[2];
    return null != e && null != t ? "Faild to buy  " + e.innerHTML + " With " + t.innerHTML + " coins " : "You missed card"
}

function V(e) {
    chrome.runtime.sendMessage({
        data: e
    }, (function (e) {}))
}
