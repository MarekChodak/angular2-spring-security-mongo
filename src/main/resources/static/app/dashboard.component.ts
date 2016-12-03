import {Component, OnInit} from '@angular/core';
import {Hero} from "./hero";
import {HeroService} from "./hero.service";
import {Router} from "@angular/router";
import {AuthenticationService} from "./security/authentication.service";
import {Credentials} from "./security/credentials";
import {TasksService} from "./tasks/tasks.service";
import {OverviewTaskData} from "./tasks/OverviewTaskData";

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard.component.html',
    styleUrls: ['app/dashboard.component.css']

})
export class DashboardComponent implements OnInit {

    taskOverviewData: OverviewTaskData = new OverviewTaskData();

    constructor(
        private router: Router,
        private tasksService: TasksService) {
    }

    ngOnInit() {
        this.tasksService.fetchOverviewData()
            .then(overviewData => this.taskOverviewData = overviewData);
    }

    gotoDetail(hero: Hero) {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }

}

