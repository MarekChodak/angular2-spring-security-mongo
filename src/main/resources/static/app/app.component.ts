import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HeroService }     from './hero.service';
import {DashboardComponent} from "./dashboard.component";
import {HeroesComponent} from "./heroes.component";
import {HttpClient} from "./httpClient/httpClient";
import {LoginComponent} from "./login/login.component";
import {AuthenticationService} from "./security/authentication.service";
import {AuthGuard} from "./security/authGuard";
@Component({
    selector: 'my-app',
        template: `
      <h1>{{title}}</h1>
      <login-form></login-form>
      <nav *ngIf="menuVisible">
        <a [routerLink]="['/dashboard']" routerLinkActive="active">Dashboard</a>
        <a [routerLink]="['/heroes']" routerLinkActive="active">Heroes</a>
      </nav>
      <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES, LoginComponent],
    providers: [
        HeroService
    ],
    precompile : [DashboardComponent, HeroesComponent]
})
export class AppComponent {

    title = 'Tour of Heroes 6';

    private menuVisible : boolean;

    constructor(private authService : AuthenticationService) {
        this.menuVisible = authService.authenticated;
        authService.authenticatedEvent$.subscribe(authenticated => this.menuVisible = authenticated);
    }
}
