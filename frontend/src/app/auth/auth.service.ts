import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from 'src/environments/environment.development';
import { Token } from "./token";
import { RegistrationRequest } from './registrationrequest';
import { LoginRequest } from './loginrequest';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    authorized: boolean = false;

    token?: Token;

    constructor(private http: HttpClient) {}

    public login(loginrequest: LoginRequest): Observable<Token> {
       return this.http.post<Token>(environment.athorizationUrl, loginrequest);
    }

    public register(user: RegistrationRequest): Observable<Token> {
        console.log(user);
        return this.http.post<Token>(environment.registerurl, user);
    }

    public logout(): void {
        this.authorized = false;
        this.token = undefined;
    }
}
