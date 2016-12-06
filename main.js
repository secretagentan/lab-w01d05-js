console.log("hello!");

var input = document.querySelector(".new-todo");
var ul = document.querySelector(".todos");

input.focus();

// ================================================
// I. ADDS NEW TO-DO ITEMS TO LIST
// ================================================

var handleAddTodo = function(event) {

  var li = document.createElement("li");
  var listItem = event.target.value;
  var addLiText = document.createTextNode(listItem);
  var span = document.createElement("span");

  // if enter key is pushed
  if (event.keyCode === 13 && event.target.value !== "") {
    // log occurring events
    // console.log(event.target, event.target.value, event.keyCode);

    // set class of todo to each list item
    li.setAttribute("class", "todo");

    // append the list item to the ul
    ul.appendChild(li);

    // add list item and create text node
    // text node === value of input
    li.appendChild(addLiText);

    // sets span class = remove
    span.setAttribute("class", "remove");

    // add span tag to li element
    li.appendChild(span);

    // adds text to span element
    span.appendChild(document.createTextNode("x"));

    // clears the input box after each entry
    event.target.value = "";

    li.addEventListener("click", completeItem);
    li.addEventListener("click", removeItem);
    input.addEventListener("keyup", addToTotal);

  }

};

input.addEventListener("keypress", handleAddTodo);

// ================================================
// II. COMPLETES TO-DO ITEM ON LIST
// ================================================

// var todo = document.querySelectorAll(".todo");

// var completeLi = function(event) {
//   if (event.target.onClick) {
//     event.target.toggleClass("complete");
//   }
// };

// todo.addEventListener("click", completeLi);

var completeItem = function(event) {
  // console.log(event, event.target);

  if (event.target.classList.contains("complete")) {
    event.target.classList.remove("complete");
  } else {
    event.target.classList.add("complete");
  }
};

// ================================================
// III. REMOVES TO-DO ITEM FROM LIST
// ================================================

// In-Class Review:
// ISSUE: Attaching event listeners to nodes not yet on the DOM
//  - Attach the event listener after it's been created, OR
//  - Attach the event listener on the parent node that exists

var removeItem = function(event) {
  // console.log(event, event.target);
  if (event.target.classList.contains("remove")) {
        event.target.parentNode.remove();
        input.focus();
  }

};

// ================================================
// IV. ADDS TO ITEM COUNTER
// ================================================

// var addToTotal = function(event) {
//   if (event.keyCode === 13) {
//     alert(.length);
//   }
// };

// var addToTotal = function(event) {
//   var liTotal = [];
//   for (var i = 0; i < ul.childNodes.length; i++){
//     if (ul.childNodes[i].nodeName === "LI") {
//       liTotal.push(ul.childNodes[i]);
//       console.log(liTotal.length);
//     }
//   }
// }


















