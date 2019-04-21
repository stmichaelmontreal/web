import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DomSanitizer} from '@angular/platform-browser';
import {Event} from './events.component.model';
import {Observable} from 'rxjs';
import {concatAll, flatMap, map} from 'rxjs/operators';
import {EventsService} from './events.service';

@Component({
    selector: 'sm-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.scss'],
    providers: [EventsService]
})
export class EventsComponent implements OnInit {

    public events: Array<Event> = [];
    private path = './assets/templates/events/';

    constructor(private sEvents: EventsService,
                private http: HttpClient,
                private sanitizer: DomSanitizer) {
    }

    ngOnInit() {
        this.http.get(this.path + 'file-list.json')
            .pipe(
                flatMap((htmlFiles: any) => htmlFiles.files),
                map((event: Event) => {
                    return this.getEventFile(event);
                }),
                concatAll()
            ).subscribe();
            // .subscribe(() => console.log(this.events));
    }

    public readMore(event: Event) {
        event.isShowMore = true;
        // console.log(event);
    }

    private getEventFile(event: Event): Observable<any> {
        const fileName = this.path + event.file;
        // console.log('file: ', fileName);
        return this.http.get(fileName, {responseType: 'text'})
            .pipe(map((data: any) => this.events.push(
                <Event>{
                    title: event.title,
                    description: event.description,
                    htmlData: this.sanitizer.bypassSecurityTrustHtml(data)
                }
                ))
            );
    }

}
