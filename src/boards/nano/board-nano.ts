import type { BoardConfiguration } from "../../types";

import boardSvg from "../../svgs/nano.svg";
import pinLayoutNano from "./pinLayout-nano";

const BoardNano: BoardConfiguration = {
  board: "Arduino Nano",
  fqbn: "arduino:avr:nano",
  ids: [
    {
      vid: "0403",
      pid: "6001",
    },
  ],
  param: {
    pins: [
      // 0, // Rx
      // 1, // Tx
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
      // "A4", // SDA
      // "A5", // SCL
      "A6",
      "A7",
      "SDA",
      "SCL",
    ],
    pwm: [3, 5, 6, 9, 10, 11],
    sda: "A4",
    scl: "A5",
    rx: 0,
    tx: 1,
  },
  pinLayout: pinLayoutNano,
  shield: "Nano",
  width: 45,
  boardSvg: boardSvg,
  docs: {
    boardLink: "https://docs.arduino.cc/hardware/nano",
  },
};
export default BoardNano;
