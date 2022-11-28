function idade(){
    var anoN = document.getElementById("AnoNas")
    var result = document.getElementById("res")
    var idade = 2022 - parseInt(anoN.value)
    if(idade < 16){
        result.innerText = ""
    } else if(idade>=16&&idade<18){
        result.innerText= "Facultativo"
    }else{
        result.innerText= "Obrigatório"
    }
    
}