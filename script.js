const taskArray = [];

function setup(){

    //get data from local storage
    const retrivedData = localStorage.getItem("to_do_list");
    if (retrivedData != null){
        taskArray = JSON.parse(retrivedData);
        ///display task cards
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
            important: important
        }
        taskArray.push(task);
        ///display task cards
        localStorage.setItem("to_do_list",  JSON.stringify(taskArray))
    })
}







window.onload = setup;