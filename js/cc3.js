function e(e) {
    chrome.runtime.sendMessage({
        message: e
    }, (e => {}))
}
let t = document.getElementById("buy_now_price"),
    n = document.getElementById("start_price"),
    l = document.getElementById("nump_buy"),
    o = document.getElementById("usr"),
    i = document.getElementsByName("inlineDefaultRadiosExample"),
    r = document.getElementsByName("new"),
    d = document.getElementsByName("option"),
    x = document.getElementById("langSel"),
    E = document.getElementById("Resetkay"),
    g = document.getElementById("tax"),
    a = document.getElementById("Reset"),
    I = document.getElementById("Numeric");


var p;
function h() {  // arabic
    document.getElementById("startk").style.textAlign = "right";
    document.getElementById("stopk").style.textAlign = "right";
    document.getElementsByTagName("body")[0].style.textAlign = "right", t.style.textAlign = "right", n.style.textAlign = "right", o.style.textAlign = "right", a.style.textAlign = "right", l.style.textAlign = "right", document.getElementById("intervaltxt").innerHTML = " : الوقت بالثواني بين كل بحث", document.getElementById("searches").innerHTML = ": غيّر سعر الحد الأدنى للمزايدة إلى", document.getElementById("startarp").innerHTML = ": السعر المبدئي", document.getElementById("buyar").innerHTML = ": سعر الشراء الفوري", document.getElementById("save-button").innerHTML = "حفظ",  document.getElementById("op").innerHTML = ": خيارات ", document.getElementById("Buyplayer").innerHTML = "شراء بطاقة واحدة وتوقف", document.getElementById("Auto_Selll").innerHTML = "شراء بطاقة واحدة وبيعها", document.getElementById("searchess").innerHTML = ": عدد الوقت لإعادة تعيين السعر",  document.getElementById("Buy_multitxt").innerHTML = "شراء بطاقات متعددة", document.getElementById("nump_buy_txt").innerHTML = ": عدد البطاقات التي ترغب في شرائها",  document.getElementById("multi_Selll").innerHTML = "شراء بطاقات متعددة وبيعها", document.getElementById("set_start_key").innerHTML = ": ضبط مفتاح البدء" , document.getElementById("set_stop_key").innerHTML = ": ضبط مفتاح الإيقاف" , document.getElementById("Contact").innerHTML = "<i class=\"fa fa-phone\"></i> اتصل بنا"   , document.getElementById("exampleModalLabel2").innerHTML  = "بيانات المتصل"      ;
}

function T() { //Po
    document.getElementById("startk").style.textAlign = "left";
    document.getElementById("stopk").style.textAlign = "left";
    document.getElementsByTagName("body")[0].style.textAlign = "left", t.style.textAlign = "left", n.style.textAlign = "left", o.style.textAlign = "left", a.style.textAlign = "left", l.style.textAlign = "left", document.getElementById("intervaltxt").innerHTML = "Czas w sekundach między każdym wyszukiwaniem:", document.getElementById("searches").innerHTML = "Zmień cenę minimalnej oferty do:", document.getElementById("startarp").innerHTML = "Cena wywoławcza:", document.getElementById("buyar").innerHTML = "Kup teraz cena:", document.getElementById("save-button").innerHTML = "Ratować",   document.getElementById("op").innerHTML = "Opcje : ", document.getElementById("Buyplayer").innerHTML = "Kup jedną kartę i przestań", document.getElementById("Auto_Selll").innerHTML = "Kup jedną kartę i sprzedaj ją", document.getElementById("searchess").innerHTML = "Liczba czasu do zresetowania ceny:",  document.getElementById("Buy_multitxt").innerHTML = "Kup kilka kart", document.getElementById("nump_buy_txt").innerHTML = "Ilość kart, które chcesz kupić:",  document.getElementById("multi_Selll").innerHTML = "Kup kilka kart i sprzedaj je",  document.getElementById("set_start_key").innerHTML = "Ustawianie przycisku Start:" , document.getElementById("set_stop_key").innerHTML = "Ustawianie klawisza stop:" , document.getElementById("Contact").innerHTML = "<i class=\"fa fa-phone\"></i> Skontaktuj się z nami" , document.getElementById("exampleModalLabel2").innerHTML  = "Szczegóły kontaktu";
}

function L() { //It
    document.getElementById("startk").style.textAlign = "left";
    document.getElementById("stopk").style.textAlign = "left";
    document.getElementsByTagName("body")[0].style.textAlign = "left", t.style.textAlign = "left", n.style.textAlign = "left", o.style.textAlign = "left", a.style.textAlign = "left", l.style.textAlign = "left", document.getElementById("intervaltxt").innerHTML = "Il tempo in secondi tra ogni ricerca:", document.getElementById("searches").innerHTML = "Modifica il prezzo dell'offerta minima fino a :", document.getElementById("startarp").innerHTML = "prezzo iniziale:", document.getElementById("buyar").innerHTML = "prezzo compra ora:", document.getElementById("save-button").innerHTML = "salva", document.getElementById("op").innerHTML = "Opzioni : ", document.getElementById("Buyplayer").innerHTML = "Acquista una carta e fermati", document.getElementById("Auto_Selll").innerHTML = "Acquista una carta e vendila", document.getElementById("searchess").innerHTML = "Numero di tempo per reimpostare il prezzo:",  document.getElementById("Buy_multitxt").innerHTML = "Acquista più carte", document.getElementById("nump_buy_txt").innerHTML = "Numero di carte che vuoi acquistare:",  document.getElementById("multi_Selll").innerHTML = "Acquista più carte e vendile", document.getElementById("set_start_key").innerHTML = "Tasto di avvio impostazione:" , document.getElementById("set_stop_key").innerHTML = "Impostazione del tasto di arresto:" , document.getElementById("Contact").innerHTML = "<i class=\"fa fa-phone\"></i> Contattaci" , document.getElementById("exampleModalLabel2").innerHTML  = "Dettagli del contatto";
}

function f() { //german
    document.getElementById("startk").style.textAlign = "left";
    document.getElementById("stopk").style.textAlign = "left";
    document.getElementsByTagName("body")[0].style.textAlign = "left", t.style.textAlign = "left", n.style.textAlign = "left", o.style.textAlign = "left", a.style.textAlign = "left", l.style.textAlign = "left", document.getElementById("intervaltxt").innerHTML = "Die Zeit in Sekunden zwischen den einzelnen Suchvorgängen:", document.getElementById("searches").innerHTML = "Ändern Sie den Preis des Mindestgebots bis zu:", document.getElementById("startarp").innerHTML = "Startpreis:", document.getElementById("buyar").innerHTML = "Jetzt kaufen Preis:", document.getElementById("save-button").innerHTML = "Speichern",  document.getElementById("op").innerHTML = "Optionen : ", document.getElementById("Buyplayer").innerHTML = "Kaufen Sie eine Karte und hören Sie auf", document.getElementById("Auto_Selll").innerHTML = "Kaufen Sie eine Karte und verkaufen Sie sie", document.getElementById("searchess").innerHTML = "Anzahl der Zeiträume zum Zurücksetzen des Preises:",  document.getElementById("Buy_multitxt").innerHTML = "Kaufen Sie mehrere Karten", document.getElementById("nump_buy_txt").innerHTML = "Anzahl der Karten, die Sie kaufen möchten:",  document.getElementById("multi_Selll").innerHTML = "Kaufen Sie mehrere Karten und verkaufen Sie sie", document.getElementById("set_start_key").innerHTML = "Start taste einstellen:" , document.getElementById("set_stop_key").innerHTML = "Stop ptaste einstellen:" , document.getElementById("Contact").innerHTML = "<i class=\"fa fa-phone\"></i> Kontaktiere uns" , document.getElementById("exampleModalLabel2").innerHTML  = "Kontaktdetails";
}

function M() { //en
    
    document.getElementById("startk").style.textAlign = "left";
    document.getElementById("stopk").style.textAlign = "left";
    document.getElementsByTagName("body")[0].style.textAlign = "left", 
    t.style.textAlign = "left", n.style.textAlign = "left", o.style.textAlign = "left", 
    a.style.textAlign = "left", l.style.textAlign = "left", 
    document.getElementById("intervaltxt").innerHTML = "The time in seconds between each search:", 
    document.getElementById("searches").innerHTML = "Change the price of the Min Bid up to :", 
    document.getElementById("startarp").innerHTML = "Start price:", 
    document.getElementById("buyar").innerHTML = "Buy now price:", 
    document.getElementById("save-button").innerHTML = "Save",  
    document.getElementById("op").innerHTML = "Options : ", 
    document.getElementById("Buyplayer").innerHTML = "Buy one card and Stop", 
    document.getElementById("Auto_Selll").innerHTML = "Buy one card and sell it ", 
    document.getElementById("searchess").innerHTML = "Number Of Time To Reset Price:",  
     document.getElementById("Buy_multitxt").innerHTML = "Buy multiple cards", 
     document.getElementById("nump_buy_txt").innerHTML = "Number of cards you want to buy :", 
     document.getElementById("multi_Selll").innerHTML = "Buy multiple cards and sell them",
      document.getElementById("set_start_key").innerHTML = "Setting Start Key:" , 
      document.getElementById("set_stop_key").innerHTML = "Setting Stop Key:" ,
       document.getElementById("Contact").innerHTML = "<i class=\"fa fa-phone\"></i> Contact Us" , 
       document.getElementById("exampleModalLabel2").innerHTML  = "Contact Details";
}

function H() { //dutch
    document.getElementById("startk").style.textAlign = "left";
    document.getElementById("stopk").style.textAlign = "left";
    document.getElementsByTagName("body")[0].style.textAlign = "left", t.style.textAlign = "left", n.style.textAlign = "left", o.style.textAlign = "left", a.style.textAlign = "left", l.style.textAlign = "left", document.getElementById("intervaltxt").innerHTML = "De tijd in seconden tussen elke zoekopdracht:", document.getElementById("searches").innerHTML = "Wijzig de prijs van het minimumbod tot:", document.getElementById("startarp").innerHTML = "Startprijs:", document.getElementById("buyar").innerHTML = "Koop nu prijs:", document.getElementById("save-button").innerHTML = "Reddens",  document.getElementById("op").innerHTML = "Opties : ", document.getElementById("Buyplayer").innerHTML = "Koop een kaart en Stop", document.getElementById("Auto_Selll").innerHTML = "Koop een kaart en verkoop hem", document.getElementById("searchess").innerHTML = "Aantal tijd om prijs te resetten:", document.getElementById("Buy_multitxt").innerHTML = "Koop meerdere kaarten", document.getElementById("nump_buy_txt").innerHTML = "Aantal kaarten dat u wilt kopen:", document.getElementById("multi_Selll").innerHTML = "Koop meerdere kaarten en verkoop ze", document.getElementById("set_start_key").innerHTML = "Start sleutel instellen:" , document.getElementById("set_stop_key").innerHTML = "Stop toets instellen:", document.getElementById("Contact").innerHTML = "<i class=\"fa fa-phone\"></i> Neem contact met ons op"  , document.getElementById("exampleModalLabel2").innerHTML  = "Contact details";
}

// modify
document.getElementById("startk").onkeyup = function (e) {
    var t = e.key;
    document.getElementById("startk").value = t
};
document.getElementById("stopk").onkeyup = function (e) {
    var t = e.key;
    document.getElementById("stopk").value = t
};
// end of modify

let v = document.getElementById("save-button");

function b(e) {
    1 == e.target.checked ? (t.disabled = !1, n.disabled = !1) : (t.disabled = !0, n.disabled = !0)
}
for (let k = 0, _ = d.length; k < _; k++) d[k].addEventListener("change", (function (e) {
    1 == e.target.checked && (chrome.storage.sync.set({
        option: e.target.value
    }, null), 
    "20" == e.target.value ? (t.disabled = !1, n.disabled = !1) : (t.disabled = !0, n.disabled = !0), 
    "30" == e.target.value ? l.disabled = !1 : l.disabled = !0, 
    "40" == e.target.value && (t.disabled = !1, n.disabled = !1, l.disabled = !1))

}));

   x.addEventListener("change", (function (e) {
            chrome.storage.sync.set({
                language: e.target.value
        }, null), 
        "en" == e.target.value ? M() : "ar" == e.target.value ? h() : "de" == e.target.value ? f() : "It" == e.target.value ? L() : "du" == e.target.value ? H() : "po" == e.target.value && T()
        // )
    }));


chrome.storage.sync.get(null, (function (e) {
    for (let t = 0, n = i.length; t < n; t++) i[t].value == e.interval && (i[t].checked = !0)
})), 


chrome.storage.sync.get(null, (function (e) {
    for (let t = 0, n = x.length; t < n; t++) x[t].value == e.language && (x[t].selected = !0, "ar" == x[t].value && h())
})), 
chrome.storage.sync.get(null, (function (e) {
    for (let t = 0, n = x.length; t < n; t++) x[t].value == e.language && (x[t].selected = !0, "de" == x[t].value && f())
})), 
chrome.storage.sync.get(null, (function (e) {
    for (let t = 0, n = x.length; t < n; t++) x[t].value == e.language && (x[t].selected = !0, "It" == x[t].value && L())
})), 
chrome.storage.sync.get(null, (function (e) {
    for (let t = 0, n = x.length; t < n; t++) x[t].value == e.language && (x[t].selected = !0, "du" == x[t].value && H())
})), 
chrome.storage.sync.get(null, (function (e) {
    for (let t = 0, n = x.length; t < n; t++) x[t].value == e.language && (x[t].selected = !0, "en" == x[t].value && M())
})), 
chrome.storage.sync.get(null, (function (e) {
    for (let t = 0, n = x.length; t < n; t++) x[t].value == e.language && (x[t].selected = !0, "po" == x[t].value && T())
    
})), 
chrome.storage.sync.get(null, (function (e) {
    console.log(e.language);
    for (let t = 0, n = r.length; t < n; t++) r[t].value == e.bid_or_buy && (r[t].checked = !0)
})), 
chrome.storage.sync.get(null, (function (e) {
    for (let o = 0, i = d.length; o < i; o++) d[o].value == e.option && (d[o].checked = !0, "30" == d[o].value ? l.disabled = !1 : l.disabled = !0, "20" == d[o].value ? (t.disabled = !1, n.disabled = !1) : (t.disabled = !0, n.disabled = !0), "40" == d[o].value && (t.disabled = !1, n.disabled = !1, l.disabled = !1))
})), 
chrome.storage.sync.get(null, (function (e) {
    document.getElementById("startk").value = e.startkey
})), 
chrome.storage.sync.get(null, (function (e) {
    document.getElementById("stopk").value = e.stopkey
})), 
chrome.storage.sync.get(null, (function (e) {
    document.getElementById("usr").value = e.repeattt
})),  
chrome.storage.sync.get(null, (function (e) {
    l.value = e.buy_how
})), 
chrome.storage.sync.get(null, (function (e) {
    n.value = e.start_pricee
})), 
chrome.storage.sync.get(null, (function (e){
    t.value = e.buy_now_pricee
}))
chrome.storage.sync.get(null, (function (e) {
    a.value = e.Resetprice.toString().replace(/\D/g, "")
})), 

document.addEventListener("keydown", (function (e) {
    if (13 == e.keyCode) {
        let e, u, d;
        // let tt = 1;
            // m = n.value,
            g = Number(parseInt(a.value).toFixed(1)).toLocaleString(),
            // s = parseInt(c.value),
            y = parseInt(l.value);
        for (let t = 0, n = i.length; t < n; t++) 1 == i[t].checked && (e = i[t].value);
        for (let t = 0, n = r.length; t < n; t++) 1 == r[t].checked && (u = r[t].value);

        chrome.storage.sync.set({
            interval: e
        }, (function () {})), 
        chrome.storage.sync.set({
            repeattt: parseInt(o.value)
        }, (function () {})), 
        chrome.storage.sync.set({
            buy_how: y
        }, (function () {})), 
        chrome.storage.sync.set({
            bid_or_buy: u
        }, (function () {})), 
        chrome.storage.sync.set({
            start_pricee: parseInt(n.value)
        }, (function () {})), 
        chrome.storage.sync.set({
            buy_now_pricee: parseInt(t.value)
        }, (function () {})), 
        chrome.storage.sync.set({
            Resetprice: g
        }, (function () {}))
    }
}), !1), 
v.onclick = function (e) {
  
    let u, d;
    
    s = Number(parseInt(a.value).toFixed(1)).toLocaleString(),
    B = parseInt(l.value);
    for (let t = 0, n = i.length; t < n; t++) 1 == i[t].checked && (u = i[t].value);
    for (let t = 0, n = r.length; t < n; t++) 1 == r[t].checked && (d = r[t].value);
    

    chrome.storage.sync.set({
        interval: u
    }, (function () {})), 
    chrome.storage.sync.set({
        repeattt: parseInt(o.value)
    }, (function () {})), 
    chrome.storage.sync.set({
        bid_or_buy: d
    }, (function () {})), 
    chrome.storage.sync.set({
        start_pricee: parseInt(n.value)
    }, (function () {})), 
    chrome.storage.sync.set({
        buy_now_pricee: parseInt(t.value)
    }, (function () {})), 
    
    chrome.storage.sync.set({
        buy_how: B
    }, (function () {})), 
    chrome.storage.sync.set({
        Resetprice: s
    }, (function () {})); 
    let tr = document.getElementById("startk").value;
    let nn = document.getElementById("stopk").value;
    tr != nn ? (
        chrome.storage.sync.set({
            startkey: tr
        }, (function () {})), 
        chrome.storage.sync.set({
            stopkey: nn
        }, (function () {})),
        $.toast({
            heading: 'Success',
            text: 'Settings are saved ',
            showHideTransition: 'slide',
            icon: 'success',
            position: 'top-right',
        })
    ) : 
    $.toast({
        heading: 'error',
        text: "don't set start key and stop key the same key",
        showHideTransition: 'slide',
        icon: 'error',
        position: 'top-right',
    })
};