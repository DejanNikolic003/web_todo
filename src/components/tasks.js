import { taskContainerEl, createTaskDomElements } from "./domElements";
import Task from '../models/Task';

const TASKS = [];

const initTasks = () => {
    TASKS.push(new Task('Task Name', 'Task description', '2025/04/08', 'High', false));
    refreshTasks();
};

const refreshTasks = () => {
    taskContainerEl.innerHTML = '';
    showTasks();
    handleEventListeners();
};

const showTasks = () => {
    if(!TASKS.length) {
        taskContainerEl.textContent = 'No tasks.'
        return;
    }

    taskContainerEl.append(...TASKS.map((task) => {
        let taskElement = createTaskDomElements(task);

        return taskElement;
    }));
};


const handleTaskDeletion = (event) => {
    let closestTask = event.target.closest('#task');
    let taskIndex = getTaskIndexById(closestTask.dataset.id);

    if(taskIndex < 0) return;

    TASKS.splice(taskIndex, 1);
    
    refreshTasks();

    event.preventDefault();
};

const handleTaskStateChange = (event) => {
    let closestTask = event.target.closest('#task');
    let taskIndex = getTaskIndexById(closestTask.dataset.id);

    if(taskIndex < 0) return;

    TASKS[taskIndex].changeState()
    
    refreshTasks();

    event.preventDefault();
};

const getTaskIndexById = (id) => {
    return TASKS.findIndex((task) => task.id === id);
};

const handleEventListeners = () => {
    let taskDeleteButtonsEl = document.querySelectorAll('#deleteTaskButton');
    let taskDoneButtonEl = document.querySelectorAll('#doneTaskButton');
    let openModalButtonEl = document.querySelector('#openTaskModal');

    taskDeleteButtonsEl.forEach((button) => {
        button.addEventListener('click', handleTaskDeletion);
    });

    taskDoneButtonEl.forEach((button) => {
        button.addEventListener('click', handleTaskStateChange);
    });

  
};


export default initTasks;