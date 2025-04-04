export const projectContainerEl = document.querySelector('.project-container');
export const taskContainerEl = document.querySelector('.task-container');
export const modalEl = document.querySelector('#modal');

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

export const showModal = (type) => {
    const closeModalButtonEl = document.querySelector('#closeModalButton');

    modalEl.classList.remove('hidden');

    if(type === 'taskModal') {
        console.log('taskModal');
    }

    closeModalButtonEl.addEventListener('click', closeModal);
};

const closeModal = () => {
    modalEl.classList.add('hidden');
};
