var toDoList = []; 

function show(){
    var list = '';
    for(let i=0;i<toDoList.length;i++){
        list += '<div> '+toDoList[i].name+'</div><div> ' + toDoList[i].date +'</div><div> <button class = "del-btn" onclick = "toDoList.splice('+i+',1);addToDo()">Delete</button> </div>';
    }
    document.querySelector('.To-do-list').innerHTML = list;
}

function addToDo(){
    detail = {}
    todo = document.querySelector('.input');
    date = document.querySelector('.cal-input');

    if(todo.value == ''){
        show();
        return;
    }

    detail['name'] = todo.value;
    detail['date'] = date.value;

    toDoList.push(detail);
    todo.value = '';
    show();
}