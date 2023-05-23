var e = document.getElementById("btn"),
    t = document.getElementById("exampleInputEmail1"),
    n = document.getElementById("exampleInputPassword1");
let a = document.getElementsByName("languagee");
var o = document.getElementById("Emai"),
    ii = document.getElementById("Email"),
    i = document.getElementById("Passl"),
    r = document.getElementById("account");

for (let y = 0, f = a.length; y < f; y++) 
    a[y].addEventListener("change", 
        (function (e) {
            1 == e.target.checked && (
                chrome.storage.sync.set({language: e.target.value}, null), 
                "en" == e.target.value ? u() : "ar" == e.target.value && d())
}));

function m() {
    var e = {
        email: t.value,
        password: n.value,
        password_confirmation: n.value
    };
    fetch("https://xzenmart.com/auth/user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(e)
    }).then((e => e.json()))
    .then((e => {
        !e?  $.toast({
            heading: 'warning',
            text: "Server not found",
            showHideTransition: 'slide',
            bgColor: '#e9ed03',
            textColor: 'black',
            position: 'top-right',
        }) :
        e.message ? 
        $.toast({
            heading: 'warning',
            text: e.message,
            showHideTransition: 'slide',
            bgColor: '#e9ed03',
            textColor: 'black',
            position: 'top-right',
        }) : e.errors ? 
        $.toast({
            heading: 'error',
            text: e.errors,
            showHideTransition: 'slide',
            icon: 'error',
            position: 'top-right',
        }) : e.token && (0 == 0 ? (
            $.toast({
                heading: 'success',
                text: "login success",
                showHideTransition: 'slide',
                icon: 'success',
                position: 'top-right',
            }), 
        location.href = "popup.html",
        chrome.storage.sync.set({
            tatokenn: e.token
        }, null), 
        chrome.storage.sync.set({
            wanco: !1
        }, null), 
        c()) : ($(o).modal(),   // expired
        chrome.storage.sync.set({
            wanco: !0
        }, null)))
    })).catch((e => {}))
}

function g(e) {
    chrome.runtime.sendMessage({
        message: e
    }, (e => {}))

}

function c() {
    g("login")
}

function d() {
    document.getElementsByTagName("body")[0].style.textAlign = "right";
    t.style.textAlign = "right";
    n.style.textAlign = "right";
    e.style.textAlign = "right";
    i.innerHTML = "كلمه السر";
    ii.innerHTML = "عنوان البريد الإلكتروني";
    document.getElementById("intelang").innerHTML = " : الغة " ;
    document.getElementById("btn").innerHTML = "تسجيل الدخول";
    document.getElementById("Contact").innerHTML = "اشتراك";
}

function u() {
    
    document.getElementsByTagName("body")[0].style.textAlign = "left";
    t.style.textAlign = "left";
    n.style.textAlign = "left";
    e.style.textAlign = "left";
    i.innerHTML = "Password";
    ii.innerHTML = "Email Address"
    document.getElementById("intelang").innerHTML = "Language :" ;
    document.getElementById("btn").innerHTML = "Sign In";
    document.getElementById("Contact").innerHTML = "Sign Up";
}
document.addEventListener("keydown", (function (e) {
    13 == e.keyCode && m()
}), !1), 

e.onclick = function (e) {
    m()
};

chrome.storage.sync.get(null, (function (e) {
    for (let t = 0, n = a.length; t < n; t++) a[t].value == e.language && (a[t].checked = !0, "ar" == a[t].value ? (d(), o = "#armyModal") : o = "#enmyModal")
}));