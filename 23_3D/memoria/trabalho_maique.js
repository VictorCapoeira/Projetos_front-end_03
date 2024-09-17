
// criando variavel que irá conter o numero a ser advinhado 
const numeros = [1,2,3,4,5,6,7,8,9,10];
function descobrir_numero(n){
    let acerto = "";
    for(let i = 0; i <= numeros.length; i++){
        if(n === numero_S){
            acerto = "Parabens";
        }
        else{
            acerto = "Vco"
        }
    }
    return acerto
}
    console.log(descobrir_numero(5));