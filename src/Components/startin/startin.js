import React, { useEffect, useState } from "react";
import { useWindowSize } from "../../useWindowSize";
import squaretime from "./image/squaretime.png";
// import connectbutton from "./image/connectbutton.png";
// import purchaseButton from "./image/purchaseButton.png";
import { getStartTime, getEndTime } from "../../hooks/getPaymentTime";
import { getBoughtSlots } from "../../hooks/getBoughtSlot";
// import { getApprove } from "../../hooks/getApprove";
// import { buyIdo } from "../../hooks/buyIdo";
// import Popup from "../popup/popup";

const Startin = ({ slots }) => {
  const { size } = useWindowSize({ gameWidth: 1920, gameHeight: 3405 });
  const { ratio } = size;

  const [walletAddress, setWalletAddress] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [startTimePayment, setStartTimePayment] = useState("");
  const [endTimePayment, setEndTimePayment] = useState("");
  const [boughtSlots, setBoughtSlots] = useState(0);
  // const [approved, setApproved] = useState(false);

  // const connectWallet = async () => {
  //   let provider = window.ethereum;

  //   if (typeof provider !== "undefined") {
  //     provider
  //       .request({ method: "eth_requestAccounts" })
  //       .then((accounts) => {
  //         setWalletAddress(accounts[0]);
  //         console.log(`Selected account is ${walletAddress}`);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         return;
  //       });

  //     window.ethereum.on("accountsChanged", function (accounts) {
  //       setWalletAddress(accounts[0]);
  //       console.log(`Selected account changed to ${walletAddress}`);
  //     });
  //   }
  //   // setInitial(true);
  // };

  const fetchInformations = async () => {
    try {
      const startTime = await getStartTime();
      setStartTimePayment(startTime);
      const endTime = await getEndTime();
      setEndTimePayment(endTime);
      handleBoughtSlots();
      setIsLoading(false);
    } catch (error) {
      // Handle error
      setIsLoading(false);
    }
  };

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
    const targetDate = "2023-12-31T23:59:59";
    // isLoading ?? startTimePayment
    // const targetDate = startTimePayment; //11249560
    countdown(targetDate);
  }, []);

  function countdown(targetDate) {
    // Lấy ngày giờ hiện tại
    const now = new Date().getTime();

    // Lấy ngày giờ đích đến
    const endDate = new Date(targetDate).getTime();

    // Tính toán thời gian còn lại từ ngày giờ hiện tại đến endDate
    const distance = endDate - now;

    // Kiểm tra xem thời gian đã hết hay chưa
    if (distance <= 0) {
      console.log("Đã hết thời gian!");
      return;
    }

    // Tính toán số ngày, giờ, phút, giây còn lại
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
        style={{ fontSize: 100 * ratio, top: 1990 * ratio, left: 710 * ratio }}
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
          top: 2150 * ratio,
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
          top: 2150 * ratio,
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
          top: 2240 * ratio,
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
          top: 2150 * ratio,
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
          top: 2240 * ratio,
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
          top: 2150 * ratio,
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
          top: 2240 * ratio,
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
          top: 2150 * ratio,
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
          top: 2240 * ratio,
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
        className="absolute text-while"
        style={{
          fontSize: 30 * ratio,
          height: 300 * ratio,
          width: 1500 * ratio,
          top: 2300 * ratio,
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
            <td>Total</td>
            <td>4,000,000 APX</td>
            <td>Token Name</td>
            <td>Arena Pixel</td>
          </tr>
          <tr>
            <td>Allwance</td>
            <td>4000 slots</td>
            <td>Symbol</td>
            <td>APX</td>
          </tr>
          <tr>
            <td>Purchased</td>
            {isLoading ? (
              <td>Loading...</td>
            ) : (
              <td>{boughtSlots.toString()}</td>
            )}
            <td>Contract</td>
            <td>
              <a>df68g...dhg5b</a>
            </td>
          </tr>
          <tr>
            <td>Available</td>
            {isLoading ? (
              <td>Loading...</td>
            ) : (
              <td>{(4000 - boughtSlots).toString()}</td>
            )}
            <td>Allocating per slot</td>
            <td>50 USDT ~ 1000 APX</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Startin;
