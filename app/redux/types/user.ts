import {PayloadAction} from '@reduxjs/toolkit';
import {IApiRegisterSuccessResponse} from '../../services/api/api-response.types';

export type IRegisterUserActionPayload = PayloadAction<{
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}>;

export type IRegisterUserSuccessAction = IApiRegisterSuccessResponse;

export type ILoginUserActionPayload = PayloadAction<{
  email: string;
  password: string;
}>;
