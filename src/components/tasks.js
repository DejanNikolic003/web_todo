import { taskContainerEl, createButton, createBadge, createDomElement } from "./domElements";
import Task from '../models/Task';

const TASKS = [];

const initTasks = () => {
    TASKS.push(new Task('Task Name', 'Task description', '2025/04/08', 'High', false));
    refreshTasks();
};

const refreshTasks = () => {
    showTasks();
    handleEventListeners();
};

const showTasks = () => {
    if(!TASKS.length) {
        taskContainerEl.textContent = 'No tasks.'
        return;
    }

    taskContainerEl.append(...TASKS.map((task) => {
        let taskWrapperEl = createDomElement('task', 'div', ['flex', 'items-center', 'justify-between', 'gap-2']);
        let taskInfoWrapperEl = createDomElement('taskInfoWrapper', 'div');
        let taskDateWrapper = createDomElement('taskDateWrapper', 'div');
        let taskPriorityWrapper = createDomElement('taskPriorityWrapper', 'div');
        let taskButtonsWrapper = createDomElement('taskButtonsWrapper', 'div', ['space-x-2']);

        let taskNameEl = createDomElement('taskName', 'p');
        let taskDescEl = createDomElement('taskDesc', 'p', ['text-sm', 'text-gray-500']);
        let taskDateEl = createBadge('taskDate', 'p', ['bg-sky-100', 'text-sky-400']);
        let taskPriorityEl = createBadge('taskPriority', 'p', ['bg-orange-100', 'text-orange-400']);
        let taskEditButtonEl = createButton('editTaskButton', 'button', ['bg-emerald-500', 'hover:bg-emerald-600']);
        let taskDoneButtonEl = createButton('doneTaskButton', 'button', ['bg-cyan-500', 'hover:bg-cyan-600']);
        let taskDeleteButtonEl = createButton('deleteTaskButton', 'button', ['bg-red-500', 'hover:bg-red-600']);

        taskWrapperEl.dataset.id = task.id;

        taskNameEl.textContent = task.title;
        taskDescEl.textContent = task.description;
        taskDateEl.textContent = task.dueDate;
        taskPriorityEl.textContent = task.priority;
        taskEditButtonEl.textContent = 'Edit';
        taskDoneButtonEl.textContent = 'Done';
        taskDeleteButtonEl.textContent = 'Delete';


        taskInfoWrapperEl.append(taskNameEl, taskDescEl);
        taskDateWrapper.append(taskDateEl);
        taskPriorityWrapper.append(taskPriorityEl);
        taskButtonsWrapper.append(taskEditButtonEl, taskDeleteButtonEl, taskDoneButtonEl);

        taskWrapperEl.append(taskInfoWrapperEl, taskDateWrapper, taskPriorityWrapper, taskButtonsWrapper);

        return taskWrapperEl;
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

const getTaskIndexById = (id) => {
    return TASKS.findIndex((task) => task.id === id);
};

const handleEventListeners = () => {
    let taskDeleteButtonsEl = document.querySelectorAll('#deleteTaskButton');
    let openModalButtonEl = document.querySelector('#openTaskModal');

    taskDeleteButtonsEl.forEach((button) => {
        button.addEventListener('click', handleTaskDeletion);
    });

  
};


export default initTasks;