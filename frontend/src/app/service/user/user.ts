import { Observable } from "rxjs";
import { User } from "src/app/model/user";

export interface UserServiceInterface {

    baseUrl: string;
    
    saveUser(user: User): Observable<User>;

    updateUser(user: User): Observable<User>;

    deleteUser(id: string): void;

    getUsers(): Observable<User[]>;

    getUserById(id: string): Observable<User>;

    getUserByEmail(email: string): Observable<User>;

    getAllUsersByTeam(team: string): Observable<User[]>;

    getAllUsersByCompany(company: string): Observable<User[]>;
}
