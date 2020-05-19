<template>
  <div class="md-pay-btn-common">
    <div class="md-pay-left pay-btn">
      <span>实付金额：</span>
      <span>￥</span>
      <md-amount v-model="payAmount" has-separator></md-amount>
    </div>
    <div class="md-pay-right">
      <md-sure-buy :content="repayContent" :bgColor="repayBgColor" @activeMethod="$_onSthEvent"></md-sure-buy>
    </div>
  </div>
</template>

<script>
import SureBuy from '../sure-buy'
import Amount from '../amount'
export default {
  name: 'md-pay-btn-common',

  components: {
    [SureBuy.name]: SureBuy,
    [Amount.name]: Amount
  },

  props: {
    payAmount: {
      // 极限13位数字
      type: Number,
      default: 12345678
    },
    repayContent: {
      type: String,
      default: '购买'
    },
    repayBgColor: {
      type: String,
      // default: '#D3D1D7'
      default: 'linear-gradient(135deg, #ED9BFA, #904EF4)'
    }
  },

  data() {
    return {}
  },

  computed: {},

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
      this.$emit('repayActive', 'hello')
    },

    // MARK: public methods
    publicMethod() {}
  }
}
</script>

<style lang="stylus">
.md-pay-btn-common
  color: color-gray-1
  -webkit-font-smoothing: antialiased
  text-align: center
  width: 750px
  height: 120px
  padding: 20px 30px
  display: flex
  justify-content: space-between
  align-items: center

.md-pay-left
  font-size: 28px
  color: #231A2F
  letter-spacing: 0
  text-align: left

.pay-btn span:nth-of-type(3)
  margin-left: -12px
</style>
