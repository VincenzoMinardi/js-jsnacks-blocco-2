
 let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

 console.log (numbers);

 let numberOdd = 0;

 for (let i = 0; i < numbers.length; i++){
    
    if(i % 2 !== 0){
        
        numberOdd += numbers[i];
    }
 }

 console.log( 'La somma dei numeri in posiziona dispari è', numberOdd);