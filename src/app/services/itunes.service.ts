import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * iTunes service api docs available here:
 * https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/
 */
@Injectable({
    providedIn: 'root'
})
export class ITunesService {

    baseUrl = 'https://itunes.apple.com';

    constructor(protected httpClient: HttpClient) {
    }

    public search({term, limit = 20}: {term: string, limit?: number}): Observable<any> {
        const params = new HttpParams({
            fromObject: {
                media: 'podcast',
                term: encodeURI(term),
                limit: String(limit)
            }
        });
        return this.httpClient.get(`${this.baseUrl}/search`, { params });
    }

}
