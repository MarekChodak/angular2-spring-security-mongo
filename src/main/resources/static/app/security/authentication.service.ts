import {EventEmitter, Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {HttpClient} from "../httpClient/httpClient";
import {Router} from "@angular/router";

@Injectable()
export class AuthenticationService {

    public authenticatedEvent$: EventEmitter<boolean>;
    public authenticated = false;

    constructor(private http : Http, private httpClient : HttpClient, private router: Router) {
        this.authenticatedEvent$ = new EventEmitter<boolean>();
        this.checkIfSessionStillActive();
    }

    public logout(){
        if(this.authenticated){
            this.httpClient.post("perform_logout",{}, new Headers()).toPromise()
                .then(response => this.loggedOut());
        }
    }

    public authenticate(username : String, password : String){
        let headers = new Headers();
        headers.append('Authorization', 'Basic ' +
            btoa(`${username}:${password}`));
        this.httpClient.post("rest/user", {}, headers)
            .toPromise()
            .then(response => this.processResponse(response))
            .catch(error => this.handleError(error));
    }
    
    public sessionActive(){
        this.httpClient.post("rest/user", {}, new Headers())
            .toPromise()
            .then(response => this.processSessionActiveResponse(response))
            .catch(error => this.handleError(error));
    }

    public checkIfSessionStillActive(){
        this.retrieveCSRFTokenAndThen(this.sessionActive);
    }

    public retrieveCSRFTokenAndThen(callback : Function){
        let headers = new Headers();
        this.http.get("token", {headers: headers})
            .toPromise()
            .then(response => this.extractToken(response))
            .then(response => callback.call(this, response))
            .catch(error => this.handleError(error));
    }

    public retrieveAuthenticatedXsrfToken(){
        this.retrieveCSRFTokenAndThen(this.userAuthenticated);
    }

    public retrieveLoggedOutXsrfToken(){
        this.retrieveCSRFTokenAndThen(this.userLoggedOut);
    }

    extractToken(response : Response){
        this.httpClient.updateCsrfToken(response.text());
        return response;
    }

    sessionStillActive(response : any){
        this.sessionActive();
    }

    userAuthenticated(response : any){
        this.authenticatedEvent$.emit(true);
        this.authenticated = true;
        let link = ['/dashboard'];
        this.router.navigate(link);
    }

    userLoggedOut(response : any){
        this.authenticated = false;
        this.authenticatedEvent$.emit(false);
    }

    handleError(error : any){
        console.error('An error occurred', error);
        this.authenticatedEvent$.emit(false);
        // return Promise.reject(error);
    }


    processResponse(response : any){
        let name = response.text();
        if(name){
            this.retrieveAuthenticatedXsrfToken()
        }
    }

    processSessionActiveResponse(response : any){
        console.log("Session still active!!");
        this.processResponse(response);
    }

    private loggedOut() {
        this.retrieveLoggedOutXsrfToken();
    }
}