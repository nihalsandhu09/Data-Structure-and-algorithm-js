let count = 0 ;

function f(){
if(count == 3) return;
console.log(count);
count++;
f();
}
f()