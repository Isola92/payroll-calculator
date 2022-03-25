import { splitSalary } from "../data/TransactionTierMaxValues";
import { getSalaryIncreaseRate, SALARY_RATES } from "../data/SalaryRates";
import { TAXATION_RATES } from "../data/TaxationRates";
import { FormActions } from "../definitions/Actions";
import { Profession } from "../data/Profession";
import { City, IncomeYear } from "../data/TaxationRate";

export const initialState: FormState = {
  experience: 6,
  profession: "Programmerare",
  city: "Göteborg",
  salaryAfterTaxes: 0,
  incomeYear: 2020,
  displayModal: false,
};

export interface FormState {
  experience: number;
  profession: Profession;
  city: City;
  incomeYear: IncomeYear;
  salaryAfterTaxes: number;
  displayModal: boolean;
}

export const formReducer = (
  state: FormState,
  action: FormActions
): FormState => {
  switch (action.type) {
    case "VALUE_CHANGED":
      return {
        ...state,
        [action.entity]: action.value,
      };

    case "FORM_SUBMIT":
      const { city, incomeYear, profession, experience } = state;
      return {
        ...state,
        salaryAfterTaxes: calculateSalaryAfterTaxes(
          city,
          incomeYear,
          profession,
          experience
        ),
        displayModal: true,
      };
  }
};

export const calculateSalaryAfterTaxes = (
  city: City,
  year: IncomeYear,
  profession: Profession,
  experience: number
) => {
  const taxationRate = TAXATION_RATES[city][year];
  const salaryRate = SALARY_RATES[profession];
  const salaryIncreaseRate = getSalaryIncreaseRate(experience);
  const salary = salaryRate * salaryIncreaseRate;
  const [baseSalary, midSalary, upperSalary] = splitSalary(salary);

  return Math.round(
    baseSalary * (1 - taxationRate) + midSalary * 0.5 + upperSalary * 0.7
  );
};
