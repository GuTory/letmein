import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from 'src/environments/environment.development';
import {Token} from "./token";
import {RegistrationRequest} from './registrationrequest';
import {LoginRequest} from './loginrequest';
import {Observable} from 'rxjs';

/**
 * Service responsible for authentication.
 */
@Injectable({
    providedIn: 'root'
})
export class AuthService {

    /**
     * Indicates if the user is authenticated.
     * @private
     */
    private authorized: boolean = false;
    constructor(private http: HttpClient) {
    }

    /**
     * Login the user.
     * @param loginrequest
     */
    public login(loginrequest: LoginRequest): Observable<Token> {
        return this.http.post<Token>(environment.athorizationUrl, loginrequest);
    }

    /**
     * Register the user.
     * @param user
     */
    public register(user: RegistrationRequest): Observable<Token> {
        return this.http.post<Token>(environment.registerurl, user);
    }

    /**
     * Logout the user.
     */
    public logout(): void {
        this.authorized = false;
        sessionStorage.removeItem("token");

        sessionStorage.removeItem("email");
    }

    /**
     * Set the token in the local storage.
     * @param token
     * @param email
     */
    public setToken(token: string, email: string): void {
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("email", email);
        this.authorized = true;
    }

    /**
     * Get the token from the local storage.
     */
    public getToken(): Token | undefined {
        const token = sessionStorage.getItem("token");
        if (token) {
            return {token: token};
        }
        return undefined;
    }

    /**
     * Get the email from the local storage.
     */
    public getEmail(): string | undefined {
        const email = sessionStorage.getItem("email");
        if (email) {
            return email;
        }
        return undefined;
    }

    /**
     * Check if the user is authenticated.
     */
    public isAuthenticated(): boolean {
        return !!this.getToken() && !!this.getEmail()
    }
}
