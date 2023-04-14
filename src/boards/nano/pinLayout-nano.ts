import type { PinLayout, Pin } from "../../types";

const pinsTopRow: (Pin | null)[] = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const pinsBottomRow: (Pin | null)[] = [
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
  13,
];

const pinLayoutUno: PinLayout = {
  pinMargin: { top: 1, right: 2, bottom: 1, left: 2 },
  pins: [
    ...pinsTopRow.map((p, i) => ({
      pin: p,
      row: "top",
      position: 3 + i,
    })),
    ...pinsBottomRow.map((p, i) => ({
      pin: p,
      row: "bottom",
      position: 3 + i,
    })),
  ],
};

export default pinLayoutUno;
