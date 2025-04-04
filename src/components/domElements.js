export const projectContainerEl = document.querySelector('.project-container');
export const taskContainerEl = document.querySelector('.task-container');

const BASE_BUTTON_STYLES = ['text-sm', 'text-white', 'p-1', 'rounded-md', 'transition'];

export const createDomElement = (id, type, classes) => {
    const element = document.createElement(type);
    element.id = id;

    if(classes) {
        classes.forEach((classItem) => element.classList.add(classItem));
    }

    return element;
}

export const createButton = (id, type, bgColor, hoverColor) => {
    const element = createDomElement(id, type, BASE_BUTTON_STYLES);
    element.type = 'button';

    element.classList.add(bgColor);
    element.classList.add(hoverColor);
    
    return element;
};