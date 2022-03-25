export type IncomeYear = 2020 | 2019;
export type City = "Göteborg" | "Stockholm";

export type TaxationRate = {
  [k in City]: {
    [k in IncomeYear]: number;
  };
};
