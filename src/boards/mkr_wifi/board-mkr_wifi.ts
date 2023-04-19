import type { BoardConfiguration } from "../../types";

import boardSvg from "../../svgs/mkr.svg";
import pinLayoutMKRWiFi from "./pinLayout-mkr_wifi";

const BoardMKRWiFi: BoardConfiguration = {
  board: "Arduino MKR WiFi 1010",
  fqbn: "arduino:samd:mkrwifi1010",
  ids: [
    {
      vid: "2341",
      pid: "8054",
    },
    {
      vid: "2341",
      pid: "0054",
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
      // 11, // sda
      // 12, // scl
      // 13, // rx
      // 14, // tx
      "A0",
      "A1",
      "A2",
      "A3",
      "A4",
      "A5",
      "SDA",
      "SCL",
    ],
    pwm: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    sda: 11,
    scl: 12,
    rx: 13,
    tx: 14,
  },
  pinLayout: pinLayoutMKRWiFi,
  shield: "MKR",
  width: 62,
  boardSvg: boardSvg,
};
export default BoardMKRWiFi;
