//declarando as variaveis
let vitoriasHeroi = 98
let derrotasHeroi = 13
let saldoHeroi = calcularSaldo(vitoriasHeroi, derrotasHeroi)
let nivelHeroi = classificarHeroi()


//calculando o saldo do heroi
function calcularSaldo (vitorias, derrotas){
    let saldo = vitorias - derrotas
    return saldo
}

//calculando o nivel do heroi
function classificarHeroi (){
    if (saldoHeroi<=10){
        return "Ferro"
    }
    else if (saldoHeroi>=11 && saldoHeroi<=20){
        return "Bronze"
    }
    else if (saldoHeroi>=21 && saldoHeroi<=50){
        return "Prata"
    }
    else if (saldoHeroi>=51 && saldoHeroi<=80){
        return "Ouro"
    }
    else if (saldoHeroi>=81 && saldoHeroi<=90){
        return "Diamante"
    }
    else if (saldoHeroi>=91 && saldoHeroi<=100){
        return "Lendário"
    }
    else {
        return "Imortal"
    }
}

//saida
console.log(`O Herói tem saldo de ${saldoHeroi} e está no nível ${nivelHeroi}.`)