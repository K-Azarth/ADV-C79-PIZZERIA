Pizza_Menu = [
    "Gold Corney Pizza",
    "Paneer Veg Pizza",
    "Chicken Chill Pizza",
    "Ice-cream Pizza",
    "Aouar Feket Pizza"
];

function Dollas() {
    var namedata = "";
    namedata = "<ol class='menulist'>";
    Pizza_Menu.sort();
    for (var ref = 0; ref < Pizza_Menu.length; ref++) {
        namedata = namedata + '<li>' + Pizza_Menu[ref] + '</li>'
    }
    namedata = namedata + "</ol>"
    document.getElementById("addmenu").innerHTML = namedata;
}

function add_item() {
    var addata;
    var products = document.getElementById("add_item").value;
    Pizza_Menu.push(products);
    Pizza_Menu.sort();
    addata = "<section class='cards'>"
    for (var tink = 0; tink < Pizza_Menu.length; tink++) {
        addata = addata + "<div class='card'>" + '<img src="images/pizzalmg.png"/>' + Pizza_Menu[tink] + '</div>'
    }
    addata = addata + "</section>"
    document.getElementById("display_addmenu").innerHTML = addata;
}