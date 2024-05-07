function factorial (n) {
    if (n === 0 || n === 1) return 1;
    else if (n > 1) return n * factorial(n - 1);
    else return false;
}

module.exports = factorial;