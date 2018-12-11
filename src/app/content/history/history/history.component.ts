import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DomSanitizer} from '@angular/platform-browser';
import {concat, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
    selector: 'sm-history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

    public pages = [];

    constructor(private http: HttpClient,
                private sanitizer: DomSanitizer) {
    }

    ngOnInit() {
        const path = './assets/templates/';
        let url = `${path}1911_ua.html`;
        const y1911 = this.http.get(url, {responseType: 'text'}).pipe(
            map((data) => this.pages.push(this.sanitizer.bypassSecurityTrustHtml(data))));
        url = `${path}1916_ua.html`;
        const y1916 = this.http.get(url, {responseType: 'text'}).pipe(
            map((data) => this.pages.push(this.sanitizer.bypassSecurityTrustHtml(data))));
        url = `${path}1932_ua.html`;
        const y1932 = this.http.get(url, {responseType: 'text'}).pipe(
            map((data) => this.pages.push(this.sanitizer.bypassSecurityTrustHtml(data))));
        url = `${path}1952_ua.html`;
        const y1952 = this.http.get(url, {responseType: 'text'}).pipe(
            map((data) => this.pages.push(this.sanitizer.bypassSecurityTrustHtml(data))));
        url = `${path}1966_ua.html`;
        const y1966 = this.http.get(url, {responseType: 'text'}).pipe(
            map((data) => this.pages.push(this.sanitizer.bypassSecurityTrustHtml(data))));
        url = `${path}1990_ua.html`;
        const y1990 = this.http.get(url, {responseType: 'text'}).pipe(
            map((data) => this.pages.push(this.sanitizer.bypassSecurityTrustHtml(data))));
        concat(y1911, y1916, y1932, y1952, y1966, y1990).subscribe();
    }

}
