import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../db/user';

@Injectable({
    providedIn: 'root'
})
export class ApiUsersService {

    constructor(private http: HttpClient) {
    }

    public add(user: User) {
        return this.http.post('/api/users/add', user);
    }

}
