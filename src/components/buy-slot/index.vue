<template>
  <div class="md-buy-slot">
    <div class="md-buy-left">
      <div class="md-buy-num">
        <span>￥</span>
        <md-amount :precision="0" v-model="buyAmount" has-separator></md-amount>
        <span>￥</span>
        <md-amount :precision="0" v-model="realAmount" class="real-num" has-separator></md-amount>
        <div class="border-cover" :style="{width:`${realAmountPx}px`}"></div>
        <div class="md-buy-title">
          今日还剩
          <span>{{lestNum}}</span>张
        </div>
      </div>
    </div>
    <div class="md-buy-right">
      <md-sure-buy :content="buyContent" :bgColor="buyBgColor" @activeMethod="$_onSthEvent"></md-sure-buy>
    </div>
  </div>
</template>

<script>
import SureBuy from '../sure-buy'
import Amount from '../amount'
export default {
  name: 'md-buy-slot',

  components: {
    [SureBuy.name]: SureBuy,
    [Amount.name]: Amount
  },

  props: {
    lestNum: {
      type: Number,
      default: 233
    },
    buyAmount: {
      type: Number,
      default: 99
    },
    realAmount: {
      type: Number,
      default: 999
    },
    buyContent: {
      type: String,
      default: '确认购买'
    },
    buyBgColor: {
      type: String,
      // default: '#D3D1D7'
      default: 'linear-gradient(135deg, #ED9BFA, #904EF4)'
    }
  },

  data() {
    return {}
  },

  computed: {
    realAmountPx() {
      if (this.realAmount < 10) {
        return 18
      } else if (this.realAmount > 10 && this.realAmount < 100) {
        return 26
      } else {
        return 36
      }
    }
  },

  watch: {},

  // LiftCircle Hook
  /*
  beforeCreate
  created
  beforeMount
  mounted
  beforeUpdate
  updated
  activated
  deactivated
  beforeDestroy
  destroyed
  errorCaptured
   */

  methods: {
    // MARK: private methods
    $_privateMethod() {},

    // MARK: events handler, 如 $_onButtonClick
    $_onSthEvent(event) {
      this.$emit('buyActive', 'hello')
    },

    // MARK: public methods
    publicMethod() {}
  }
}
</script>

<style lang="stylus">
.md-buy-slot
  color: color-gray-1
  -webkit-font-smoothing: antialiased
  // font-size: 28px
  text-align: center
  width: 750px
  height: 120px
  // background: red
  padding: 8px 30px 10px 30px
  display: flex
  justify-content: space-between
  align-items: center

.md-buy-left, .md-buy-title
  font-size: 24px
  color: #9E98A7
  height: 100%
  letter-spacing: 0
  text-align: left

.md-buy-title span:nth-of-type(1)
  color: #5ADB81
  // margin: 0 20px 0 0
  padding: 0 10px 0 0

.md-buy-num
  // display: flex
  // align-items: center
  font-size: 44px
  color: #904EF4
  height: 60px
  text-align: left
  letter-spacing: 0

.md-buy-num span:nth-of-type(1)
  font-size: 12px
  margin-right: -3px

.md-buy-num span:nth-of-type(3)
  font-size: 12px
  margin-right: -6px
  color: #9E98A7

.real-num
  font-size: 24px
  color: #9E98A7
  letter-spacing: 0

.border-cover
  top: -19px
  border: 1px solid #9E98A7
  position: relative
  left: 94px
</style>
