// SDA and SCL are the I2C pins. We should transform them in the UI, not the config
export type Pin = number | `A${number}` | "I2C" | "SCL" | "SDA";

export type PinConfig = {
  readonly pin: Pin | null;
  readonly row: "top" | "bottom" | "right" | "right-2" | string;
  readonly align?: "end" | "start" | "middle";
  /** the position n of the pin along the board */
  readonly position: number;
};

export type PinLayout = {
  /** units in mm */
  width: number;
  /** units in mm */
  pinSize?: number;
  /** units in mm */
  pinMargin?:
    | {
        top: number;
        right: number;
        bottom: number;
        left: number;
      }
    | number;
  /** units in mm */
  pinGap?: number;
  pins: PinConfig[];
};

export type ShieldName = "Base" | "Mega" | "Lotus" | "Nano" | "MKR";

export type SlotConfig = {
  /** An array of pins indicates this slot can take double pin components */
  readonly pin: Pin | Pin[];
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

export type ShieldConfiguration = {
  readonly name: ShieldName;
  readonly slots: SlotConfig[];
};

export type BoardConfiguration = {
  readonly boardType: string;
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
    // readonly sda?: Pin;
    // readonly scl?: Pin;
  };
  readonly pinLayout: PinLayout;
  readonly boardSvg: string;
  readonly shield?: ShieldName | ShieldName[];
};
