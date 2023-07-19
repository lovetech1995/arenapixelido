import "./App.css";
import React, { useEffect, useState, useCallback } from "react";
import { useWindowSize } from "./useWindowSize";
import backgroundImage from "./image/background.png";
import Info from "./Components/info/info";
import Startin from "./Components/startin/startin";
import { Vestingschedule } from "./Components/vestingschedule/vestingschedule";
import detectEthereumProvider from "@metamask/detect-provider";
import web3 from "web3";
import logo from "./image/logo.png";
import connectbutton from "./image/connectbutton.png";
import purchaseButton from "./image/purchaseButton.png";
import { PurchaseModal } from "./Components/popup/popup";
import { getStartTime, getEndTime } from "./hooks/getPaymentTime";

function App() {
  const { size } = useWindowSize({ gameWidth: 1920, gameHeight: 1080 });
  const { rotate, width, height, marginLeft, ratio } = size;
  const [provider, setProvider] = useState(null);
  const [isnetWork, setIsNetwork] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [boughtSlots, setBoughtSlots] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [startTimePayment, setStartTimePayment] = useState("");
  const [endTimePayment, setEndTimePayment] = useState("");

  const connectWallet = useCallback(() => {
    if (provider) {
      provider
        .request({ method: "eth_requestAccounts" })
        .then((accounts) => {
          setWalletAddress(accounts[0]);
          console.log(`Selected account is ${walletAddress}`);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [provider]);

  const switchNetwork = useCallback(() => {
    if (window.ethereum.networkVersion !== 97) {
      try {
        window.ethereum
          .request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: web3.utils.toHex(97) }],
          })
          .then(() => {
            connectWallet();
            setIsNetwork(true);
            // window.location.reload();
          });
      } catch (err) {
        setIsNetwork(false);
      }
    } else {
      connectWallet();
      setIsNetwork(true);
    }
  }, [connectWallet]);

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
      console.log("startTimePayment", startTimePayment);
      alert("You can't buy before IDO time");
      return false;
    }
    // else if (endTimePayment && currentTime > endTimePayment) {
    //   console.log("endTimePayment", endTimePayment);
    //   // alert("IDO time is finished");
    //   return false;
    // }
    return true;
  };

  const isEndedIdo = async () => {
    await fetchTime();
    const currentTime = new Date().getTime() / 1000;
    if (endTimePayment && currentTime > endTimePayment) {
      console.log("endTimePayment", endTimePayment);
      return true;
    }
    return false;
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

  const detectProvider = useCallback(() => {
    detectEthereumProvider().then((provider) => {
      if (provider) {
        setProvider(provider);
      } else {
        alert("Please install metamask");
      }
    });
  }, []);

  // ------------- use effect--------------//

  useEffect(() => {
    detectProvider();
  }, []);

  useEffect(() => {
    if (provider) {
      switchNetwork();

      provider.on("accountsChanged", function (accounts) {
        setWalletAddress(accounts[0]);
        console.log(`Selected account changed to ${walletAddress}`);
      });
    }
  }, [connectWallet, provider]);

  const renderBackground = () => {
    return (
      <div
        className="container-screen"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          width,
          height: 2801 * ratio,
        }}
      ></div>
    );
  };

  return (
    <div
      id="root"
      className="container-screen mobile-rotater"
      style={{
        overflowX: "auto",
        height,
        width,
        transform: `rotate(${rotate})`,
        marginLeft: marginLeft,
      }}
    >
      {renderBackground()}
      <Info />
      <Startin isnetWork={isnetWork} slots={boughtSlots} />
      {walletAddress ? (
        !isEndedIdo() ? (
          <a className="button" onClick={handleTimeBuy}>
            <img
              src={purchaseButton}
              className="absolute"
              alt="purchase"
              style={{
                height: 76 * ratio,
                width: 386 * ratio,
                top: 2310 * ratio,
                left: 760 * ratio,
              }}
            />
          </a>
        ) : (
          <a></a>
        )
      ) : (
        <a>
          <img
            src={connectbutton}
            className="absolute"
            alt="connectbutton"
            style={{
              height: 76 * ratio,
              width: 386 * ratio,
              top: 2310 * ratio,
              left: 760 * ratio,
            }}
            onClick={connectWallet}
          />
        </a>
      )}

      <Vestingschedule isnetWork={isnetWork} wallet={walletAddress} />
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
          top: 2850 * ratio,
          left: 700 * ratio,
        }}
      />
    </div>
  );
}

export default App;
