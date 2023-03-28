import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserServiceInterface } from './interfaces/user';
import {environment} from "../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class UserService implements UserServiceInterface {

  baseUrl = environment.userUrl;

  constructor(private http: HttpClient) { }

  saveUser(user: User){
    this.http.post(this.baseUrl + "/", user);
  }

  updateUser(user: User){
    this.http.put(this.baseUrl + "/", user);
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
