let button = document.getElementById("add");
let input = document.getElementById("input");
let todoList = document.getElementById("todoList")

let todos = [];
button=addEventListener('click', ()=>{
    todo.pust(input.value)
    addtodo(input.value)
    input.value=""
})
funvtion addtodo(todo){
   let para = document.createElement('p')
    para.innertext(todos)
todoList.appendChild(para)
}
  