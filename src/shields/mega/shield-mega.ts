import type { ShieldConfiguration, SlotConfig } from "../../types";

const ShieldMega: ShieldConfiguration = {
  name: "Mega",
  slots: [
    ...["I2C", "I2C", [12, 13], [10, 11], [8, 9], [6, 7], [4, 5], [2, 3]].map(
      (p, i) => {
        const isDoubleSlot = Array.isArray(p);
        const calcPin = isDoubleSlot ? p[0] : p;

        return <SlotConfig>{
          pin: calcPin,
          doubleSlot: isDoubleSlot,
          x: 19 + i * 9,
          y: 10,
          type: "upright",
          angle: "vertical",
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
      ["A14", "A15"],
    ].map((p, i) => {
      const isDoubleSlot = Array.isArray(p);
      const calcPin = isDoubleSlot ? p[0] : p;

      return <SlotConfig>{
        pin: calcPin,
        doubleSlot: isDoubleSlot,
        x: 19 + i * 9,
        y: 34,
        type: "upright",
        angle: "vertical",
      };
    }),
    ...["I2C", [14, 15], [16, 17], [18, 19]].map((p, i) => {
      const isDoubleSlot = Array.isArray(p);
      const calcPin = isDoubleSlot ? p[0] : p;

      return <SlotConfig>{
        pin: calcPin,
        doubleSlot: isDoubleSlot,
        x: 5,
        y: 1 + i * 11,
        type: "flat",
        angle: "vertical",
      };
    }),
  ],
};

export default ShieldMega;
