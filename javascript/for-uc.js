
/* cleat history of the unit calculator page */
function clearHistory() {
    document.getElementById('input').value = "                              ";
    document.getElementById('uc').submit();
}

/* clear the content of text input after clicking it */
function clearInput(event, input) {
    if (event.keyCode == 13) {
        setTimeout(function(){input.value = "";}, 100);
    }
}

function empty(input) {
    input.value = "";
}