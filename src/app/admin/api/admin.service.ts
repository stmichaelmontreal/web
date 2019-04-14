import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EventHistory} from '../dto/event-history';

@Injectable({
    providedIn: 'root'
})
export class AdminService {

    private host = 'http://localhost:5050';

    constructor(private http: HttpClient) {
    }

    public getEvents() {
        return this.http.get(this.host + '/api/events');
    }

    public addEvent(body: EventHistory) {
        return this.http.post(this.host + '/api/events', body);
    }

}
