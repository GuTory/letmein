import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Environment} from "@angular/cli/lib/config/workspace-schema";
import {environment} from "../../environments/environment.development";
import {User} from "../model/user";
import {data} from "autoprefixer";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) {
    }

    public login(email: string, password: string): Observable<User> {
        return this.http.post<User>(environment.loginurl, {email, password},
            {headers: {'Content-Type': 'application/json', 'Authorization': 'Basic ' + btoa(email + ':' + password)}});
    }
}
