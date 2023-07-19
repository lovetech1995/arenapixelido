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
          height: 234 * ratio,
          width: 1607 * ratio,
          top: 50 * ratio,
          left: 120 * ratio,
        }}
      />
      <p
        className="absolute  text"
        style={{ fontSize: 36 * ratio, top: 400 * ratio, left: 200 * ratio }}
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
            height: 83 * ratio,
            width: 83 * ratio,
            top: 550 * ratio,
            left: 760 * ratio,
          }}
        />
      </a>
      <a target="_blank" href={"https://t.me/arenapixel"}>
        <img
          src={telegrambutton}
          className="absolute"
          alt="telegrambutton"
          style={{
            height: 83 * ratio,
            width: 83 * ratio,
            top: 550 * ratio,
            left: 890 * ratio,
          }}
        />
      </a>
      <a target="_blank" href={"https://twitter.com/ArenaPixel"}>
        <img
          src={twtbutton}
          className="absolute"
          alt="twtbutton"
          style={{
            height: 83 * ratio,
            width: 83 * ratio,
            top: 550 * ratio,
            left: 1030 * ratio,
          }}
        />
      </a>

      <a target="_blank" href="https://market.arenapixel.io/">
        <img
          src={marrketplace}
          className="absolute"
          alt="marrketplace"
          style={{
            height: 100 * ratio,
            width: 359 * ratio,
            top: 600 * ratio,
            left: 150 * ratio,
          }}
        />
      </a>
      <a target="_blank" href="https://arenapixel.io/pitchdeck.html">
        <img
          src={pitchdeck}
          className="absolute"
          alt="pitchdeck"
          style={{
            height: 100 * ratio,
            width: 359 * ratio,
            top: 570 * ratio,
            left: 1390 * ratio,
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
            height: 100 * ratio,
            width: 359 * ratio,
            top: 730 * ratio,
            left: 150 * ratio,
          }}
        />
      </a>
      <a target="_blank" href="https://testnet.arenapixel.io/">
        <img
          src={gamebt}
          className="absolute"
          alt="gamebt"
          style={{
            height: 100 * ratio,
            width: 359 * ratio,
            top: 700 * ratio,
            left: 1390 * ratio,
          }}
        />
      </a>
    </div>
  );
};

export default Info;
