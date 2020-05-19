<template>
  <div class="md-repayment-more-card">
    <div class="md-repayment-left">
      <div class="md-repayment-title repayment-more">
        <span>还款总额</span>
        <span>$</span>
        <md-amount v-model="repaymentAmount" has-separator></md-amount>
      </div>
      <div class="md-repayment-num repayment-more">
        <span>人民币扣款金额</span>
        <span>￥</span>
        <md-amount v-model="deductionAmount" has-separator></md-amount>
      </div>
    </div>
    <div class="md-repayment-right">
      <md-sure-buy :content="repayContent" :bgColor="repayBgColor" @activeMethod="$_onSthEvent"></md-sure-buy>
    </div>
  </div>
</template>

<script>
import SureBuy from '../sure-buy'
import Amount from '../amount'
export default {
  name: 'md-repayment-more-card',

  components: {
    [SureBuy.name]: SureBuy,
    [Amount.name]: Amount
  },

  props: {
    repaymentAmount: {
      type: Number,
      default: 9993.2
    },
    deductionAmount: {
      type: Number,
      default: 992
    },
    repayContent: {
      type: String,
      default: '立即购买'
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
.md-repayment-more-card
  color: color-gray-1
  -webkit-font-smoothing: antialiased
  text-align: center
  width: 750px
  height: 120px
  padding: 20px 30px
  display: flex
  justify-content: space-between
  align-items: center

.md-repayment-left, .md-repayment-title
  font-size: 24px
  color: #9E98A7
  letter-spacing: 0
  text-align: left

.md-repayment-num
  display: flex
  align-items: center
  font-size: 44px
  color: #904EF4
  height: 60px
  text-align: left
  letter-spacing: 0

.repayment-more span:nth-of-type(1)
  font-size: 24px
  color: #9E98A7
  margin-right: 20px

.repayment-more span:nth-of-type(2), .repayment-more span:nth-of-type(3)
  font-size: 28px
  color: #904EF4
</style>
