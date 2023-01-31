import React, { useState, useContext } from "react";
import { Context } from "../../../store/store";
import Checkbox from "../../ui/checkbox";
// import "./settings.css";
const Settings: React.FC = () => {
  const [state, dispatch] = useContext(Context);

  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
    dispatch({
      type: "changeSiteStatus",
      payload: {
        basic: !state.site.basic,
      },
    });
  };
  return (
    <div className="settings_fixed">
      <Checkbox
        id={"networkView-showDetails"}
        onChange={handleChange}
        checked={state.site.basic}
      />
    </div>
  );
};

export default Settings;
