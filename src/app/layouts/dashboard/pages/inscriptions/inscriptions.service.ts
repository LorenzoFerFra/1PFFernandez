import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { Observable } from 'rxjs';
import { IInscription, IInscriptionsPayload } from './models';

@Injectable({ providedIn: 'root' })
export class InscriptionService  {

    constructor(private httpClient: HttpClient) {}


    getInscriptions(): Observable<[IInscription]> {
        // &_embed=user
        return this.httpClient.get<[IInscription]>(environment.baseAPIURL + '/inscriptions?_embed=student&_embed=user&_embed=curso')
    }
    createInscription(payload:  IInscriptionsPayload): Observable<IInscription> {
        return this.httpClient.post<IInscription>(environment.baseAPIURL + '/inscriptions', payload)
    }
}