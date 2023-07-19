import "../../App.css";
import React, { useEffect, useState } from "react";
import { useWindowSize } from "../../useWindowSize";
import squaretime from "./image/squaretime.png";
import copy from "./image/copy.png";
import success from "./image/success.png";
import { getStartTime, getEndTime } from "../../hooks/getPaymentTime";
import { getBoughtSlots } from "../../hooks/getBoughtSlot";

const Startin = ({ isnetWork, slots }) => {
  const { size } = useWindowSize({ gameWidth: 1920, gameHeight: 3405 });
  const { ratio } = size;

  const [isLoading, setIsLoading] = useState(true);
  const [startTimePayment, setStartTimePayment] = useState("");
  const [endTimePayment, setEndTimePayment] = useState("");
  const [boughtSlots, setBoughtSlots] = useState(0);

  const currentTime = new Date().getTime() / 1000;

  // const fetchInformations = async () => {
  //   try {
  //     // const startTime = await getStartTime();
  //     // setStartTimePayment(startTime);
  //     // const endTime = await getEndTime();
  //     // setEndTimePayment(endTime);
  //     // handleBoughtSlots();
  //     setIsLoading(false);
  //   } catch (error) {
  //     // Handle error
  //     setIsLoading(false);
  //   }
  // };

  useEffect(() => {
    if (isnetWork) {
      const fetchStartTimePayment = async () => {
        try {
          const startTime = await getStartTime();
          setStartTimePayment(startTime);
        } catch (error) {
          console.error("Error fetching startTimePayment:", error);
        }
      };

      fetchStartTimePayment();
    }
  }, [isnetWork]);

  useEffect(() => {
    if (isnetWork) {
      const fetchEndTimePayment = async () => {
        try {
          const startTime = await getEndTime();
          setEndTimePayment(startTime);
        } catch (error) {
          console.error("Error fetching endTimePayment:", error);
        }
      };

      fetchEndTimePayment();
    }
  }, [isnetWork]);

  const handleBoughtSlots = async () => {
    const boughtSlots = await getBoughtSlots();
    if (boughtSlots) {
      setBoughtSlots(boughtSlots);
      setIsLoading(false);
    }
  };

  const isTimeBuy = () => {
    if (
      startTimePayment &&
      endTimePayment &&
      currentTime > startTimePayment &&
      currentTime < endTimePayment
    ) {
      return true;
    }
    return false;
  };

  const beforeTimeBuy = () => {
    if (startTimePayment && currentTime < startTimePayment) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (isnetWork) {
      handleBoughtSlots();
    }
  }, [isnetWork, slots]);

  useEffect(() => {
    if (isnetWork) {
      beforeTimeBuy();
      isTimeBuy();
    }
  }, [isnetWork, currentTime]);

  useEffect(() => {
    // const startDate = "2023-07-19T11:00:00";
    // const endDate = "2023-07-20T11:00:00";
    if (isnetWork) {
      const startDate = parseInt(startTimePayment);
      console.log({ currentTime });
      const endDate = parseInt(endTimePayment);
      // isLoading ?? startTimePayment
      // const targetDate = startTimePayment; //11249560
      if (currentTime < startTimePayment) {
        countdownStart(startDate);
      } else if (currentTime < endTimePayment) {
        console.log({ currentTime });
        console.log({ endTimePayment });
        countdownEnd(endDate);
      }
    }
  }, [isnetWork, currentTime]);

  function countdownStart(targetDate) {
    const now = new Date().getTime() / 1000;
    const endDate = targetDate * 1000;
    const distance = endDate - endDate;

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
      countdownStart(targetDate);
    }, 1000);
  }

  function countdownEnd(targetDate) {
    const now = new Date().getTime();
    const endDate = targetDate * 1000;
    const distance = endDate - now;
    console.log({ distance });

    if (distance <= 0) {
      console.log("Time out!");
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    console.log({ days });
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
      countdownEnd(targetDate);
    }, 1000);
  }

  // Đảm bảo DOM đã được tải hoàn toàn trước khi gán sự kiện lắng nghe
  function copyToClipboard(textToCopy) {
    // Tạo một phần tử input tạm thời để chứa nội dung cần sao chép
    var tempInput = document.createElement("input");
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);

    // Chọn toàn bộ nội dung trong input tạm thời
    tempInput.select();

    // Sao chép nội dung vào clipboard
    document.execCommand("copy");

    // Xóa input tạm thời
    document.body.removeChild(tempInput);
}




  return (
    <div>
      {console.log({ beforeTimeBuy })}
      {beforeTimeBuy() === true ? (
        <p
          className="absolute text"
          style={{
            fontSize: 65 * ratio,
            top: 850 * ratio,
            left: 795 * ratio,
            fontStyle:"italic"
          }}
        >
          START - IN
        </p>
      ) : (
        <p
          className="absolute text"
          style={{
            fontSize: 65 * ratio,
            top: 850 * ratio,
            left: 820 * ratio,
            fontStyle:"italic"
          }}
        >
          END - IN
        </p>
      )}
      <p
        className="absolute text"
        style={{
          fontSize: 65 * ratio,
          top: 850 * ratio,
          left: 820 * ratio,
          fontStyle:"italic"
        }}
      ></p>
      <img
        src={squaretime}
        className="absolute"
        alt="webbuton"
        style={{
          height: 103 * ratio,
          width: 558 * ratio,
          top: 960 * ratio,
          left: 660 * ratio,
        }}
      />
      <p
        id="day"
        className="absolute text boder"
        style={{
          height: 70 * ratio,
          width: 103 * ratio,
          fontSize: 60 * ratio,
          top: 960 * ratio,
          left: 660 * ratio,
        }}
      >
        0
      </p>
      <p
        id="daytext"
        className="absolute text boder"
        style={{
          height: 30 * ratio,
          width: 103 * ratio,
          fontSize: 25 * ratio,
          top: 1030 * ratio,
          left: 660 * ratio,
        }}
      >
        Day
      </p>
      <p
        id="hour"
        className="absolute text boder "
        style={{
          height: 70 * ratio,
          width: 103 * ratio,
          fontSize: 60 * ratio,
          top: 960 * ratio,
          left: 810 * ratio,
        }}
      >
        0
      </p>
      <p
        id="hourtext"
        className="absolute text boder"
        style={{
          height: 30 * ratio,
          width: 103 * ratio,
          fontSize: 25 * ratio,
          top: 1030 * ratio,
          left: 810 * ratio,
        }}
      >
        Hour
      </p>
      <p
        id="minute"
        className="absolute text boder"
        style={{
          height: 70 * ratio,
          width: 103 * ratio,
          fontSize: 60 * ratio,
          top: 960 * ratio,
          left: 961 * ratio,
        }}
      >
        0
      </p>
      <p
        id="minutetext"
        className="absolute text boder"
        style={{
          height: 30 * ratio,
          width: 103 * ratio,
          fontSize: 25 * ratio,
          top: 1030 * ratio,
          left: 961 * ratio,
        }}
      >
        Minute
      </p>
      <p
        id="second"
        className="absolute text boder boder"
        style={{
          height: 70 * ratio,
          width: 103 * ratio,
          fontSize: 60 * ratio,
          top: 960 * ratio,
          left: 1112 * ratio,
        }}
      >
        0
      </p>
      <p
        id="secondtext"
        className="absolute text boder"
        style={{
          height: 30 * ratio,
          width: 103 * ratio,
          fontSize: 25 * ratio,
          top: 1030 * ratio,
          left: 1112 * ratio,
        }}
      >
        Second
      </p>

      <table
        className="absolute text-while custom-table"
        style={{
          fontSize: 26 * ratio,
          height: 400 * ratio,
          width: 1050 * ratio,
          top: 1150 * ratio,
          left: 430 * ratio,
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
            <td className="text-right">
              {" "}
              <p className="let-right">Token Name</p>
            </td>
            <td className="text-right">Arena Pixel</td>
          </tr>
          <tr>
            <td className="text-left">Allwance</td>
            <td className="text-right">4000 slots</td>
            <td className="text-right">
              <p className="let-right">Symbol</p>
            </td>
            <td className="text-right">APX</td>
          </tr>
          <tr>
            <td className="text-left">Purchased</td>
            {isLoading ? (
              <td className="text-right">Loading...</td>
            ) : (
              <td className="text-right">{boughtSlots.toString()} slots</td>
            )}
            <td className="text-right">
              <p className="let-right">Contract</p>
            </td>
            <td className="text-right">
              
             <a
                href="https://testnet.bscscan.com/address/0x875fb712e8f6d3c52ea0c0680a8368ff5d2ff85b"
                className="text-hiden"
                target="_blank"
                style={{paddingRight:10*ratio}}
              >
                0x875fb...ff85b
              </a>
              <button onClick={copyToClipboard('0x875fb712e8f6d3c52ea0c0680a8368ff5d2ff85b') } style={{backgroundColor:'transparent'}}> <img id="copyimg" className="button" src={copy} style={{height:20*ratio,width:20*ratio}} /> </button>
            </td>
          </tr>
          <tr>
            <td className="text-left">Available</td>
            {isLoading ? (
              <td className="text-right">Loading...</td>
            ) : (
              <td className="text-right">
                {(4000 - boughtSlots).toString()} APX
              </td>
            )}
            <td className="text-right">
              <p className="let-right">Allocating per slot</p>
            </td>
            <td className="text-right">50 USDT ~ 1000 APX</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Startin;
