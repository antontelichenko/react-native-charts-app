export interface IApiCourse {
  baseCurrency: string;
  currency: string;
  saleRateNB: number;
  purchaseRateNB: number;
  saleRate?: number;
  purchaseRate?: number;
}

export interface IExchange {
  data: {
    date: string;
    bank: string;
    baseCurrency: number;
    baseCurrencyLit: string;
    exchangeRate: IApiCourse[];
  };
  ok: boolean;
}

export interface ICourseState {
  course: {
    exchangeRate: IApiCourse[];
    date: string;
    bank: string;
    baseCurrency: number;
    baseCurrencyLit: string;
  } | null;
}
