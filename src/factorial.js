/*const N_NUMBER = prompt("Ingrese un número entero");*/
/*const N_NUMBER = */

function factorial (n) {
    /*const NEG = "Ingrese un número válido, no negativo";*/
    if (n === 0 || n === 1) return 1;
    else if (n > 1) return n * factorial(n - 1);
    else return false;
}
/*console.log("Resultado: " + factorial(-1));*/

module.exports = factorial;