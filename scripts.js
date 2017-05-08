var list = document.getElementById("list");
var add = document.getElementById("addElem");

add.addEventListener("click", function() {
    var nextNumber = list.getElementsByTagName("li").length;
    list.innerHTML += "<li>item " + nextNumber + "</li>";
    }
);