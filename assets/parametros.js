var logoUrl = "assets/logo.jpeg"; //---------------------------URL da logo
var storeName = "USE OLHAR"; // ------------------------------nome da marca
var siteHref = "https://www.exemplo.com"; //------------------link da loja
var siteText = "Compre no site"; //---------------------------texto do botão da loja
var vendasWppText = "Nosso Whatsapp";// --------------------------Texto do segundo botão
var vendasWppHref = "https://www.exemplo.com/contato"; //-----link do segundo botão
var wppSiteText = "Nosso grupo vip";//----------------------------texto do terceiro botão
var wppSiteHref = "https://www.exemplo.com/wpp"; //-----------link do terceiro botão
var grupoAtacado1Text = "Nosso site"; //-----------------texto do quarto botão
var grupoAtacado1Href = "https://www.exemplo.com/grupo1"; //--link do quarto botão
var grupoAtacado2Text = "Grupo Atacado 2"; //-----------------texto do quinto botão
var grupoAtacado2Href = "https://www.exemplo.com/grupo2";//---link do quinto botão
var backgroundurl = "assets/bg.jpeg" //-------------------------------------cole dentro das aspas o link pra imagem de background do site

















































































//


















































document.getElementById("img").src = logoUrl;
document.getElementById("img").alt = "Logo de " + storeName;
document.getElementById("store-name").textContent = storeName;

document.getElementById("site-link").href = siteHref;
document.getElementById("site-link").textContent = siteText;
document.getElementById("site-link").ariaLabel = siteText;

document.getElementById("wpp-vendas-link").href = vendasWppHref;
document.getElementById("wpp-vendas-link").textContent = vendasWppText;
document.getElementById("wpp-vendas-link").ariaLabel = vendasWppText;

document.getElementById("wpp-site-link").href = wppSiteHref;
document.getElementById("wpp-site-link").textContent = wppSiteText;
document.getElementById("wpp-site-link").ariaLabel = wppSiteText;

if(backgroundurl != ""){
    document.body.style.background = `url('${backgroundurl}')`
}
