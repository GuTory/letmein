import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from 'src/app/model/user';
import {environment} from "../../../environments/environment.development";

/**
 * Service for user related operations
 */
@Injectable({
    providedIn: 'root'
})
export class UserService {

    /**
     * Base url for user related operations
     */
    baseUrl = environment.userUrl;

    constructor(private http: HttpClient) {}

    /**
     * Saving a user
     * @param user
     */
    saveUser(user: User): Observable<User> {
        return this.http.post<User>(this.baseUrl + "/", user);
    }

    /**
     * Updating a user
     * @param user
     */
    updateUser(user: User): Observable<User> {
        return this.http.put<User>(this.baseUrl + "/", user);
    }

    /**
     *
     * @param id
     */
    deleteUser(id: string) {
        this.http.delete(this.baseUrl + "/" + id);
    }

    /**
     * Getting all users
     */
    getUsers() {
        return this.http.get<User[]>(this.baseUrl + "/");
    }

    /**
     * Getting a user by id
     * @param id
     */
    getUserById(id: string) {
        return this.http.get<User>(this.baseUrl + "/" + id);
    }

    /**
     * Getting a user by email
     * @param email
     */
    getUserByEmail(email: string) {
        return this.http.get<User>(this.baseUrl + "/email/" + email);
    }

    /**
     * Getting all users by team
     * @param team
     */
    getAllUsersByTeam(team: string) {
        return this.http.get<User[]>(this.baseUrl + "/team/" + team);
    }

    /**
     * Getting all users by company
     * @param company
     */
    getAllUsersByCompany(company: string) {
        return this.http.get<User[]>(this.baseUrl + "/company/" + company);
    }
}
