 
import './App.css';
import { useWindowSize } from "./useWindowSize";
import backgroundImage from './image/background.png'

function App() {
  const { size } = useWindowSize({ gameWidth: 1920, gameHeight: 3405 });
  const { ratio,rotate,marginLeft} = size;         
  return (
    <div id="root" className="background mobile-rotater " style={{ backgroundImage: `url(${backgroundImage})`, height:3405 * ratio, width: 1920 * ratio, transform: `rotate(${rotate})`,marginLeft:marginLeft }} >
     
    </div>
  );
}

export default App;
