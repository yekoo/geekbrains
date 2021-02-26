'use strict';

//  task 3-1
var maxNumber = 100;
let simples = [];
let cnt = 1;
whileCycle:
while(cnt < maxNumber){
    cnt++;
    //let cplx = false;
    forCicle: 
    for(let i=2; i<(cnt-1); i++) {
        let division = cnt/i;
        if( (division%1)===0){
            // cplx = true;
            continue whileCycle;
        }
    }
    // if(!cplx)
        simples.push(cnt);
}
            
console.log("Simple number up to "+cnt+" are "+simples.join(", "));





//  task 3-2
var cart = [
    [0, "Bread Borodinski", 45, 2],
    [1, "Milk", 60, 1],
    [2, "Kephire", 63, 2],
    [3, "Dosirak", 68, 4],
    [4, "Cone forest", 52, 1],
];

function countBasketPrice(data){
    let sum = 0;
    for(const item of data){
        sum += item[2] * item[3];
    }
    return sum;
}
console.log( "Shop sum: "+countBasketPrice(cart) );





//  task 3-3
//for(alert(1); alert(2); alert(3)){/*здесь пусто*/}
for(let i=0; i<10;console.log(i++)){/*здесь пусто*/}





//  task 3-4
let pineTree = "";
for(let l=0; l<20; l++){
	let lineStr = "";
	for(let i=0; i<l; i++){
  	lineStr+="x";
  }
  pineTree += lineStr+"\n";
}
console.log(pineTree);

//  безветренная ель
/*let pineTreeUW = "";
let levelsCount = 20;
for(let l=0; l<levelsCount; l++){
    let lineStr = "";
    
	for(let i=0; i<levelsCount-l; i++){
        //lineStr +=" .";
        lineStr +="  ";
    }
	for(let i=levelsCount-l; i<=levelsCount+l; i++){
  	    lineStr+="x";
    }
    for(let i=0; i<levelsCount-l; i++){
        lineStr +="  ";
        // lineStr +=" .";
    }
    pineTreeUW += lineStr+"\n";
}
console.log(pineTreeUW);
*/
