'use strict';
//  1
function strToDigits(str){
    if(str.length>3){
        console.log("Ваше число не входит в промежуток 0 - 999");
        return {};
    }

    let digits = str+"";
    //return {hundreds:+digits[0], tend:+digits[1], ones:+digits[2] } - не пойдет для двухзначных/однозначных

    let ones = +str%10;
    let tens = Math.floor(str/10)%10;
    let hundreds = Math.floor(str/100);
    
    return {ones, tens, hundreds};
}
let userStr = prompt("Введите число от 0 до 999")
console.log( strToDigits(userStr) );



//  2
var cart = [
    {id:0, name:"Bread Borodinski", price:45, count:2},
    {id:1, name:"Milk", price:60, count:1},
    {id:2, name:"Kephire", price:63, count:2},
    {id:3, name:"Dosirak", price:68, count:4},
    {id:4, name:"Cone forest", price:52, count:1},
];

function countBasketPrice(data){
    let sum = 0;
    for(const item of data){
        sum += item.price * item.count;
    }
    return sum;
}
console.log( "Shop cart sum: "+countBasketPrice(cart) );



//  3
function Product(name, price, photo, size, store){
    this.name = name ? name : "comon product";
    this.price = price ? price : 1;
    this.photo = photo ? photo : "";
    this.size = size ? size : "1.5L";
    this.count = 0;
    this.store = store ? store : "Lubertsy";


    this.toString = function(){
        return "Product "+this.name+" with price "+this.price;
    }
}

let p1 = new Product("Sprite", 120);
p1.price2 = 24560;
// console.log(p1.toString());
console.log(p1);
