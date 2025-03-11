import { mapping } from "./core";
import { PossibleStates } from "./types";

export const validateIE = (uf: PossibleStates, ie: string) => {
    return mapping[uf](ie);
};

const IEValidator = {
    validate: validateIE,
};

export default IEValidator;
