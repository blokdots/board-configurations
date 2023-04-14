import type { ShieldConfiguration, SlotConfig } from "../../types";

const ShieldLotus: ShieldConfiguration = {
  name: "Lotus",
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
        x: 17 + i * 12,
        y: 8,
        type: "upright",
        angle: "vertical",
      };
    }),
    ...[
      ["A6", "A7"],
      [7, 8],
      [6, 7],
      [5, 6],
    ].map((p, i) => {
      const isDoubleSlot = Array.isArray(p);
      const calcPin = isDoubleSlot ? p[0] : p;

      return <SlotConfig>{
        pin: calcPin,
        doubleSlot: isDoubleSlot,
        x: 17 + i * 12,
        y: 21,
        type: "upright",
        angle: "vertical",
      };
    }),
    ...[["A2", "A3"], ["A0", "A1"], "I2C", "I2C"].map((p, i) => {
      const isDoubleSlot = Array.isArray(p);
      const calcPin = isDoubleSlot ? p[0] : p;

      return <SlotConfig>{
        pin: calcPin,
        doubleSlot: isDoubleSlot,
        x: 17 + i * 12,
        y: 34,
        type: "upright",
        angle: "vertical",
      };
    }),
  ],
};

export default ShieldLotus;
