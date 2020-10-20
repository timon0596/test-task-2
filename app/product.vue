<template lang="pug">
.product.product_horizontal
  .product__info
    .product_photo
      a.url--link.product__link(href='#')
        img(:src='this.imagePath')
    .product__top-contaier
      span.product_code Код: {{+this.product.code}}
      .product_status_tooltip_container
      span.product_status Наличие
    .product__description-container
      .product_description
        a.product__link(href='#') {{this.product.title}}
      .product_tags.hidden-sm
        p Могут понадобиться:
        a.url--link(href='#' v-for="(item,index) in assocProducts" :key="item.message") {{' '+item}}
    .product__prices-container
      .product__prices
        .product__price
          span.product_price_club_card_text
            | По карте
            br
            | клуба
          p.product_price_club_card
            span.goldPrice {{this.priceGold}}
        .product__price
          p.product_price_default
            span.retailPrice {{this.priceRetail}}
      .product_price_points
        p.ng-binding Можно купить за {{this.points}} балла
      .product_units
        .unit--wrapper
          .unit--select(:class='{"unit--active": isAlt}' @click='this.unitAlt')
            p.ng-binding За {{this.product.unitAlt}}
          .unit--select(:class='{"unit--active": !isAlt}' @click='this.unit')
            p.ng-binding За упаковку
      .product__wrapper
        .list--unit-desc
          .unit--info
            .unit--desc-i
            .unit--desc-t
              p
                span.ng-binding Продается упаковками:
                span.unit--infoInn {{this.product.unitRatio}} {{this.product.unit}} = {{this.product.unitRatioAlt}} {{this.product.unitAlt}}
        .product_count_wrapper
          .stepper
            input.product__count.stepper-input(type='text' v-model:value='this.amount')
            span.stepper-arrow.up(@click="this.increase")
            span.stepper-arrow.down(@click="this.decrease")
          span.btn.btn_cart(data-url='/cart/' :data-product-id='productId')
            svg.ic.ic_cart
              use(xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#cart')
            span.ng-binding В корзину
</template>
<script>
  export default {
    data(){
      return {
        isAlt:true,
        amount: 1
      }
    },
    props:['product'],
    methods:{
      unitAlt(){
        this.isAlt=true
      },
      unit(){
        this.isAlt = false
      },
      increase(){
        this.amountComputed=this.amountComputed+1
      },
      decrease(){
        this.amountComputed=this.amountComputed-1
      } 
    },
    computed:{
      amountComputed:{
        get() {
            return this.amount
          },
        set(value) {
          this.amount=value<1?1:value
        },
      },
      points(){
        return (Math.random()*1000).toFixed(2)
      },
      imagePath(){
        return this.product.primaryImageUrl.match(/(.+)\.(.+)$/).slice(1,3).join('_220x220_1.')
      },
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
        return this.isAlt?this.product.priceGold:this.product.priceGoldAlt
      },
      priceRetail(){
        return this.isAlt?this.product.priceRetail:this.product.priceRetailAlt
      },
    },
    mounted(){
      console.log(this.product)
    }
  }
</script>
<style lang="sass">
.product.product_horizontal .product_code,
.product.product_horizontal .product__info div
  float: none
  position: static
  padding: 0
.product.product_horizontal
  padding: 10px 10px 40px
  @media (max-width: 1000px)
    width: min-content
  .product__info
    display: grid
    grid-auto-flow: column
    justify-content: start
    grid-template-areas: 'img code code''img descr price''img descr price'
    grid-gap: 10px
    @media (max-width: 1250px)
      grid-template-areas: 'img code price''img descr price''img descr price'
    @media (max-width: 1000px)
      grid-template-areas: 'code''img''descr''price'
      grid-auto-flow: row
  .product_photo
    grid-area: img
  .product__top-contaier
    display: grid
    grid-auto-flow: column
    justify-content: space-between
    grid-area: code
    @media (max-width: 1250px)
      justify-content: start
      align-self: start
      align-items: baseline
      grid-gap: 10px
    @media (max-width: 1000px)
      justify-content: space-between
  .product__description-container
    display: grid
    align-content: start
    grid-gap: 10px
    grid-area: descr
  .product__prices-container
    display: grid
    grid-area: price
    justify-items: end
    grid-gap: 10px
    .product_price_points
      @media (max-width: 1000px)
        display: none
  .product_description
    min-height: 0
    width: 100%
    max-width: 505px
  .product__info ~ div,
  .product__info ~ span,
  .product__info ~ p
    position: static
  .product__prices
    display: grid
    justify-items: end
    grid-gap: 10px
    .product__price
      display: grid
      grid-gap: 10px
      grid-auto-flow: column
      align-items: end
      div,
      p,
      span
        position: static
  .product__wrapper
    display: grid
    grid-gap: 10px
    .btn_cart
      position: relative
      right: 0
      bottom: 0
      left: 0
      top: 0
    .stepper
      position: relative
      line-height: 42px
      height: 40px
      width: 67px
      display: inline-block
      margin: 0
      border: 1px solid #ccc
      background: #fff
    .product_count_wrapper
      display: grid
      grid-auto-flow: column
      height: auto
      width: auto
      border: 0
      justify-content: space-between
    .list--unit-desc
      position: relative
      top: 0
      left: 0
      width: 222px
      margin: 0
      padding: 5px 10px
      background: #fff
      border: 1px solid #ccc
  .product_units
    .unit--wrapper
      display: grid
      grid-auto-flow: column
      justify-content: end
    .unit--select
      padding: 3px 5px
      margin: 0 0 0 5px
      cursor: pointer
    .unit--select.unit--active
      cursor: default
  .product_tags
    width: 100%
    max-width: 505px

</style>