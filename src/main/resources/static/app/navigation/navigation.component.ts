import {Component, ElementRef, ViewChild} from "@angular/core";
import {LoginComponent} from "../login/login.component";
import {AuthenticationService} from "../security/authentication.service";

declare var $: any;

@Component({
    selector: 'navigation-bar',
    templateUrl: 'app/navigation/navigation.component.html',
    directives: [LoginComponent]
})
export class NavigationComponent {

    @ViewChild('loginMenu') loginMenu:ElementRef;

    loginVisible : boolean = false;

    constructor(private authService : AuthenticationService) {
        this.loginVisible = !authService.authenticated;
        authService.authenticatedEvent$.subscribe(authenticated => this.authenticationChanged(authenticated));
    }

    private authenticationChanged(authenticated : boolean){
        if(authenticated) {
            $(this.loginMenu.nativeElement).removeClass("open");
        }
        this.loginVisible = !authenticated;
    }

    public logout(){
        this.authService.logout();
    }
}