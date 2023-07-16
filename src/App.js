import "./App.css";
import { useWindowSize } from "./useWindowSize";
import backgroundImage from "./image/background.png";
import Info from "./Components/info/info";
import Startin from "./Components/startin/startin";
import Vestingschedule from "./Components/vestingschedule/vestingschedule";
import logo from "./image/logo.png";
import Popup from "./Components/popup/popup";
import connectbutton from "./image/connectbutton.png";

function App() {
  const { size } = useWindowSize({ gameWidth: 1920, gameHeight: 3405 });
  const { rotate, width, height, marginLeft, ratio } = size;

  return (
    <div
      id="root"
      className="container-screen mobile-rotater"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height,
        width,
        transform: `rotate(${rotate})`,
        marginLeft: marginLeft,
      }}
    >
      <Info />
      <Startin />
      <a>
        <img
          src={connectbutton}
          className="absolute"
          alt="connectbutton"
          style={{
            height: 76 * ratio,
            width: 386 * ratio,
            top: 2610 * ratio,
            left: 760 * ratio,
          }}
        />
      </a>
      <Vestingschedule />
      <Popup />

      <img
        src={logo}
        className="absolute"
        alt="logo"
        style={{
          height: 234 * ratio,
          width: 512 * ratio,
          top: 3150 * ratio,
          left: 700 * ratio,
        }}
      />
    </div>
  );
}

export default App;
