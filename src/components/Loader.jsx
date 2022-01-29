import { BallTriangle, Oval } from "react-loader-spinner";
import "../styles/loader.css";

const Loader = ({ type, color, width, height }) => {
  const props = {
    color: color || "#ff5e00",
    height: height || 80,
    width: width || 80,
  };

  return (() => {
    switch (type) {
      case "oval":
        return (
          <div className="loader">
            <Oval {...props} />
          </div>
        );
      default:
        return (
          <div className="loader full__screen flex-full-center">
            <BallTriangle {...props} />
          </div>
        ); //full screen loader
    }
  })();
};

export default Loader;
