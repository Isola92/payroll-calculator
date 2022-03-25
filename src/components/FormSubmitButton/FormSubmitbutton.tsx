import React from "react";
import { TestId } from "../../constants/TestId";

interface Props {
  className: string;
  testId: TestId;
  children?: string;
}

export const FormSubmitButton: React.FC<Props> = ({
  children,
  testId,
  className,
}) => {
  return (
    <input
      type="submit"
      className={className}
      data-test-id={testId}
      value={children}
    ></input>
  );
};
