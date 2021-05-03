'use strict'

const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

// class Shop {
//}

class ProductList {
    #goods;
    #allProducts;
    #prop;
    addToCartHandler;

    constructor(container = '.products') {
        this.container = container;
        this.#goods = [];
        this.#allProducts = [];

        this.#getProducts()
            .then( (data)=>{
                this.#goods = data;
                console.log(this.#goods);
                this.#render();
            }).catch((err)=>{
                alert("Error! "+err);
            });
    }

    get property() {
        return this.#prop;
    }

    set property(value) {
        this.#prop = value;
    }


    #getProducts() {
        // console.log("Fetching data with Promise!");
        return fetch(`${API}/catalogData.json`)
            .then((response) => response.json());
    }

    #render() {
        const block = document.querySelector(this.container);
//
        for (const good of this.#goods) {
            const productObject = new ProductItem(good);//, "img/200x150.png"
            productObject.setAddToCartHandler( this.addToCartHandler );
            const productElement = productObject.render();
            this.#allProducts.push(productObject);
            block.appendChild(productElement);
        }
    }

    setAddCoCartHandler(callBack){
        this.addToCartHandler = callBack;
    }

    addToCart(product){
        this.addToCartHandler(product);
    }
}

class ProductItem {
    addToCartHandler = null;
    constructor(product, img = 'https://via.placeholder.com/200x150') {
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
    }

    setAddToCartHandler(callBack){
        console.log("ProductItem +");
        this.addToCartHandler = callBack;
    }
    addToCartBtnClick(attr){
        console.log(this);
        this.addToCartHandler(this);
    }
    render() {
        const prodElem = document.createElement("div");
        prodElem.className = "product-item";
        prodElem.setAttribute("data-id", this.id);

        const img = document.createElement("img");
        img.setAttribute("src", this.img);
        img.setAttribute("alt", "some product");
        prodElem.appendChild(img);
        
        const prodDesc = document.createElement("div");
        prodDesc.className = "desc";
        prodDesc.insertAdjacentHTML('beforeend', `<h3>${this.title}</h3>`)
        prodDesc.insertAdjacentHTML('beforeend', `<p>${this.price} \u20bd</p>`)
        prodElem.appendChild(prodDesc);

        const addToCartBtn = document.createElement("button");
        addToCartBtn.className = "buy-btn";
        addToCartBtn.addEventListener("click", (e)=>this.addToCartBtnClick(e));
        addToCartBtn.innerText = "Купить";
        prodElem.appendChild(addToCartBtn);

        return prodElem;
    }
}


class Cart {
    goods;
    #chosenProducts;

    constructor(container=".cart-list", products = []) {
        this.container = container;
        this.goods = products.slice(0) || [];
        
        this.#chosenProducts = [];
        this.render();
    }

    //  Lesson 3
    getProducts(){
        return this.#chosenProducts.slice(0);
    }
    addProduct(product){
        this.goods.push(product);
        this.vanish();
        this.render();
    }
    removeProduct(productId = 0){
        const goodToDelete = this.goods.find((el, idx)=>{ return el.id == productId});
        const goodIndex = this.goods.indexOf(goodToDelete);
        this.goods.splice(goodIndex, 1);
        this.vanish();
        this.render();
    }


    calcTotalPrice(){
        let totalPrice = 0;
        for (const good of this.goods) {
            totalPrice += good.price
        }
        return totalPrice;
    }
    
    render() {
        const block = document.querySelector(this.container);
        for (const good of this.goods) {
            const productObject = new CartItem(good, (good)=>this.removeProduct(good));
            this.#chosenProducts.push(productObject);
            // block.insertAdjacentHTML('beforeend', productObject.render());

            block.append(productObject.render());
        }
    }
    vanish(){
        const block = document.querySelector(this.container);
        block.innerText = "";
    }
}

class CartItem {
    #id;
    #title;
    #price;
    #quantity = 1;
    #deleteCallBack;
    element;

    constructor({id, title, price}, deleteCallBack) {
        this.#id = id;
        this.#title = title;
        this.#price = price;
        this.#deleteCallBack = (id)=>deleteCallBack(id);
    }
    augmentQuantity(){
        this.#quantity++;
    }
    reduceQuantity(){
        this.#quantity--;
    }
    changeQuantity(val){
        //  если вручную поменять количество продуктов
        this.#quantity = val;
    }
    getQuantity(){
        return this.#quantity;
    }

    //  Lesson 3
    delete(){
        this.#deleteCallBack(this.#id);
    }

    render() {
        this.element = document.createElement("div");
        this.element.className = "cart-item";
        this.element.insertAdjacentHTML("beforeend", `<div class="cart-item__column">${this.#title}</div>`);
        this.element.insertAdjacentHTML("beforeend", `<div class="cart-item__column">${this.#quantity}</div>`);
        this.element.insertAdjacentHTML("beforeend", `<div class="cart-item__column">${this.#price}</div>`);
        this.element.insertAdjacentHTML("beforeend", `<div class="cart-item__column">
                        <div class="cart-item__btn_del">&times;</div>
                    </div>`);
        this.element.querySelector(".cart-item__btn_del").addEventListener("click", (e)=>this.delete());
        console.log(this.element);
        return this.element;
    }
}



const cart = new Cart(".cart-list");
const shopProducts = new ProductList();
shopProducts.setAddCoCartHandler((p)=>cart.addProduct(p));
// shopProducts.render();
