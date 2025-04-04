import { taskContainerEl, createButton, createBadge, createDomElement } from "./domElements";
import Task from '../models/Task';

const TASKS = [];

const initTasks = () => {
    TASKS.push(new Task('Task Name', 'Task description', '2025/04/08', 'High', false));
    refreshTasks();
};

const refreshTasks= () => {
    showTasks();
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
        let taskEditButtonEl = createButton('editTaskButton', 'button', ['bg-emerald-400', 'hover:bg-emerald-500']);
        let taskDoneButtonEl = createButton('doneTaskButton', 'button', ['bg-yellow-400', 'hover:bg-yellow-500']);
        let taskDeleteButtonEl = createButton('deleteTaskButton', 'button', ['bg-red-400', 'hover:bg-red-500']);

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

const handleEventListeners = () => {
    
};


export default initTasks;