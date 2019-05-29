


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

console.log(MCD(36,644));
//Esto es lo que quiero cambiar

console.log(mcm.apply(window,[36,89.5]));
//Esto es lo que quiero cambiar