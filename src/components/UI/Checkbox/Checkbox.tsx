import { CheckboxForm } from "../../Form/Form.types";
import "./checkbox.scss";

const Checkbox = ({ label, value, onChange }: CheckboxForm) => {
  return (
    <div className="checkbox">
      <label className="toggler-wrapper style-1">
        <input onChange={onChange} type="checkbox" value={value as string} />
        <div className="toggler-slider">
          <div className="toggler-knob"></div>
        </div>
      </label>
      <span>{label}</span>
    </div>
  );
};

export default Checkbox;
