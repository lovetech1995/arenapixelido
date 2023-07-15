import "../../App.css";
import React from 'react';
import { useWindowSize } from "../../useWindowSize";

const Vestingschedule = () => {
    const { size } = useWindowSize({ gameWidth: 1920, gameHeight: 3405 });
    const { ratio } = size;
    return (
        <div>
             <p className='absolute text ' style={{ fontSize: 60 * ratio, top: 2730 * ratio, left: 670 * ratio }} >VESTING SCHEDULE</p>
            <table className="absolute text-while" style={{ height: 300 * ratio, width: 1500 * ratio, top: 2850 * ratio, left: 150 * ratio }} >
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

export default Vestingschedule;
