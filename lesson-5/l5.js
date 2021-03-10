
'use strict';

` 1 `
const board = document.getElementById("board");
const colLetters = ["A","B","C","D","E","F","G","H"];

createChessBoard();
//  v 1
/*
function createChessBoard(){
    for(let col=0; col<8; col++){
        let rowElem = document.createElement("div");
        rowElem.className = "chess__row";
        board.appendChild(rowElem);

        for(let row=0; row<8; row++){
            let cellElem = document.createElement("div");
            cellElem.className = "chess__cell";

            cellElem.insertAdjacentHTML('beforeend', 
                "<label>"+colLetters[row]+(col+1)+"</label>");

            rowElem.appendChild(cellElem);
        }
    }
}


` 2 `;
placeAllFigures();

function placeAllFigures(row, figArr){
	let figuresMain = ["Л","К","С","Ф","Кр","С","К","Л"];
    let figuresAvant = ["п","п","п","п","п","п","п","п",];

    placeLineFigures(0, figuresMain, "white");
    placeLineFigures(1, figuresAvant, "white");
    
    placeLineFigures(6, figuresAvant);
    placeLineFigures(7, figuresMain);
}
function placeLineFigures(line, figArr, color){
	let allCells = document.getElementsByClassName("chess__cell");
    let figuresClass = color=="white" ? "chess__figure_white" : "";
  
	for(let i=0; i<8; i++){
        allCells[i+8*line].insertAdjacentHTML('beforeend','<div class="chess__figure '+figuresClass+'">'+figArr[i]+'</div>');
    }
}
*/

//  v 2
function createChessBoard(){
    for(let col=0; col<10; col++){
        let rowElem = document.createElement("div");
        rowElem.className = "chess__row";
        board.appendChild(rowElem);

        for(let row=0; row<10; row++){
            let cellElem = document.createElement("div");
            cellElem.className = "chess__cell";
            rowElem.appendChild(cellElem);
        }
    }
}


` 2 `;
addBoardLabels();
placeAllFigures();

function placeAllFigures(row, figArr){
	let figuresMain = ["♜","♞","♝","♛","♚","♝","♞","♜"];
    let figuresAvant = ["♟","♟","♟","♟","♟","♟","♟","♟",];

    placeLineFigures(1, figuresMain);
    placeLineFigures(2, figuresAvant);
    
    placeLineFigures(7, figuresAvant, "white");
    placeLineFigures(8, figuresMain, "white");
}
function placeLineFigures(line, figArr, color){
	let allCells = document.getElementsByClassName("chess__cell");
    let figuresClass = color=="white" ? "chess__figure_white" : "";

	for(let i=1; i<=8; i++){
        allCells[i+10*line].insertAdjacentHTML('beforeend',
            '<div class="chess__figure '+figuresClass+'">'
            +figArr[i-1]+'</div>');
    }
}
function addBoardLabels(){
    const boardSize = 10;
    const labels = [
        {letter:"A", x:2, y:1},
        {letter:"B", x:3, y:1},
        {letter:"C", x:4, y:1},
        {letter:"D", x:5, y:1},
        {letter:"E", x:6, y:1},
        {letter:"F", x:7, y:1},
        {letter:"G", x:8, y:1},
        {letter:"H", x:9, y:1},
    ];
    const numbers = [
        {letter:"8", x:1, y:2},
        {letter:"7", x:1, y:3},
        {letter:"6", x:1, y:4},
        {letter:"5", x:1, y:5},
        {letter:"4", x:1, y:6},
        {letter:"3", x:1, y:7},
        {letter:"2", x:1, y:8},
        {letter:"1", x:1, y:9},
    ];
    // for(let i=0; i<labels.length; i++){
    for(let label of labels){
        let cell = document.querySelector(`.chess__row:nth-child(${label.y}) .chess__cell:nth-child(${label.x})`);
        cell.innerText = label.letter;
        
        cell = document.querySelector(`.chess__row:nth-child(${label.y+9}) .chess__cell:nth-child(${label.x})`);
        cell.innerText = label.letter;
    }
    
    for(let label of numbers){
        let cell = document.querySelector(`.chess__row:nth-child(${label.y}) .chess__cell:nth-child(${label.x})`);
        cell.innerText = label.letter;

        cell = document.querySelector(`.chess__row:nth-child(${label.y}) .chess__cell:nth-child(${label.x+9})`);
        cell.innerText = label.letter;
        // cell.className = "chess__cell_rotated";
    }
}





` 3 `;

var products = [
    {name:"Кефир", price:"51",photo:"",size:"1л"},
    {name:"Молоко", price:"53",photo:"https://irecommend.ru/sites/default/files/product-images/142450/0005136-228x228.png",size:"1л"},
    {name:"Хлеб", price:"47",photo:"https://cdn-irec.r-99.com/sites/default/files/imagecache/300o/product-images/1036706/O55jfOA9ccu6QhlhkgNC1w.jpg",size:"батон"},
    {name:"Мука", price:"160",photo:"https://cdn-irec.r-99.com/sites/default/files/imagecache/300o/product-images/91162/muka.jpg",size:"1 кг"},
    {name:"Масло", price:"125",photo:"https://cdn-irec.r-99.com/sites/default/files/imagecache/300o/product-images/85567/iHlIkkLgZl7CiWiIbwYQ.jpg",size:"250г"}
];
var cart = [
    {name:"Боржоми", price:"160",photo:"https://cdn-irec.r-99.com/sites/default/files/imagecache/300o/product-images/11481/41d4455499_111514.jpg",size:"0.5л"},
    {name:"Ессентуки", price:"120",photo:"https://cdn-irec.r-99.com/sites/default/files/imagecache/300o/product-images/201142/VubgvNQ9DavNzhOWEAcPtQ.png",size:"1л"},
    {name:"Нарзан", price:"80",photo:"https://cdn-irec.r-99.com/sites/default/files/imagecache/300o/product-images/14559/narzan.jpg",size:"0.5"},
];

buildCart(cart);
fillProductList(products);

function buildCart(cart){
    let cartContent = document.getElementById("cartPopupContent");
    for(let product of cart){
        cartContent.appendChild( createCartItem(product) );
    }
    getCartTotal(cart, "cart__total");
}

function fillProductList(products){
    let prodListElm = document.getElementById("prodList");
    for(let itm of products){
        prodListElm.appendChild( createProductItem(itm) );
    }
}

function createProductItem(obj){
    let item = document.createElement("div");
    item.className = "product__item";

    let picbox = document.createElement("div");
    picbox.className = "product__image-box";
    item.appendChild(picbox);
    picbox.insertAdjacentHTML('beforeend', '<img src="'+obj.photo+'" alt="product" >');

    let props = document.createElement("div");
    props.className = "product__props";
    item.appendChild(props);

    props.insertAdjacentHTML('beforeend', '<h3>'+obj.name+'</h3>');

    if(obj.storeCount)
        props.insertAdjacentHTML('beforeend', '<div>Еще осталось '+obj.storeCount+' шт</div>');
    
    props.insertAdjacentHTML('beforeend', '<div class="product__price">'+obj.price + " р</div>");
    props.insertAdjacentHTML('beforeend', '<div class="product__add-cart-btn">Добавить в карзину</div>');

    return item;
}
function getCartTotal(cart, elemId){
    let cartTotal = document.getElementById(elemId);
    if(cart.length==0) {
        cartTotal.innerText =  "Корзина пуста";
        return;
    }
    let sum=0;
    for(let prod of cart){
        sum += +prod.price;
    }
    cartTotal.innerText = `В корзине: ${cart.length} товаров на сумму ${sum} рублей`;
}
function createCartItem(product){
    let productCells = '<div class="cart-item__photo"><img src="'+product.photo+'" alt="product"></div>';
    productCells += '<div class="cart-item__name">'+product.name+'</div>';
    productCells += '<div class="cart-item__price">'+product.price+' р</div>';
    productCells += '<div class="cart-item__cross">&times;</div>';

    let item = document.createElement("div");
    item.className = "cart__item";
    item.insertAdjacentHTML('beforeend', productCells);
    return item;
}

function vanishCart(totalId){
    cart = [];
    getCartTotal(cart, totalId);
}
