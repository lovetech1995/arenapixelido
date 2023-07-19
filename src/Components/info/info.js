import "../../App.css";
import React from "react";
import title from "./image/title.png";
import webbuton from "./image/webbutton.png";
import telegrambutton from "./image/telegrambutton.png";
import twtbutton from "./image/twtbutton.png";
import marrketplace from "./image/marrketplace.png";
import pitchdeck from "./image/pitchdeck.png";
import wpp from "./image/WPP.png";
import gamebt from "./image/gamebt.png";
import { useWindowSize } from "../../useWindowSize";

const Info = () => {
  const { size } = useWindowSize({ gameWidth: 1920, gameHeight: 3405 });
  const { ratio } = size;
  return (
    <div>
      <img
        src={title}
        className="absolute"
        alt="title"
        style={{
          height: 104 * ratio,
          width: 1170 * ratio,
          top: 40 * ratio,
          left: 360 * ratio,
        }}
      />
      <p
        className="absolute  text"
        style={{ fontSize: 28 * ratio, top:240 * ratio, left: 410 * ratio }}
      >
        GameFi Tap to Earn NFT, with a completely unique gameplay and
        money-making method,
        <br />
        promises to evoke a plethora of emotions for users
      </p>
      <a target="_blank" href={"https://arenapixel.io/"}>
        <img
          src={webbuton}
          className="absolute"
          alt="webbuton"
          style={{
            height: 53 * ratio,
            width: 53 * ratio,
            top: 320 * ratio,
            left: 875 * ratio,
          }}
        />
      </a>
      <a target="_blank" href={"https://t.me/arenapixel"}>
        <img
          src={telegrambutton}
          className="absolute"
          alt="telegrambutton"
          style={{
            height: 53 * ratio,
            width: 53 * ratio,
            top: 320 * ratio,
            left: 960 * ratio,
          }}
        />
      </a>
      <a target="_blank" href={"https://twitter.com/ArenaPixel"}>
        <img
          src={twtbutton}
          className="absolute"
          alt="twtbutton"
          style={{
            height: 53 * ratio,
            width: 53 * ratio,
            top: 320 * ratio,
            left: 1045 * ratio,
          }}
        />
      </a>

      <a target="_blank" href="https://market.arenapixel.io/">
        <img
          src={marrketplace}
          className="absolute"
          alt="marrketplace"
          style={{
            height: 80 * ratio,
            width: 259 * ratio,
            top: 330 * ratio,
            left: 400 * ratio,
          }}
        />
      </a>
      <a target="_blank" href="https://arenapixel.io/pitchdeck.html">
        <img
          src={pitchdeck}
          className="absolute"
          alt="pitchdeck"
          style={{
            height: 80 * ratio,
            width: 259 * ratio,
            top: 310 * ratio,
            left: 1300 * ratio,
          }}
        />
      </a>
      <a
        target="_blank"
        href="https://arenapixels-organization.gitbook.io/arena-pixel-whitepaper/"
      >
        <img
          src={wpp}
          className="absolute"
          alt="whitepaper"
          style={{
            height: 80 * ratio,
            width: 259 * ratio,
            top: 430 * ratio,
            left: 400 * ratio,
          }}
        />
      </a>
      <a target="_blank" href="https://testnet.arenapixel.io/">
        <img
          src={gamebt}
          className="absolute"
          alt="gamebt"
          style={{
            height: 80 * ratio,
            width: 259 * ratio,
            top: 410 * ratio,
            left: 1300 * ratio,
          }}
        />
      </a>
    </div>
  );
};

export default Info;
