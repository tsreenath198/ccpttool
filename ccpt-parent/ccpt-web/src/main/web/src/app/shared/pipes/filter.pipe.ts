import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
    name: 'filter'
})
@Injectable()
export class FilterPipe implements PipeTransform {
    transform(items: any[], value: string): any[] {
        if (!items) {
            return [];
        }
        // if (!field || !value) {
        //     return items;
        // }
        //item[field].toLowerCase().indexOf(value.toLowerCase()) !== -1
        return items.filter(item => JSON.stringify(item).toLowerCase().indexOf(value.toLowerCase()) !== -1);
    }
}