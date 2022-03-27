import React, { KeyboardEvent } from "react";
import { FormAction } from "../../definitions/Actions";
import { FormEntity } from "../../definitions/Entity";

interface InputProps extends FormEntity {
  onKeyUp: (actionData: FormAction) => void;
  type: string;
  className: string;
  placeHolder: string;
}

export const Input = ({
  entityKey,
  onKeyUp,
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
      onKeyUp={(e: KeyboardEvent<HTMLInputElement>) => {
        onKeyUp({
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
