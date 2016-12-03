import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HeroService }     from './hero.service';
import {DashboardComponent} from "./dashboard.component";
import {HeroesComponent} from "./heroes.component";
import {HttpClient} from "./httpClient/httpClient";
import {LoginComponent} from "./login/login.component";
import {AuthenticationService} from "./security/authentication.service";
import {AuthGuard} from "./security/authGuard";
import {NavigationComponent} from "./navigation/navigation.component";
import {TasksService} from "./tasks/tasks.service";
import {EmptyComponent} from "./empty.component";
import {MyTasksComponent} from "./tasks/mytasks/mytasks.component";
@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES, NavigationComponent],
    providers: [
        HeroService,
        TasksService
    ],
    precompile : [DashboardComponent, HeroesComponent, NavigationComponent, MyTasksComponent, EmptyComponent]
})
export class AppComponent {

    title = 'Tour of Heroes 6';

    private menuVisible : boolean;

    private

    constructor(private authService : AuthenticationService) {
        this.menuVisible = authService.authenticated;
        authService.authenticatedEvent$.subscribe(authenticated => this.menuVisible = authenticated);
    }
}
