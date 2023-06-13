import type { BoardConfiguration } from "../../types";

import boardSvg from "../../svgs/micro.svg";
import pinLayoutMicro from "./pinLayout-micro";

const BoardMicro: BoardConfiguration = {
  board: "Arduino Micro",
  fqbn: "arduino:avr:micro",
  ids: [
    {
      vid: "2341",
      pid: "8037",
    },
    {
      vid: "2341",
      pid: "0037",
    },
  ],
  param: {
    pins: [
      // 0, // rx
      // 1, // tx
      // 2, // sda
      // 3, // scl
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
      14,
      15,
      16,
      17,
      "A0",
      "A1",
      "A2",
      "A3",
      "A4",
      "A5",
    ],
    pwm: [4, 5, 6, 9, 10, 11, 13],
    sda: 2,
    scl: 3,
    rx: 0,
    tx: 1,
  },
  pinLayout: pinLayoutMicro,
  width: 47,
  boardSvg: boardSvg,
  docs: {
    boardLink: "https://docs.arduino.cc/hardware/micro",
  },
};
export default BoardMicro;
