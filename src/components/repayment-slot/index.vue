<template>
  <div class="md-repayment-slot">
    <div class="md-repayment-left">
      <div class="md-repayment-title">{{repaymentTitle}}</div>
      <div class="md-repayment-num">
        <span style="font-size:12px;margin:0 3px 0 -3px;">￥</span>
        <md-amount v-model="repaymentAmount" has-separator></md-amount>
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
  name: 'md-repayment-slot',

  components: {
    [SureBuy.name]: SureBuy,
    [Amount.name]: Amount
  },

  props: {
    repaymentTitle: {
      type: String,
      default: '还款总额'
    },
    repaymentAmount: {
      type: Number,
      default: 9993.2
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
.md-repayment-slot
  color: color-gray-1
  -webkit-font-smoothing: antialiased
  // font-size: 28px
  text-align: center
  width: 750px
  height: 120px
  // background: #F5F5F7
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
  // line-height: 30px

span
  // font-style: italic
</style>
