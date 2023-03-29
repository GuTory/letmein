import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from '../../service/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  private users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {}

  saveUser(user: User): void {
    this.userService.saveUser(user).subscribe((user: User) => {
      this.users.push(user);
    },
    (err: Error) => {
      console.log("Error saving user");
    });
  }

  updateUser(user: User): void {
    let index = this.users.findIndex(user,0);
    this.userService.updateUser(user).subscribe((user: User) => {
      this.users[index] = user;
    }, (err: Error) => {
      console.log("Error updating user" + err);
    });
  }

  deleteUser(id: string): void{
    let index: any;
    this.users.forEach(user => {
      if(user.Id === id) 
        index = this.users.indexOf(user);
      })
    this.userService.deleteUser(id);
    this.users.splice(index, 0);
    console.log("User deleted: " + id);
  }

  getUsers(): void{
    this.userService.getUsers().subscribe(
      {
        next: (data) => this.users = data,
        error: (err: Error) => {
          console.log("Error getting users: " + err);
        }
      });
  }

  getUserById(id: string): void {
    this.userService.getUserById(id).subscribe( data => {
      this.users = [data];
    }, (err: Error) => {
      console.log("Error getting user by id: " + err);
    });
  }

  getUserByEmail(email: string): void {
    this.userService.getUserByEmail(email).subscribe( data => {
      this.users = [data];
    }, err => {
      console.log("Error getting user by email: " + err);
    });
  }

  getAllUsersByTeam(team: string): void {
    this.userService.getAllUsersByTeam(team).subscribe( data => {
      this.users = data;
    }, err => {
      console.log("Error getting users by team: " + err);
    });
  }

  getAllUsersByCompany(company: string): void {
    this.userService.getAllUsersByCompany(company).subscribe( data => {
      this.users = data;
    }, err => {
      console.log("Error getting users by company: " + err);
    });
  }
}
