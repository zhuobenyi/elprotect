<template>
  <div class="md-repayment-card-list">
    <div class="md-repayment-card-list-title">人民币账户还款</div>
    <!-- <md-field title="人民币账户还款"> -->
    <!-- <md-check-list v-model="favorites" iconPosition="left" :options="fruits" size="lg"> -->
    <md-check-list
      :options="dataList"
      icon-position="left"
      v-model="favorites"
      @click.native="$_onClick"
    >
      <template slot-scope="{selected, option ,index}">
        <div>
          <div class="md-repayment-card-title" v-text="option.value"></div>
          <div class="md-repayment-card-brief">{{option.type}}</div>
          <slot :option="dataList" :index="index" :selected="selected"></slot>
        </div>
        <div class="md-repayment-second">
          <div class="md-repayment-card-custom-title">
            $
            <md-amount has-separator v-model="amount"></md-amount>
            <div class="img" @click="$_dealEditor"></div>
          </div>
        </div>
      </template>
    </md-check-list>
    <div class="md-repayment-card-button" @click="$_repayMoney">立即还款</div>
    <!-- <div slot="default">操作</div> -->
    <!-- </md-check-list> -->
    <!-- </md-field> -->
  </div>
</template>

<script>
import Field from '../field'
import CheckList from '../check-list'
import Amount from '../amount'

export default {
  name: 'md-repayment-card-list',

  components: {
    [Field.name]: Field,
    [CheckList.name]: CheckList,
    [Amount.name]: Amount
  },
  model: {
    prop: 'favorites',
    event: 'input'
  },
  props: {
    amount: {
      type: Number,
      default: 32131
    },
    dataList: {
      type: Array,
      default() {
        return [
          { value: 121211, type: '信用卡' },
          { value: 1212, type: '信用卡' }
        ]
      }
    },
    value: {
      default: ''
    }
  },

  data() {
    return {
      favorites: []
      // fruits: []
    }
  },

  computed: {},

  watch: {
    // value(val) {
    //   this.inputValue = this.favorites
    // },
    // inputValue(val) {
    //   this.favorites = val
    //   this.$emit('input', val)
    // }
  },

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
    $_onClick() {
      // this.value = [...this.favorites]
      this.$emit('input', this.favorites)
      // this.$emit('active', this.favorites)
    },
    $_repayMoney() {
      this.$emit('repayMoneyActive', '')
    },
    $_dealEditor() {
      this.$emit('dealEditorActive', '')
    },
    // MARK: public methods
    publicMethod() {}
  }
}
</script>

<style lang="stylus">
.md-repayment-card-list
  touch-action: none
  color: color-gray-1
  -webkit-font-smoothing: antialiased
  // font-size: 28px
  text-align: center
  width: 690px
  // padding: 0 30px
  // background: wheat

.md-repayment-card-list .md-check-item
  border-bottom: 1px solid #f3f2f4

.md-repayment-card-list-title
  font-size: 28px
  color: #231A2F
  letter-spacing: 0
  display: flex
  justify-content: flex-start
  align-items: center
  border-bottom: 1px solid #f3f2f4
  align-items: center
  height: 100px
  padding: 0 30px

.md-repayment-card-list .md-cell-item-content
  flex: none
  text-align: left
  display: flex
  justify-content: space-between
  width: 570px

.md-repayment-card-custom-title
  display: flex
  align-items: center
  text-align: right
  font-size: 32px
  color: #231A2F

  .img
    background: url('../_style/images/deal.png') center no-repeat
    background-size: cover
    height: 24px
    width: 24px
    margin-left: 10px

.md-repayment-card-list .md-cell-item-body
  justify-content: normal
  width: 630px
  margin: 0 30px

.md-repayment-card-title
  font-size: 28px
  color: #655A72
  letter-spacing: 0

.md-repayment-card-brief
  font-size: 24px
  color: #9E98A7
  letter-spacing: 0

.md-repayment-card-button
  font-size: 12px
  color: #904EF4
  text-align: center
  height: 80px
  width: 100%
  display: flex
  justify-content: center
  align-items: center

.md-repayment-second
  display: flex
  align-items: center
</style>
