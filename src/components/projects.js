import { projectContainerEl, createDomElement, createButton } from "./domElements";
import Project from "../models/Project";

const PROJECTS = [];

const initProjects = () => {

    PROJECTS.push(new Project('Test', 'Test description'));

    refreshProjects();
};

const refreshProjects = () => {
    // Remove all the child elements of the project container.
    projectContainerEl.innerHTML = '';

    showProjects();
    handleEventListeners();
};

const showProjects = () => {
    if(!PROJECTS.length) return;

    projectContainerEl.append(...PROJECTS.map((project) => {
        let projectWrapperEl = createDomElement('project', 'div', ['flex', 'items-center', 'justify-between', 'gap-2']);
        let projectNameEl = createDomElement('projectName', 'p', ['text-lg']);
        let buttonWrapperEl = createDomElement('buttonWrapper', 'div', ['flex', 'items-center', 'gap-2']);
        let editButtonEl = createButton('editProjectButton', 'button', ['bg-emerald-400', 'hover:bg-emerald-500']);
        let deleteButtonEl = createButton('deleteProjectButton', 'button', ['bg-red-400', 'hover:bg-red-500']);

        projectWrapperEl.dataset.id = project.id; // TODO: ADD ID TO PROJECT CONSTRUCTOR

        projectNameEl.textContent = project.title;
        editButtonEl.textContent = 'Edit';
        deleteButtonEl.textContent = 'Delete';
        
        buttonWrapperEl.append(editButtonEl, deleteButtonEl);
        projectWrapperEl.append(projectNameEl, buttonWrapperEl);

        return projectWrapperEl;
    }));
};

const handleProjectDeletion = (event) => {
    let closestProject = event.target.closest('#project');
    let projectIndex = getProjectIndexById(closestProject.dataset.id);

    console.log();

    event.preventDefault();
};

const getProjectIndexById = (id) => {
    return PROJECTS.findIndex((project) => project.id === id);
};

const handleEventListeners = () => {
    let deleteButtonEl = document.querySelector('#deleteProjectButton');
    
    deleteButtonEl.addEventListener('click', handleProjectDeletion);
};


export default initProjects;