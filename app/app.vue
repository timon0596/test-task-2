<template lang="pug">
.app
  productItem(v-for="(item, index) in products" :key="index" :product="item")
</template>
<script>
  import {mapActions,mapGetters,mapMutations} from 'vuex'
  import productItem from './product.vue'
  export default {
    data(){
      return {
        products:this.getProducts()
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