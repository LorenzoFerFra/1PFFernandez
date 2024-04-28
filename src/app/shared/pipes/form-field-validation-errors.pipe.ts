import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'formFieldValidationErrors'
})
export class FormFieldValidationErrorsPipe implements PipeTransform {

  transform(value: ValidationErrors | undefined | null, ...args: unknown[]): unknown {
    console.log(value);
    console.log(args);
    if (value) {
      let messages: string[] = [];
      for (const key in value) {
        if (Object.prototype.hasOwnProperty.call(value, key)) {
          const err = value[key];
          if(key === 'required') messages.push('Este campo es obligatorio');
          if(key === 'minlength') messages.push('Se requieren al menos 4 caracteres');
          if(key === 'maxlength') messages.push('No se pueden tener mas de 16');
          if(key === 'pattern') messages.push('No cumple con los requerimientos');
        }
      }
      return messages.join('. ')
    }
    else return null;
  }

}
