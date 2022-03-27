import { test, expect } from "@jest/globals";
import { SalaryHelper } from "./SalaryHelper";

test("high salary - should return one correct value for each taxation tier", () => {
  const salary = 59000;
  const [low, mid, upper] = SalaryHelper.splitSalary(salary);
  expect(low).toEqual(36000);
  expect(mid).toEqual(9000);
  expect(upper).toEqual(14000);
  expect(low + mid + upper).toEqual(59000);
});

test("mid salary - should return one correct value for each taxation tier", () => {
  const salary = 37000;
  const [low, mid, upper] = SalaryHelper.splitSalary(salary);
  expect(low).toEqual(36000);
  expect(mid).toEqual(1000);
  expect(upper).toEqual(0);
  expect(low + mid + upper).toEqual(37000);
});

test("low salary - should return one correct value for each taxation tier", () => {
  const salary = 36000;
  const [low, mid, upper] = SalaryHelper.splitSalary(salary);
  expect(low).toEqual(36000);
  expect(mid).toEqual(0);
  expect(upper).toEqual(0);
  expect(low + mid + upper).toEqual(36000);
});

test("0-3 year experience return a 1 multiplier", () => {
  [0, 1, 2, 3].forEach((experience) =>
    expect(SalaryHelper.getSalaryIncreaseRate(experience)).toEqual(1)
  );
});

test("4-7 year experience returns a 1.2 multiplier", () => {
  [4, 5, 6, 7].forEach((experience) =>
    expect(SalaryHelper.getSalaryIncreaseRate(experience)).toEqual(1.2)
  );
});

test("8-10 year experience returns a 1.4 multiplier", () => {
  [8, 9, 10].forEach((experience) =>
    expect(SalaryHelper.getSalaryIncreaseRate(experience)).toEqual(1.4)
  );
});

test("11 or more year experience returns a 1.6 multiplier", () => {
  [11].forEach((experience) =>
    expect(SalaryHelper.getSalaryIncreaseRate(experience)).toEqual(1.6)
  );
});
