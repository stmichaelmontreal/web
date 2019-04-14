import {Component, OnInit} from '@angular/core';
import {AdminService} from '../../api/admin.service';
import {map} from 'rxjs/operators';
import {EventHistory} from '../../dto/event-history';

@Component({
    selector: 'sm-admin-events',
    templateUrl: './admin-events.component.html',
    styleUrls: ['./admin-events.component.scss']
})
export class AdminEventsComponent implements OnInit {

    constructor(private sAdmin: AdminService) {
    }

    ngOnInit() {
        this.sAdmin.getEvents().pipe(
            map(data => console.log(data))
        ).subscribe();
    }

    addCommand() {
        const event = new EventHistory();
        event.e_date = '2019-01-01';
        event.e_title = 'Test test';
        event.e_description = 'Test test jsdjsdg fjg dfjsgsjdgfjsdgfjhs';
        event.e_img = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQoAAAFmCAMAA';
        event.e_thumbnail = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQoAAAFmCAMAAACiIyT';
        this.sAdmin.addEvent(event).pipe(
            map(data => console.log(data))
        ).subscribe();
    }

}
