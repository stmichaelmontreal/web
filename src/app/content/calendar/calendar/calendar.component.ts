import {Component, OnInit} from '@angular/core';
import {Calendar} from './calendar';

@Component({
    selector: 'sm-bulletin',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

    public calendar = [];

    constructor() {
    }

    private static getDayOfWeek(date: string) {
        switch (new Date(Date.parse(date)).getDay()) {
            case 0:
                return 'Понеділок';
            case 1:
                return 'Вівторок';
            case 2:
                return 'Середа';
            case 3:
                return 'Четверг';
            case 4:
                return 'Пятниця';
            case 5:
                return 'Субота';
            case 6:
                return 'Неделі';
        }
    }

    ngOnInit() {
        const today = new Date();
        today.setDate(today.getDate() - 2);
        this.calendar = Calendar.y2019
            .filter(f => new Date(Date.parse(f.date)).getTime() > today.getTime());
        // Calendar.y2018.forEach((data) => console.log(new Date(Date.parse(data.date)).getTime()));
        this.calendar.forEach((item) => item.week = Calendar.getDayOfWeek(item.date));
        // console.log('Now:', Date.now().toString());
    }


}
