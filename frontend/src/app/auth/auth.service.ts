import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from 'src/environments/environment.development';
import {Token} from "./token";
import {RegistrationRequest} from './registrationrequest';
import {LoginRequest} from './loginrequest';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private authorized: boolean = false;
    constructor(private http: HttpClient) {
    }

    public login(loginrequest: LoginRequest): Observable<Token> {
        return this.http.post<Token>(environment.athorizationUrl, loginrequest);
    }

    public register(user: RegistrationRequest): Observable<Token> {
        return this.http.post<Token>(environment.registerurl, user);
    }

    public logout(): void {
        this.authorized = false;
        localStorage.removeItem("token");
        localStorage.removeItem("email");
    }

    public setToken(token: string, email: string): void {
        localStorage.setItem("token", token);
        localStorage.setItem("email", email);
        this.authorized = true;
    }

    public getToken(): Token | undefined {
        const token = localStorage.getItem("token");
        if (token) {
            return {token: token};
        }
        return undefined;
    }

    public getEmail(): string | undefined {
        const email = localStorage.getItem("email");
        if (email) {
            return email;
        }
        return undefined;
    }

    public isAuthenticated(): boolean {
        return !!this.getToken() && !!this.getEmail()
    }
}
