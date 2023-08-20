const arr = [
    {price: 2},
    {price: 1},
    {price: 9},
    {price: 4}
]
arr.sort((a, b) => a.price > b.price ? 1 : -1)
console.log(arr);

