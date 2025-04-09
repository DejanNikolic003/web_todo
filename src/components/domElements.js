export const projectContainerEl = document.querySelector('.project-container');
export const taskContainerEl = document.querySelector('.task-container');
export const openProjectDialogEl = document.querySelector('#openProjectDialog');

export const createProjectButtonEl = document.querySelector('#createProjectButton');
export const closeDialogEl = document.querySelector('#cancelButton');

export const projectTitleInputEl = document.querySelector('#projectTitle');
export const createProjectDialogEl = document.querySelector('#createProject');

const BASE_BUTTON_STYLES = ['inline-flex',  'justify-center', 'rounded-md', 'px-2', 'py-1', 'text-sm', 'lowercase', 'text-white', 'shadow-xs', 'transition', 'cursor-pointer'];
const BASE_BADGE_STYLES  = ['px-2', 'py-1','rounded-md', 'text-sm', 'lowercase'];

export const createDomElement = (id, type, classes) => {
    const element = document.createElement(type);
    element.id = id;

    if(classes) {
        classes.forEach((classItem) => element.classList.add(classItem));
    }

    return element;
}

export const createButton = (id, type, classes) => {
    const element = createDomElement(id, type, BASE_BUTTON_STYLES.concat(classes));
    element.type = 'button';

    return element;
};

export const createBadge = (id, type, classes) => {
    const element = createDomElement(id, type, BASE_BADGE_STYLES.concat(classes));

    return element;
}

export const showDialog = (type) => {
    type.setAttribute('open', true);

    closeDialogEl.addEventListener('click', (event) => {
        closeDialog(type);
        event.preventDefault();
    });
};

export const closeDialog = (type) => {
    type.close();
}

export const createTaskDomElements = (task) => {
    let taskWrapperEl = createDomElement('task', 'div', ['flex', 'items-center', 'justify-between', 'gap-2']);
    let taskInfoWrapperEl = createDomElement('taskInfoWrapper', 'div');
    let taskDateWrapper = createDomElement('taskDateWrapper', 'div');
    let taskStateWrapper = createDomElement('taskStateWrapper', 'div');
    let taskPriorityWrapper = createDomElement('taskPriorityWrapper', 'div');
    let taskButtonsWrapper = createDomElement('taskButtonsWrapper', 'div', ['space-x-2']);

    let taskNameEl = createDomElement('taskName', 'p');
    let taskDescEl = createDomElement('taskDesc', 'p', ['text-sm', 'text-gray-500']);
    let taskStateEl = createBadge('taskState', 'p', ['bg-sky-100', 'text-sky-400']);
    let taskDateEl = createBadge('taskDate', 'p', ['bg-sky-100', 'text-sky-400']);
    let taskPriorityEl = createBadge('taskPriority', 'p', ['bg-orange-100', 'text-orange-400']);
    let taskEditButtonEl = createButton('editTaskButton', 'button', ['bg-emerald-500', 'hover:bg-emerald-600']);
    let taskDoneButtonEl = createButton('doneTaskButton', 'button', ['bg-cyan-500', 'hover:bg-cyan-600']);
    let taskDeleteButtonEl = createButton('deleteTaskButton', 'button', ['bg-red-500', 'hover:bg-red-600']);

    taskWrapperEl.dataset.id = task.id;

    taskNameEl.textContent = task.title;
    taskDescEl.textContent = task.description;
    taskStateEl.textContent = task.done ? 'Yes' : 'No';
    taskDateEl.textContent = task.dueDate;
    taskPriorityEl.textContent = task.priority;
    taskEditButtonEl.textContent = 'Edit';
    taskDoneButtonEl.textContent = task.done ? 'Undo' : 'Done';
    taskDeleteButtonEl.textContent = 'Delete';


    taskInfoWrapperEl.append(taskNameEl, taskDescEl);
    taskDateWrapper.append(taskDateEl);
    taskStateWrapper.append(taskStateEl);
    taskPriorityWrapper.append(taskPriorityEl);
    taskButtonsWrapper.append(taskEditButtonEl, taskDeleteButtonEl, taskDoneButtonEl);

    taskWrapperEl.append(taskInfoWrapperEl, taskStateWrapper, taskDateWrapper, taskPriorityWrapper, taskButtonsWrapper);

    return taskWrapperEl;
}

