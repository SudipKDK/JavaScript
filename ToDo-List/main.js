// Add a new note
function newNote() {
  const input = document.getElementById('new-todo');
  const inputValue = input.value.trim();

  if (inputValue === "") {
    alert("You must write something!");
    return;
  }

  // Create <li> element
  const li = document.createElement('li');
  li.className = "d-flex justify-content-between align-items-center border-bottom py-2";

  // Create text node for task
  const todoText = document.createTextNode(inputValue);
  li.appendChild(todoText);

  // Create delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.className = "btn btn-danger ms-4";
  deleteBtn.innerHTML = "x"; 
  deleteBtn.addEventListener('click', () => {
    li.remove();
  });

  li.appendChild(deleteBtn);
  document.getElementById('list').appendChild(li);

  // Clear input
  input.value = "";
}

// Toggle task as done (event delegation)
const list = document.getElementById('list');

list.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
  }
});
