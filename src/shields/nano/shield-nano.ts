import type { ShieldConfiguration, SlotConfig } from "../../types";

const ShieldNano: ShieldConfiguration = {
  name: "Nano",
  slots: [
    ...[
      [2, 3],
      [4, 5],
      [6, 7],
    ].map((p, i) => {
      const isDoubleSlot = Array.isArray(p);
      const calcPin = isDoubleSlot ? p[0] : p;

      return <SlotConfig>{
        pin: calcPin,
        doubleSlot: isDoubleSlot,
        x: 1 + i * 11,
        y: -10,
        type: "upright",
        angle: "horizontal",
      };
    }),
    ...[["A0", "A1"], ["A2", "A3"], ["A6", "A7"], "I2C"].map((p, i) => {
      const isDoubleSlot = Array.isArray(p);
      const calcPin = isDoubleSlot ? p[0] : p;

      return <SlotConfig>{
        pin: calcPin,
        doubleSlot: isDoubleSlot,
        x: 1 + i * 11,
        y: 21,
        type: "upright",
        angle: "horizontal",
      };
    }),
  ],
};

export default ShieldNano;
