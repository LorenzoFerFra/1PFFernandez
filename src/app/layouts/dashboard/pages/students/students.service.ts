import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { IStudent, IStudentPayload } from './models';
import { Observable, catchError, delay, of, throwError  } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StudentsService {
  constructor(private httpClient: HttpClient) {}

  getStudents(): Observable<IStudent[]> {
    return this.httpClient.get<IStudent[]>(environment.baseAPIURL + '/students');
  }

  getStudentById(id: string): Observable<IStudent | undefined> {
    return this.httpClient.get<IStudent>(
      environment.baseAPIURL + '/students/' + id
    );
  }

  createStudent(payload: IStudentPayload): Observable<IStudent> {
    return this.httpClient.post<IStudent>(
      `${environment.baseAPIURL}/students`,
      payload
    );
  }

  delStudent() {}

  editStudent() {}
}
