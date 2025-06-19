// Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();

  if (!name || !email.includes('@')) {
    alert('Please enter a valid name and email.');
    e.preventDefault();
  } else {
    alert('Thank you for contacting us!');
    e.preventDefault(); // remove this line if connecting to a server
  }
});

// To-Do List Logic
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;
  li.addEventListener('click', () => li.classList.toggle('completed'));

  const delBtn = document.createElement('button');
  delBtn.textContent = 'Delete';
  delBtn.onclick = () => li.remove();

  const actionDiv = document.createElement('div');
  actionDiv.classList.add('todo-actions');
  actionDiv.appendChild(delBtn);

  li.appendChild(actionDiv);
  document.getElementById('taskList').appendChild(li);
  taskInput.value = '';
}
