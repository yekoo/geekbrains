'use strict';

var products = [
    {name:"Кефир", price:"51",photo:"",size:"1л"},
    {name:"Молоко", price:"53",photo:"https://irecommend.ru/sites/default/files/product-images/142450/0005136-228x228.png",size:"1л"},
    {name:"Хлеб", price:"47",photo:"https://cdn-irec.r-99.com/sites/default/files/imagecache/300o/product-images/1036706/O55jfOA9ccu6QhlhkgNC1w.jpg",size:"батон"},
    {name:"Мука", price:"160",photo:"https://cdn-irec.r-99.com/sites/default/files/imagecache/300o/product-images/91162/muka.jpg",size:"1 кг"},
    {name:"Масло", price:"125",photo:"https://cdn-irec.r-99.com/sites/default/files/imagecache/300o/product-images/85567/iHlIkkLgZl7CiWiIbwYQ.jpg",size:"250г"}
];
var cartContents = [
    {name:"Боржоми", price:"160",photo:"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fecx.images-amazon.com%2Fimages%2FI%2F41Dvof8NV7L._SY300_.jpg",size:"0.5л"},
    {name:"Ессентуки", price:"120",photo:"https://cdn-irec.r-99.com/sites/default/files/imagecache/300o/product-images/201142/VubgvNQ9DavNzhOWEAcPtQ.png",size:"1л"},
    {name:"Нарзан", price:"80",photo:"https://cdn-irec.r-99.com/sites/default/files/imagecache/300o/product-images/14559/narzan.jpg",size:"0.5"},
];

const cart = {
    cartListElement: document.getElementById("cartPopupContent"),
    products: [],
    init(){
        this.buildCart(this.products);
        this.getCartTotal(this.products);
    },
    setCartContents(productList){
        this.products = productList;
    },
    buildCart(productList){
        console.log(productList);
        let cartContent = document.getElementById("cartPopupContent");
        for(let product of productList){
            cartContent.appendChild( this.createCartItem(product) );
        }
    },
    getCartTotal(productList){
        let cartTotal = document.getElementById("cart__total");
        if(productList.length==0) {
            cartTotal.innerText =  "Корзина пуста";
            return;
        }
        let sum=0;
        for(let prod of productList){
            sum += +prod.price;
        }
        cartTotal.innerText = `В корзине: ${cart.length} товаров на сумму ${sum} рублей`;
    },

    createCartItem(product){
        let productCells = '<div class="cart-item__photo"><img src="'+product.photo+'" alt="product"></div>'
        + '<div class="cart-item__name">'+product.name+'</div>'
        + '<div class="cart-item__price">'+product.price+' р</div>'
        + '<div class="cart-item__cross">&times;</div>';
        let item = document.createElement("div");
        item.className = "cart__item";
        item.insertAdjacentHTML('beforeend', productCells);
        const crossBtn = item.getElementsByClassName("cart-item__cross")[0];
        
        return item;
    },
    addProduct(product){

    },
    removeProduct(event){
        console.log("REMOVE "+event.target.parentNode);
        console.log("remove "+this.innerHTML);
    },
    vanishCart(totalId){
        this.products = [];
        this.getCartTotal(cart, totalId);
    }
}

const catalogue = {
    cartContents: document.getElementById("cartPopupContent"),
    products: [],
    addToCart: null,

    init(){
        this.fillProductList(this.products);
        console.log("catalogue.addToCart:",this.addToCart);
    },
    setProductList(products){
        this.products = products.slice(0);
    },
    fillProductList(products){
        let prodListElm = document.getElementById("prodList");
        for(let itm of products){
            prodListElm.appendChild( this.createProductItem(itm) );
        }
    },
    createProductItem(obj){
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
        props.insertAdjacentHTML('beforeend', '<div class="product__add-cart-btn" onClick="this.addToCart();">Добавить в карзину</div>');
        return item;
    },
};


const shop = {
    cart: null,
    catalogue: null,

    init(cart, catalogue){
        this.cart = cart;
        this.cart.setCartContents(products);
        this.cart.init();
        this.catalogue = catalogue;
        this.catalogue.addToCart = this.addToCart;
        this.catalogue.setProductList(cartContents)
        this.catalogue.init();
    },
    addToCart(e){
        console.log(e);
    },

}
shop.init(cart, catalogue);
