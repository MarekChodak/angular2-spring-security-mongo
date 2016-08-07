import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {AuthenticationService} from "../security/authentication.service";
import {Credentials} from "../security/credentials";

@Injectable()
export class HttpClient {

    private csrfToken:string;
    private sessionId:string;

    constructor(private http:Http) {
    }

    private appendCsrfToken(headers:Headers) {
        headers.append("X-CSRF-TOKEN", this.csrfToken);
    }

    public updateCsrfToken(token : string){
        this.csrfToken = token;
    }
    public updateSessionId(sessionId : string){
        this.sessionId = sessionId;
    }
    
    public getSessionId(){
        return this.sessionId;
    }

    get(url, headers : Headers) {
        if(!headers){
            headers = new Headers();
        }
        return this.http.get(url, {
            headers: headers
        });
    }

    post(url, data, headers:Headers) {
        this.appendCsrfToken(headers);
        return this.http.post(url, data, {
            headers: headers
        });
    }

    delete(url, headers:Headers) {
        this.appendCsrfToken(headers);
        return this.http.delete(url, {
            headers: headers
        });

    }

    put(url, data, headers:Headers) {
        this.appendCsrfToken(headers);
        return this.http.put(url, data, {
            headers: headers
        });
    }

}
