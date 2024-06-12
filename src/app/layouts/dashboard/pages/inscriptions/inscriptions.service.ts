import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { Observable } from 'rxjs';
import { IInscription } from './models';

@Injectable({ providedIn: 'root' })
export class InscriptionService  {

    constructor(private httpClient: HttpClient) {}


    getInscriptions(): Observable<[IInscription]> {
        return this.httpClient.get<[IInscription]>(environment.baseAPIURL + '/inscriptions')
    }
}