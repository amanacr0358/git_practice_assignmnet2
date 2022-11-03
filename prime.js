
function checkprime(number){


for (let i=2;i<=Math.sqrt(number);i++){
if (number%i==0){
  return false;
    }
 }
return true;
  
}
let number=97;
let ans=checkprime(number);
if(ans){
console.log(number," is a prime number");
}
else{
console.log(number," is not a prime number");
}
