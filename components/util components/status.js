import React from "react";
import SmallArrow from "./small_arrow";

export default function Status() {
  return (
    <div className="flex justify-center items-center cursor-default select-none">
      <span className="mx-1.5">
        <img
          width="16px" height="16px"
          src="./themes/Yaru/status/network-wireless-signal-good-symbolic.svg"
          alt="ubuntu wifi"
          className="inline status-symbol w-4 h-4"
        />
      </span>
      <span className="mx-1.5">
        <img
          width="16px" height="16px"
          src="./themes/Yaru/status/audio-volume-medium-symbolic.svg"
          alt="ubuntu sound"
          className="inline status-symbol w-4 h-4"
        />
      </span>
      <div className="flex items-center mx-1.5">
        <img
          width="16px" height="16px"
          src="./themes/Yaru/status/battery-good-symbolic.svg"
          alt="ubuntu battery"
          className="inline status-symbol w-4 h-4"
        />
        <span className="text-xs text-white ml-1 opacity-80">84%</span>
      </div>
      <span className="mx-1">
        <SmallArrow angle="down" className=" status-symbol" />
      </span>
    </div>
  );
}
