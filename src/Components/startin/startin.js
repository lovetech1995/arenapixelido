import "../../App.css";
import React from 'react';
import { useWindowSize } from "../../useWindowSize";
import squaretime from "./image/squaretime.png";
import connectbutton from "./image/connectbutton.png"


const StartIn = () => {
    const { size } = useWindowSize({ gameWidth: 1920, gameHeight: 3405 });
    const { ratio } = size;
    return (
        <div>
            <p className='absolute text' style={{ fontSize: 100 * ratio, top: 1990 * ratio, left: 710 * ratio }} >START - IN</p>
            <img src={squaretime} className='absolute' alt="webbuton" style={{ height: 129 * ratio, width: 758 * ratio, top: 2150 * ratio, left: 545 * ratio }} />
            <p id="day" className="absolute text" style={{ fontSize: 120 * ratio,top: 2140 * ratio, left: 585 * ratio }}>2</p>
            <p id="hour" className="absolute text" style={{ fontSize: 120 * ratio,top: 2140 * ratio, left: 800 * ratio }}>3</p>
            <p id="minute" className="absolute text" style={{ fontSize: 120 * ratio,top: 2140 * ratio, left: 1000 * ratio }}>3</p>
            <p id="second" className="absolute text" style={{ fontSize: 120 * ratio,top: 2140 * ratio, left: 1200  * ratio }}>3</p>
            <a><img src={connectbutton} className='absolute' alt="connectbutton" style={{ height: 76 * ratio, width: 386 * ratio, top: 2600 * ratio, left: 760 * ratio }} /></a>
            <table className="absolute text-while" style={{ height: 300 * ratio, width: 1500 * ratio, top: 2300 * ratio, left: 150 * ratio }} >
                
                    <tr>
                        <td>Data 1</td>
                        <td>Data 2</td>
                        <td>Data 3</td>
                        <td>Data 4</td>
                    </tr>
                    <tr>
                        <td>Data 4</td>
                        <td>Data 5</td>
                        <td>Data 6</td>
                        <td>Data 8</td>
                    </tr>
                    <tr>
                        <td>Data 1</td>
                        <td>Data 2</td>
                        <td>Data 3</td>
                        <td>Data 4</td>
                    </tr>
                    <tr>
                        <td>Data 4</td>
                        <td>Data 5</td>
                        <td>Data 6</td>
                        <td>Data 8</td>
                    </tr>
                
            </table>
        </div>
    );
};

export default StartIn;
