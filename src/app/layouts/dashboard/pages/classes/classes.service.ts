import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { IClass, ICreateClassData } from './models';

var counter = 3;
const CLASSES_DB: IClass[] = [
    {
        id: 1,
        name: 'angular',
        students: 
            {
                id: 1,
                name: 'mario',
                weight: 100,
                lastName: 'mario',
                email: 'mariomario@gmail.com',
                role: 'USER',
                createdAt: new Date(),
              },

    },
    {
        id: 2,
        name: 'math',
        students: 
              {
                id: 3,
                name: 'fox',
                weight: 71,
                lastName: 'mcCloud',
                email: 'starfox@gmail.com',
                role: 'ADMIN',
                createdAt: new Date(),
              },
            
    }
    
]

@Injectable({ providedIn: 'root' })
export class ClassesService {

    constructor(){
            }
    
    getClasses(): Observable<IClass[]> {
        return of(CLASSES_DB).pipe(delay(200));
    }

    createClass(data: ICreateClassData){ 
        if(data.name && data.students){
            const newClass: IClass = {
                id: counter,
                name: data.name,
                students: data.students,
            }
            CLASSES_DB.push(newClass)
            counter++;
            console.log(counter)
            // CLASSES_DB.push({...data, id: new Date().getTime() });
            //id: counter,
        }
        return of(CLASSES_DB)
        
    }
    
    deleteClass(id: number) {
        return of(CLASSES_DB.filter((c) => c.id != id))
    }

    editClass(id: number, data: IClass) {
        return of (CLASSES_DB.map((c) => (c.id === id ? {...c, ...data} : c)))
    }

}