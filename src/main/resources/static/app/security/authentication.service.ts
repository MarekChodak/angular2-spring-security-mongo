import {EventEmitter, Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {HttpClient} from "../httpClient/httpClient";

@Injectable()
export class AuthenticationService {

    public authenticatedEvent$: EventEmitter<boolean>;
    public authenticated = false;

    constructor(private http : Http, private httpClient : HttpClient) {
        this.authenticatedEvent$ = new EventEmitter<boolean>();
        this.retrieveXsrfToken();
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

    public retrieveXsrfToken(){
        let headers = new Headers();
        this.http.get("token", {headers: headers})
            .toPromise()
            .then(response => this.extractToken(response))
            .catch(error => this.handleError(error));
    }

    extractToken(response : any){
        this.httpClient.updateCsrfToken(response.text());
        this.sessionActive();
    }

    handleError(error : any){
        console.error('An error occurred', error);
        this.authenticatedEvent$.emit(false);
        // return Promise.reject(error);
    }


    processResponse(response : any){
        let name = response.text();
        if(name){
            this.authenticatedEvent$.emit(true);
            this.authenticated = true;
        }
    }

    processSessionActiveResponse(response : any){
        console.log("Session still active!!");
        this.processResponse(response);
    }
    
}