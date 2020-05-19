<template>
  <main id="home" class="view" role="main">
    <template>
      <div class="md-contain-application">
        <md-field>
          <md-cell-item title="可借现金" />
          <span>
            ￥
            <md-amount v-model="borrowMOney" has-separator></md-amount>
          </span>

          <md-cell-item :title="`日利率 ${DayRate}%`"></md-cell-item>
        </md-field>
      </div>
      <template>
        <div class="md-contain-content">
          <md-field>
            <md-cell-item></md-cell-item>
            <md-cell-item :title="`${DayRate} %`" brief="日利率"></md-cell-item>
            <md-cell-item title="抄底费率，循环使用" brief="专属现金额度"></md-cell-item>
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
          <md-field>
            <md-input-item
              v-model="input"
              title="推荐人代码"
              placeholder="请输入推荐人代码（可选填）"
              @blur="validateInput(input)"
              :error="error"
              align="right"
            ></md-input-item>
          </md-field>
          <md-field>
            <md-check v-model="checked" label @click.native="check" />
            <span class="md-check-tip-1">
              我已经阅读并同意
              <span class="md-check-tip">《中国光大银行信用“心e金”产品业务条款以及细则》</span>
            </span>
          </md-field>
        </div>
      </template>
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
import InputItem from '@mandmobile/input-item'
import Check from '@mandmobile/check'

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
    [InputItem.name]: InputItem,
    [Check.name]: Check
  },
  data() {
    return {
      input: '',
      checked: '',
      isError: false,
      error: ''
    }
  },
  props: {
    DayRate: {
      type: String,
      default: '0.005'
    },
    borrowMOney: {
      type: Number,
      default: 30000
    }
  },
  watch: {},
  computed: {
    ...mapState({
      userInfo: 'userInfo'
    })
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
    validateInput(val) {
      if (val !== '') {
        this.isError = !/^[A-Za-z0-9]/.test(val)
        this.error = /^[A-Za-z0-9]/.test(val) ? '' : '请输入数字和字母'
        if (!this.isError && val.length < 10) {
          this.alertDialog(
            '您输入的推荐人代码不足10位，请重新输入',
            1,
            '',
            '',
            '确定'
          )
        }
      }
    },
    alertDialog(
      msg,
      btnsNum,
      onSubmit,
      onCancel,
      confirmText,
      cancelText,
      title
    ) {
      let param = {
        title: title ? title : '提示',
        content: msg,
        cancelText: cancelText ? cancelText : '残忍拒绝',
        confirmText: confirmText ? confirmText : '欣然接受',
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
    check() {
      // debugger
      this.$emit('checkActive', this.checked)
    },
    // 登录外激活心e金
    callRPCLogin() {
      // debugger
      const _this = this
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
          // alert(JSON.stringify(result))
          if (result._RejCode === '444444') {
            _this.showDiffer = false
          }
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
    this.callRPCLogin()
    console.log('vue mounted SUCCESS')
    if (!isNotNebula) {
      alert(JSON.stringify(AlipayJSBridge.startupParams, null, 4))
    }
  }
}
</script>

<style lang="stylus">
/* 展示 头部 */
.md-contain-content
  margin-top: 30px

  & .md-check
    margin-left: 30px

  & .md-check-tip-1
    font-size: 24px
    color: #9E98A7
    width: 600px
    height: 34px
    text-align: left

  & .md-check-tip
    font-size: 24px
    color: #290030
    letter-spacing: 0.62px

  & .md-input-item-input
    font-size: 24px
    // color: #D3D1D7

  & .md-input-item
    width: 690px
    margin: 0 auto
    margin-left: 30px

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

.md-btn-local
  position: relative
  // margin-top: 440px
  width: 100%
  // background: wheat
  height: 120px
  box-shadow: 0 -8px 14px 0 rgba(0, 0, 0, 0.04)
  display: flex
  justify-content: center
  align-items: center

.md-contain-application
  display: flex
  justify-content: center

.md-contain-application
  & .md-input-item .md-field-item-title
    font-size: 28px
    color: #231A2F

  & .md-field
    height: 280px
    width: 690px
    background-image: linear-gradient(135deg, #ed9bfa, #904ef4 100%)
    padding: 0
    border-radius: 20px
    display: flex

  & .md-field-content
    display: inline-grid
    grid-auto-columns: 630px
    grid-auto-rows: 70px
    margin-top: 54px
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

  & .md-cell-item:nth-of-type(1)
    font-size: 28px

  & .md-cell-item:nth-of-type(2) .md-cell-item-content
    font-size: 24px !important
    opacity: 0.9

  & span
    font-size: 24px
    text-align: left
    color: #FFFFFF

  & .md-cell-item-content
    color: #FFFFFF
</style>
