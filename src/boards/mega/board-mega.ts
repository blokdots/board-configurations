import type { BoardConfiguration } from "../../types";

import boardSvg from "../../svgs/mega.svg";
import pinLayoutMega from "./pinLayout-mega";

const BoardUno: BoardConfiguration = {
  board: "Arduino Mega",
  fqbn: "arduino:avr:mega",
  firmataName: "StandardFirmataPlus.ino",
  ids: [
    {
      vid: "2341",
      pid: "0042",
    },
  ],
  param: {
    pins: [
      // 0, // rx
      // 1, // tx
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
      14,
      15,
      16,
      17,
      18,
      19,
      // 20, // sda
      // 21, // scl
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43,
      44,
      45,
      46,
      47,
      48,
      49,
      50,
      51,
      52,
      53,
      "A0",
      "A1",
      "A2",
      "A3",
      "A4",
      "A5",
      "A6",
      "A7",
      "A8",
      "A9",
      "A10",
      "A11",
      "A12",
      "A13",
      "A14",
      "A15",
      "SDA",
      "SCL",
    ],
    pwm: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 44, 45, 46],
    sda: 20,
    scl: 21,
    rx: 0,
    tx: 1,
  },
  pinLayout: pinLayoutMega,
  shield: ["Mega", "Base"],
  width: 103,
  boardSvg: boardSvg,
};
export default BoardUno;
