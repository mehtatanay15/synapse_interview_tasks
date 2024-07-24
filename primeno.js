function prime(n) {
    if (n === 1) return false;

    for (let i = 2; i <= n - 1; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function divisor(n) {
    let divisors = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            divisors.push(i);
        }
    }
    return divisors;
}

function main(start, end) {
    let result = {};
    for (let i = start; i < end; i++) {
        if (prime(i)) {
            result[i] = i.toString(2);
        } else {
            result[i] = divisor(i);
        }
    }
    return result;
}

const start = 6;
const end = 34;
console.log(main(start, end));
