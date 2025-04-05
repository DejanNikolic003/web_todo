import { projectContainerEl, createDomElement, 
    createButton, openProjectDialogEl, 
    createProjectDialogEl, showDialog,
    createProjectButtonEl, projectTitleInputEl, 
    closeDialog} from "./domElements";
import Project from "../models/Project";

const PROJECTS = [];

const initProjects = () => {

    PROJECTS.push(new Project('test'));

    refreshProjects();
};

const refreshProjects = () => {
    projectContainerEl.innerHTML = '';

    showProjects();
    handleEventListeners();
};

const showProjects = () => {
    if(!PROJECTS.length) {
        projectContainerEl.textContent = 'No projects.';
        return;
    };

    projectContainerEl.append(...PROJECTS.map((project) => {
        let projectWrapperEl = createDomElement('project', 'div', ['flex', 'items-center', 'justify-between', 'gap-2']);
        let projectNameEl = createDomElement('projectName', 'p', ['text-lg']);
        let buttonWrapperEl = createDomElement('buttonWrapper', 'div', ['flex', 'items-center', 'gap-2']);
        let editButtonEl = createButton('editProjectButton', 'button', ['bg-emerald-600', 'hover:bg-emerald-500']);
        let deleteButtonEl = createButton('deleteProjectButton', 'button', ['bg-red-600', 'hover:bg-red-500']);
        
        projectWrapperEl.dataset.id = project.id;

        projectNameEl.textContent = project.title;
        editButtonEl.textContent = 'Edit';
        deleteButtonEl.textContent = 'Delete';
        
        buttonWrapperEl.append(editButtonEl, deleteButtonEl);
        projectWrapperEl.append(projectNameEl, buttonWrapperEl);

        return projectWrapperEl;
    }));
};

const handleProjectCreation = (event) => {
    let projectTitle = projectTitleInputEl.value;

    if(projectTitle.trim() === '') {
        console.log('error');
        return;
    }

    PROJECTS.push(new Project(projectTitle));
    refreshProjects();
    closeDialog(createProjectDialogEl);
    
    event.preventDefault();
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
    });

    openProjectDialogEl.addEventListener('click', () => {
        showDialog(createProjectDialogEl);
    });

    createProjectButtonEl.addEventListener('click', handleProjectCreation);

};


export default initProjects;