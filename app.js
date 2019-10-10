function MCD(){
    if (arguments.length<2) 
        return false;

    if (arguments.length==2)
            return (arguments[1]==0?arguments[0]:MCD(arguments[1],arguments[0]%arguments[1]));

    var arr=[].splice.call(arguments,0);
            arr.splice(0,2,MCD(arr[0],arr[1]));
            return MCD.apply(window,arr);
}

function mcm(a,b){
    if (arguments.length<2) return false;
    if (arguments.length==2)return arguments[0]*arguments[1]/MCD(arguments[0],arguments[1]);
    var arr=[].splice.call(arguments,0);
    arr.splice(0,2,mcm(arr[0],arr[1]));
    return mcm.apply(window,arr);
}

/*Función para recoger el valor de 'input' y extraer los números y descartar las comas,
   convierte los números en enteros y los inserta en un array*/
function calcularMCDmcm() {
    var input = document.getElementById('dataInput').value;
    var numbers = []; //Array que almacenará los números proporcionados por el usuario
    var sp = 0;  //Indicador para usar como 'start position' del metodo substring

// El siguiente bucle recorre cada caracter de nuestro string
  for(var i = 0; i < input.length; i++) {
    if (input[i] == ',') {  //Verificamos si es una coma (,)
      numbers.push(parseInt(input.substring(sp,i))); // extraemos el número y lo agregamos al array
      sp = i + 1; //Marcamos el nuevo 'start-position'
    } else if (i == input.length - 1) { //Si llegamos al final de la cadena
      numbers.push(parseInt(input.substring(sp)));  //Extraemos el último numero y lo agregamos al array
    }
  }

//Usar el método 'apply' con nuestras funciones MCD y mcm
document.getElementById('MCD').innerText = 'El MCD es: ' +  MCD.apply(window, numbers);
document.getElementById('mcm').innerText = 'El mcm es: ' +  mcm.apply(window, numbers);

console.log(MCD(36, 12, 96));
//Esto es lo que quiero cambiar

console.log(mcm.apply(window,[36, 12, 96]));
//Esto es lo que quiero cambiar
}