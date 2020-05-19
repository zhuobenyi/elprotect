<template>
  <main id="home" class="view" role="main">
    <template>
      <div class="md-contain-tran-pwd">
        <div class="md-contain-tran-top">
          <md-field>
            <md-cell-item title>
              <span slot="left">￥</span>
              <md-amount :value="30000" has-separator slot="left"></md-amount>
              <md-button slot="right" plain round>剩余现金额度</md-button>
            </md-cell-item>
            <md-cell-item title="当前总欠款">
              <span slot="right">￥</span>
              <md-amount :value="30000" has-separator slot="right"></md-amount>
              <!-- <md-radio name="0" v-model="checked" label="已设置自动还款" slot="right" /> -->
              <span slot="right" :style="{marginLeft:marginLeft}">自动还款设置</span>
              <md-icon name="arrow-right" size="md" slot="right"></md-icon>
            </md-cell-item>
            <md-cell-item title="卡号">
              <span slot="right">{{cardNumberDeal}}</span>
              <span slot="right">日利率</span>
              <span slot="right">0.04%</span>
            </md-cell-item>
          </md-field>
        </div>
        <div class="md-contain-tran-bottom">
          <md-field>
            <md-cell-item title="账单日">
              <span slot="right">还款日</span>
            </md-cell-item>
            <md-cell-item title="02/10">
              <span slot="right">02/10</span>
            </md-cell-item>
            <md-cell-item title>
              <md-button slot="right" plain round>我要查账</md-button>
              <md-button slot="left" plain round>我要还款</md-button>
            </md-cell-item>
          </md-field>
        </div>
      </div>
      <div class="md-contain-content">
        <md-field>
          <md-cell-item></md-cell-item>
          <md-cell-item title="超底费率" brief="额度循环使用"></md-cell-item>
          <md-cell-item title="日利率最低0.035%" brief="专属现金额度"></md-cell-item>
        </md-field>
        <md-field>
          <md-cell-item></md-cell-item>
          <md-cell-item title="随借随还" brief="按日计息"></md-cell-item>
          <md-cell-item title="便捷申请，还款自如" brief="在线完成全部申请"></md-cell-item>
        </md-field>
        <md-field>
          <md-cell-item></md-cell-item>
          <md-cell-item title="实时放款" brief="最快实时到账"></md-cell-item>
          <md-cell-item title="即刻申请，即刻享用" brief="超高额度，一次取出"></md-cell-item>
        </md-field>
      </div>
    </template>
  </main>
</template>

<script>
import Toast from '@mandmobile/toast' //MARK:文件路径:使用源码版本组件
import Button from '@mandmobile/button' //MARK:文件路径:使用源码版本组件
import { mapMutations, mapState } from 'vuex'
import Field from '@mandmobile/field'
import CellItem from '@mandmobile/cell-item'
import ProviewOrder from '@mandmobile/proview-order'
import Dialog from '@mandmobile/dialog'
import Amount from '@mandmobile/amount'
import Radio from '@mandmobile/radio'
import Icon from '@mandmobile/icon'

export default {
  name: 'home-view',
  components: {
    [Button.name]: Button,
    [Field.name]: Field,
    [CellItem.name]: CellItem,
    [ProviewOrder.name]: ProviewOrder,
    [Toast.name]: Toast,
    [Dialog.name]: Dialog,
    [Amount.name]: Amount,
    [Radio.name]: Radio,
    [Icon.name]: Icon
  },
  data() {
    return {
      checked: '0'
    }
  },
  props: {
    cardNumber: {
      type: String,
      default: '3213123'
    }
  },
  computed: {
    ...mapState({
      userInfo: 'userInfo'
    }),
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
    marginLeft() {
      return '54px'
    }
  },
  methods: {
    ...mapMutations(['updateUserInfo']),
    popWindow() {
      AlipayJSBridge_call('popWindow', {
        data: {
          from: location.href,
          info: Date.now()
        }
      })
    },
    alertDialog(msg, btnsNum, onSubmit, onCancel, title) {
      let param = {
        title: title ? title : '提示',
        content: msg,
        cancelText: '残忍拒绝',
        confirmText: '欣然接受',
        onConfirm: function(res) {
          if (res == 'cancel') {
            if (typeof onCancel == 'function') {
              onCancel()
            }
          } else {
            if (typeof onSubmit == 'function') {
              onSubmit()
            }
          }
        }
      }
      if (btnsNum && btnsNum == 1) {
        Dialog.alert(param) //单按钮
      } else {
        Dialog.confirm(param) //双按钮
      }
    },
    immediateApplication() {
      this.alertDialog(
        '对不起！您暂时无法使用心e金，试试信用卡提现吧~',
        2,
        function() {
          alert('跳转到信用卡功能体现页面')
        }
      )
    },
    // 登录外激活心e金
    callRPCLogin() {
      // debugger
      AlipayJSBridge.call(
        'rpc',
        {
          operationType: 'getCashLoanInfoByCust.do',
          requestData: [
            { idNum: 'value1' },
            { idType: '1e1' },
            { cust_name: 'value1' }
          ],
          headers: {}
        },
        function(result) {
          // debugger
          alert(JSON.stringify(result))
        }
      )
    },
    popWeb() {
      AlipayJSBridge_call('popWeb')
      // console.log(JSON.stringify(this.$store.state.userInfo, null, 4));
      // Toast.info("不错哟~");
      // AlipayJSBridge_call("rpc",
      //   {
      //     operationType: "login.do",
      //     requestData: { param: "param" }
      //   },
      //   function(resp) {
      //     console.log(JSON.stringify(resp, null, 4));
      //   }
      // );
      // AlipayJSBridge_call("rpc",
      //   {
      //     operationType: "mock.do",
      //     requestData: { param: "param" }
      //   },
      //   function(resp) {
      //     console.log(JSON.stringify(resp, null, 4));
      //   }
      // );
    },
    showInfoObj() {
      alert(JSON.stringify(AlipayJSBridge.startupParams, null, 4))
    }
  },
  beforeCreate() {
    console.log('vue beforeCreate SUCCESS')
  },
  created() {
    console.log('vue created SUCCESS')
    this.updateUserInfo({ name: 'aa' })
    console.log(this.userInfo.name)
  },
  mounted() {
    // this.callRPCLogin()
    console.log('vue mounted SUCCESS')
    if (!isNotNebula) {
      alert(JSON.stringify(AlipayJSBridge.startupParams, null, 4))
    }
  }
}
</script>

<style lang="stylus">
.md-contain-tran-pwd
  & .md-radio.is-checked .md-radio-icon
    color: #FFFFFF

  & .md-radio-label
    color: #FFFFFF

  & .md-field
    height: 448px
    width: 690px
    background-image: linear-gradient(135deg, #ed9bfa, #904ef4 100%)
    padding: 0
    border-radius: 20px
    display: flex

  & .md-field-content
    display: inline-grid
    grid-auto-columns: 600px
    grid-auto-rows: 70px
    margin-top: 37px
    margin-left: 30px

  & .md-cell-item-body
    padding: 0
    min-height: 0
    text-align: left

  & .md-cell-item-body::before
    border-bottom: solid 0 #e2e4ea

  & .md-amount
    font-size: 44px
    margin-left: -16px
    width: 160px

  & .md-cell-item:nth-of-type(1)
    font-size: 28px

  & .md-cell-item:nth-of-type(2)
    font-size: 24px
    opacity: 0.9

  & span
    text-align: left
    color: #FFFFFF

  & .md-cell-item-content
    color: #FFFFFF

.md-contain-tran-top, .md-contain-tran-bottom
  display: flex
  justify-content: center

  & .md-cell-item-right .md-icon-arrow-right
    color: #FFFFFF

.md-contain-tran-top
  & .md-cell-item:nth-of-type(3) .md-cell-item-right span:nth-of-type(1)
    font-size: 20px
    margin-left: 10px
    width: 368px !important

  & .md-cell-item:nth-of-type(3) .md-cell-item-right span:nth-of-type(3)
    // margin-right: 112px
    font-size: 20px
    margin-left: 10px

  & .md-cell-item:nth-of-type(3) .md-cell-item-right span:nth-of-type(2)
    font-size: 24px
    color: #ffffff
    opacity: 0.8

  & .md-field
    height: 300px
    background-image: linear-gradient(135deg, #ed9bfa, #904ef4 100%)

  & .md-cell-item-right, .md-cell-item-left
    margin: 0px

  & .md-cell-item-content
    flex: none

  & .md-cell-item-title
    font-size: 24px
    color: #FFFFFF
    opacity: 0.8

  & .md-cell-item-right
    & .md-amount
      font-size: 24px
      color: #FFFFFF

  & .md-cell-item-right
    & .md-radio
      margin: 0

      & .md-radio-icon
        margin-left: 46px

  & .md-button
    height: 48px
    width: 176px !important
    border-radius: 32px !important
    background: rgba(208, 184, 234, 0.7) !important
    // opacity: 0.7
    // margin-left: 20px

  & .md-button-content
    height: 100%
    font-size: 20px
    color: #904ef4
    letter-spacing: 0.58px

  & .md-cell-item-body
    justify-content: baseline

  & .md-amount
    margin-left: 2px
    margin-right: 20px

.md-contain-tran-bottom
  & .md-field
    height: 198px
    background-image: linear-gradient(135deg, #ED9BFA, #904EF4 100%)
    position: relative
    top: -50px

  & .md-button-content
    height: 100%

  & .md-button
    width: 116px !important
    height: 40px
    font-size: 20px

  & .md-button-inner
    border-radius: 19px
    background: rgba(255, 255, 255, 0.2)

  & .md-button-content
    color: #FFFFFF

  & .md-field-content
    display: inline-grid
    grid-auto-columns: 600px
    grid-auto-rows: 44px !important
    margin-top: 30px
    margin-left: 30px

  & .md-cell-item:nth-of-type(1), .md-cell-item:nth-of-type(1) .md-cell-item-title
    opacity: 0.8
    font-size: 24px !important
    color: #FFFFFF

  & .md-cell-item:nth-of-type(2), .md-cell-item:nth-of-type(2) .md-cell-item-title
    font-size: 24px
    color: #FFFFFF

  // & .md-cell-item:nth-of-type(1), .md-cell-item:nth-of-type(1) .md-cell-item-right
  // margin-right: 22px

  // & .md-cell-item:nth-of-type(2), .md-cell-item:nth-of-type(2) .md-cell-item-right
  // margin-right: 28px
  & .md-cell-item-right
    font-size: 24px
    text-align: left
    width: 172px
    justify-content: normal

  .md-contain-content
    margin-top: 30px

.md-contain-content .md-field
  background: #ffffff
  height: 160px
  padding: 0
  width: 690px
  /* background: wheat; */
  /* margin-top: 30px;
   */

.md-contain-content .md-field-content
  display: flex
  justify-content: space-around
  align-items: center

.md-contain-content .md-cell-item-body
  padding: 0

.md-contain-content .md-cell-item-body::before
  border-bottom: solid 0 #e2e4ea

.md-contain-content .md-field:nth-of-type(1) .md-cell-item:nth-of-type(1)
  width: 40px
  height: 50px
  background: url('../../../../components/_style/images/pic1.jpg') center no-repeat
  background-size: cover

.md-contain-content .md-field:nth-of-type(2) .md-cell-item:nth-of-type(1)
  width: 40px
  height: 50px
  background: url('../../../../components/_style/images/pic2.jpg') center no-repeat
  background-size: cover

.md-contain-content .md-field:nth-of-type(3) .md-cell-item:nth-of-type(1)
  width: 40px
  height: 50px
  background: url('../../../../components/_style/images/pic3.jpg') center no-repeat
  background-size: cover

.md-contain-content .md-cell-item-content
  text-align: left

.md-contain-content .md-cell-item:nth-of-type(2) .md-cell-item-title
  font-size: 32px
  color: #231a2f
  letter-spacing: 0.84px

.md-contain-content .md-cell-item:nth-of-type(2) .md-cell-item-brief
  font-size: 24px
  color: #9e98a7
  letter-spacing: 0.1px

.md-contain-content .md-cell-item:nth-of-type(3) .md-cell-item-brief, .md-contain-content .md-cell-item:nth-of-type(3) .md-cell-item-title
  font-size: 24px
  color: #655a72
  letter-spacing: 0.3px
  line-height: 36px
</style>
