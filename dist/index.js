"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  boardConfigs: () => boardConfigs,
  shieldConfigs: () => shieldConfigs
});
module.exports = __toCommonJS(src_exports);

// src/boards/uno/uno.svg
var uno_default = 'data:image/svg+xml,<svg height="78" viewBox="0 0 99 78" width="99" xmlns="http://www.w3.org/2000/svg"><path d="m85.5 29.9056357c2.9607832 3.1363023 2.4928741 2.5220451 2.4928741 2.5220451.2800779.2129456.5071259.66576.5071259 1.0239493v46.4340892c0 .3525659-.1469693.8839608-.3660821 1.1767207 0 0 .337821-.2172817-2.6339179 3.0216151v3.1150552c0 .7184615-.588155 1.3008897-1.3024631 1.3008897h-93.39507384c-.71933048 0-1.30246306-.5829957-1.30246306-1.2887582v-75.4224836c0-.7117615.58657219-1.2887582 1.30039184-1.2887582h92.03294146c2.6666675 2.3755606.2638365 0 2.6666667 2.6666667z" fill-rule="evenodd" transform="translate(10.5 -10.5)"/></svg>';

// src/boards/uno/pinLayout-uno.ts
var pinsTopRow = [
  2,
  3,
  4,
  5,
  6,
  7,
  null,
  8,
  9,
  10,
  11,
  12,
  13,
  null,
  null,
  "SDA",
  "SCL"
];
var pinsBottomRow = ["A5", "A4", "A3", "A2", "A1", "A0"];
var pinLayoutUno = {
  pinMargin: { right: 3, top: 1, bottom: 1, left: 0 },
  pins: [
    ...pinsTopRow.map((p, i) => ({
      pin: p,
      row: "top",
      position: 4 + i
    })),
    ...pinsBottomRow.map((p, i) => ({
      pin: p,
      row: "bottom",
      position: 4 + i
    }))
  ]
};
var pinLayout_uno_default = pinLayoutUno;

// src/boards/uno/board-uno.ts
var BoardUno = {
  board: "Arduino Uno",
  fqbn: "arduino:avr:uno",
  firmataName: "StandardFirmataPlus.ino",
  ids: [
    {
      vid: "2a03",
      pid: "0043"
    },
    {
      vid: "2341",
      pid: "0043"
    },
    {
      vid: "2341",
      pid: "0001"
    }
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
      "SCL"
    ],
    pwm: [3, 5, 6, 9, 10, 11],
    sda: 18,
    scl: 19,
    rx: 0,
    tx: 1
  },
  pinLayout: pinLayout_uno_default,
  shield: "Base",
  width: 69,
  boardSvg: uno_default
};
var board_uno_default = BoardUno;

// src/shields/base/shield-base.ts
var ShieldBase = {
  name: "Base",
  slots: [
    ...[
      [4, 5],
      [3, 4],
      [2, 3]
    ].map((p, i) => {
      const isDoubleSlot = Array.isArray(p);
      const calcPin = isDoubleSlot ? p[0] : p;
      return {
        pin: calcPin,
        doubleSlot: isDoubleSlot,
        x: 15 + i * 12,
        y: 5,
        type: "upright",
        angle: "vertical"
      };
    }),
    ...[
      [8, 9],
      [7, 8],
      [6, 7],
      [5, 6]
    ].map((p, i) => {
      const isDoubleSlot = Array.isArray(p);
      const calcPin = isDoubleSlot ? p[0] : p;
      return {
        pin: calcPin,
        doubleSlot: isDoubleSlot,
        x: 15 + i * 12,
        y: 19,
        type: "upright",
        angle: "vertical"
      };
    }),
    ...["I2C", "I2C", "I2C", "I2C"].map((p, i) => {
      const isDoubleSlot = Array.isArray(p);
      const calcPin = isDoubleSlot ? p[0] : p;
      return {
        pin: calcPin,
        doubleSlot: isDoubleSlot,
        x: 15 + i * 12,
        y: 33,
        type: "upright",
        angle: "vertical"
      };
    }),
    ...[
      ["A3", "A4"],
      ["A2", "A3"],
      ["A1", "A2"],
      ["A0", "A1"]
    ].map((p, i) => {
      const isDoubleSlot = Array.isArray(p);
      const calcPin = isDoubleSlot ? p[0] : p;
      return {
        pin: calcPin,
        doubleSlot: isDoubleSlot,
        x: 3,
        y: 1 + 11 * i,
        type: "flat",
        angle: "vertical"
      };
    })
  ]
};
var shield_base_default = ShieldBase;

// src/index.ts
var boardConfigs = [board_uno_default];
var shieldConfigs = [shield_base_default];
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  boardConfigs,
  shieldConfigs
});
