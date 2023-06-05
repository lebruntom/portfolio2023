import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { Context } from "../../store/store";
import { useState, useEffect, useContext } from "react";
const Network: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [state] = useContext(Context);

  const changeNetworkStatus = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, [state.site.basic]);

  const openGithub = () => {
    window.open("https://github.com/lebruntom", "_blank");
  };

  const openLinkedin = () => {
    window.open("https://www.linkedin.com/in/tom-lebrun/", "_blank");
  };

  return (
    <div className={isOpen ? "network_container" : "network_container_close"}>
      <div className="network">
        <FaGithub onClick={openGithub} className="icon" />
        <FaLinkedin onClick={openLinkedin} className="icon" />
      </div>
      <div onClick={changeNetworkStatus} className="flex">
        {isOpen ? <HiChevronLeft /> : <HiChevronRight />}
      </div>
    </div>
  );
};

export default Network;
