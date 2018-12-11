import {Injectable} from '@angular/core';

@Injectable()
export class SharedService {

    public currentLang: string;

    constructor() {
        console.log('constructor SharedService');
    }

}
