import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PageChange } from 'src/app/shared/enum/page-change.enum';
import { SortLimit } from '../enum/cats-sort-limit.enum';

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  constructor(private httpClient: HttpClient) { }

  getCats(limit: SortLimit, pageChange: PageChange): Observable<any> {
    const headers = new HttpHeaders({ 'x-api-key': '4b0c5ea7-0b07-410b-8df1-83974a2e68ac' });

    let params = new HttpParams()
      .set('page', `${pageChange}`);

    if (limit) {
      params = params.set('limit', `${limit}`);
    }

    return this.httpClient.get<any>('https://api.thecatapi.com/v1/images/search', { params, headers });
  }

  getCatById(id: string): Observable<any> {
    return this.httpClient.get<any>(`https://api.thecatapi.com/v1/images/${id}`);
  }
}
