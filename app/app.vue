<template lang="pug">
.products_page.pg_0
  productItem(v-for="(item, index) in products" :key="index" :product="item")
</template>
<script>
  import {mapActions,mapGetters,mapMutations} from 'vuex'
  import productItem from './product.vue'
  export default {
    data(){
      return {
        products:this.getProducts().slice(0,10)
      }
    },
    components: {
      productItem
    },
    methods:{
      ...mapGetters(['getProducts'])
    },
    mounted(){
    }
  }
</script>
<style lang="sass">
</style>