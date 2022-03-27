import { test, expect } from "@jest/globals";
import { IncomeYear } from "../definitions/TaxationRate";
import { calculateSalaryAfterTaxes } from "./formReducer";

test("experience increases salary", () => {
  const juniorSalary = calculateSalaryAfterTaxes(
    "Göteborg",
    2019,
    "Programmerare",
    1
  );
  const seniorSalary = calculateSalaryAfterTaxes(
    "Göteborg",
    2019,
    "Programmerare",
    6
  );
  expect(seniorSalary).toBeGreaterThan(juniorSalary);
});

test("Gothenburg had lower taxes than Stockholm both income years", () => {
  const incomeYears: IncomeYear[] = [2019, 2020];
  incomeYears.forEach((incomeYear) => {
    const stockholmSalary = calculateSalaryAfterTaxes(
      "Stockholm",
      incomeYear,
      "Kassabiträde",
      1
    );
    const gothenburgSalary = calculateSalaryAfterTaxes(
      "Göteborg",
      incomeYear,
      "Kassabiträde",
      1
    );

    expect(gothenburgSalary).toBeGreaterThan(stockholmSalary);
  });
});
