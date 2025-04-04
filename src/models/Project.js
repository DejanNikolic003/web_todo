import { uuid } from "uuidv4";

class Project {
    constructor(title, description) {
        this.id = uuid();
        this.title = title;
        this.description;
    }
}