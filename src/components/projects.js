import { projectContainerEl } from "./domElements";

const PROJECTS = [];

const initProjects = () => {

    refreshProjects();
};

const refreshProjects = () => {
    showProjects();
};

const showProjects = () => {
    if(!PROJECTS.length) return;

    projectContainerEl.append(...PROJECTS.map((project) => {
        console.log(project);
    }));
};


export default initProjects;