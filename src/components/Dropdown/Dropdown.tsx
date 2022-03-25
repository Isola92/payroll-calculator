import { FormEntity } from "../../definitions/Entity";
import React, { ChangeEvent } from "react";
import { FormAction } from "../../definitions/Actions";

interface DropdownProps extends FormEntity {
  selectableValues: string[] | number[];
  onChange: (a: FormAction) => void;
  className: string;
}

//TODO: React wants me to use defaultValue instead of the selected attribute for the placeholder.
// But this breaks the "required" validation doesn't work since the defaultValue is interpeted as an actual value.
// Solution? Not sure but would probably move to controlled forms anyway if this was a serious component library.
export const DropDown = ({
  className,
  entityKey,
  selectableValues,
  onChange,
  name,
  testId,
}: DropdownProps) => {
  return (
    <select
      className={`drop-down ${className}`}
      name={entityKey}
      data-test-id={testId}
      onChange={(e: ChangeEvent<HTMLSelectElement>) => {
        onChange({
          entity: entityKey,
          type: "VALUE_CHANGED",
          value: e.currentTarget.value,
        });
      }}
      required={true}
    >
      <option value="" disabled selected>
        {name}
      </option>
      {selectableValues.map((x, i) => (
        <option key={i} value={x}>
          {x}
        </option>
      ))}
      ;
    </select>
  );
};
