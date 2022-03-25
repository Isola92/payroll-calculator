import { test, expect } from "@jest/globals";
import { getSalaryIncreaseRate } from "../data/SalaryRates";
import { splitSalary } from "../data/TransactionTierMaxValues";

test("0-3 year experience return a 1 multiplier", () => {
  [0, 1, 2, 3].forEach((experience) =>
    expect(getSalaryIncreaseRate(experience)).toEqual(1)
  );
});

test("4-7 year experience returns a 1.2 multiplier", () => {
  [4, 5, 6, 7].forEach((experience) =>
    expect(getSalaryIncreaseRate(experience)).toEqual(1.2)
  );
});

test("8-10 year experience returns a 1.4 multiplier", () => {
  [8, 9, 10].forEach((experience) =>
    expect(getSalaryIncreaseRate(experience)).toEqual(1.4)
  );
});

test("11 or more year experience returns a 1.6 multiplier", () => {
  [11].forEach((experience) =>
    expect(getSalaryIncreaseRate(experience)).toEqual(1.6)
  );
});

test("high salary - should return one correct value for each taxation tier", () => {
  const salary = 59_000;
  const [low, mid, upper] = splitSalary(salary);
  expect(low).toEqual(35999);
  expect(mid).toEqual(9001);
  expect(upper).toEqual(14000);
  expect(low + mid + upper).toEqual(59_000);
});

test("mid salary - should return one correct value for each taxation tier", () => {
  const salary = 37_000;
  const [low, mid, upper] = splitSalary(salary);
  expect(low).toEqual(35999);
  expect(mid).toEqual(1001);
  expect(upper).toEqual(0);
  expect(low + mid + upper).toEqual(37000);
});

test("low salary - should return one correct value for each taxation tier", () => {
  const salary = 35_999;
  const [low, mid, upper] = splitSalary(salary);
  expect(low).toEqual(35999);
  expect(mid).toEqual(0);
  expect(upper).toEqual(0);
  expect(low + mid + upper).toEqual(35999);
});
