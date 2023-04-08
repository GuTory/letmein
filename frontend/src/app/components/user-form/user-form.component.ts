import {Component, OnInit} from '@angular/core';
import { User } from '../../model/user';
import {UserService} from "../../service/user/user.service";
import {NgForm} from "@angular/forms";
import {PathMap} from "../../app-routing.module";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

    newUser: User;

    constructor(private userService: UserService) {}

    ngOnInit(): void {
        this.newUser = {
            id: '',
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            company: '',
            team: '',
            roles: [],
            applications: [],
            favoriteEvents: [],
            attendedEvents: []
        };
    }

    saveUser(registerForm: NgForm) {
        console.log(this.newUser);
        //this.userService.saveUser(this.newUser);
    }

    protected readonly PathMap = PathMap;
}
