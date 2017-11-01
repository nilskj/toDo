var completeSVG = '<svg version="1.1" id="Lager_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve"><g><path class="fill" d="M20.7,36.1L20.7,36.1c-0.6,0-1.3-0.3-1.6-0.6l-8.7-8.7c-1-1-1-2.6,0-3.5c1-1,2.6-1,3.5,0l6.7,6.7l15.4-15.4c1-1,2.6-1,3.5,0c1,1,1,2.6,0,3.5l-17,17C22,35.8,21.3,36.1,20.7,36.1z"/></g></svg>';
var removeSVG = '<svg version="1.1" id="L1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve"><g><path class="fill" d="M28.5,36.3h-7c-2.3,0-4.1-1.8-4.1-4.1v-9.7c0-2.3,1.8-4.1,4.1-4.1h7c2.3,0,4.1,1.8,4.1,4.1v9.7C32.7,34.5,30.8,36.3,28.5,36.3z"/> <line class="fill" x1="21.1" y1="22.4" x2="21.1" y2="33.5"/><line class="fill" x1="24.9" y1="22.4" x2="24.9" y2="33.5"/><line class="fill" x1="28.7" y1="22.4" x2="28.7" y2="33.5"/> <path class="fill" d="M31.3,20.3h-13c-1.4,0-2.5-1.1-2.5-2.5v-0.4c0-1.4,1.1-2.5,2.5-2.5h13c1.4,0,2.5,1.1,2.5,2.5v0.4C33.7,19.2,32.6,20.3,31.3,20.3z"/> <path class="fill" d="M21.1,16.6c0,0-0.7-2.1,0-4.2c1.5,0,6.2,0,7.6,0c0.8,2.1,0,4.2,0,4.2"/> </g></svg>';



//user clicked the Add button
document.getElementById('add').addEventListener("click", function () {
  //if there is text add it to toDOlist
  var value = document.getElementById("item").value;
  if (value) {
    addItemTodo(value);
    document.getElementById("item").value = ""; //reset value field
  }

});

//called when clicked Done, toggle if done
function toggleDone() {
  var item = this.parentNode.parentNode;
  if (!item.classList.contains("marked")) {
    item.classList.add("marked");
  }else{
    item.classList.remove("marked");
  }
}


//remove this item
function removeItem() {
  var item = this.parentNode.parentNode;
  var parent = this.parentNode.parentNode.parentNode;

  parent.removeChild(item);
}



//Add item to ul
function addItemTodo(text) {
  var list = document.querySelector("#todo");

  var item = document.createElement("li");
  item.innerText = text;

  var buttons = document.createElement("div");
  buttons.classList.add("buttons");

  var remove = document.createElement("button");
  remove.classList.add("remove");
  remove.innerHTML = removeSVG;
  remove.addEventListener("click",removeItem);

  var complete = document.createElement("button");
  complete.classList.add("complete");
  complete.innerHTML = completeSVG;
  complete.addEventListener("click",toggleDone);

  buttons.appendChild(remove);
  buttons.appendChild(complete);
  item.appendChild(buttons);
  list.insertBefore(item, list.childNodes[0]);

}
