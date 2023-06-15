export interface CheckboxForm {
  label: string;
  value: boolean | string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
