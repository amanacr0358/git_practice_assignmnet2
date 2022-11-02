function checkprime(n){
count=0
for (let i=0;i<n;i++){
if (n%i==0){
  return true ;
 } 
}
return false;

}
console.log(checkprime(29);