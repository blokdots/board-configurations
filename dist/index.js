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

// src/svgs/uno.svg
var uno_default = 'data:image/svg+xml,<svg height="78" viewBox="0 0 99 78" width="99" xmlns="http://www.w3.org/2000/svg"><path d="m85.5 29.9056357c2.9607832 3.1363023 2.4928741 2.5220451 2.4928741 2.5220451.2800779.2129456.5071259.66576.5071259 1.0239493v46.4340892c0 .3525659-.1469693.8839608-.3660821 1.1767207 0 0 .337821-.2172817-2.6339179 3.0216151v3.1150552c0 .7184615-.588155 1.3008897-1.3024631 1.3008897h-93.39507384c-.71933048 0-1.30246306-.5829957-1.30246306-1.2887582v-75.4224836c0-.7117615.58657219-1.2887582 1.30039184-1.2887582h92.03294146c2.6666675 2.3755606.2638365 0 2.6666667 2.6666667z" fill-rule="evenodd" transform="translate(10.5 -10.5)"/></svg>';

// src/boards/leonardo/pinLayout-leonardo.ts
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
var pinLayout_leonardo_default = pinLayoutUno;

// src/boards/leonardo/board-leonardo.ts
var BoardUno = {
  board: "Arduino Leonardo",
  fqbn: "arduino:avr:leonardo",
  firmataName: "StandardFirmataPlus.ino",
  ids: [
    {
      vid: "2341",
      pid: "8036"
    },
    {
      vid: "2a03",
      pid: "0036"
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
    pwm: [3, 5, 6, 9, 10, 11, 13],
    sda: 18,
    scl: 19,
    rx: 0,
    tx: 1
  },
  pinLayout: pinLayout_leonardo_default,
  shield: "Base",
  width: 69,
  boardSvg: uno_default
};
var board_leonardo_default = BoardUno;

// src/boards/lotus/pinLayout-lotus.ts
var pinsTopRow2 = [
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
var pinsBottomRow2 = [
  "A5",
  "A4",
  "A3",
  "A2",
  "A1",
  "A0",
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  "A6"
];
var pinLayoutUno2 = {
  pinMargin: { right: 3, top: 1, bottom: 1, left: 0 },
  pins: [
    ...pinsTopRow2.map((p, i) => ({
      pin: p,
      row: "top",
      position: 3 + i
    })),
    ...pinsBottomRow2.map((p, i) => ({
      pin: p,
      row: "bottom",
      position: 1 + i
    }))
  ]
};
var pinLayout_lotus_default = pinLayoutUno2;

// src/boards/lotus/board-lotus.ts
var BoardUno2 = {
  board: "Arduino Uno",
  fqbn: "arduino:avr:uno",
  firmataName: "StandardFirmataPlus.ino",
  ids: [
    {
      vid: "10c4",
      pid: "ea60"
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
      "A6",
      "SDA",
      "SCL"
    ],
    pwm: [3, 5, 6, 8, 9, 10, 11],
    rx: 0,
    tx: 1
  },
  pinLayout: pinLayout_lotus_default,
  shield: ["Lotus", "Base"],
  width: 69,
  boardSvg: uno_default
};
var board_lotus_default = BoardUno2;

// src/svgs/mega.svg
var mega_default = 'data:image/svg+xml,<svg fill="none" height="78" viewBox="0 0 141 78" width="141" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><clipPath id="a-mega"><path d="m0 0h141v78h-141z"/></clipPath><g clip-path="url(%23a-mega)"><path clip-rule="evenodd" d="m138 19.4056c2.961 3.1363 2.493 2.5221 2.493 2.5221.28.2129.507.6657.507 1.0239v46.4341c0 .3526-.147.884-.366 1.1767 0 0 .338-.2172-2.634 3.0217v3.115c0 .7185-.588 1.3009-1.303 1.3009h-135.39454c-.719327 0-1.30246-.583-1.30246-1.2888v-75.42244c0-.711763.586573-1.28876 1.30039-1.28876h134.03261c2.667 2.37556.264.00000024 2.667 2.66667z" fill="%23000" fill-rule="evenodd"/></g></svg>%0A';

// src/boards/mega/pinLayout-mega.ts
var pinsTopRow3 = [
  "SCL",
  "SDA",
  19,
  18,
  17,
  16,
  15,
  14,
  null,
  null,
  // 0,
  null,
  // 1,
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
  13
];
var pinsBottomRow3 = [
  "A15",
  "A14",
  "A13",
  "A12",
  "A11",
  "A10",
  "A9",
  "A8",
  null,
  "A7",
  "A6",
  "A5",
  "A4",
  "A3",
  "A2",
  "A1",
  "A0"
];
var pinsRightRow = [
  22,
  24,
  26,
  28,
  30,
  32,
  34,
  36,
  38,
  40,
  42,
  44,
  46,
  48,
  50,
  52
];
var pinsSecondRightRow = [
  23,
  25,
  27,
  29,
  31,
  33,
  35,
  37,
  39,
  41,
  43,
  45,
  47,
  49,
  51,
  53
];
var pinLayoutUno3 = {
  pinMargin: { right: 4, top: 1, bottom: 1, left: 0 },
  pinGap: 1,
  pins: [
    ...pinsTopRow3.map((p, i) => ({
      pin: p,
      row: "top",
      position: 5 + i
    })),
    ...pinsBottomRow3.map((p, i) => ({
      pin: p,
      row: "bottom",
      position: 3 + i
    })),
    ...pinsRightRow.map((p, i) => ({
      pin: p,
      row: "right",
      align: "start",
      position: 1 + i
    })),
    ...pinsSecondRightRow.map((p, i) => ({
      pin: p,
      row: "right-2",
      align: "start",
      position: 1 + i
    }))
  ]
};
var pinLayout_mega_default = pinLayoutUno3;

// src/boards/mega/board-mega.ts
var BoardUno3 = {
  board: "Arduino Mega",
  fqbn: "arduino:avr:mega",
  firmataName: "StandardFirmataPlus.ino",
  ids: [
    {
      vid: "2341",
      pid: "0042"
    }
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
      "SCL"
    ],
    pwm: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 44, 45, 46],
    sda: 20,
    scl: 21,
    rx: 0,
    tx: 1
  },
  pinLayout: pinLayout_mega_default,
  shield: ["Mega", "Base"],
  width: 103,
  boardSvg: mega_default
};
var board_mega_default = BoardUno3;

// src/svgs/micro.svg
var micro_default = 'data:image/svg+xml,<svg height="31" viewBox="0 0 58 18" width="99" xmlns="http://www.w3.org/2000/svg"><path d="m0 0h58v18h-58z"/></svg>';

// src/boards/micro/pinLayout-micro.ts
var pinsTopRow4 = ["SDA", "SCL", 4, 5, 6, 7, 8, 9, 10, 11, 12];
var pinsBottomRow4 = [
  "A5",
  "A4",
  "A3",
  "A2",
  "A1",
  "A0",
  null,
  null,
  13
];
var pinLayoutUno4 = {
  pinMargin: 1,
  pins: [
    ...pinsTopRow4.map((p, i) => ({
      pin: p,
      row: "top",
      position: 4 + i
    })),
    ...pinsBottomRow4.map((p, i) => ({
      pin: p,
      row: "bottom",
      position: 6 + i
    }))
  ]
};
var pinLayout_micro_default = pinLayoutUno4;

// src/boards/micro/board-micro.ts
var BoardUno4 = {
  board: "Arduino Micro",
  fqbn: "arduino:avr:micro",
  firmataName: "StandardFirmataPlus.ino",
  ids: [
    {
      vid: "2341",
      pid: "8037"
    },
    {
      vid: "2341",
      pid: "0037"
    }
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
      "A5"
    ],
    pwm: [4, 5, 6, 9, 10, 11, 13],
    sda: 2,
    scl: 3,
    rx: 0,
    tx: 1
  },
  pinLayout: pinLayout_micro_default,
  width: 47,
  boardSvg: micro_default
};
var board_micro_default = BoardUno4;

// src/svgs/mkr.svg
var mkr_default = 'data:image/svg+xml,<svg fill="none" height="25" viewBox="0 0 62 25" width="62" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><clipPath id="a-mkr"><path d="m0 0h62v25h-62z"/></clipPath><g clip-path="url(%23a-mkr)"><path d="m0 0h62v25h-62z" fill="%23000"/></g></svg>%0A';

// src/boards/mkr_wifi/pinLayout-mkr_wifi.ts
var pinsTopRow5 = [
  "A0",
  "A1",
  "A2",
  "A3",
  "A4",
  "A5",
  "A6",
  0,
  1,
  2,
  3,
  4,
  5
];
var pinsBottomRow5 = ["SCL", "SDA", 10, 9, 8, 7, 6];
var pinLayoutUno5 = {
  pins: [
    ...pinsTopRow5.map((p, i) => ({
      pin: p,
      row: "top",
      position: 8 + i
    })),
    ...pinsBottomRow5.map((p, i) => ({
      pin: p,
      row: "bottom",
      position: 13 + i
    }))
  ]
};
var pinLayout_mkr_wifi_default = pinLayoutUno5;

// src/boards/mkr_wifi/board-mkr_wifi.ts
var BoardUno5 = {
  board: "Arduino MKR WiFi 1010",
  fqbn: "arduino:samd:mkrwifi1010",
  firmataName: "StandardFirmataPlus.ino",
  ids: [
    {
      vid: "2341",
      pid: "8054"
    },
    {
      vid: "2341",
      pid: "0054"
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
      "SCL"
    ],
    pwm: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    sda: 11,
    scl: 12,
    rx: 13,
    tx: 14
  },
  pinLayout: pinLayout_mkr_wifi_default,
  shield: "MKR",
  width: 62,
  boardSvg: mkr_default
};
var board_mkr_wifi_default = BoardUno5;

// src/svgs/nano.svg
var nano_default = 'data:image/svg+xml,<svg fill="none" height="31" viewBox="0 0 93 31" width="93" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><clipPath id="a-nano"><path d="m0 0h93v31h-93z"/></clipPath><g clip-path="url(%23a-nano)"><path d="m93 .137695h-93v30.724105h93z" fill="%23000"/></g></svg>%0A';

// src/boards/nano/pinLayout-nano.ts
var pinsTopRow6 = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var pinsBottomRow6 = [
  "A7",
  "A6",
  "SCL",
  "SDA",
  "A3",
  "A2",
  "A1",
  "A0",
  null,
  null,
  13
];
var pinLayoutUno6 = {
  pinMargin: { top: 1, right: 2, bottom: 1, left: 2 },
  pins: [
    ...pinsTopRow6.map((p, i) => ({
      pin: p,
      row: "top",
      position: 3 + i
    })),
    ...pinsBottomRow6.map((p, i) => ({
      pin: p,
      row: "bottom",
      position: 3 + i
    }))
  ]
};
var pinLayout_nano_default = pinLayoutUno6;

// src/boards/nano/board-nano.ts
var BoardUno6 = {
  board: "Arduino Nano",
  fqbn: "arduino:avr:nano",
  firmataName: "StandardFirmataPlus.ino",
  ids: [
    {
      vid: "0403",
      pid: "6001"
    }
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
      "SCL"
    ],
    pwm: [3, 5, 6, 9, 10, 11],
    sda: "A4",
    scl: "A5",
    rx: 0,
    tx: 1
  },
  pinLayout: pinLayout_nano_default,
  shield: "Nano",
  width: 45,
  boardSvg: nano_default
};
var board_nano_default = BoardUno6;

// src/boards/uno/pinLayout-uno.ts
var pinsTopRow7 = [
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
var pinsBottomRow7 = ["A5", "A4", "A3", "A2", "A1", "A0"];
var pinLayoutUno7 = {
  pinMargin: { right: 3, top: 1, bottom: 1, left: 0 },
  pins: [
    ...pinsTopRow7.map((p, i) => ({
      pin: p,
      row: "top",
      position: 4 + i
    })),
    ...pinsBottomRow7.map((p, i) => ({
      pin: p,
      row: "bottom",
      position: 4 + i
    }))
  ]
};
var pinLayout_uno_default = pinLayoutUno7;

// src/boards/uno/board-uno.ts
var BoardUno7 = {
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
var board_uno_default = BoardUno7;

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

// src/shields/lotus/shield-lotus.ts
var ShieldLotus = {
  name: "Lotus",
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
        x: 17 + i * 12,
        y: 8,
        type: "upright",
        angle: "vertical"
      };
    }),
    ...[
      ["A6", "A7"],
      [7, 8],
      [6, 7],
      [5, 6]
    ].map((p, i) => {
      const isDoubleSlot = Array.isArray(p);
      const calcPin = isDoubleSlot ? p[0] : p;
      return {
        pin: calcPin,
        doubleSlot: isDoubleSlot,
        x: 17 + i * 12,
        y: 21,
        type: "upright",
        angle: "vertical"
      };
    }),
    ...[["A2", "A3"], ["A0", "A1"], "I2C", "I2C"].map((p, i) => {
      const isDoubleSlot = Array.isArray(p);
      const calcPin = isDoubleSlot ? p[0] : p;
      return {
        pin: calcPin,
        doubleSlot: isDoubleSlot,
        x: 17 + i * 12,
        y: 34,
        type: "upright",
        angle: "vertical"
      };
    })
  ]
};
var shield_lotus_default = ShieldLotus;

// src/shields/mega/shield-mega.ts
var ShieldMega = {
  name: "Mega",
  slots: [
    ...["I2C", "I2C", [12, 13], [10, 11], [8, 9], [6, 7], [4, 5], [2, 3]].map(
      (p, i) => {
        const isDoubleSlot = Array.isArray(p);
        const calcPin = isDoubleSlot ? p[0] : p;
        return {
          pin: calcPin,
          doubleSlot: isDoubleSlot,
          x: 19 + i * 9,
          y: 10,
          type: "upright",
          angle: "vertical"
        };
      }
    ),
    ...[
      ["A0", "A1"],
      ["A2", "A3"],
      ["A4", "A5"],
      ["A6", "A7"],
      ["A8", "A9"],
      ["A10", "A11"],
      ["A12", "A13"],
      ["A14", "A15"]
    ].map((p, i) => {
      const isDoubleSlot = Array.isArray(p);
      const calcPin = isDoubleSlot ? p[0] : p;
      return {
        pin: calcPin,
        doubleSlot: isDoubleSlot,
        x: 19 + i * 9,
        y: 34,
        type: "upright",
        angle: "vertical"
      };
    }),
    ...["I2C", [14, 15], [16, 17], [18, 19]].map((p, i) => {
      const isDoubleSlot = Array.isArray(p);
      const calcPin = isDoubleSlot ? p[0] : p;
      return {
        pin: calcPin,
        doubleSlot: isDoubleSlot,
        x: 5,
        y: 1 + i * 11,
        type: "flat",
        angle: "vertical"
      };
    })
  ]
};
var shield_mega_default = ShieldMega;

// src/shields/mkr/shield-mkr.ts
var ShieldMKR = {
  name: "MKR",
  slots: [
    ...[["A5", "A6"], "A4", "A3", "A2", "A1", "A0"].map((p, i) => {
      const isDoubleSlot = Array.isArray(p);
      const calcPin = isDoubleSlot ? p[0] : p;
      return {
        pin: calcPin,
        doubleSlot: isDoubleSlot,
        x: 18 * i - 28 + 18,
        y: -16,
        type: "upright",
        angle: "horizontal"
      };
    }),
    ...["I2C", [5, 6], 4, 3, 2, 1, 0].map((p, i) => {
      const isDoubleSlot = Array.isArray(p);
      const calcPin = isDoubleSlot ? p[0] : p;
      return {
        pin: calcPin,
        doubleSlot: isDoubleSlot,
        x: 18 * i - 28,
        y: 46,
        type: "upright",
        angle: "horizontal"
      };
    })
  ]
};
var shield_mkr_default = ShieldMKR;

// src/shields/nano/shield-nano.ts
var ShieldNano = {
  name: "Nano",
  slots: [
    ...[
      [2, 3],
      [4, 5],
      [6, 7]
    ].map((p, i) => {
      const isDoubleSlot = Array.isArray(p);
      const calcPin = isDoubleSlot ? p[0] : p;
      return {
        pin: calcPin,
        doubleSlot: isDoubleSlot,
        x: 1 + i * 11,
        y: -10,
        type: "upright",
        angle: "horizontal"
      };
    }),
    ...[["A0", "A1"], ["A2", "A3"], ["A6", "A7"], "I2C"].map((p, i) => {
      const isDoubleSlot = Array.isArray(p);
      const calcPin = isDoubleSlot ? p[0] : p;
      return {
        pin: calcPin,
        doubleSlot: isDoubleSlot,
        x: 1 + i * 11,
        y: 21,
        type: "upright",
        angle: "horizontal"
      };
    })
  ]
};
var shield_nano_default = ShieldNano;

// src/index.ts
var boardConfigs = [
  board_leonardo_default,
  board_lotus_default,
  board_mega_default,
  board_micro_default,
  board_mkr_wifi_default,
  board_nano_default,
  board_uno_default
];
var shieldConfigs = [
  shield_base_default,
  shield_lotus_default,
  shield_mega_default,
  shield_mkr_default,
  shield_nano_default
];
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  boardConfigs,
  shieldConfigs
});
