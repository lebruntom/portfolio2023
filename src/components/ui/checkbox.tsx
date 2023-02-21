import React, { useContext } from "react";
import { Context } from "../../store/store";
// import "./settings.css";

interface CheckboxInterface {
  id: string;
  onChange: () => void;
  checked?: boolean;
}

const Checkbox: React.FC<CheckboxInterface> = ({ ...props }) => {
  const [state, dispatch] = useContext(Context);

  const { onChange, id, checked } = props;
  // console.log(checked);
  const trfdue = true;
  return (
    <div>
      <input
        id={id}
        className="switchInput"
        type="checkbox"
        onChange={onChange}
        checked={checked ? true : false}
      />
      <label
        htmlFor={id}
        className={
          state.level.number === 1 && !state.site.basic
            ? "switch pulse"
            : "switch"
        }
      ></label>
    </div>
  );
};

export default Checkbox;
