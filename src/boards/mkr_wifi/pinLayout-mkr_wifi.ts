import type { PinLayout, Pin } from "../../types";

const pinsTopRow: (Pin | null)[] = [
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
  5,
];

const pinsBottomRow: Pin[] = ["SCL", "SDA", 10, 9, 8, 7, 6];

const pinLayoutUno: PinLayout = {
  pins: [
    ...pinsTopRow.map((p, i) => ({
      pin: p,
      row: "top",
      position: 8 + i,
    })),
    ...pinsBottomRow.map((p, i) => ({
      pin: p,
      row: "bottom",
      position: 13 + i,
    })),
  ],
};

export default pinLayoutUno;
