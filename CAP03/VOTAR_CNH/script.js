function idade(){
    var anoN = document.getElementById("AnoNas")
    var result = document.getElementById("res")
    var idade = 2022 - parseInt(anoN.value)
    if(idade < 16){
        result.innerText = `Você tem ${idade} anos, por ter menos de 16, você não pode votar ou habilitar-se.`
    } else if(idade>=16&&idade<18){
        result.innerText= `Você tem ${idade} anos de idade, seu voto é facultativo e voê ainda não pode habilitar-se`
    }else{
        result.innerText= `Você tem ${idade} anos de idade, seu voto é obrigatório e já pode habilitar-se.`
    }
    
}