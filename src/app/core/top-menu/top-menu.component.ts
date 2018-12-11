import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'sm-top-menu',
    templateUrl: './top-menu.component.html',
    styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {

    public stmichael = 'церква святого михаїла';
    public menu = 'Меню';
    public main = 'Головна';
    public calendar = 'Календар';
    public contact = 'Контакти';
    public events = 'Події';
    public bulletin = 'Бюлетень';
    public about = 'Про нас';
    public history = 'Історія';

    public isShowDDMenu = false;

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    public navigateMainCommand() {
        this.router.navigate(['main']);
    }

    // public toggleMenu(value: boolean) {
    //     this.isShowDDMenu = value;
    // }

}
