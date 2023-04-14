// Boards
import BoardUno from "./boards/uno";

// Shields
import ShieldBase from "./shields/base";

// Types
export type * from "./types";

const boardConfigs = [BoardUno];
const shieldConfigs = [ShieldBase];

export { boardConfigs, shieldConfigs };
