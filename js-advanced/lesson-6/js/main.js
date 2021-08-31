'use strict'

const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        products: [],
        imgCatalog: 'https://placehold.it/200x150',
        searchLine: '',
        filtered: [],
        cartItems: [],
        isVivibleCart: false,
        showCart: false,
        imgCart: 'https://placehold.it/50x100',
        userSearch:'',
    },
    methods: {
        getJson(url){
            return fetch(url)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
      },
      addProduct(product){
          console.log("main.addProduct", product);
        this.getJson(`${API}/addToBasket.json`)
            .then(data => {
                if(data.result === 1){
                    let find = this.cartItems.find(el => el.id_product === product.id_product);
                    if(find){
                        find.quantity++;
                        console.log("appending product count Cart: "+find.quantity);
                    } else {
                        console.log("new product in Cart");
                        let prod = Object.assign({quantity: 1}, product);
                        this.cartItems.push(prod)
                    }
                } else {
                    alert('Error');
                }
            })
        },
        remove(item) {
            this.getJson(`${API}/deleteFromBasket.json`)
            .then(data => {
                if(data.result === 1) {
                    if(item.quantity>1){
                        item.quantity--;
                    } else {
                        this.cartItems.splice(this.cartItems.indexOf(item), 1)
                    }
                }
            })
        },
        filterGoods(e){
                let regexp = new RegExp(this.searchLine, 'i');
                this.filtered = this.products.filter(elm => regexp.test(elm.product_name));
                console.log("Search now:"+this.searchLine+" -> ",this.filtered);
        },
        filter(){
            let regexp = new RegExp(this.searchLine, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
            this.filtered = this.products.filter(el => regexp.test(el.product_name));

            console.log("FILTER "+this.searchLine,  this.filtered);
        }
    },
    beforeCreate() {},
    created() {
        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
            for(let el of data){
                this.products.push(el);
                this.filtered.push(el);
            }
        });
    },
    beforeMount() {},
    mounted(){},
    beforeUpdate() {},
    updated() {},
    beforeDestroy() {},
    destroyed() {},
});
