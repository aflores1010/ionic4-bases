import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform( arr: any[],
             text: string,
             column: string): any[] {

    console.log('publisher: ', text);
    console.log('column:', column);

    if(text === '' || text === null || text === undefined) {
      return arr;
    }

    text = text.toLowerCase();

    return arr.filter(item => {
      return item[column].toLowerCase()
        .includes( text);
    });

  }

}
