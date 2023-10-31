const userInput = document.getElementById('todo').value;

const todoList = document.querySelector('.task-list');

const btn = document.querySelector('.add');

btn.addEventListener('click', ()=> {
    // console.log("Working");
    console.log(userInput);
})

function addTodo(){
    if(userInput === ''){
        alert("Todo can't be Empty");
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = userInput.value;
        todoList.appendChild(li);
        
    }
}