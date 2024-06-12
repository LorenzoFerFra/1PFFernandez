import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { IStudent, IStudentPayload } from './models';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StudentsService {
    constructor(private httpClient: HttpClient) {}

    getStudents(): Observable<IStudent[]> {
        return this.httpClient.get<IStudent[]>(environment.baseAPIURL + '/student')
    }

    createStudent(data: IStudentPayload){ 
        
    }
    
    delStudent(){

    }

    editStudent(){

    }
}