import {Component} from "@angular/core";
import {AuthenticationService} from "../security/authentication.service";
import {Credentials} from "../security/credentials";
import {HttpClient} from "../httpClient/httpClient";
import {Headers} from "@angular/http";

@Component({
    selector: 'login-form',
    template: `
    <div *ngIf="visible">
        <form (ngSubmit)="login()" #loginForm="ngForm">
            <input type="text" [(ngModel)]="usernamee" placeholder="Login" name="username" #username="ngModel">
            <input type="password" [(ngModel)]="passworde" placeholder="Password" name="password" #password="ngModel">
            <button type="submit">Login</button>
        </form>
    </div>
    <div>{{testValue}}</div>
    `
})

export class LoginComponent {

    usernamee : String;
    passworde : String;

    visible = false;

    testValue : string = "ojoj";

    constructor(private authenticationService : AuthenticationService, private http : HttpClient) {
        authenticationService.authenticatedEvent$
            .subscribe(authenticated => this.onAuthenticated(authenticated));
    }

    private onAuthenticated(authenticated : boolean){
        this.visible = !authenticated;
    }

    login(){
        this.authenticationService.authenticate(this.usernamee, this.passworde);
    }
}