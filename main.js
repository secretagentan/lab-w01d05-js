console.log("hello!");

var input = document.querySelector(".new-todo");

input.focus();

// ================================================
// I. ADDS NEW TO-DO ITEMS TO LIST
// ================================================

var handleAddTodo = function(event) {
  var ul = document.querySelector(".todos");

  var li = document.createElement("li");

  var listItem = event.target.value;

  var addLiText = document.createTextNode(listItem);

  var span = document.createElement("span");

  // if enter key is pushed
  if (event.keyCode === 13) {
    // log occurring events
    // console.log(event.target, event.target.value, event.keyCode);

    // sets span class = remove
    span.setAttribute("class", "remove");

    // add span tag to li element
    li.appendChild(span);

    // adds text to span element
    span.appendChild(document.createTextNode("x"));

    // set class of todo to each list item
    li.setAttribute("class", "todo");

    // append the list item to the ul
    ul.appendChild(li);

    // add list item and create text node
    // text node === value of input
    li.appendChild(addLiText);

    // li.append("<span class='remove'>x</span>");

    // clears the input box after each entry
    event.target.value = "";
  }
};

input.addEventListener("keypress", handleAddTodo);

// ================================================
// II. REMOVES TO-DO ITEM FROM LIST
// ================================================

var remove = document.querySelector(".remove");
remove.addEventListener("click", handleRemove);

function handleRemove(event) {
  console.log("clicked", event);
}

// var handleRemove = function(event) {
//   console.log(event, event.target, event.currentTarget);

// }

// remove.addEventListener("click", handleRemove);


// document.querySelector(".remove").onclick(function(event){

//   var li = event.currentTarget;

//   li.remove();

// });











// ================================================
// III. COMPLETES TO-DO ITEM ON LIST
// ================================================




















