const form = document.getElementById('form');
const input = document.getElementById('input');
const list = document.getElementById('list');

function deleteToDo(){
  let listItem = event.target.parentNode;
  list.removeChild(listItem);
}
function editToDo() {
  let listItem = event.target.parentNode;
  let todo = listItem.querySelector('h3');
  todo.innerHTML = prompt('Edit todo:')

}


function addToDo(){
  let li =document.createElement("LI");
  let h3 = document.createElement("H3");
  h3.innerHTML=input.value;
  let deleteButton = document.createElement('BUTTON');
  deleteButton.innerHTML = 'DELETE';
  let editButton = document.createElement('BUTTON');
  editButton.innerHTML = 'EDIT';
  li.appendChild(h3);
  list.appendChild(li);
  li.appendChild(deleteButton);
  li.appendChild(editButton);

  deleteButton.addEventListener('click', deleteToDo);
  editButton.addEventListener('click', editToDo);
}
form.addEventListener('submit', function(){
    event.preventDefault();
    addToDo();
})
