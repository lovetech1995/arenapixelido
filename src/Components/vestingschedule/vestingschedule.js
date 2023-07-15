import "../../App.css";
import React from 'react';
import { useWindowSize } from "../../useWindowSize";
import claim from './image/claimbutton.png'

const Vestingschedule = () => {
    const { size } = useWindowSize({ gameWidth: 1920, gameHeight: 3405 });
    const { ratio } = size;
    return (
        <div>
            <p className='absolute text ' style={{ fontSize: 60 * ratio, top: 2715 * ratio, left: 670 * ratio }} >VESTING SCHEDULE</p>
            <table className="absolute text-while" style={{ fontSize:23*ratio,height: 360 * ratio, width: 1500 * ratio, top: 2800 * ratio, left: 150 * ratio }} >
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Stage</td>
                        <td>Next vesting (UTC)</td>
                        <td>Amount</td>
                        <td><a><img src={claim} style={{height:36*ratio,width:112*ratio}} /></a></td>
                    </tr>
                    <tr>
                        <td>TGE</td>
                        <td>12:00:00, 17/07/2023</td>
                        <td>400 APX</td>
                        <td><a><img src={claim} style={{height:36*ratio,width:112*ratio}} /></a></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>12:00:00, 17/08/2023</td>
                        <td>150 APX</td>
                        <td><a><img src={claim} style={{height:36*ratio,width:112*ratio}} /></a></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>12:00:00, 17/09/2023</td>
                        <td>150 APX</td>
                        <td><a><img src={claim} style={{height:36*ratio,width:112*ratio}} /></a></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>12:00:00, 17/10/2023</td>
                        <td>150 APX</td>
                        <td><a><img src={claim} style={{height:36*ratio,width:112*ratio}} /></a></td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>12:00:00, 17/11/2023</td>
                        <td>150 APX</td>
                        <td><a><img src={claim} style={{height:36*ratio,width:112*ratio}} /></a></td>
                    </tr>
                </tbody>

            </table>
        </div>
    );
};

export default Vestingschedule;
