import type { BoardConfiguration } from "../../types";

import boardSvg from "../../svgs/uno.svg";
import pinLayoutLotus from "./pinLayout-lotus";

const BoardLotus: BoardConfiguration = {
  board: "Seeeduino Lotus",
  fqbn: "arduino:avr:uno",
  ids: [
    {
      vid: "10c4",
      pid: "ea60",
    },
  ],
  param: {
    pins: [
      // 0,
      // 1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      "A0",
      "A1",
      "A2",
      "A3",
      "A4",
      "A5",
      "A6",
      "SDA",
      "SCL",
    ],
    pwm: [3, 5, 6, 8, 9, 10, 11],
    rx: 0,
    tx: 1,
  },
  pinLayout: pinLayoutLotus,
  shield: ["Lotus", "Base"],
  width: 69,
  boardSvg: boardSvg,
  docs: {
    boardLink: "https://wiki.seeedstudio.com/Seeeduino_Lotus/",
    notice: `You might have to install an [additional driver](https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers?tab=downloads) before the Seeeduino Lotus is recognized by blokdots.`,
  },
};
export default BoardLotus;
