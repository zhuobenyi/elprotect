<template>
  <main id="home" class="view" role="main">
    <template>
      <div class="md-contain">
        <md-field>
          <md-cell-item title="贷你所贷 急你所急" />
        </md-field>
      </div>
      <template>
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

export default {
  name: 'home-view',
  components: {
    [Button.name]: Button,
    [Field.name]: Field,
    [CellItem.name]: CellItem,
    [ProviewOrder.name]: ProviewOrder,
    [Toast.name]: Toast,
    [Dialog.name]: Dialog,
    [Amount.name]: Amount
  },
  data() {
    return {}
  },
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
.heading
  text-align: center
  margin-bottom: 48px

.heading h1
  color: #333
  line-height: 1.15
  font-size: 64px
  margin-bottom: 32px

.heading h1 span
  position: relative

.heading h1 span::after
  content: ''
  position: absolute
  z-index: -1
  left: 0
  bottom: 8px
  width: 100%
  height: 20px
  background: #ecf6ff

.heading p
  font-size: 32px
  color: #666
  line-height: 56px

/* 展示 头部 */
.md-contain
  display: flex
  justify-content: center

.md-contain .md-field
  background-image: linear-gradient(135deg, #ed9bfa, #904ef4 100%)
  height: 280px
  width: 690px
  padding: 0
  display: flex
  justify-content: center
  align-items: center
  border-radius: 20px

.md-contain .md-cell-item-body::before
  border-bottom: solid 0 #e2e4ea

.md-contain .md-cell-item-body
  padding: 0
  min-height: 0

.md-contain .md-cell-item-content
  flex: none
  /* margin: 0 30px; */
  color: #ffffff
  display: flex
  justify-content: center
  align-items: center
  letter-spacing: 2px
  margin: 86px auto
  height: 108px
  width: 580px
  border-radius: 54px
  background: rgba(0, 0, 0, 0.1)

.md-contain .md-cell-item-title
  font-size: 48px
  opacity: 0.96

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

.md-btn-local
  position: relative
  margin-top: 440px
  width: 100%
  // background: wheat
  height: 120px
  box-shadow: 0 -8px 14px 0 rgba(0, 0, 0, 0.04)
  display: flex
  justify-content: center
  align-items: center
</style>
