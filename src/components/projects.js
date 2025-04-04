import { projectContainerEl, createDomElement, createButton } from "./domElements";
import Project from "../models/Project";

const PROJECTS = [];

const initProjects = () => {
    refreshProjects();
};

const refreshProjects = () => {
    // Remove all the child elements of the project container.
    projectContainerEl.innerHTML = '';

    showProjects();
    handleEventListeners();
};

const showProjects = () => {
    if(!PROJECTS.length) {
        projectContainerEl.textContent = 'No projects.'
        return
    };

    projectContainerEl.append(...PROJECTS.map((project) => {
        let projectWrapperEl = createDomElement('project', 'div', ['flex', 'items-center', 'justify-between', 'gap-2']);
        let projectNameEl = createDomElement('projectName', 'p', ['text-lg']);
        let buttonWrapperEl = createDomElement('buttonWrapper', 'div', ['flex', 'items-center', 'gap-2']);
        let editButtonEl = createButton('editProjectButton', 'button', ['bg-emerald-400', 'hover:bg-emerald-500']);
        let deleteButtonEl = createButton('deleteProjectButton', 'button', ['bg-red-400', 'hover:bg-red-500']);
        
        projectWrapperEl.dataset.id = project.id;

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

    if(projectIndex < 0) return;

    PROJECTS.splice(projectIndex, 1);
    refreshProjects();

    event.preventDefault();
};

const getProjectIndexById = (id) => {
    return PROJECTS.findIndex((project) => project.id === id);
};

const handleEventListeners = () => {
    let deleteButtonsEl = document.querySelectorAll('#deleteProjectButton');

    if(!deleteButtonsEl) return;

    deleteButtonsEl.forEach((button) => {
        button.addEventListener('click', handleProjectDeletion);
    })
};


export default initProjects;