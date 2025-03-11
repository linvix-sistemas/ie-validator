import { mapping } from "./core";
import { PossibleStates } from "./types";

export * from "./types";

export const validateIE = (uf: PossibleStates, ie: string) => {
    if (!mapping[uf]) throw new Error(`A UF ${uf} não foi encontrada`);
    return mapping[uf](ie);
};

const IEValidator = {
    validate: validateIE,
};

export default IEValidator;
