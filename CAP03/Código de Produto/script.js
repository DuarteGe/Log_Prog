function classificar(){
var cod = document.getElementById("CodProd")
var codi = parseInt(cod.value)
var di = document.getElementById("res")
switch(codi){
    case 1:
        di.innerHTML = "Alimento não-perecível"
        break;
    case 2:
        di.innerHTML = "Alimento perecível"
        break;
    case 3:
        di.innerHTML = "Alimento perecível"
        break;
    case 4:
        di.innerHTML = "Alimento perecível"
        break;
    case 5:
        di.innerHTML = "Vestuário"
        break;
    case 6:
        di.innerHTML = "Vestuário"
        break;
    case 7:
        di.innerHTML = "Higiene Pessoal"
        break;
    default:
        if(codi>=8&&codi<=15){
            di.innerHTML = "Limpeza e utensílios domésticos"

        }else{
            di.innerHTML = "Inválido"
        }

}


}