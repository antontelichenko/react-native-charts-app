export interface IApiCourse {
  baseCurrency: string;
  currency: string;
  saleRateNB: number;
  purchaseRateNB: number;
  saleRate?: number;
  purchaseRate?: number;
}

export interface ICourseState {
  course: {
    2018: {
      date: string;
      bank: string;
      baseCurrency: number;
      baseCurrencyLit: string;
      exchangeRate: IApiCourse[];
    };
    2019: {
      date: string;
      bank: string;
      baseCurrency: number;
      baseCurrencyLit: string;
      exchangeRate: IApiCourse[];
    };
    2020: {
      date: string;
      bank: string;
      baseCurrency: number;
      baseCurrencyLit: string;
      exchangeRate: IApiCourse[];
    };
  } | null;
}
