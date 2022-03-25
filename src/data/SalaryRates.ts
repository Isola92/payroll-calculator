import { Profession } from "./Profession";

export type SalaryRate = {
  [k in Profession]: number;
};

export const SALARY_RATES: SalaryRate = {
  Kassabiträde: 25_000,
  Lärare: 27_000,
  Programmerare: 30_000,
};

export const getSalaryIncreaseRate = (experience: number) => {
  if (experience <= 3) {
    return 1;
  }

  if (experience <= 7) {
    return 1.2;
  }

  if (experience <= 10) {
    return 1.4;
  }

  return 1.6;
};
