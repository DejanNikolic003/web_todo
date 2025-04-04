import { projectContainerEl, createDomElement, createButton } from "./domElements";
import Project from "../models/Project";

const PROJECTS = [];

const initProjects = () => {

    PROJECTS.push(new Project('Test', 'Test description'));

    refreshProjects();
};

const refreshProjects = () => {
    showProjects();
};

const showProjects = () => {
    if(!PROJECTS.length) return;

    projectContainerEl.append(...PROJECTS.map((project) => {
        let projectWrapperEl = createDomElement('project', 'div', ['flex', 'items-center', 'justify-between', 'gap-2']);
        
        let projectNameEl = createDomElement('projectName', 'p', ['text-lg']);
        projectNameEl.textContent = project.title;

        let buttonWrapperEl = createDomElement('buttonWrapper', 'div', ['flex', 'items-center', 'gap-2']);
        let editButtonEl = createButton('editButton', 'button', 'button', 'bg-red-400', 'hover:bg-red-500');
        let deleteButtonEl = createDomElement('deleteButton', 'button', ['text-sm', 'text-white', 'bg-red-400', 'p-1', 'rounded-md', 'hover:bg-red-500', 'transition']);

        editButtonEl.type = 'button';
        deleteButtonEl.type = 'button';

        editButtonEl.textContent = 'Edit';
        deleteButtonEl.textContent = 'Delete';
        
        
        buttonWrapperEl.append(editButtonEl, deleteButtonEl);
        projectWrapperEl.append(projectNameEl, buttonWrapperEl);

        return projectWrapperEl;
    }));
};


export default initProjects;