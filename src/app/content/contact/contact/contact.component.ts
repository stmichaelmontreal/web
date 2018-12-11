import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'sm-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

    public stmichaelfull = 'Уkрaїнська Греко-Католицька парохія Святого Архистратига Михаїла';
    public ourphone = 'Наш телефон:';
    public ouraddress = 'Наша адреса:';
    public ourlocation = 'Ми знаходимося на перехресті вулиць: d’Iberville і Hochelaga не далеко від метро Frontenac, також до нас їде автобус № 94 sud.';
    public direction = 'Напрямок';
    public viewlargermap = 'Переглянути збільшену карту';
    public reviews = 'відгуків';
    public address = '2388 Rue d’Iberville, Montréal, QC H2K 3C6, Canada';
    public phone = '+1 (514) 521-2234';

    public lat = 45.538;
    public lng = -73.559184;

    public mLat = 45.534862;
    public mLng = -73.559184;

    constructor() {
    }

    ngOnInit() {
    }

}
