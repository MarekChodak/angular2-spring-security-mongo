import {Component, OnInit, Input} from "@angular/core";
import {Task} from "../Task";
import {TasksService} from "../tasks.service";
import {ActivatedRoute} from "@angular/router";


@Component({
    templateUrl: "app/tasks/task/taskView.component.html"
})

export class TaskViewComponent implements OnInit {

    @Input() task : Task;

    constructor(private tasksService : TasksService, private route: ActivatedRoute) {

    }

    ngOnInit():any {
        return undefined;
    }



}