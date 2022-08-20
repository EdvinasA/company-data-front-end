import { HttpParameterCodec, HttpParams } from '@angular/common/http';
import { CustomHttpParamEncoder } from './custom-http-param-encoder';
import { KeyValuePairObject } from './key-value-pair-object';
import { isNil } from './utils';

export const cleanParams = (
  params: KeyValuePairObject<unknown>
): KeyValuePairObject => {
  const cleanedParams = {};

  Object.entries(params)
    .filter(([_, value]) => !isNil(value) && value !== '')
    .forEach(([key, value]) => {
      // @ts-ignore
      cleanedParams[`${key}`] = value;
    });

  return <KeyValuePairObject>cleanedParams;
};

export const buildHttpParams = (
  params: KeyValuePairObject,
  options: {
    encoder: HttpParameterCodec;
  } = {
    encoder: new CustomHttpParamEncoder(),
  }
): HttpParams => {
  return new HttpParams({
    fromObject: params,
    encoder: options.encoder,
  });
};
