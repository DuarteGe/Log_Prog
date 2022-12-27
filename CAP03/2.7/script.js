function classifica(){
    var idadeAluno = document.getElementById("idade")
    var result = document.getElementById("res")
    if(idadeAluno.value >=5&&idadeAluno.value<=7){
        result.innerHTML = `Por sua idade ser ${idadeAluno.value} anos, sua classe é a Infantil A`

    }else if(idadeAluno.value>=8&&idadeAluno.value<=10){
        result.innerHTML = `Por sua idade ser ${idadeAluno.value} anos, sua classe é a Infantil B`
    }else if(idadeAluno.value>=11&&idadeAluno.value<=13){
        result.innerHTML = `Por sua idade ser ${idadeAluno.value} anos, sua classe é a Juvenil A`
    }else if(idadeAluno.value>=14&&idadeAluno.value<=17){
        result.innerHTML = `Por sua idade ser ${idadeAluno.value} anos, sua classe é a Juvenil B`
    }else if(idadeAluno>18){
        
        result.innerHTML = `Por sua idade ser ${idadeAluno.value} anos, sua classe é a Adulto`
}