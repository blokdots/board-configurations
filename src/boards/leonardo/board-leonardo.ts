import type { BoardConfiguration } from "../../types";

import boardSvg from "../../svgs/uno.svg";
import pinLayoutLeonardo from "./pinLayout-leonardo";

const BoardUno: BoardConfiguration = {
  board: "Arduino Leonardo",
  fqbn: "arduino:avr:leonardo",
  firmataName: "StandardFirmataPlus.ino",
  ids: [
    {
      vid: "2341",
      pid: "8036",
    },
    {
      vid: "2a03",
      pid: "0036",
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
      "SDA",
      "SCL",
    ],
    pwm: [3, 5, 6, 9, 10, 11, 13],
    sda: 18,
    scl: 19,
    rx: 0,
    tx: 1,
  },
  pinLayout: pinLayoutLeonardo,
  shield: "Base",
  width: 69,
  boardSvg: boardSvg,
};
export default BoardUno;
