import type { PinLayout, Pin } from "../../types";

const pinsTopRow: (Pin | null)[] = ["SDA", "SCL", 4, 5, 6, 7, 8, 9, 10, 11, 12];

const pinsBottomRow: (Pin | null)[] = [
  "A5",
  "A4",
  "A3",
  "A2",
  "A1",
  "A0",
  null,
  null,
  13,
];

const pinLayoutUno: PinLayout = {
  pinMargin: 1,
  pins: [
    ...pinsTopRow.map((p, i) => ({
      pin: p,
      row: "top",
      position: 4 + i,
    })),
    ...pinsBottomRow.map((p, i) => ({
      pin: p,
      row: "bottom",
      position: 6 + i,
    })),
  ],
};

export default pinLayoutUno;
