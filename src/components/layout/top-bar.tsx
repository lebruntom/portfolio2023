import { useContext } from "react";
import { Context } from "../../store/store";

const TopBar: React.FC = () => {
  const [state, dispatch] = useContext(Context);

  return (
    <div className="topBar_container">
      Level {state.level.number} : {state.level.name}
    </div>
  );
};

export default TopBar;
