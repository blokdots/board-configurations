import type { BoardConfiguration } from "../../types";

import boardSvg from "./uno.svg";
import pinLayoutUno from "./pinLayout-uno";

const BoardUno: BoardConfiguration = {
  boardType: "uno",
  board: "Arduino Uno",
  fqbn: "arduino:avr:uno",
  firmataName: "StandardFirmataPlus.ino",
  ids: [
    {
      vid: "2a03",
      pid: "0043",
    },
    {
      vid: "2341",
      pid: "0043",
    },
    {
      vid: "2341",
      pid: "0001",
    },
  ],
  param: {
    pins: [
      0,
      1,
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
  },
  pinLayout: pinLayoutUno,
  shield: "Base",
  boardSvg: boardSvg,
};
export default BoardUno;
