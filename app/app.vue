<template lang="pug">
.products_page.pg_0
  productItem(v-for="(item, index) in products" :key="index" :index='index' :product="item" :productsToShow='productsToShow')
  .intersector
</template>
<script>
  import {mapActions,mapGetters,mapMutations} from 'vuex'
  import productItem from './product.vue'
  
  export default {
    data(){
      return {
        productsToShow: 3,
        products:this.getProducts(),
      }
    },
    components: {
      productItem
    },
    computed:{
      productsToShowComputed:{
        get(){
          return this.productsToShow
        },
        set(value){
          this.productsToShow=value>this.getProducts().length?this.getProducts().length:value
        }
      }
    },
    methods:{
      ...mapGetters(['getProducts']),
    },
    mounted(){

      const prods = document.querySelectorAll('.intersector')
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
      }
      const fn = (entries, observer)=>{
        entries.forEach(entry => {
          if(entry.intersectionRatio>0){
            this.productsToShow=this.productsToShow+1>this.products.length?this.products.length:this.productsToShow+1
          }
        })
      }
      const observer = new IntersectionObserver(fn,options)
      prods.forEach((el)=>{
        observer.observe(el)
      })
    }
  }
</script>
<style lang="sass">
  .intersector
    width: 10px
    height: 10px
    display: block
</style>