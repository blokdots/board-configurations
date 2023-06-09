// SDA and SCL are the I2C pins. We should transform them in the UI, not the config
export type Pin = number | `A${number}` | "SCL" | "SDA";

export type SlotPin = Exclude<Pin, "SCL" | "SDA"> | "I2C";

export type PinConfig = {
  readonly pin: Pin | null; // add null here for easier skipability in layout
  readonly row: "top" | "bottom" | "right" | "right-2" | string;
  readonly align?: "end" | "start" | "middle";
  /** the position n of the pin along the board */
  readonly position: number;
};

export type PinLayout = {
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

export type ShieldName = "Base" | "Mega" | "Lotus" | "Nano" | "MKR";

export type SlotConfig = {
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

export type ShieldConfiguration = {
  readonly name: ShieldName;
  readonly slots: SlotConfig[];
};

export type BoardName =
  | "Arduino Uno"
  | "Arduino Nano"
  | "Arduino Mega"
  | "Arduino Leonardo"
  | "Seeeduino Lotus"
  | "Arduino Micro"
  | "Arduino MKR WiFi 1010";

export type BoardConfiguration = {
  readonly board: BoardName;
  readonly fqbn: `${string}:${string}:${string}`;
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
  readonly docs: {
    /** The link to the board, e.g. on the Arduino website. */
    readonly boardLink: string;
    /** If there are any things to keep in mind for the board, e.g. drivers. (markdown) */
    readonly notice?: string;
  };
};
