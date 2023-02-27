const input = document.getElementById("input");
const addBtn = document.getElementById("addBtn");
const done = document.querySelector(".doneBtn");
const close = document.querySelector(".deleteBtn");
const list = document.querySelector(".toDoList");

console.log(input, addBtn, done, close);

let tasksToRender = [];

const taskCard = (task) => {
  return `<div class="toDoContainer">
<div class="dot"> &#x2022;</div>
 <p class="newTask">${task}</p>
<div class="icons">
    <button class="doneBtn">&#9989;</button>
    <button class="deleteBtn">&#10060;</button>
</div>
</div>`;
};

addBtn.addEventListener("click", () => {
  if (input.value === "") {
    console.log("incorect task");
  } else {
    tasksToRender.push(input.value);
    console.log(tasksToRender);
  }
  list.innerHTML = tasksToRender
    .map((task) => {
      return taskCard(task);
    })
    .join("");
  input.value = "";
});

//close

close.addEventListener("click", () => {
  list.innerHTML = tasksToRender.slice(1, 3);
});
