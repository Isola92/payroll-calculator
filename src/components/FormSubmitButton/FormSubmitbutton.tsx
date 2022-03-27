import React from "react";
import { TestId } from "../../constants/TestId";
import "./FormSubmitButton.css";
interface Props {
  testId: TestId;
  children?: string;
}

export const FormSubmitButton: React.FC<Props> = ({ children, testId }) => {
  return (
    <input
      className="form-submit primary"
      type="submit"
      title="skicka"
      data-test-id={testId}
      value={children}
    ></input>
  );
};
