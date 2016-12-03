import {Component, AfterViewInit, ViewChild, ElementRef} from "@angular/core";
import {AuthenticationService} from "../security/authentication.service";
import {Credentials} from "../security/credentials";
import {HttpClient} from "../httpClient/httpClient";
import {Headers} from "@angular/http";

declare var $: any;

@Component({
    selector: 'login-form',
    templateUrl: 'app/login/login.component.html'
})

export class LoginComponent implements AfterViewInit{

    @ViewChild('loginFormSel') el:ElementRef;

    ngAfterViewInit():any {
        $(this.el.nativeElement).click((e) => e.stopPropagation());
    }

    usernamee : String;
    passworde : String;

    visible = false;

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