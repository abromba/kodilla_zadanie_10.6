var newItem = document.createElement("li");
var textnode = document.createTextNode("item ...");
function mojaFunction() {
    newItem.appendChild(textnode);
    var list = document.getElementById("myList");
    list.appendChild(li);
}