/*const CTGA = [C,T,G,A];*/
result =[];
function lookDNA (cadenaAdn) {
    let result = cadenaAdn.match(/[ACGT]/g);
    cadenaAdn = cadenaAdn.split("");
    if (result === null) {
        return false;
    }
    else {
        if (cadenaAdn.length == result.length) {
            /*return result.join("");*/
            return true;
        }
        else {
            return false;
        }
    }
}
//console.log(lookDNA(""));

module.exports = lookDNA;