const todolist=document.getElementById("todo_list")
const todoform=document.getElementById('todo_form')
let todoarr=[];

function deltodo(clicked){
    todoarr=todoarr.map(function(element){
        if(element.todoid===clicked){
            return '삭제'; 
        }else{
            return element;
        }
    })
    displaytodo();
}

function handletodo(clickid){
    todoarr=todoarr.map(function(element){
        if(element.todoid===clickid){
            return{
                ...element, tododone: !element.tododone
            }
        }else{
            return element
        }

    })
    console.log(todoarr)
}

function displaytodo(){
    todolist.innerHTML=""
    todoarr.forEach(element=>{
        const todoitem=document.createElement('li')
        const tododel=document.createElement('span')
        tododel.textContent='x'
        if(element.tododone){
            todoitem.classList.add("done")
        }
        else{
            todoitem.classList.add("yet")
        }
        todoitem.textContent=element.todotext
        todoitem.addEventListener("click",function(){
            console.log('맞냐이거')
            handletodo(element.todoid)
        })
        tododel.addEventListener('click',function(){
            deltodo(element.todoid)
        })
        todoitem.appendChild(tododel)
        todolist.appendChild(todoitem)
    })
}



todoform.addEventListener("submit",function(e){
    e.preventDefault()
    const addobj={
        todotext: todoform.todo.value,
        todoid: new Date().getTime(),
        tododone:false
    }
    todoform.todo.value=""
    todoarr.push(addobj)
    displaytodo()
})