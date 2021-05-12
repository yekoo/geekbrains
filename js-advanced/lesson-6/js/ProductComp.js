Vue.component("products",{
    data(){
        return{
            catalogUrl:"/catalogData.json",
            products:[],
            filtered:[],
            imgCatalog:"httpa://placehold.it/200x150"
        }
    },
    methods:{
        filter(str){
            let regexp = new RegExp(str, "i");
            this.filtered = this.products.filter(elm=>regexp.test(elm.product_name));
        }
    },
    mounted(){
        this.$parent.getJson(`${API + this.catalogUrl}`)
            .then(data=>{
                for(let elm of data){
                    this.products.push(elm);
                    this.filtered.push(elm);
                }
            })
    },
    template: `
        <div class="products">
            <product ref="refref" v-for="item of filtered" :key="item.id_product" :img="imgCatalog" :product="item"></product>
        </div>
    `
});

Vue.component('product', {
    props: ['product', 'img'],
    template: `
    <div class="product-item">
                <img :src="img" alt="Some img">
                <div class="desc">
                    <h3>{{product.product_name}}</h3>
                    <p>{{product.price}}₽</p>
                    <button class="buy-btn" @click="$parent.$emit('add-product', product)">Купить</button>
                </div>
            </div>
    `
});
