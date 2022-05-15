if (document.cookie == "conf") {
    document.getElementById("startPopup").hidden = true
    document.getElementById("game").hidden = false
}



function startGame() {
    document.cookie = "conf"
    document.getElementById("startPopup").hidden = true
    document.getElementById("game").hidden = false
}