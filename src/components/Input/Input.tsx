import React, { ChangeEvent } from "react";
import { FormAction } from "../../definitions/Actions";
import { FormEntity } from "../../definitions/Entity";

interface InputProps extends FormEntity {
  onChange: (actionData: FormAction) => void;
  type: string;
  className: string;
  placeHolder: string;
}

export const Input = ({
  entityKey,
  onChange,
  type = "text",
  testId,
  className,
  placeHolder,
  name,
}: InputProps) => {
  return (
    <input
      type={type}
      className={className}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        onChange({
          type: "VALUE_CHANGED",
          entity: entityKey,
          value: e.currentTarget.value,
        });
      }}
      placeholder={placeHolder}
      aria-label={name}
      required={true}
      data-test-id={testId}
    ></input>
  );
};
