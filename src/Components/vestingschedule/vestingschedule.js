import "../../App.css";
import React, { useState, useEffect } from "react";
import { useWindowSize } from "../../useWindowSize";
import claim from "./image/claimbutton.png";
import { getStageInfo } from "../../hooks/getStageInfo";
import { getUserSlots } from "../../hooks/getUserSlots";
import { getUserClaimed } from "../../hooks/getIsClaimed";
import { claimIdo } from "../../hooks/claimIdo";

export const Vestingschedule = ({ isnetWork, wallet }) => {
  const { size } = useWindowSize({ gameWidth: 1920, gameHeight: 3405 });
  const { ratio } = size;

  const [isLoading, setIsLoading] = useState(true);
  const [stageInfo, setStageInfo] = useState([]);
  const [userSlots, setUserSlots] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleStageInfo = async () => {
    try {
      const stages = await getStageInfo();
      setStageInfo(stages);
    } catch (error) {
      console.error("Error fetching stage info:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUserSlots = async () => {
    console.log("wallet", wallet);
    try {
      const slots = getUserSlots(wallet);
      console.log({ slots });
      setUserSlots(slots);
    } catch (error) {
      console.error("Error fetching user slot:", error);
      setIsLoading(false);
    }
  };

  const handleClaimIdo = async (stage) => {
    setIsProcessing(true);
    try {
      const claimed = await handleUserClaimed(stage);
      if (claimed) {
        window.alert("You have already claimed");
      } else {
        await claimIdo(wallet, stage);
      }
      setIsProcessing(false);
    } catch (error) {
      console.log(error);
      setIsProcessing(false);
    }
  };

  const handleUserClaimed = async (stage) => {
    console.log("wallet", wallet);
    try {
      const stageInt = parseInt(stage);
      const claimed = await getUserClaimed(stageInt, wallet);
      setIsLoading(false);
      return claimed;
    } catch (error) {
      console.error("Error fetching user claimed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const formatTimestamp = (timestamp) => {
    // Convert the timestamp to a Date object
    const date = new Date(parseInt(timestamp) * 1000);

    const options = {
      timeZone: "UTC",
      hour12: false,
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };

    const formattedTime = date.toLocaleString("en-US", options);

    // const fullDayOptions = {
    //   weekday: "long",
    //   year: "numeric",
    //   month: "long",
    //   day: "numeric",
    // };

    // const fullDay = date.toLocaleString("en-US", fullDayOptions);

    const day = String(date.getUTCDate()).padStart(2, "0");
    const month = String(date.getUTCMonth() + 1).padStart(2, "0");
    const year = date.getUTCFullYear();

    const fullDay = `${day}/${month}/${year}`;

    return [formattedTime, fullDay];
  };

  useEffect(() => {
    if (isnetWork) {
      handleStageInfo();
      handleUserSlots();
    }
  }, [isnetWork, wallet]);

  return (
    <div>
      <p
        className="absolute text "
        style={{ fontSize: 60 * ratio, top: 2415 * ratio, left: 670 * ratio }}
      >
        VESTING SCHEDULE
      </p>
      <table
        className="absolute text-while"
        style={{
          fontSize: 23 * ratio,
          height: 360 * ratio,
          width: 1500 * ratio,
          top: 2500 * ratio,
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
            <td>Stage</td>
            <td>Next vesting (UTC)</td>
            <td>Amount</td>
            <td>
              {/* Claim */}
              {/* <a>
                <img
                  src={claim}
                  style={{ height: 36 * ratio, width: 112 * ratio }}
                />
              </a> */}
            </td>
          </tr>
          {isLoading ? (
            <tr>
              <td>Loading...</td>
              <td>Loading...</td>
              <td>Loading...</td>
              <td>
                <a>
                  <img
                    src={claim}
                    style={{ height: 36 * ratio, width: 112 * ratio }}
                  />
                </a>
              </td>
            </tr>
          ) : (
            stageInfo.map((item) => {
              console.log("userSlots", userSlots);
              const [formattedTime, fullDay] = formatTimestamp(item._startTime);
              return (
                <tr key={item._stageId}>
                  <td>
                    {item._stageId == 0 ? "TGE" : item._stageId.toString()}
                  </td>
                  <td>
                    {formattedTime}, {fullDay}
                  </td>
                  <td>
                    {(parseInt(item._claimAmount) * parseInt(userSlots)) /
                      10 ** 18}{" "}
                    APX
                  </td>
                  <td>
                    <a>
                      <img
                        src={claim}
                        style={{ height: 36 * ratio, width: 112 * ratio }}
                        onClick={() =>
                          isProcessing ? null : handleClaimIdo(item._stageId)
                        }
                      />
                    </a>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};
