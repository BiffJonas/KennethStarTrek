const bodyEl = document.querySelector('body');
const errorText = 'Error: Input must include "Kenneth"';

function colorYellow () {
    bodyEl.style.backgroundColor = 'yellow';
}

function addTitle() {
    var ul = document.getElementById("episode_titles");
    var li = document.createElement("li");
    var text = document.getElementById("add_title").value;
    if (text.includes("Kenneth")) {
        li.appendChild(document.createTextNode(text));
        ul.appendChild(li);
        document.getElementById("error_text").textContent = "";
    }
    else {
        document.getElementById("error_text").textContent = errorText;
    }
}