import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CursosService {

    constructor(private httpClient: HttpClient) {}

    getCursos(): Observable<[]> {
        return this.httpClient.get<[]>(environment.baseAPIURL + '/inscriptions')
    }

}