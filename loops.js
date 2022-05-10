const lista = new Array ('Salvador', 'São Paulo', 'Rio de Janeiro')
const idade = 17
const acompanhado = true
const destino = "Bahia"

console.log("Destinos possíveis: ", lista)

const podeComprar = idade >= 18 || acompanhado
let destinoExiste = false

/*let cont = 0
while(cont<lista.length){
    if(lista[cont] == destino){
        destinoExiste = true
        break
    }
    cont += 1
}*/

for(i = 0; i<lista.length; i++){
    if(lista[i] == destino){
        destinoExiste = true
        break
    }
}
console.log("Destino existe: ", destinoExiste)

if(podeComprar && destinoExiste){
    console.log("Boa viagem!")
}else{
    console.log("Desculpe, houve um erro.")
}
