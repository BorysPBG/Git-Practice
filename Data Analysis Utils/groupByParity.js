// feature/group-by-parity
function groupByParity(arr) {
    return {
        even: arr.filter(num => num % 2 === 0),
        odd: arr.filter(num => num % 2 !== 0)
    };
}

// Пример вызова
console.log(groupByParity([1, 2, 3, 4, 5, 6])); // { even: [2, 4, 6], odd: [1, 3, 5] }
