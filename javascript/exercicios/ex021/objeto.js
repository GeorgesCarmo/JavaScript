let pessoa = {
    nome: 'José', 
    sexo:'M', 
    peso: 85.4, 
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
}}
console.log(typeof pessoa)
console.log(pessoa.nome)
console.log(pessoa.peso)
console.log(pessoa.sexo)

pessoa.engordar(10)

console.log(`${pessoa.nome} pesa ${pessoa.peso}kg e é do sexo ${pessoa.sexo}`)