import type { PinLayout, Pin } from "../../types";

const pinsTopRow: (Pin | null)[] = [
  "SCL",
  "SDA",
  19,
  18,
  17,
  16,
  15,
  14,
  null,
  null, // 0,
  null, // 1,
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
];

const pinsBottomRow: (Pin | null)[] = [
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
  "A0",
];

const pinsRightRow: (Pin | null)[] = [
  22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52,
];

const pinsSecondRightRow: (Pin | null)[] = [
  23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53,
];

const pinLayoutUno: PinLayout = {
  pinMargin: { right: 4, top: 1, bottom: 1, left: 0 },
  pinGap: 1,
  pins: [
    ...pinsTopRow.map((p, i) => ({
      pin: p,
      row: "top",
      position: 5 + i,
    })),
    ...pinsBottomRow.map((p, i) => ({
      pin: p,
      row: "bottom",
      position: 3 + i,
    })),
    ...pinsRightRow.map((p, i) => ({
      pin: p,
      row: "right",
      align: "start",
      position: 1 + i,
    })),
    ...pinsSecondRightRow.map((p, i) => ({
      pin: p,
      row: "right-2",
      align: "start",
      position: 1 + i,
    })),
  ],
};

export default pinLayoutUno;
