const TODOS = [
  { id: 1653274273413, title: "my work 1" },
  { id: 1653274273414, title: "my work 2" },
  { id: 1653274273415, title: "my work 3" },
  { id: 1653274273416, title: "my work 4" },
  { id: 1653274273417, title: "my work 5" },
];

const ul = document.getElementById("myUL");
const todos = TODOS.map((work) => {
  return { ...work, selected: false };
});
// ! render Component
function renderTodos() {
  ul.innerHTML = "";
  todos.forEach((todo) => {
    ul.innerHTML += `
      <li>${
        todo.selected
          ? "<input accessKey=" + todo.id + " value='" + todo.title + "'>"
          : "<span>" + todo.title + "</span>"
      } 
        <span class="action">
          ${
            todo.selected
              ? '<button class="edite" onclick="updateTodo(' +
                todo.id +
                ')">💾</button>'
              : '<button class="edite" onclick="selectTodo(' +
                todo.id +
                ')">🖊</button>'
          }
          ${
            todo.selected
              ? "<button class='delete' onclick='unSelectTodo(" +
                todo.id +
                ")'>🚫</button>"
              : "<button class='delete' onclick='deleteTodo(" +
                todo.id +
                ")'>❌</button>"
          }
        </span>
      </li>`;
  });
}
renderTodos();

//! CREATE
function createTodo() {
  const input = document.getElementById("myInput");
  const work = { id: Date.now(), title: input.value, isDone: true };
  todos.push(work);
  input.value = "";
  renderTodos();
}

//! UPDATE
function updateTodo(id) {
  const index = todos.findIndex((object) => object.id === id);
  const title = document.querySelector(`input[accessKey="${id}"]`).value;
  todos[index].title = title;
  todos[index].selected = false;
  renderTodos();
}
function selectTodo(id) {
  const index = todos.findIndex((object) => object.id === id);
  todos.forEach((work) => (work.selected = false));
  todos[index].selected = true;
  renderTodos();
}

function unSelectTodo(id) {
  const index = todos.findIndex((object) => object.id === id);
  todos[index].selected = false;
  renderTodos();
}

// !DELETE
function deleteTodo(id) {
  const index = todos.findIndex((object) => object.id === id);
  todos.splice(index, 1);
  renderTodos();
}

//! Add a "checked" class
function addChecked() {
  const lists = document.querySelectorAll("#myUL li");
  lists.forEach((list) => {
    list.addEventListener("click", () => {
      list.classList.toggle("checked");
    });
  });
}
addChecked();

 
