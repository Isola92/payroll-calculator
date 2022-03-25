/// <reference types="cypress" />

import { TestId } from "../../src/constants/TestId";

describe("Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8000/");
  });

  it("value is presented when form is filled in and submitted", () => {
    getByTestId(TestId.Experience).type("5");
    getByTestId(TestId.City).select("Göteborg");
    getByTestId(TestId.IncomeYear).select("2019");
    getByTestId(TestId.Profession).select("Programmerare");
    getByTestId(TestId.FormSubmit).click();
    cy.contains(27000);
  });

  it("input fields start as invalid", () => {
    cy.get("input:invalid").should("have.length", 1);
    getByTestId(TestId.FormSubmit).click();
    getByTestId(TestId.Experience).type("5");
    cy.get("input:invalid").should("have.length", 0);

    cy.get("select:invalid").should("have.length", 3);
    getByTestId(TestId.City).select("Göteborg");
    getByTestId(TestId.IncomeYear).select("2019");
    getByTestId(TestId.Profession).select("Programmerare");
    cy.get("select:invalid").should("have.length", 0);
  });
});

function getByTestId(testId: TestId) {
  return cy.get(`[data-test-id=${testId}]`);
}
