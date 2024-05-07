result =[];
function lookDNA (cadenaAdn) {
    let result = cadenaAdn.match(/[ACGT]/g);
    cadenaAdn = cadenaAdn.split("");
    if (result === null) {
        return false;
    }
    else {
        if (cadenaAdn.length == result.length) {
            return true;
        }
        else {
            return false;
        }
    }
}

module.exports = lookDNA;