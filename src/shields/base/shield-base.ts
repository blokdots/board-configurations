import type { ShieldConfiguration, SlotConfig } from "../../types";

const ShieldBase: ShieldConfiguration = {
  name: "Base",
  slots: [
    ...[
      [4, 5],
      [3, 4],
      [2, 3],
    ].map((p, i) => {
      const isDoubleSlot = Array.isArray(p);
      const calcPin = isDoubleSlot ? p[0] : p;

      return <SlotConfig>{
        pin: calcPin,
        doubleSlot: isDoubleSlot,
        x: 15 + i * 12,
        y: 5,
        type: "upright",
        angle: "vertical",
      };
    }),
    ...[
      [8, 9],
      [7, 8],
      [6, 7],
      [5, 6],
    ].map((p, i) => {
      const isDoubleSlot = Array.isArray(p);
      const calcPin = isDoubleSlot ? p[0] : p;

      return <SlotConfig>{
        pin: calcPin,
        doubleSlot: isDoubleSlot,
        x: 15 + i * 12,
        y: 19,
        type: "upright",
        angle: "vertical",
      };
    }),
    ...["I2C", "I2C", "I2C", "I2C"].map((p, i) => {
      const isDoubleSlot = Array.isArray(p);
      const calcPin = isDoubleSlot ? p[0] : p;

      return <SlotConfig>{
        pin: calcPin,
        doubleSlot: isDoubleSlot,
        x: 15 + i * 12,
        y: 33,
        type: "upright",
        angle: "vertical",
      };
    }),
    ...[
      ["A3", "A4"],
      ["A2", "A3"],
      ["A1", "A2"],
      ["A0", "A1"],
    ].map((p, i) => {
      const isDoubleSlot = Array.isArray(p);
      const calcPin = isDoubleSlot ? p[0] : p;

      return <SlotConfig>{
        pin: calcPin,
        doubleSlot: isDoubleSlot,
        x: 3,
        y: 1 + 11 * i,
        type: "flat",
        angle: "vertical",
      };
    }),
  ],
};

export default ShieldBase;
