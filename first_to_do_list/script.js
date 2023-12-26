function completeTask(){
    var parent = this.parentNode;
    parent.classList.toggle('checked');
}

function removeTask() {
    var taskToremove = this.parentNode;
    taskToremove.style.display = "none";


}

function addTask() {
    var li = document.createElement("li");
    var userInput = document.getElementById("userInput").value;
    
    var inputContent = document.createTextNode(userInput);
    li.appendChild(inputContent);
    
    var checkbox = document.createElement('input')
    checkbox.type = "checkbox";
    checkbox.onclick = completeTask;

    var removeButton = document.createElement('button');
    removeButton.innerHTML = "X";
    removeButton.className = "remove";
    removeButton.onclick = removeTask;
   
    var lineBreak = document.createElement('div');
    lineBreak.innerHTML = "<br>"

    var inputNote = document.createElement('input')
    inputNote.type = "text";
    inputNote.className = "input-note";
    

    // var inputContent = document.createElement('label');
    // inputContent.innerHTML = taskName;

    li.appendChild(checkbox);
    li.appendChild(inputContent);
    li.appendChild(removeButton);
    li.appendChild(lineBreak);
    li.appendChild(inputNote);
    
    


    

    if (userInput === '') {
        alert("You must write something!");
    } else {
        document.getElementById("todoList").appendChild(li);
    }
    document.getElementById("userInput").value = "";



}

