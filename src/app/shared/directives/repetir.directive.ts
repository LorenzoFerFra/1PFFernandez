import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';
import {IUser } from '../../layouts/dashboard/pages/users/models'

@Directive({
  selector: '[appRepetir]'
})
export class RepetirDirective {

  constructor(private templateRef: TemplateRef<any>,
     private viewContainerRef: ViewContainerRef
     ){ 
    for (let i = 0; i< 5; i++) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }

}
