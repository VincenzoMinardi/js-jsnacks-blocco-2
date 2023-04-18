let arryList =[];
let arryName = [
    'Vincenzo',
     'Lamberto',
     'Antonio',
     'Paolo',
    'Andrea',
     'Gary',
]; 
console.log(arryName);

 let arrySurname =[
     'Minardi',
     'Pluto',
     'Pippa',
     "D'angelo",
     'Giordano',
     'Orchestra'
 ];
 console.log(arrySurname)
 
 for (let i = 0; i < arryName.length; i++){
    
let generatorName = Math.floor(Math.random()*arryName.length);
let generatorSurname = Math.floor(Math.random()*arrySurname.length);
   console.log(generatorName, generatorSurname);
arryList.push(arryName[generatorName] + ' ' + arrySurname[generatorSurname]);
    
}

console.log (arryList);


