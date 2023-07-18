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
  console.log("wallet", wallet);
  const [open, setOpen] = useState(false);
  const [approved, setApproved] = useState(false);
  //   const [boughtSlots, setBoughtSlots] = useState(0);

  //   const handleOpen = async () => setOpen(true);
  //   const handleClose = async () => {
  //     setOpen(false);
  //     isOpened = false;
  //     console.log("open", isOpened);
  //   };

  const { size } = useWindowSize({ gameWidth: 1920, gameHeight: 3405 });
  const { ratio } = size;

  //   useEffect(() => {
  //     if (isOpened) {
  //       handleOpen();
  //     }
  //   }, []);

  const handleMinusClick = (check) => {
    var number = document.getElementById("number").innerText;
    if (check === true && number < 10) {
      document.getElementById("number").innerText = parseInt(number) + 1;
    } else if (check === false && number > 1) {
      document.getElementById("number").innerText = parseInt(number) - 1;
    }
  };

  const handleApprove = async (amount) => {
    console.log("amount", amount);
    console.log("wallet", wallet);
    return await getApprove(wallet, amount);
  };

  const handleBuyIDO = async (quantity) => {
    const quantityInt = parseInt(quantity);
    console.log("quantityInt", quantityInt);
    const value = quantity * 50;
    console.log("value", value);
    const valueInWei = web3.utils.toWei(value, "ether");
    console.log("valueInWei", valueInWei);
    const txApprove = await handleApprove(valueInWei);
    if (txApprove) {
      await buyIdo(wallet, quantity);
      await handleBoughtSlots();
    }
  };

  const handleBoughtSlots = async () => {
    const slots = await getBoughtSlots();
    // setBoughtSlots(slots);
    onUpdateSlots(slots);
  };

  return (
    <div>
      <Modal
        keepMounted
        open={open}
        onClose={onClose}
        style={{ pointerEvents: open ? "auto" : "none" }}
        // aria-labelledby="keep-mounted-modal-title"
        // aria-describedby="keep-mounted-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 1175 * ratio,
            height: 569 * ratio,
            backgroundImage: `url(${backgroudPop})`, // Thay đổi đường dẫn đến hình ảnh của bạn
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
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
            3000 APX
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
            3000 APX
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
            150 USD
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
              onClick={() => handleBuyIDO(1)}
            />{" "}
          </a>
        </Box>
      </Modal>
    </div>
  );
};
