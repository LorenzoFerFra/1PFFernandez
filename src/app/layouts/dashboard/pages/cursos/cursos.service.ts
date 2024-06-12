import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { ICurso, ICursoPayload } from './models';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CursosService {

    constructor(private httpClient: HttpClient) {}

    getCursos(): Observable<ICurso[]> {
        return this.httpClient.get<ICurso[]>(environment.baseAPIURL + '/cursos?_embed=user')
    }
    
    getCursosByUserId(uid: string): Observable<ICurso[]> {
        return this.httpClient.get<ICurso[]>(
          `${environment.baseAPIURL}/cursos?userId=${uid}`
        );
      }

    createCurso(data: ICursoPayload){ 
        
    }
    
    delCurso(){

    }

    editCurso(){

    }
}