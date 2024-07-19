const list = document.querySelector("ul");
const input = document.querySelector("input");


const btn = document.querySelector("#btn");
btn.onclick = function(){
    let value = input.value;
    if(value == ""){
        alert("Write an item.");
        return;
    }
    let listItem = document.createElement("li");
    list.appendChild(listItem);
    let span = document.createElement("span");
    let butn = document.createElement("button");
    span.textContent = value + "    ";

    butn.textContent = "Delete";
    listItem.appendChild(span);
    listItem.appendChild(butn);
    butn.addEventListener("click", function(){
        listItem.remove();
    });
    input.value= "";
}
