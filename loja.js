function adicionar(produto){
    let qtd = document.getElementById('qtd_'+ produto)
    const valor = document.getElementById('valor_'+produto)
    let total = document.getElementById('total_'+ produto)
    
    qtd.innerHTML = Number(qtd.innerHTML) + 1 //acrescenta quantidade

    let totalItem = Number(qtd.innerHTML) * Number(valor.innerHTML) // calcula total de cada item

    total.innerHTML = totalItem.toFixed(3) //fixa 3 casas decimais no valor total

    subTotal()
    checar(produto)
}

function diminuir(produto){
    let qtd = document.getElementById('qtd_'+ produto)
    const valor = document.getElementById('valor_'+produto)
    let total = document.getElementById('total_'+ produto)

    qtd.innerHTML = Number(qtd.innerHTML) - 1 //diminui a quantidade
    let totalItem = Number(qtd.innerHTML) * Number(valor.innerHTML) //calcula o total de cada item
    total.innerHTML = totalItem.toFixed(3) //fixa 3 casas decimais no valor total

    subTotal()
    checar(produto)
}

function subTotal(){
    let subTotal = 0

    for( let i = 1; i <= 3; i++){
        let total =  + Number(document.getElementById('total_' + i).innerHTML) //pega o total de cada itm
        subTotal += total //acrescenta o total de cada item no sub total
    }

    document.getElementById('valorSubTotal').innerHTML = subTotal.toFixed(3)
    

}

function checar(produto){
    let qtd = Number(document.getElementById('qtd_'+ produto).innerHTML)
    let total = document.getElementById('total_'+ produto)

    if(qtd < 0){ // se a quantidade do item for negativa ele apresenta um aviso e a quantidade, total e subtotal voltam a 0
        alert('Quantidade inválida!')
        document.getElementById('qtd_'+produto).innerHTML = 0
        document.getElementById('total_'+produto).innerHTML = 0
        document.getElementById('valorSubTotal').innerHTML = 0
    }
    subTotal()
}