import "../../App.css";
import React, { useEffect, useState } from "react";
import { useWindowSize } from "../../useWindowSize";
import squaretime from "./image/squaretime.png";
import { getStartTime, getEndTime } from "../../hooks/getPaymentTime";
import { getBoughtSlots } from "../../hooks/getBoughtSlot";

const Startin = ({ slots }) => {
  const { size } = useWindowSize({ gameWidth: 1920, gameHeight: 3405 });
  const { ratio } = size;

  const [isLoading, setIsLoading] = useState(true);
  const [startTimePayment, setStartTimePayment] = useState("");
  const [endTimePayment, setEndTimePayment] = useState("");
  const [boughtSlots, setBoughtSlots] = useState(0);

  const fetchInformations = async () => {
    try {
      // const startTime = await getStartTime();
      // setStartTimePayment(startTime);
      // const endTime = await getEndTime();
      // setEndTimePayment(endTime);
      handleBoughtSlots();
      setIsLoading(false);
    } catch (error) {
      // Handle error
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchStartTimePayment = async () => {
      try {
        const startTime = await getStartTime();
        setStartTimePayment(startTime);
      } catch (error) {
        console.error("Error fetching startTimePayment:", error);
      }
    };

    fetchStartTimePayment();
  }, []);

  useEffect(() => {
    const fetchEndTimePayment = async () => {
      try {
        const startTime = await getEndTime();
        setEndTimePayment(startTime);
      } catch (error) {
        console.error("Error fetching endTimePayment:", error);
      }
    };

    fetchEndTimePayment();
  }, []);

  const handleBoughtSlots = async () => {
    const boughtSlots = await getBoughtSlots();
    setBoughtSlots(boughtSlots);
  };

  useEffect(() => {
    handleBoughtSlots();
  }, [slots]);

  useEffect(() => {
    fetchInformations();
  }, []);

  useEffect(() => {
    const targetDate = "2023-07-19T11:00:00";
    // isLoading ?? startTimePayment
    // const targetDate = startTimePayment; //11249560
    countdown(targetDate);
  }, []);

  function countdown(targetDate) {
    const now = new Date().getTime();
    const endDate = new Date(targetDate).getTime();
    const distance = endDate - now;

    if (distance <= 0) {
      console.log("Time out!");
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("day").innerText = days;
    document.getElementById("hour").innerText = hours;
    document.getElementById("minute").innerText = minutes;
    document.getElementById("second").innerText = seconds;

    // Chờ 1 giây và gọi lại hàm countdown
    setTimeout(() => {
      countdown(targetDate);
    }, 1000);
  }

  return (
    <div>
      <p
        className="absolute text"
        style={{ fontSize: 100 * ratio, top: 1690 * ratio, left: 710 * ratio }}
      >
        START - IN
      </p>
      <img
        src={squaretime}
        className="absolute"
        alt="webbuton"
        style={{
          height: 129 * ratio,
          width: 758 * ratio,
          top: 1850 * ratio,
          left: 545 * ratio,
        }}
      />
      <p
        id="day"
        className="absolute text boder"
        style={{
          height: 126 * ratio,
          width: 142 * ratio,
          fontSize: 80 * ratio,
          top: 1850 * ratio,
          left: 546 * ratio,
        }}
      >
        2
      </p>
      <p
        id="daytext"
        className="absolute text boder"
        style={{
          height: 35 * ratio,
          width: 142 * ratio,
          fontSize: 30 * ratio,
          top: 1940 * ratio,
          left: 545 * ratio,
        }}
      >
        Day
      </p>
      <p
        id="hour"
        className="absolute text boder "
        style={{
          height: 126 * ratio,
          width: 142 * ratio,
          fontSize: 80 * ratio,
          top: 1850 * ratio,
          left: 750 * ratio,
        }}
      >
        3
      </p>
      <p
        id="hourtext"
        className="absolute text boder"
        style={{
          height: 35 * ratio,
          width: 142 * ratio,
          fontSize: 30 * ratio,
          top: 1940 * ratio,
          left: 750 * ratio,
        }}
      >
        Hour
      </p>
      <p
        id="minute"
        className="absolute text boder"
        style={{
          height: 126 * ratio,
          width: 142 * ratio,
          fontSize: 80 * ratio,
          top: 1850 * ratio,
          left: 954 * ratio,
        }}
      >
        3
      </p>
      <p
        id="minutetext"
        className="absolute text boder"
        style={{
          height: 35 * ratio,
          width: 142 * ratio,
          fontSize: 30 * ratio,
          top: 1940 * ratio,
          left: 954 * ratio,
        }}
      >
        Minute
      </p>
      <p
        id="second"
        className="absolute text boder boder"
        style={{
          height: 126 * ratio,
          width: 142 * ratio,
          fontSize: 80 * ratio,
          top: 1850 * ratio,
          left: 1158 * ratio,
        }}
      >
        3
      </p>
      <p
        id="secondtext"
        className="absolute text boder"
        style={{
          height: 35 * ratio,
          width: 142 * ratio,
          fontSize: 30 * ratio,
          top: 1940 * ratio,
          left: 1158 * ratio,
        }}
      >
        Second
      </p>
      {/* {walletAddress ? (
        <a>
          <img
            src={purchaseButton}
            className="absolute"
            alt="purchase"
            style={{
              height: 76 * ratio,
              width: 386 * ratio,
              top: 2610 * ratio,
              left: 760 * ratio,
            }}
            onClick={connectWallet}
          />
        </a>
      ) : (
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
            onClick={connectWallet}
          />
        </a>
      )}
      ; */}
      <table 
        className="absolute text-while custom-table"
        style={{
          fontSize: 30 * ratio,
          height: 300 * ratio,
          width: 1500 * ratio,
          top: 2000 * ratio,
          left: 150 * ratio,
        }}
      >
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
            <td className="text-left">Total</td>
            <td className="text-right">4,000,000 APX</td>
            <td className="text-right" > <p  className="let-right">Token Name</p></td>
            <td className="text-right">Arena Pixel</td>
          </tr>
          <tr>
            <td className="text-left">Allwance</td>
            <td className="text-right">4000 slots</td>
            <td className="text-right"><p  className="let-right">Symbol</p></td>
            <td className="text-right">APX</td>
          </tr>
          <tr>
            <td className="text-left">Purchased</td>
            {isLoading ? (
              <td className="text-right">Loading...</td>
            ) : (
              <td className="text-right">{boughtSlots.toString()}</td>
            )}
            <td  className="text-right"><p  className="let-right">Contract</p></td>
            <td className="text-right">
              <a  href="https://testnet.bscscan.com/address/0x875fb712e8f6d3c52ea0c0680a8368ff5d2ff85b" className="text-hiden" target="_blank">0x875fb...ff85b</a>
            </td>
          </tr>
          <tr>
            <td className="text-left">Available</td>
            {isLoading ? (
              <td className="text-right">Loading...</td>
            ) : (
              <td className="text-right">{(4000 - boughtSlots).toString()}</td>
            )}
            <td className="text-right" ><p  className="let-right">Allocating per slot</p></td>
            <td className="text-right">50 USDT ~ 1000 APX</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Startin;
