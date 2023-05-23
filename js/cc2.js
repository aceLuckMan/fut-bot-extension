chrome.runtime.onInstalled.addListener((function () {
    o("login.html"), 

    chrome.storage.sync.set({
        interval: 1
    }, null), 
    chrome.storage.sync.set({
        repeattt: 20
    }, null), 
    chrome.storage.sync.set({
        startkey: '='
    }, null), 
    chrome.storage.sync.set({
        stopkey: '-'
    }, null), 
    chrome.storage.sync.set({
        list: !1
    }, null), 
    chrome.storage.sync.set({
        min: !1
    }, null), chrome.storage.sync.set({
        option: "10"
    }, null), chrome.storage.sync.set({
        countte: 0
    }, null), 
    chrome.storage.sync.set({
        agen: !1
    }, null), 
    chrome.storage.sync.set({
        start_pricee: 150
    }, null), 
    chrome.storage.sync.set({
        buy_now_pricee: 1e4
    }, null), 
    chrome.storage.sync.set({
        language: "en"
    }, null), 
    chrome.storage.sync.set({
        alot: !0
    }, null), 
    chrome.storage.sync.set({
        mutilbuynm: 0
    }, null), 
    chrome.storage.sync.set({
        bid_or_buy: "bid"
    }, null), 
    chrome.storage.sync.set({
        runtimee: 0
    }, null), 
    chrome.storage.sync.set({
        selling_profet: .99
    }, null), 
    chrome.storage.sync.set({
        run_the_bot: 2
    }, null), 
    chrome.storage.sync.set({
        Resetprice: "500"
    }, null), 
    chrome.storage.sync.set({
        buy_how: 2
    }, null), 
    chrome.storage.sync.set({
        athe: !1
    }, null), 
    chrome.storage.sync.set({
        tatokenn: "data"
    }, null), 
    chrome.storage.sync.set({
        wanco: !0
    }, null), 
    chrome.storage.sync.set({
        chat_id: ""
    }, null), 
    chrome.storage.sync.set({
        Captcha_t: 4
    }, null), 
    chrome.storage.sync.set({
        plane: ""
    }, null), 
    chrome.storage.sync.set({
        expaired_day: ""
    }, null)
}));
const e = (e, t, n, o, s, c, r) => t + e + n + c + o + s + r + o + s;
var t, n;

function o(e) {
    chrome.tabs.query({
        currentWindow: !0,
        active: !0
    }, (function (t) {
        t[0].id && chrome.action.setPopup({
            popup: e,
            tabId: t[0].id
        })
    }))
}

function s() {
    chrome.storage.onChanged.addListener((function (e, t) {
        chrome.tabs.query({
            active: !0
        }, (function (e) {
            chrome.tabs.reload(e[0].id)
        }))
    }))
}

s(), 
chrome.tabs.onUpdated.addListener((function (e, t, o) {
    chrome.storage.sync.get(null, (function (e) {
        n = e.wanco
    })), 0 == n ? chrome.action.setPopup({
        popup: "popup.html"
    }) : 1 == n && chrome.action.setPopup({
        popup: "login.html"
    })
})), 
chrome.runtime.onMessage.addListener(((e, t, n) => {
    "login" == e.message && (n({
        farewell: "goodbye"
    }), o("popup.html"))
})), chrome.runtime.onMessage.addListener((function (e, t, n) {
    e.data && c(e.data), n({
        done: "done"
    })
}))
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "createTab") {
      chrome.windows.create({url: request.url,type:"popup"});
    }
  });
