const userInput = document.querySelector('#todo');
// const btn = document.querySelector('#add');
const todoList = document.querySelector('#task-list');

function addTodo(){
    
    if(userInput.value === ''){
        alert('todo cann\'t be Empty!' );
    }
    else{
        let li = document.createElement('li');
        li.innerText = userInput.value;
        todoList.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML= '\u00d7';
        // let btn = document.createElement('button');
        // btn.innerHTML = "X"
        li.appendChild(span);
    }
    userInput.value = '';
    saveItems();

}

todoList.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveItems();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveItems();
    }
},false);


function saveItems(){
    localStorage.setItem('listItems', todoList.innerHTML);
}

function loadItems(){
   todoList.innerHTML =  localStorage.getItem('listItems');
}
loadItems();