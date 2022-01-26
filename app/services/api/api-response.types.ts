import { ApiResponse } from 'apisauce'

import { IApiUser } from './api.types'

import { IApiCourse } from '../../models/ICourse'

export interface IApiLoginSuccessResponse {
  token: string;
  user: IApiUser;
}

export type IErrorResponse = {
  error: string,
}

export type LoginUserResponse = ApiResponse<
  IApiLoginSuccessResponse,
  IErrorResponse
>

export interface IApiRegisterSuccessResponse {
  token: string;
  user: IApiUser;
}

export type RegisterUserResponse = ApiResponse<
  IApiRegisterSuccessResponse,
  IErrorResponse
>

export interface IExchange {
  data: {
    date: string,
    bank: string,
    baseCurrency: number,
    baseCurrencyLit: string,
    exchangeRate: IApiCourse,
  };
}
