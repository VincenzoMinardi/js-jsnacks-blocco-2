let  numbers;
let verifiched = false;

let myArr =[];

for  ( let i = 0; i < 6;  i++){
    numbers = parseInt(prompt('Digita un numero',));
    
    

    if(numbers % 2 == 0){
        console.log('pari',(numbers));
    }
    

    else if(numbers % 2 == 1){
        verifiched = true;
        console.log ('dispari',(numbers));
        parseInt(myArr.push(numbers))
    }
}

console.log(myArr)
    



