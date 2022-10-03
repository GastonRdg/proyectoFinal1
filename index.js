

let nombre = prompt("Ingrese su nombre")
function saludo(){

alert("hola" + nombre)

}
saludo();
let menu= prompt("\n1- comprar productos \n fin para  salir")
while( menu == "fin" ){
    alert("Hasta luego");
}

let producto = prompt("selecione una opcion de producto \n1 porta notebook ingrese \nfin para salir  salir ")
//console.log(" porta notebook")

while(menu != "fin"){

switch (producto){

    case "1":

    alert("El precio del porta notebook es $399");
    break;

    case "fin":
        alert("Gracias por su compra");
        break

    default:
        alert("Podructo sin stock");
        break;


}

producto = prompt ("¿desea seguir comprando? \nfin -salir ");

}