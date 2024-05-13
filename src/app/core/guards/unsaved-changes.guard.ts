import { CanDeactivateFn } from "@angular/router";


export const unsavedChangesGuard: CanDeactivateFn<unknown> = (
) => {

  // if(confirm('Tiene cambios sin guardar, desea guardarlos?')) {
  //   ///
  // } else {

  // }  

  console.log('UNSAVED')
  return true;
};
