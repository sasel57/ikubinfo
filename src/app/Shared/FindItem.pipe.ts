import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'FindItem'
})
export class FindItemPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
