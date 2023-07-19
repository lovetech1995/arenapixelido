import "../../App.css";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import backgroudPop from "./image/backgroud.png";
import textfield from "./image/FRAME.png";
import plusbt from "./image/plus.png";
import minusbt from "./image/minus.png";
import bt from "./image/bt.png";
import { useWindowSize } from "../../useWindowSize";
import { buyIdo } from "../../hooks/buyIdo";
import { getApprove } from "../../hooks/getApprove";
import { getBoughtSlots } from "../../hooks/getBoughtSlot";
const web3 = require("web3");

export const PurchaseModal = ({ isOpened, wallet, onUpdateSlots, onClose }) => {
  const [approved, setApproved] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [boughtQuantity, setBoughtQuantity] = useState(1);
  const [received, setReceived] = useState("");
  const [price, setPrice] = useState("");

  const { size } = useWindowSize({ gameWidth: 1920, gameHeight: 3405 });
  const { ratio } = size;

  useEffect(() => {
    handleReceivePrice(boughtQuantity);
  }, [wallet, boughtQuantity]);

  const handleMinusClick = async (check) => {
    var number = document.getElementById("number").innerText;
    if (check === true && number < 10) {
      document.getElementById("number").innerText = parseInt(number) + 1;
    } else if (check === false && number > 1) {
      document.getElementById("number").innerText = parseInt(number) - 1;
    }
    setBoughtQuantity((prevQuantity) =>
      check === true && prevQuantity < 10
        ? prevQuantity + 1
        : check === false && prevQuantity > 1
        ? prevQuantity - 1
        : prevQuantity
    );
  };

  const handleReceivePrice = async (number) => {
    const quantity = parseInt(number);
    setPrice(`${quantity * 50} USD`);
    setReceived(`${quantity * 1000} APX`);
  };

  const handleApprove = async (amount) => {
    console.log("amount", amount);
    console.log("wallet", wallet);
    return await getApprove(wallet, amount);
  };

  const handleBuyIDO = async () => {
    setIsProcessing(true);
    const quantity = document.getElementById("number").innerText;
    const quantityInt = parseInt(quantity);
    console.log("quantityInt", quantityInt);
    const value = quantity * 50;
    const valueInWei = web3.utils.toWei(value, "ether");
    try {
      await handleApprove(valueInWei);
      await buyIdo(wallet, quantity);
      await handleBoughtSlots();
      setIsProcessing(false);
      onClose();
    } catch (err) {
      console.log(err);
      setIsProcessing(false);
    }
  };

  const handleBoughtSlots = async () => {
    const slots = await getBoughtSlots();
    onUpdateSlots(slots);
  };

  return (
    <div>
      <Modal
        keepMounted
        open={isOpened}
        onClose={onClose}
        style={{ pointerEvents: isOpened ? "auto" : "none" }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 1175 * ratio,
            height: 569 * ratio,
            backgroundImage: `url(${backgroudPop})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            outline:"none",
          }}
        >
          <Typography
            id="quantity"
            className="text-bold absolute"
            style={{
              fontSize: 50 * ratio,
              top: 210 * ratio,
              left: 135 * ratio,
            }}
            variant="h3"
            component="h2"
          >
            Quantity(slots)
          </Typography>

          <a className="button" onClick={() => handleMinusClick(false)}>
            <img
              src={minusbt}
              className="absolute"
              alt="minusbt"
              style={{
                height: 56 * ratio,
                width: 57 * ratio,
                top: 210 * ratio,
                left: 640 * ratio,
              }}
            />
          </a>

          <img
            src={textfield}
            className="absolute"
            alt="textfield"
            style={{
              height: 62 * ratio,
              width: 334 * ratio,
              top: 205 * ratio,
              left: 710 * ratio,
            }}
          />

          <a className="button" onClick={() => handleMinusClick(true)}>
            <img
              src={plusbt}
              className="absolute"
              alt="plusbt"
              style={{
                height: 56 * ratio,
                width: 57 * ratio,
                top: 210 * ratio,
                left: 1055 * ratio,
              }}
            />{" "}
          </a>

          <Typography
            id="number"
            className="text-bold absolute"
            style={{
              fontSize: 50 * ratio,
              top: 210 * ratio,
              left: 860 * ratio,
            }}
            variant="h3"
            component="h2"
          >
            1
          </Typography>

          <Typography
            id="receive"
            className="text-bold absolute"
            style={{
              fontSize: 50 * ratio,
              top: 350 * ratio,
              left: 135 * ratio,
            }}
            variant="h3"
            component="h2"
          >
            Receive:
          </Typography>

          <Typography
            id="receiveNumber"
            className="text-bold absolute"
            style={{
              fontSize: 50 * ratio,
              top: 350 * ratio,
              left: 330 * ratio,
            }}
            variant="h3"
            component="h2"
          >
            {received}
          </Typography>

          <Typography
            id="price"
            className="text-bold absolute"
            style={{
              fontSize: 50 * ratio,
              top: 350 * ratio,
              left: 680 * ratio,
            }}
            variant="h3"
            component="h2"
          >
            Price:
          </Typography>

          <Typography
            id="receive"
            className="text-bold absolute"
            style={{
              fontSize: 50 * ratio,
              top: 350 * ratio,
              left: 820 * ratio,
            }}
            variant="h3"
            component="h2"
          >
            {price}
          </Typography>

          <a className="button">
            <img
              src={bt}
              className="absolute"
              alt="bt"
              style={{
                height: 76 * ratio,
                width: 285 * ratio,
                top: 480 * ratio,
                left: 455 * ratio,
              }}
              onClick={() => (isProcessing ? null : handleBuyIDO())}
            />{" "}
          </a>
        </Box>
      </Modal>
    </div>
  );
};
