import type { PinLayout, Pin } from "../../types";

const pinsTopRow: (Pin | null)[] = [
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
  "SCL",
];

const pinsBottomRow: Pin[] = ["A5", "A4", "A3", "A2", "A1", "A0"];

const pinLayoutUno: PinLayout = {
  pinMargin: { right: 3, top: 1, bottom: 1, left: 0 },
  pins: [
    ...pinsTopRow.map((p, i) => ({
      pin: p,
      row: "top",
      position: 4 + i,
    })),
    ...pinsBottomRow.map((p, i) => ({
      pin: p,
      row: "bottom",
      position: 4 + i,
    })),
  ],
};

export default pinLayoutUno;
