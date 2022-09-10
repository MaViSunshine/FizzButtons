
document.querySelector('.btn').addEventListener('click', gotClicked)
 
function gotClicked(){
    const randomN = Math.floor(Math.random() * 100) + 1;
  console.log(randomN)
   if (((randomN % 5) === 0) && ((randomN % 3) === 0)) {
    document.getElementById('wrFizzbuzz').textContent=  `Fizzbuzz is ${randomN}`              
   } 
   else if((randomN % 5) === 0) {
      document.getElementById('wrBuzz').textContent=  `Buzz is ${randomN}`              
     } 
    else if ((randomN % 3) === 0) {
     document.getElementById('wrFizz').textContent=  `Fizz is ${randomN}`              
    }
  
  else{`Got ${randomN}` }
}



