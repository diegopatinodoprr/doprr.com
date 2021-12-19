import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    Authorization: '563492ad6f917000010000014060d806c66c47b88b9b4d7f8c487692',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class PexelsService {
  // #region Constructors (1)

  constructor(private http: HttpClient) {}

  // #endregion Constructors (1)

  // #region Public Methods (2)

  public getdata(search: string, perPage: number): Observable<any> {
    const url =`
      'https://api.pexels.com/v1/search?query=' +
      ${search} +
      '&per_page=' +
      ${perPage}`;
    return this.http
      .get<any>(url, httpOptions)
      .pipe(catchError(this.handelError));
  }

  public handelError(error: Error) {
    return throwError(error.message || 'Server Error');
  }

  // #endregion Public Methods (2)
}
