<template>
  <div class="md-card-list">
    <div class="md-card-list-top">
      <div class="md-card-list-card">
        <div class="cared-img"></div>
        <div class="card-list-right">
          <div class="md-card-word">
            <div>{{cardNumberDeal}}</div>
            <div class="text-word">{{cardState}}</div>
          </div>
          <div class="md-card-word">
            <div>{{cardType}}</div>
            <div>
              ¥
              <md-amount v-model="accountMoney" has-separator></md-amount>
              <md-icon name="arrow-right" size="sm" @click="$_arrowRight"></md-icon>
            </div>
          </div>
        </div>
      </div>
      <div class="md-card-list-tips">
        <div>
          <md-tag
            size="small"
            shape="square"
            type="fill"
            fill-color="#FFF1CC"
            font-color="#FFBB00"
          >到期还款日{{underDateDeal}}</md-tag>
        </div>
        <div>
          $
          <md-amount v-model="dollerNumber" has-separator></md-amount>
          <!-- <md-icon name="arrow-right" size="sm"></md-icon> -->
        </div>
      </div>
    </div>
    <div class="md-card-list-bottom">
      <ul>
        <li @click=" $_cardBtnContent">
          <span>{{cardBtnContent}}</span>
        </li>
        <li @click=" $_cardBtnLow">
          <span>{{cardBtnLow}}</span>
        </li>
        <li @click=" $_cardBtnPay">
          <span>{{cardBtnPay}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import CellItem from '../cell-item'
import Field from '../field'
import Icon from '../icon'
import Tag from '../tag'
import Amount from '../amount'

export default {
  name: 'md-card-list',

  components: {
    [CellItem.name]: CellItem,
    [Field.name]: Field,
    [Icon.name]: Icon,
    [Tag.name]: Tag,
    [Amount.name]: Amount
  },

  props: {
    cardState: {
      type: String,
      default: '账单未还款'
    },
    accountMoney: {
      type: Number,
      default: 8869
    },
    dollerNumber: {
      type: Number,
      default: 233242
    },
    cardType: {
      type: String,
      default: '福信用卡'
    },
    cardNumber: {
      type: String,
      default: '406221889i220568'
    },
    underDate: {
      type: String,
      default: '10-29'
    },
    cardBtnContent: {
      default: '分期付款'
    },
    cardBtnLow: {
      default: '最低还款'
    },
    cardBtnPay: {
      default: '还款'
    }
  },

  data() {
    return {}
  },

  computed: {
    cardNumberDeal() {
      return (
        this.cardNumber
          .split('')
          .slice(0, 4)
          .join('') +
        '********' +
        this.cardNumber
          .split('')
          .slice(-4)
          .join('')
      )
    },
    underDateDeal() {
      return `${this.underDate.split('-')[0]}月${
        this.underDate.split('-')[1]
      }日`
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
    $_arrowRight() {
      this.$emit('arrowRightAct', 'hello')
    },

    // MARK: events handler, 如 $_onButtonClick
    $_onSthEvent(event) {
      this.$emit('active', 'hello')
    },
    $_cardBtnContent(event) {
      this.$emit('cardBtnContentActive', 'hello')
    },
    $_cardBtnLow(event) {
      this.$emit('cardBtnLowActive', 'hello')
    },
    $_cardBtnPay(event) {
      this.$emit('cardBtnPayActive', 'hello')
    },

    // MARK: public methods
    publicMethod() {}
  }
}
</script>

<style lang="stylus">
.md-card-list
  color: color-gray-1
  -webkit-font-smoothing: antialiased
  text-align: center
  width: 690px
  height: 258px
  font-size: 24px
  color: #655A72
  letter-spacing: 0.7px
  // background: wheat
  border-radius: 20px

  .md-card-list-top
    height: 176px
    padding: 30px 30px 0 30px

  .cared-img
    width: 140px
    height: 88px
    background: white
    margin-right: 20px
    background: url('../_style/images/card1.png') center no-repeat
    background-size: cover

  .md-card-list-card
    height: 88px
    display: flex

  .md-card-list-bottom
    height: 80px
    border-top: 1px solid #F3F2F4

.md-card-list-bottom ul
  display: flex
  height: 100%
  justify-content: space-around
  align-items: center

.md-card-list-bottom ul li
  font-size: 24px
  color: #904EF4
  height: 24px
  width: 230px
  border-right: 1px solid #D3D1D7

.md-card-list-bottom ul li:nth-of-type(3)
  border-right: 0px solid

.card-list-right
  height: 88px
  font-size: 24px
  color: #655A72

.text-word
  font-size: 20px
  color: #9E98A7
  letter-spacing: 1.18px
  margin-right: 52px

.card-list-right div:nth-of-type(1), .card-list-right div:nth-of-type(2)
  display: flex
  justify-content: space-between
  align-items: center

.card-list-right div:nth-of-type(2)
  margin-top: 10px

.md-card-word div:nth-of-type(1)
  margin-right: 116px

.md-card-word div:nth-of-type(2)
  width: 132px
  margin-right: 30px
  text-align: right

.md-card-list-tips
  display: flex
  margin-top: 16px
  justify-content: space-between

.md-card-list-tips div:nth-of-type(2)
  margin-right: 52px
  text-align: right
  font-size: 24px
  color: #655A72

.md-tag .shape-square
  border-radius: 4px
</style>
