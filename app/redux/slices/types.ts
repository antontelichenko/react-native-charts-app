export interface IApiCourse {
  baseCurrency: string;
  currency: string;
  saleRateNB: number;
  purchaseRateNB: number;
  saleRate?: number;
  purchaseRate?: number;
}

export interface IDataYear {
  date: string;
  bank: string;
  baseCurrency: number;
  baseCurrencyLit: string;
  exchangeRate: IApiCourse[];
}

export interface ICourseState {
  course: {
    2018: IDataYear;
    2019: IDataYear;
    2020: IDataYear;
  } | null;
}
export interface IcurrencyState {
  currency: {
    year18: { usd: number | null; eur: number | null };
    year19: { usd: number | null; eur: number | null };
    year20: { usd: number | null; eur: number | null };
  };
}
