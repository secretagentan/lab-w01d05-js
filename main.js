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
    span.appendChild(document.createTextNode("x "));

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

// var removeLi = document.querySelector(".remove");
// removeLi.addEventListener("click", handleRemove);

// function handleRemove(event) {
//   console.log("clicked", event);
// }

// var handleRemove = function(event) {
//   console.log(event, event.target, event.currentTarget);

// }

// remove.addEventListener("click", handleRemove);


// document.querySelector(".remove").onclick(function(event){

//   var li = event.currentTarget;

//   li.remove();

// });

// var removeLi = function(event) {
//   var remove = document.querySelector(".remove");
//   if (remove.)
// }


// // 1. Query the DOM or a node that you want to put an event on
// var removeLi = document.querySelector(".remove");

// // 2. Write a function to handle that event
// var handleRemove = function(event) {

// // 3. Give the function a parameter for that event object

// // 4. If you want to do something to what you clicked on, use event.target
//   // 4a. Input tags have .value (event.target.value) and .keyCode
//   // 4b. Other tags have textContent
//   var ul = document.querySelector(".todos");
//   var li = document.querySelector(".todo");

//   event.target.remove();
//   removeLi.remove();
// // 5. Pick the event string you want to trigger it with
// // 6. Add the event listener to the queried node
// };
// // 7. Give the event listener the event string and the callback function

// var removeLi = document.querySelector("span");

// var handleRemove = function(info) {
//   console.log("you clicked me", info);
//   console.log("target", info.target);
//   console.log("currentTarget", info.currentTarget);
// };

// removeLi.addEventListener("click", handleRemove);




// ================================================
// III. COMPLETES TO-DO ITEM ON LIST
// ================================================

// var todo = document.querySelectorAll(".todo");

// var completeLi = function(event) {
//   if (event.target.onClick) {
//     event.target.toggleClass("complete");
//   }
// };

// todo.addEventListener("click", completeLi);


















