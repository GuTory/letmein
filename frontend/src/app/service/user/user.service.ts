import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import {environment} from "../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class UserService  {

  baseUrl = environment.userUrl;

  constructor(private http: HttpClient) { }

  saveUser(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl + "/", user);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(this.baseUrl + "/", user);
  }

  deleteUser(id: string){
    this.http.delete(this.baseUrl + "/" + id);
  }

  getUsers(){
    return this.http.get<User[]>(this.baseUrl + "/");
  }

  getUserById(id: string){
    return this.http.get<User>(this.baseUrl + "/" + id);
  }

  getUserByEmail(email: string){
    return this.http.get<User>(this.baseUrl + "/email/" + email);
  }

  getAllUsersByTeam(team: string) {
    return this.http.get<User[]>(this.baseUrl + "/team/" + team);
  }

  getAllUsersByCompany(company: string){
    return this.http.get<User[]>(this.baseUrl + "/company/" + company);
  }
}
