import {Component, OnInit} from '@angular/core';
import {User} from 'src/app/model/user';
import {UserService} from '../../../service/user/user.service';

@Component({
    selector: 'app-user-container',
    templateUrl: './user-container.component.html',
    styleUrls: ['./user-container.component.scss']
})
export class UserContainerComponent implements OnInit {

    columns = 3;

    users: User[] = [];

    constructor(private userService: UserService) {}

    ngOnInit(): void {
        this.getUsers();
    }

    saveUser(user: User): void {
        this.userService.saveUser(user);
    }

    updateUser(user: User): void {
        let index = this.users.indexOf(user);
        this.userService.updateUser(user).subscribe({
            next: (data) => {
                this.users[index] = data;
            },
            error: (err: Error) => {
                console.log("Error updating user-container" + err);
            }
        });
    }

    deleteUser(id: string): void {
        let index: any;
        this.users.forEach(user => {
            if (user.id === id)
                index = this.users.indexOf(user);
        })
        this.userService.deleteUser(id);
        this.users.splice(index, 1);
        console.log("User deleted: " + id);
    }

    getUsers(): void {
        this.userService.getUsers().subscribe(
            {
                next: (data) => this.users = data,
                error: (err: Error) => {
                    console.log("Error getting users: " + err);
                }
            });
    }

    getUserById(id: string): void {
        this.userService.getUserById(id).subscribe({
            next: data => {
                this.users = [data];
            },
            error: (err: Error) => {
                console.log("Error getting user-container by id: " + err);
            }
        });
    }

    getUserByEmail(email: string): void {
        this.userService.getUserByEmail(email).subscribe({
            next: data => {
                this.users = [data];
            }, error: err => {
                console.log("Error getting user-container by email: " + err);
            }
        });
    }

    getAllUsersByTeam(team: string): void {
        this.userService.getAllUsersByTeam(team).subscribe({
            next: data => {
                this.users = data;
            }, error: err => {
                console.log("Error getting users by team: " + err);
            }
        });
    }

    getAllUsersByCompany(company: string): void {
        this.userService.getAllUsersByCompany(company).subscribe({
            next: data => {
            this.users = data;
            },
            error: err => {
                console.log("Error getting users by company: " + err);
            }
        });
    }
}
