export interface IApiCourse {
  baseCurrency: string;
  currency: string;
  saleRateNB: number;
  purchaseRateNB: number;
  saleRate?: number;
  purchaseRate?: number;
}

export interface IExchangeResponse {
  data: {
    date: string;
    bank: string;
    baseCurrency: number;
    baseCurrencyLit: string;
    exhangeRate: IApiCourse;
  };
  ok: boolean;
}
