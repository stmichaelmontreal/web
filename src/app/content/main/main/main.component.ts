import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {SharedService} from '../../../core/services/shared.service';

@Component({
    selector: 'sm-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

    public isShowMore = false;
    public Menus = Menus;

    public stmichael = 'Церква святого Михаїла';
    public menu = 'Меню';
    public main = 'Головна';
    public calendar = 'Календар';
    public contact = 'Контакти';
    public events = 'Події';
    public bulletin = 'Бюлетень';
    public about = 'Про нас';
    public history = 'Історія';

    constructor(private route: ActivatedRoute,
                private router: Router,
                private sShared: SharedService) {
    }

    ngOnInit() {
        console.log('ngOnInit MainComponent lang', this.sShared.currentLang);
    }

    public navigateCommand(menu: Menus) {
        switch (menu) {
            case Menus.Calendar:
                this.router.navigate(['calendar']);
                break;
            case Menus.Bulletin:
                window.open('http://stmichaelsucc-mtl.blogspot.com', '_self');
                break;
            case Menus.Events:
                this.router.navigate(['events']);
                break;
            case Menus.History:
                this.router.navigate(['history']);
                break;
            case Menus.Contact:
                this.router.navigate(['contact']);
                break;

        }
    }
}

export enum Menus {
    Main,
    Calendar,
    Bulletin,
    Events,
    History,
    Contact
}
