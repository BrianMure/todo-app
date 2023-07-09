const todoInput = document.getElementById ('todo-input');
const addTaskButton = document.getElementById ('add-task-btn');
const todoList = document.getElementById ('todo-list');

//Add a task to the list
const addTask = () => {
    const taskText = todoInput.value.trim(); //trim to deal with extra spaces
    
    if(taskText !== '') {
        const taskItem = createTaskItem(taskText);
        todoList.appendChild(taskItem);
        todoInput.value = '';  //after appending we can now remove any input that is in the taskbar
    }

}
//Create new task
const createTaskItem = (taskText) => {
    const taskItem = document.createElement('li');
    taskItem.className = "todo-item"; // create list item and give it a class of todo-item

    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.classList.add('checkbox');

    const taskTextSpan = document.createElement('span');
    taskTextSpan.textContent = taskText;

    //todelete
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', deleteTask);

    //appendintheorder
    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskTextSpan);
    taskItem.appendChild(deleteBtn);

    return taskItem;

}
//Delete tasks
const deleteTask = (event) => {
    const taskItem = event.target.parentNode;
    todoList.removeChild(taskItem);
}
//Cross out tasks
const toggleTask = (event) => {
    const taskItem = event.target.parentNode;
    taskItem.classList.toggle('completed');
}
//Event Listeners
addTaskButton.addEventListener('click', addTask);
todoInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter'){
        addTask();
    }
});

todoList.addEventListener('change', toggleTask);
//Example of tasks for illustration
const initialTasks = ['Pay Rent', 'Buy Groceries', 'Do Debugging'];

initialTasks.forEach((task) => {
    const taskItem = createTaskItem(task);
    todoList.appendChild(taskItem);
})