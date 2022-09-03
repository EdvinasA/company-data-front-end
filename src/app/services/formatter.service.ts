import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormatterService {
  constructor() {}

  generateQueryString(
    pageInfo: {
      page: number;
      size: number;
      sort?: string[];
      filter?: { field: string | object | undefined; value: string }[];
    } = {
      page: 0,
      size: 8,
      sort: [],
      filter: [],
    },
    sort = false,
    filter = false,
    returnParamsObject = false
  ) {
    const params = new URLSearchParams();

    if (sort) {
      pageInfo.sort &&
        pageInfo.sort.map((sort) => {
          params.append('sort', `${sort}`);
        });
    }
    if (filter) {
      pageInfo.filter &&
        pageInfo.filter.forEach((filter) => {
          params.append(`${filter.field}`, `${filter.value}`);
        });
    }

    params.append('page', `${pageInfo.page}`);
    params.append('size', `${pageInfo.size}`);
    const queryString = params.toString();
    return returnParamsObject ? params : queryString;
  }
}
