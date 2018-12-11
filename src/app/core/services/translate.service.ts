import {Injectable} from '@angular/core';
import {Translations} from '../db/translation';
import {SharedService} from './shared.service';

@Injectable()
export class TranslateService {

    private translations: Translations = new Translations();

    constructor(private smShared: SharedService) {
        console.log('constructor TranslateService');
    }

    public getTranslation() {
        console.log('call http service to get translation resource');
    }

    public translate(word: string): string {
        return (this.translations[word])[this.smShared.currentLang];
    }

}
