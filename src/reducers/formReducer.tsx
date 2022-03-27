import { SALARY_RATES } from "../constants/SalaryRates";
import { TAXATION_RATES } from "../constants/TaxationRates";
import { FormActions } from "../definitions/Actions";
import { Profession } from "../definitions/Profession";
import { City, IncomeYear } from "../definitions/TaxationRate";
import { SalaryHelper } from "../helpers/SalaryHelper";

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
  const baseSalary = SALARY_RATES[profession];
  const salaryIncreaseRate = SalaryHelper.getSalaryIncreaseRate(experience);
  const salary = baseSalary * salaryIncreaseRate;
  const salaryAfterBaseTax = salary * (1 - taxationRate);
  const [lowerSalary, midSalary, upperSalary] =
    SalaryHelper.splitSalary(salaryAfterBaseTax);

  return lowerSalary + midSalary * 0.5 + upperSalary * 0.3;
};
