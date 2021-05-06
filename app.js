var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#input-text");
var outputDiv = document.querySelector("#output-text");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function getTranslationURL(serverText){
    return serverURL + "?" + "text=" + serverText
}

function errorHandler(error){
    console.log("erroe occured", error);
    alert("something wrong with server! Try again after some time");
}

function clickHandler(){
    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText= translatedText;
        })
    .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)