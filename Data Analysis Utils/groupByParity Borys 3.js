// feature/group-by-parity
function groupByParity(arr) {
    return {
        even: arr.filter(num => num % 2 === 0),
        odd: arr.filter(num => num % 2 !== 0)
    };
}


