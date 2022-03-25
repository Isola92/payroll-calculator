export type FormActions = FormAction | FormSubmit;

export interface FormAction {
  type: "VALUE_CHANGED";
  entity: string;
  value: any;
}

export interface FormSubmit {
  type: "FORM_SUBMIT";
}
