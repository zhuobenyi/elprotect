<template>
  <div class="md-result-page-all">
    <div
      :class="{'md-result-img-scuess':transportFlag===1,'md-result-img-fail':transportFlag===2,'md-result-img-no-succes':transportFlag===3,'md-result-img-doing':transportFlag===4}"
    ></div>
    <div class="md-result-state">{{transportState}}</div>
    <div class="md-result-tips">{{transpotTips}}</div>
  </div>
</template>

<script>
export default {
  name: 'md-result-page-all',

  components: {},

  props: {
    transportState: {
      type: String,
      default: '受理中'
    },
    transportFlag: {
      type: Number,
      default: 1
    },
    transpotTips: {
      type: String,
      default:
        '请稍后在app还款记录里查询交易结果，如您的借记卡已扣款但未查询到交易记录，我行将于3个工作日内将款项退回'
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
      this.$emit('active', 'hello')
    },

    // MARK: public methods
    publicMethod() {}
  }
}
</script>

<style lang="stylus">
.md-result-page-all
  color: color-gray-1
  -webkit-font-smoothing: antialiased
  font-size: 28px
  text-align: center

  .md-result-img-scuess, .md-result-img-fail, .md-result-img-no-succes, .md-result-img-doing
    height: 200px
    width: 200px
    margin: 64px auto 44px auto

  .md-result-img-scuess
    background: url('../_style/images/icon_success.png') center no-repeat
    background-size: cover

  .md-result-img-no-succes
    background: url('../_style/images/icon_no_succes.png') center no-repeat
    background-size: cover

  .md-result-img-doing
    background: url('../_style/images/icon_doing.png') center no-repeat
    background-size: cover

  .md-result-img-fail
    background: url('../_style/images/icon_fail.png') center no-repeat
    background-size: cover

  .md-result-state
    font-size: 28px
    color: #655A72
    letter-spacing: 0.7px
    text-align: center

  .md-result-tips
    font-size: 24px
    width: 100%
    height: auto
    padding: 24px 76px 60px 76px
    color: #9E98A7
    letter-spacing: 0.6px
    text-align: center
</style>
