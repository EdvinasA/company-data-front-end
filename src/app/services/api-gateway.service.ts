import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import { EMPTY, Observable } from "rxjs";
import { KeyValuePairObject } from "../utils/key-value-pair-object";
import { buildHttpParams, cleanParams } from "../utils/http-params.service";
import { catchError, tap } from "rxjs/operators";

export type RequestOptions = {
  observe: 'body' | 'events' | 'response';
  responseType: 'json' | 'arraybuffer' | 'blob' | 'text';
}

@Injectable({
  providedIn: 'root'
})
export class ApiGatewayService {

  private baseUrl = environment.apiUrl;

  defaultOptions: RequestOptions = {
    observe: 'body',
    responseType: 'json',
  };

  constructor(private http: HttpClient) {
  }

  get<T>(
    url: string,
    params: KeyValuePairObject | null = null,
    options: RequestOptions = this.defaultOptions,
  ): Observable<T> {
    return this.request<T>('GET', url,null, params, options);
  }

  post<T>(
    url: string,
    body: any,
    params: KeyValuePairObject | null = null,
    options: RequestOptions = this.defaultOptions,
  ): Observable<T> {
    return this.request<T>('POST', url, body, params, options);
  }

  put<T>(
    url: string,
    body: any,
    params: KeyValuePairObject | null = null,
    options: RequestOptions = this.defaultOptions,
  ): Observable<T> {
    return this.request<T>('PUT', url, body, params, options);
  }

  patch<T>(
    url: string,
    body: KeyValuePairObject,
    params: KeyValuePairObject | null = null,
    options: RequestOptions = this.defaultOptions,
  ): Observable<T> {
    return this.request<T>('PATCH', url, body, params, options);
  }

  delete<T>(
    url: string,
    options: RequestOptions = this.defaultOptions,
  ): Observable<T> {
    return this.request<T>('DELETE', url,null, null, options);
  }

  request<T>(
    method: 'DELETE' | 'GET' | 'HEAD' | 'JSONP' | 'OPTIONS' | 'POST' | 'PUT' | 'PATCH',
    url: string,
    body: KeyValuePairObject | null = null,
    params: KeyValuePairObject | null = null,
    options: RequestOptions = this.defaultOptions,
  ): Observable<T> {
    const requestParams = buildHttpParams(cleanParams(params || {}));
    const token = localStorage.getItem('token');

    const headers = this.buildHeader(token);

    const urlWithContextPath = this.formatUrlWithContextPath(url);

    const response$ = this.http.request(method, urlWithContextPath, {
      headers: headers,
      params: requestParams,
      body,
      ...options,
    }) as Observable<T>;

    return response$.pipe(
      tap(() => "A"),
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401) {
          return EMPTY;
        }
        throw err;
      }),
    );
  }

  private buildHeader(token: string | null): HttpHeaders {
    if (token !== null && token !== 'undefined') {
      return new HttpHeaders()
      .set('token', token);
    }
    return new HttpHeaders();
  }

  private formatUrlWithContextPath(url: string) {
    return `${this.baseUrl}${url}`;
  }
}
