function entercheck(){
    

    if(event.keyCode===13 && todoinput.value !==''){
        const todolist=document.getElementById('todolist')
        const todoinput=document.getElementById('todoinput')
        const newli=document.createElement('li')
        const newbtn=document.createElement('button')
        const newspan=document.createElement('span')

        newli.appendChild(newbtn)
        newli.appendChild(newspan)
        
        newspan.textContent=todoinput.value;

        todolist.appendChild(newli)
        todoinput.value='';

    }
}

const addbtn=document.getElementById('addBtn');
addbtn.addEventListener('click',()=>{
    if(todoinput !== ''){
        const todolist=document.getElementById('todolist')
        const todoinput=document.getElementById('todoinput')
        const newli=document.createElement('li')
        const newbtn=document.createElement('button')
        const newspan=document.createElement('span')

        newli.appendChild(newbtn)
        newli.appendChild(newspan)
        
        newspan.textContent=todoinput.value;

        todolist.appendChild(newli)
        todoinput.value='';
        newli.addEventListener('dblclick',()=>{
            newli.remove();
        })
        newbtn.addEventListener('click',()=>{
            newli.remove();
        })
        
    }
})

const list1=document.querySelectorAll('li');
const a1=123;



