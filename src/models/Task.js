import { v4 as uuidv4 } from 'uuid';

class Task {
    constructor(title, description, dueDate, priority, done) {
        this.id = uuidv4();
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.done = done;
    }

    changeState() {
        this.done = !this.done;
    }
}

export default Task;