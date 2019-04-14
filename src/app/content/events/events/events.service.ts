import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class EventsService {

    constructor(private http: HttpClient) {
    }

    public getEvents() {
        this.http.get('api/admin-events');
    }

}
