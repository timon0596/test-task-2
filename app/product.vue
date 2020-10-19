<template lang="pug">
.product.product_horizontal
  span.product_code &Kcy;&ocy;&dcy;: {{+this.product.code}}
  .product_status_tooltip_container
    span.product_status &Ncy;&acy;&lcy;&icy;&chcy;&icy;&iecy;
  .product_photo
    a.url--link.product__link(href='#')
      img(src='')
  .product_description
    a.product__link(href='#') {{this.product.title}}
  .product_tags.hidden-sm
    p &Mcy;&ocy;&gcy;&ucy;&tcy; &pcy;&ocy;&ncy;&acy;&dcy;&ocy;&bcy;&icy;&tcy;&softcy;&scy;&yacy;:
    a.url--link(href='#' v-for="(item,index) in assocProducts" :key="item.message") {{item}}
  .product_units
    .unit--wrapper
      .unit--select.unit--active
        p.ng-binding &Zcy;&acy; &mcy;. &kcy;&vcy;.
      .unit--select
        p.ng-binding &Zcy;&acy; &ucy;&pcy;&acy;&kcy;&ocy;&vcy;&kcy;&ucy;
  p.product_price_club_card
    span.product_price_club_card_text
      | &Pcy;&ocy; &kcy;&acy;&rcy;&tcy;&iecy;
      br
      | &kcy;&lcy;&ucy;&bcy;&acy;
    span.goldPrice {{this.priceGold}}
    span.rouble__i.black__i
      svg#rouble__b(version='1.0' xmlns='http://www.w3.org/2000/svg' x='0' y='0' width='30px' height='22px' viewbox='0 0 50 50' enable-background='new 0 0 50 50' xml:space='preserve')
        use(xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#rouble_black')
  p.product_price_default
    span.retailPrice {{this.priceRetail}}
    span.rouble__i.black__i
      svg#rouble__g(version='1.0' xmlns='http://www.w3.org/2000/svg' x='0' y='0' width='30px' height='22px' viewbox='0 0 50 50' enable-background='new 0 0 50 50' xml:space='preserve')
        use(xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#rouble_gray')
  .product_price_points
    p.ng-binding &Mcy;&ocy;&zhcy;&ncy;&ocy; &kcy;&ucy;&pcy;&icy;&tcy;&softcy; &zcy;&acy; {{(Math.random()*1000).toFixed(2)}} &bcy;&acy;&lcy;&lcy;&acy;
  .list--unit-padd
  .list--unit-desc
    .unit--info
      .unit--desc-i
      .unit--desc-t
        p
          span.ng-binding &Pcy;&rcy;&ocy;&dcy;&acy;&iecy;&tcy;&scy;&yacy; &ucy;&pcy;&acy;&kcy;&ocy;&vcy;&kcy;&acy;&mcy;&icy;:
          span.unit--infoInn {{this.product.unitRatio}} {{this.product.unit}} = {{this.product.unitRatioAlt}} {{this.product.unitAlt}}
  .product__wrapper
    .product_count_wrapper
      .stepper
        input.product__count.stepper-input(type='text' value='1')
        span.stepper-arrow.up
        span.stepper-arrow.down
    span.btn.btn_cart(data-url='/cart/' :data-product-id='productId')
      svg.ic.ic_cart
        use(xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#cart')
      span.ng-binding &Vcy; &kcy;&ocy;&rcy;&zcy;&icy;&ncy;&ucy;
</template>
<script>
  export default {
    data(){
      return {
        isAlt:true,
      }
    },
    props:['product'],
    methods:{
    },
    computed:{
      productId(){
        return this.product.productId
      },
      hasAlternateUnit(){
        return !(this.product.unit===this.product.unitAlt)
      },
      assocProducts(){
        const lngt = this.product.assocProducts.split(';').length - 2
        return this.product.assocProducts
          .split(';')
          .slice(0,-1)
          .map((el,i)=>{
            return i!==lngt?
              (el.trim()+', '):(el.trim()+'.')
          })
      },
      priceGold(){
        return this.isAlt?this.product.priceGoldAlt:this.product.priceGold
      },
      priceRetail(){
        return this.isAlt?this.product.priceRetailAlt:this.product.priceRetail
      },
    },
    mounted(){
      console.log(this.product)
    }
  }
</script>
<style lang="sass">
</style>