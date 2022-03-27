import { Profession } from "./Profession";

export type SalaryRate = {
  [k in Profession]: number;
};
