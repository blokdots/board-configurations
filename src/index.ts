// Boards
import BoardLeonardo from "./boards/leonardo";
import BoardLotus from "./boards/lotus";
import BoardMega from "./boards/mega";
import BoardMicro from "./boards/micro";
import BoardMKRWiFi from "./boards/mkr_wifi";
import BoardNano from "./boards/nano";
import BoardUno from "./boards/uno";

// Shields
import ShieldBase from "./shields/base";
import ShieldLotus from "./shields/lotus";
import ShieldMega from "./shields/mega";
import ShieldMKR from "./shields/mkr";
import ShieldNano from "./shields/nano";

// Types
export type * from "./types";

const boardConfigs = [
  BoardLeonardo,
  BoardLotus,
  BoardMega,
  BoardMicro,
  BoardMKRWiFi,
  BoardNano,
  BoardUno,
];
const shieldConfigs = [
  ShieldBase,
  ShieldLotus,
  ShieldMega,
  ShieldMKR,
  ShieldNano,
];

export { boardConfigs, shieldConfigs };
