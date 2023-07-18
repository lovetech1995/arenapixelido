import "./App.css";
import React, { useEffect, useState } from "react";
import { useWindowSize } from "./useWindowSize";
import backgroundImage from "./image/background.png";
import Info from "./Components/info/info";
import Startin from "./Components/startin/startin";
import { Vestingschedule } from "./Components/vestingschedule/vestingschedule";
import logo from "./image/logo.png";
import connectbutton from "./image/connectbutton.png";
import purchaseButton from "./image/purchaseButton.png";
import { PurchaseModal } from "./Components/popup/popup";
import { getStartTime, getEndTime } from "./hooks/getPaymentTime";

function App() {
  const { size } = useWindowSize({ gameWidth: 1920, gameHeight: 3405 });
  const { rotate, width, height, marginLeft, ratio } = size;

 
  const [walletAddress, setWalletAddress] = useState("");
  const [boughtSlots, setBoughtSlots] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [startTimePayment, setStartTimePayment] = useState("");
  const [endTimePayment, setEndTimePayment] = useState("");

  const connectWallet = async () => {
    let provider = window.ethereum;

    if (typeof provider !== "undefined") {
      provider
        .request({ method: "eth_requestAccounts" })
        .then((accounts) => {
          setWalletAddress(accounts[0]);
          console.log(`Selected account is ${walletAddress}`);
        })
        .catch((err) => {
          console.log(err);
          return;
        });

      window.ethereum.on("accountsChanged", function (accounts) {
        setWalletAddress(accounts[0]);
        console.log(`Selected account changed to ${walletAddress}`);
      });
    }
  };

  const fetchTime = async () => {
    const startTime = await getStartTime();
    const endTime = await getEndTime();
    setStartTimePayment(startTime);
    setEndTimePayment(endTime);
    
  };

  const isTimeBuy = async () => {
    await fetchTime();
    const currentTime = new Date().getTime() / 1000;
    if (startTimePayment && currentTime < startTimePayment) {
      alert("You can't buy before IDO time");
      return false;
    }
    if (endTimePayment && currentTime > endTimePayment) {
      alert("IDO time is finished");
      return false;
    }
    return true;
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleBoughtSlots = (slots) => {
    setBoughtSlots(slots);
  };

  const handleTimeBuy = async () => {
    const isTime = await isTimeBuy();
    if (isTime) {
      handleOpenModal();
    }
  };

  useEffect(() => {
    connectWallet();
  });

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
      <Startin slots={boughtSlots} />
      {walletAddress ? (
        <a className="button" onClick={handleTimeBuy}>
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
      ;
      <Vestingschedule wallet={walletAddress} />
      <PurchaseModal
        isOpened={modalOpen}
        wallet={walletAddress}
        onUpdateSlots={handleBoughtSlots}
        onClose={handleCloseModal}
      />
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
