import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customText1'
})
export class CustomText1Pipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    //value + 'hayabusa' = value;
    if (args[0] === 'u') {
      return value.toUpperCase();
    }
    else if (args[0] === 'l') {
      return value.toLowerCase();
    }
     else {
      return value;
    }
  }

}
