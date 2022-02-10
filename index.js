const task_el = document.querySelector('.task-div');
const myList = document.querySelector('.myTasks');

const findLength = function(){
    const total_li = document.getElementsByTagName('li');
    const number = document.getElementById('number_in_myList');
    number.innerText = total_li.length;
}
findLength();



const creatingLi = function(){
    const created_li = document.createElement('li');
    const inputValue = document.getElementById("input_content").value;

    if(!inputValue){
        alert("Please enter something...!");
        return;
    }

    const tickMark = document.createElement("span");
    tickMark.innerHTML = "<i class= 'fas fa-check' ></i>";
    created_li.appendChild(tickMark);
    tickMark.classList.add("hide_tick");

    const textNode = document.createTextNode(inputValue);
    created_li.appendChild(textNode);
    created_li.classList.add('myTasks');

    const dlt_btn = document.createElement('button');
    dlt_btn.innerHTML = "<i class='fas fa-trash-alt'></i>";
    dlt_btn.classList.add('dlt-btn');
    created_li.appendChild(dlt_btn);
    
    myList.appendChild(created_li);
    document.getElementById('input_content').value = "";

    dlt_btn.addEventListener('click', function(){
        // created_li.removeChild(textNode);
        // created_li.removeChild(dlt_btn);
        created_li.remove();
        findLength();
    })
    findLength();
}

const add_btn = document.querySelector('#plus-button');
add_btn.addEventListener('click', creatingLi);

document.querySelector('#input_content').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        creatingLi();
    }
});

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI'){
        ev.target.classList.toggle('checked');
        ev.target.childNodes[0].classList.toggle('show_tick');
    }
});

const all_li = document.getElementsByTagName('li');

const complete_action = document.getElementById('complete_action');
complete_action.addEventListener('click', function(){
    for(let i=0; i<all_li.length; i++){
        all_li[i].classList.add('checked');
        all_li[i].childNodes[0].classList.add('show_tick');
    }
});

const clear_action = document.getElementById('clear_action');
// let length = all_li.length;
clear_action.addEventListener('click', function(){
    for(let i=0; i<all_li.length; i++){
        if(all_li[i].className == 'myTasks checked'){
            all_li[i].remove();
            i--;
        }
    }
    findLength();
});

// -----------------------------for footer button---------------------------



const all = document.getElementById('all_task');
all.style.color = "grey";

all.addEventListener('click', function(){
    for(let i=0; i<all_li.length; i++){
        all_li[i].hidden = false;
    }
    all.style.color = "grey";
    uncompleted.style.color = "White";
    completed.style.color = "White";
});

const uncompleted = document.getElementById('uncompleted_task');
uncompleted.addEventListener('click', function(){
    for(let i=0; i<all_li.length; i++){
        all_li[i].hidden = false;
    }
    for(let i=0; i<all_li.length; i++){
        if(all_li[i].className != 'myTasks'){
            all_li[i].hidden = true;
        }
    }
    all.style.color = "White";
    uncompleted.style.color = "grey";
    completed.style.color = "White";
});

const completed = document.getElementById('completed_task');
completed.addEventListener('click', function(){
    for(let i=0; i<all_li.length; i++){
        all_li[i].hidden = false;
    }
    for(let i=0; i<all_li.length; i++){
        if(all_li[i].className == 'myTasks'){
            all_li[i].hidden = true;
        }
    }
    all.style.color = "White";
    uncompleted.style.color = "White";
    completed.style.color = "grey";
});


// ----------------------for dummy entries-------------------------------
let dummyEntries = ["Clean the Garden", "Drink coffee", "Buy some eggs"];
for(let i=0; i<dummyEntries.length; i++){
    const created_li = document.createElement('li');

    const tickMark = document.createElement("span");
    tickMark.innerHTML = "<i class= 'fas fa-check' ></i>";
    created_li.appendChild(tickMark);
    tickMark.classList.add("hide_tick");

    const textNode = document.createTextNode(dummyEntries[i]);
    created_li.appendChild(textNode);
    created_li.classList.add('myTasks');

    const dlt_btn = document.createElement('button');
    dlt_btn.innerHTML = "<i class='fas fa-trash-alt'></i>";
    dlt_btn.classList.add('dlt-btn')
    created_li.appendChild(dlt_btn);
    
    myList.appendChild(created_li);
    dlt_btn.addEventListener('click', function(){
        created_li.remove();
        findLength();
    })
    findLength();
}
// -----------------------------------------------------------------------