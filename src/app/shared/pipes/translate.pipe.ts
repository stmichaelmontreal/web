import {Pipe, PipeTransform} from '@angular/core';
import {TranslateService} from '../../core/services/translate.service';

@Pipe({
    name: 'translate',
    pure: false
})
export class TranslatePipe implements PipeTransform {

    constructor(private sTranslate: TranslateService) {
    }

    transform(value: any, args?: any): any {
        return this.sTranslate.translate(value);
    }

}
