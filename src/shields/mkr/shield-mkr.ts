import type { ShieldConfiguration, SlotConfig } from "../../types";

const ShieldMKR: ShieldConfiguration = {
  name: "MKR",
  slots: [
    ...[["A5", "A6"], "A4", "A3", "A2", "A1", "A0"].map((p, i) => {
      const isDoubleSlot = Array.isArray(p);
      const calcPin = isDoubleSlot ? p[0] : p;

      return <SlotConfig>{
        pin: calcPin,
        doubleSlot: isDoubleSlot,
        x: 18 * i - 28 + 18,
        y: -16,
        type: "upright",
        angle: "horizontal",
      };
    }),
    ...["I2C", [5, 6], 4, 3, 2, 1, 0].map((p, i) => {
      const isDoubleSlot = Array.isArray(p);
      const calcPin = isDoubleSlot ? p[0] : p;

      return <SlotConfig>{
        pin: calcPin,
        doubleSlot: isDoubleSlot,
        x: 18 * i - 28,
        y: 46,
        type: "upright",
        angle: "horizontal",
      };
    }),
  ],
};

export default ShieldMKR;
