import { TaxationTierMaxValue } from "../constants/TaxationTierMaxValue";

export class SalaryHelper {
  /**
   * @returns array representing the salary amount within all taxation tiers [lower, mid, upper]
   */
  public static splitSalary(salary: number): [number, number, number] {
    if (salary > TaxationTierMaxValue.Mid) {
      return [
        TaxationTierMaxValue.Lower,
        TaxationTierMaxValue.Mid - TaxationTierMaxValue.Lower,
        salary - TaxationTierMaxValue.Mid,
      ];
    }

    if (
      salary > TaxationTierMaxValue.Lower &&
      salary <= TaxationTierMaxValue.Mid
    ) {
      return [
        TaxationTierMaxValue.Lower,
        salary - TaxationTierMaxValue.Lower,
        0,
      ];
    }

    return [salary, 0, 0];
  }

  public static getSalaryIncreaseRate(experience: number) {
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
  }
}
