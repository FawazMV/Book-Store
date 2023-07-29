import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'localCurrency'
})
export class LocalCurrencyPipe implements PipeTransform {

  transform(value: string): number | null {
    if (!value) return null
    const arr = value.split('$')
    const rp = JSON.parse(arr[1]) * 80
    return rp;
  }

}
