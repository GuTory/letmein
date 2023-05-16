import {Component, OnInit} from '@angular/core';
import {User} from 'src/app/model/user';
import {UserService} from '../../service/user/user.service';

/**
 * Component for displaying all users.
 */
@Component({
    selector: 'app-user-container',
    templateUrl: './user-container.component.html',
    styleUrls: ['./user-container.component.scss']
})
export class UserContainerComponent implements OnInit {

    /**
     * The number of columns in the user-container.
     */
    columns = 3;

    /**
     * The users to display.
     */
    users: User[] = [];

    constructor(private userService: UserService) {}

    /**
     * Get all users on init.
     */
    ngOnInit(): void {
        this.getUsers();
    }

    /**
     * Get all users.
     */
    getUsers(): void {
        this.userService.getUsers().subscribe(
            {
                next: (data) => this.users = data,
                error: (err: Error) => {
                    console.log("Error getting users: " + err);
                }
            });
    }
}
