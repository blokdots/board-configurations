type Pin = number | `A${number}` | "SCL" | "SDA";
type SlotPin = Pin | "I2C";
type PinConfig = {
  readonly pin: Pin | null;
  readonly row: "top" | "bottom" | "right" | "right-2" | string;
  readonly align?: "end" | "start" | "middle";
  /** the position n of the pin along the board */
  readonly position: number;
};
type PinLayout = {
  /** units in mm, usually should not be added */
  readonly pinSize?: number;
  /** units in mm, if single value, its given on all sides */
  readonly pinMargin?:
    | {
        readonly top: number;
        readonly right: number;
        readonly bottom: number;
        readonly left: number;
      }
    | number;
  /** units in mm */
  readonly pinGap?: number;
  readonly pins: PinConfig[];
};
type ShieldName = "Base" | "Mega" | "Lotus" | "Nano" | "MKR";
type SlotConfig = {
  /** An array of pins indicates this slot can take double pin components */
  readonly pin: SlotPin | SlotPin[];
  /** This shows, if a slot would allow for components that require subsequent pins in one slot, e.g. Joystick */
  readonly doubleSlot: boolean;
  /** units in mm */
  readonly x: number;
  /** units in mm */
  readonly y: number;
  /** Upright === standing, Flat === laying */
  readonly type: "upright" | "flat";
  readonly angle: "vertical" | "horizontal";
};
type ShieldConfiguration = {
  readonly name: ShieldName;
  readonly slots: SlotConfig[];
};
type BoardConfiguration = {
  readonly board: string;
  readonly fqbn: string;
  readonly firmataName: string;
  readonly ids: readonly {
    readonly vid: string;
    readonly pid: string;
  }[];
  readonly param: {
    readonly pins: readonly Pin[];
    readonly pwm: readonly Pin[];
    readonly sda?: Pin;
    readonly scl?: Pin;
    readonly rx: Pin;
    readonly tx: Pin;
  };
  /** units in mm */
  readonly width: number;
  readonly boardSvg: string;
  readonly pinLayout: PinLayout;
  readonly shield?: ShieldName | ShieldName[];
};

declare const boardConfigs: BoardConfiguration[];
declare const shieldConfigs: ShieldConfiguration[];

export { boardConfigs, shieldConfigs };