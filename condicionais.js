const lista = new Array ('Salvador', 'São Paulo', 'Rio de Janeiro')
const idade = 17
const acompanhado = true

console.log(`Destinos possíveis:`)
console.log(lista)

if (idade >= 18 || acompanhado ){
    console.log(`Pode comprar`)
    lista.splice(1,1)
}else{
    console.log(`Menor de idade, não pode comprar`)
}
console.log(lista)