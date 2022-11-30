function classificar(){
var cod = document.getElementById("CodProd")
var codi = parseInt(cod.value)
switch(codi){
    case 1:
        window.alert(`Alimento não-perecível`)
        break;
    case 2||3||4:
        window.alert(`Alimento perecível`)
        break;
    default:
        window.alert(`Outra coisa`);

}


}