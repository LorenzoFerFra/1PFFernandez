import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concatenarNombres'
})
export class ConcatenarNombresPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    
      let concat: string[] = [];
      for (var arg in args){
        if (Object.prototype.hasOwnProperty.call(value, args[arg] as string)){
          concat.push(value[args[arg] as string]);
          console.log(arg)
        }
      }
      return concat.join(', ')
  }

}
