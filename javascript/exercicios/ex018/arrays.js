let num = [5,8,4,6,7]
console.log(`O vetor original é ${num}`)
num[5] = 2 // adicionando o número 2 na quinta posição(índice)
console.log(num)
num.push(9) // adicionando o número 9 na última posição(índice)
console.log(num)
console.log(`O vetor tem ${num.length} elementos`)
num.sort()
console.log(`Ordenando o vetor: ${num}`)

for(let pos = 0; pos < num.length; pos++){
    console.log(`índice ${pos} = ${num[pos]}`)
}

console.log('')

for (let pos in num) {
    console.log(`índice ${pos} = ${num[pos]}`)
}

let posicao = num.indexOf(15)
if(posicao == -1){
    console.log('O valor não foi encontrado!')
}else{
    console.log(`O valor está na posição: ${posicao}`)
}