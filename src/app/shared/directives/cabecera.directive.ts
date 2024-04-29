import { Directive, ElementRef, Input, OnChanges, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appCabecera] '
})
export class CabeceraDirective {
  //Directiva para cambiar tamaño de las cabeceras de la lista de usuarios.
  fontSize = '20px';
  fontColor = 'aqua';
  constructor(private elementRef: ElementRef) { 
    this.elementRef.nativeElement.style.fontSize = this.fontSize;
    this.elementRef.nativeElement.style.fontWeight = 500;
    this.elementRef.nativeElement.style.color = this.fontColor;
  }

}
