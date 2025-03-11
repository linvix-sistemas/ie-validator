function calcDigit(body: string): number {
    let weight = body.length + 1;
    let sum = 0;
    body.split("").forEach((digit) => {
        sum += +digit * weight;
        weight--;
    });

    const mod = 11;
    const rest = sum % mod;
    let dig = mod - rest;
    if (dig >= 10) {
        dig = 0;
    }
    return dig;
}

export function validatePE(ie: string): boolean {
    const ieStr = String(ie).replace(/\D/g, "");

    const { length } = ieStr;

    if (length !== 9) return false;

    const body = ie.substr(0, length - 2);

    const firstDig = calcDigit(body);
    const secondDig = calcDigit(body + firstDig);

    const posSecondDig = length - 1;
    const posFirstDig = length - 2;

    const ieAtFirstPos = +ieStr.charAt(posFirstDig);
    const ieAtSecondPos = +ieStr.charAt(posSecondDig);

    return ieAtFirstPos === firstDig && ieAtSecondPos === secondDig;
}
