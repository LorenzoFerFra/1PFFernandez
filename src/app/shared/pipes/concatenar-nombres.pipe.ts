import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concatenarNombres'
})
export class ConcatenarNombresPipe implements PipeTransform {

  transform(value: string[], ...args: unknown[]): unknown {
    console.log(value)
      let concat: string[] = [];
      for (const key in value) {
        if (Object.prototype.hasOwnProperty.call(value, key)) {
          const err = value[key];
          if(args[0] === 'n') concat.push();
          if(args[1] === 'ln') concat.push();
        }
      }
      return concat.join(', ')
  }

}
