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

