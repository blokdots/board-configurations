var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/index.ts
__export(exports, {
  boardConfigs: () => boardConfigs,
  shieldConfigs: () => shieldConfigs
});

// src/boards/uno/uno.svg
var uno_default = "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9Ijc4IiB2aWV3Qm94PSIwIDAgOTkgNzgiIHdpZHRoPSI5OSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtODUuNSAyOS45MDU2MzU3YzIuOTYwNzgzMiAzLjEzNjMwMjMgMi40OTI4NzQxIDIuNTIyMDQ1MSAyLjQ5Mjg3NDEgMi41MjIwNDUxLjI4MDA3NzkuMjEyOTQ1Ni41MDcxMjU5LjY2NTc2LjUwNzEyNTkgMS4wMjM5NDkzdjQ2LjQzNDA4OTJjMCAuMzUyNTY1OS0uMTQ2OTY5My44ODM5NjA4LS4zNjYwODIxIDEuMTc2NzIwNyAwIDAgLjMzNzgyMS0uMjE3MjgxNy0yLjYzMzkxNzkgMy4wMjE2MTUxdjMuMTE1MDU1MmMwIC43MTg0NjE1LS41ODgxNTUgMS4zMDA4ODk3LTEuMzAyNDYzMSAxLjMwMDg4OTdoLTkzLjM5NTA3Mzg0Yy0uNzE5MzMwNDggMC0xLjMwMjQ2MzA2LS41ODI5OTU3LTEuMzAyNDYzMDYtMS4yODg3NTgydi03NS40MjI0ODM2YzAtLjcxMTc2MTUuNTg2NTcyMTktMS4yODg3NTgyIDEuMzAwMzkxODQtMS4yODg3NTgyaDkyLjAzMjk0MTQ2YzIuNjY2NjY3NSAyLjM3NTU2MDYuMjYzODM2NSAwIDIuNjY2NjY2NyAyLjY2NjY2Njd6IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwLjUgLTEwLjUpIi8+PC9zdmc+";

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
  boardType: "uno",
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
      "SCL"
    ],
    pwm: [3, 5, 6, 9, 10, 11, 13]
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
