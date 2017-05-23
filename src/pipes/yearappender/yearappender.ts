import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the YearappenderPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'yearappender',
})
export class YearappenderPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    if(value)
      return value + ' AD';
    return '';
  }
}
