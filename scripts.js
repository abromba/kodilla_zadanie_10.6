var list = document.getElementById("list");
var add = document.getElementById("addElem");

add.addEventListener("click", function() {
    var li = document.createElement('li');
    var text = document.createTextNode('item ' + list.childElementCount);
    li.appendChild(text);	
    list.appendChild(li);
});