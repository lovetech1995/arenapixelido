import "./App.css";
import { useWindowSize } from "./useWindowSize";
import backgroundImage from "./image/background.png";
import Info from './Components/info/info'
import StartIn from './Components/startin/startin'
import Vestingschedule from './Components/vestingschedule/vestingschedule'
import logo from "./image/logo.png"

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
      <StartIn />
<Vestingschedule/>

      <img src={logo} className='absolute' alt="logo" style={{ height: 234 * ratio, width: 512 * ratio, top: 3150 * ratio, left: 700 * ratio }} />

    </div>
  );
}

export default App;
