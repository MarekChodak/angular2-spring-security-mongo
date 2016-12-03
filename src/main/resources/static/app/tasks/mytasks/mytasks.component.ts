import {Component, OnInit, AfterViewInit} from "@angular/core";
import {Task} from "../Task";
import {TasksService} from "../tasks.service";

declare var $: any;

@Component({
    selector: 'my-tasks',
    templateUrl: 'app/tasks/mytasks/mytasks.component.html',
    styleUrls: ['app/tasks/mytasks/mytasks.component.css']
})
export class MyTasksComponent implements OnInit, AfterViewInit{

    ngAfterViewInit():any {
        $(function () {
            $('[data-toggle="popover"]').popover()
        })
    }

    newTaskName : string;
    tasks : Task[];

    constructor(private taskService : TasksService) {
    }

    ngOnInit():any {
        this.taskService.allTasks().then(tasks => this.tasksRecieved(tasks));

    }

    private tasksRecieved(tasks : any){
        this.tasks = tasks;
        $(function () {
            $('[data-toggle="popover"]').popover()
        })
    }

    public addTask() {
        let task = new Task(this.newTaskName, null);
        this.taskService.addNewTask(task);
    }
}