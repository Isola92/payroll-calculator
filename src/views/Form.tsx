import React, { useReducer } from "react";
import { DropDown } from "../components/Dropdown/Dropdown";
import { Input } from "../components/Input/Input";
import { formReducer, initialState } from "../reducers/formReducer";
import { Card } from "../components/Card/Card";
import { TestId } from "../constants/TestId";
import { FormSubmitButton } from "../components/FormSubmitButton/FormSubmitbutton";

export const Form = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const { salaryAfterTaxes } = state;

  return (
    <>
      <form
        className="mdc-typography"
        name="payroll-form"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "FORM_SUBMIT" });
        }}
      >
        <DropDown
          className="profession-input"
          onChange={dispatch}
          entityKey="profession"
          selectableValues={["Programmerare", "Lärare", "Kassabiträde"]}
          name="Yrke"
          testId={TestId.Profession}
        />

        <Input
          className="experience-input"
          onKeyUp={dispatch}
          entityKey="experience"
          type="number"
          testId={TestId.Experience}
          name="Erfarenhet"
        />

        <DropDown
          className="city-input"
          onChange={dispatch}
          entityKey="city"
          selectableValues={["Stockholm", "Göteborg"]}
          name="Stad"
          testId={TestId.City}
        />
        <DropDown
          className="income-year-input"
          onChange={dispatch}
          entityKey={"incomeYear"}
          selectableValues={[2019, 2020]}
          name="Inkomstår"
          testId={TestId.IncomeYear}
        />

        <FormSubmitButton
          className="form-submit primary"
          testId={TestId.FormSubmit}
        >
          Beräkna
        </FormSubmitButton>
      </form>

      <Card
        title="Lön efter skatt"
        content={`Lön efter skatt: ${salaryAfterTaxes.toString()}`}
      />
    </>
  );
};
