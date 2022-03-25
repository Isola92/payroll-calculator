export enum TaxationTierMaxValue {
  Lower = 35999,
  Mid = 45000,
}

/**
 * @returns array representing the salary amount within all taxation tiers [lower, mid, upper]
 */
export const splitSalary = (salary: number): [number, number, number] => {
  if (salary >= TaxationTierMaxValue.Mid) {
    return [
      TaxationTierMaxValue.Lower,
      TaxationTierMaxValue.Mid - TaxationTierMaxValue.Lower,
      salary - TaxationTierMaxValue.Mid,
    ];
  }

  if (
    salary >= TaxationTierMaxValue.Lower &&
    salary <= TaxationTierMaxValue.Mid
  ) {
    return [TaxationTierMaxValue.Lower, salary - TaxationTierMaxValue.Lower, 0];
  }

  return [salary, 0, 0];
};
