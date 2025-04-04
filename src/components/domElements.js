export const projectContainerEl = document.querySelector('.project-container');
export const taskContainerEl = document.querySelector('.task-container');

const BASE_BUTTON_STYLES = ['text-sm', 'text-white', 'p-1', 'rounded-md', 'transition', 'cursor-pointer'];
const BASE_BADGE_STYLES  = ['p-1', 'rounded-md', 'text-sm'];

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