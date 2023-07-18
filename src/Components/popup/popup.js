import "../../App.css";
import React from "react";
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

export default function KeepMountedModal({ open, onClose }) {
  const { size } = useWindowSize({ gameWidth: 1920, gameHeight: 3405 });
  const { ratio } = size;
  const handleMinusClick = (check) => {
    var number = document.getElementById("number").innerText;
    if (check === true && number < 10) {
      document.getElementById("number").innerText = parseInt(number) + 1;
    } else if (check === false && number > 1) {
      document.getElementById("number").innerText = parseInt(number) - 1;
    }
  };
  return (
    <div>
      <Modal
        keepMounted
        open={open}
        onClose={onClose}
        style={{ pointerEvents: open ? "auto" : "none" }}
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
            outline: "none",
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
            />{" "}
          </a>
        </Box>
      </Modal>
    </div>
  );
}
