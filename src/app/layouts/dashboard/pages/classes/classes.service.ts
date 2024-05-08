import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IClasss } from './models';

const CLASSES_DB: IClasss[] = [
    
]

@Injectable({ providedIn: 'root' })
export class ClassesService {


    getClasses(): Observable<IClasss[]> {
        return of()
    }

    createClasses(){ 
        
    }

}