import {Component, OnInit} from '@angular/core';
import {ApiUsersService} from '../../../core/api/api-users.service';
import {User} from '../../../core/db/user';

@Component({
    selector: 'sm-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

    public user: User = new User();

    constructor(private apiUsers: ApiUsersService) {
    }

    ngOnInit() {
    }

    public registerCommand() {
        this.apiUsers.add(this.user).subscribe();
    }

    private getUser() {

    }

}
