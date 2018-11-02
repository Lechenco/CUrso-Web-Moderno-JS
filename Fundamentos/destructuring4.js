function rand([min = 0, max = 10000]){
    if (min > max) [min, max] = [max, min]

    const valor = Math.random() * (max - min) + min
    return valor
}

console.log(rand([50, 40]))
console.log(rand([992]))
console.log(rand([, 30]))
console.log(rand([]))