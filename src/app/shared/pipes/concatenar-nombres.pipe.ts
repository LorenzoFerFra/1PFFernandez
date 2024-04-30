import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concatenarNombres'
})
export class ConcatenarNombresPipe implements PipeTransform {

  transform(value: any[], ...args: unknown[]): unknown {
    
      let concat: string[] = [];
      for (const key in value) {
        if (Object.prototype.hasOwnProperty.call(value, key)) {
          const err = value[key];
          console.log(value[key])
          if(args[0] === 'n') concat.push(value[key]);
          if(args[1] === 'ln') concat.push(value[key]);
        }
      }
      return concat.join(', ')
  }

}
