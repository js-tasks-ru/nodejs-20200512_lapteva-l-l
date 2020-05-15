function sum(a, b) {
    if (isNaN(a) || isNaN(b) || Array.isArray(a) || Array.isArray(b)) {
        throw new TypeError('Аргументы функции должны быть числами');
    } else {
        return a + b;
    }
}

module.exports = sum;

