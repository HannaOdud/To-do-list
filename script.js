let taskArray = [];

function setup(){

    //get data from local storage
    const retrivedData = localStorage.getItem("to_do_list");
    if (retrivedData != null){
        taskArray = JSON.parse(retrivedData);
        ///display task cards 
            ///firstly, we delete existing cards from container line 33/34
        const container = document.getElementById("container");
        container.innerHTML = "";
            ///we drow every card again
        for (let i = 0; i < taskArray.length; i++){
            const task = taskArray[i];
            taskCard(task, i);
        }
        /////
    }

    const form = document.getElementById("form");
    const titleDom = document.getElementById("title");
    const descriptionDom = document.getElementById("description");
    const deadlineDom = document.getElementById("deadline");
    const importantDom = document.getElementById("important");
    form.addEventListener("submit",(event) =>{
        event.preventDefault();
        const title = titleDom.value;
        const description = descriptionDom.value;
        const deadline = deadlineDom.value;
        const important = importantDom.value;
        const task = {
            title: title,
            description: description,
            deadline: deadline,
            important: important,
            done: false
        }
        taskArray.push(task);
        ///display task cards 
            ///firstly, we delete existing cards from container line 33/34
        const container = document.getElementById("container");
        container.innerHTML = "";
            ///we drow every card again
        for (let i = 0; i < taskArray.length; i++){
            const task = taskArray[i];
            taskCard(task, i);
        }
        /////
        localStorage.setItem("to_do_list",  JSON.stringify(taskArray))
    })
}
function taskCard(task, i){
    //read task data
    const title = task.title;
    const description = task.description;
    const deadline = task.deadline;
    const important = task.important;
    const done = task.done;
    //create dom elements
    const div = document.createElement("div");
    if (important == true){
        div.classList = "task_card important";
    }
    else{ div.classList = "task_card"}

    const h1 = document.createElement("h1");
    h1.textContent = title;
    const pDesc = document.createElement("p");
    pDesc.textContent = description;
    const pDate = document.createElement("p");
    pDate.textContent = deadline;
    //creating Checkbox
    const pDone = document.createElement("p");
    pDone.textContent = "Done: ";
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "name";
    if (done == true){checkbox.checked = true}
    checkbox.id = i+"_checkbox";
    pDone.appendChild(checkbox);
    div.appendChild(pDone);
    checkbox.addEventListener("change",() => {
        const id = checkbox.id[0];
        taskArray[id].done = checkbox.checked;
        localStorage.setItem("to_do_list",  JSON.stringify(taskArray));
    })


    const button = document.createElement("button");
    button.textContent = "Remove";
    button.id = i;
    div.appendChild(h1);
    div.appendChild(pDesc);
    div.appendChild(pDate);
    div.appendChild(button);
    const container = document.getElementById("container");
    container.appendChild(div);


    button.addEventListener("click",() =>{
        div.remove();
        //we delete todo item from array
        taskArray.splice(button.id,1);
        localStorage.setItem("to_do_list",  JSON.stringify(taskArray));
    })

}







window.onload = setup;