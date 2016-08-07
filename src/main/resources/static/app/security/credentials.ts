export class Credentials {
    private _username : String;
    private _password : String;


    constructor(username:String, password:String) {
        this._username = username;
        this._password = password;
    }


    get username():String {
        return this._username;
    }

    get password():String {
        return this._password;
    }
}