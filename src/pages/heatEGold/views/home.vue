<template>
  <main id="home" class="view" role="main mindle">
    <FirstPage v-if="showDiffer==='A'"></FirstPage>
    <SecondPage v-if="showDiffer==='B'" ref="getInput" @checkActive="checkActive"></SecondPage>
    <ThreeCard v-if="showDiffer!=='A'&&showDiffer!=='B'&&showDiffer!=='Y'"></ThreeCard>
    <div class="md-btn-local" :style="{marginTop:showDiffer==='B' ? '':'220px'}">
      <md-proview-order
        :content="'立即申请'"
        :bgColor="showDiffer==='B' ? bgColor :'linear-gradient(135deg, #ED9BFA, #904EF4)'"
        @activeMethod="immediateApplication"
        ref="updateColor"
      ></md-proview-order>
    </div>
  </main>
</template>

<script>
import Toast from '@mandmobile/toast'; // MARK:文件路径:使用源码版本组件
import Button from '@mandmobile/button'; // MARK:文件路径:使用源码版本组件
import { mapMutations, mapState } from 'vuex';
import Field from '@mandmobile/field';
import CellItem from '@mandmobile/cell-item';
import ProviewOrder from '@mandmobile/proview-order';
import Dialog from '@mandmobile/dialog';
import Amount from '@mandmobile/amount';
import FirstPage from './component/firstPage';
import SecondPage from './component/secondPage ';
import ThreeCard from './component/threeCard';

export default {
  name: 'home-view',
  components: {
    FirstPage,
    SecondPage,
    ThreeCard,
    [Button.name]: Button,
    [Field.name]: Field,
    [CellItem.name]: CellItem,
    [ProviewOrder.name]: ProviewOrder,
    [Toast.name]: Toast,
    [Dialog.name]: Dialog,
    [Amount.name]: Amount
  },
  data () {
    return {
      showDiffer: '',
      bgColor: '#D3D1D7'
    }
  },
  computed: {
    ...mapState({
      userInfo: 'userInfo'
    })
  },
  methods: {
    ...mapMutations(['updateUserInfo']),
    popWindow () {
      AlipayJSBridge_call('popWindow', {
        data: {
          from: location.href,
          info: Date.now()
        }
      })
    },
    alertDialog (msg, btnsNum, onSubmit, onCancel, title) {
      let param = {
        title: title || '提示',
        content: msg,
        cancelText: '残忍拒绝',
        confirmText: '欣然接受',
        onConfirm: function (res) {
          if (res == 'cancel') {
            if (typeof onCancel === 'function') {
              onCancel()
            }
          } else {
            if (typeof onSubmit === 'function') {
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
    checkActive (val) {
      this.bgColor = val
        ? 'linear-gradient(135deg, #ED9BFA, #904EF4)'
        : '#D3D1D7';
    },
    immediateApplication () {
      AlipayJSBridge.call('pushWindow', {
        // 要打开页面的 URL
        url: 'addUpdate.html',
        // 打开页面的配置参数
        param: {
          readTitle: true, // 自动读取 title
          showOptionMenu: false // 隐藏右边菜单
        },
        // 用于给新开的页面传递参数，可选
        // 在新开的页面使用 AlipayJSBridge.startupParams 可以获取到 passData
        passData: {
          key1: 'key1Value',
          key2: 'key2Value'
        }
      })

      // this.alertDialog(
      //   '对不起！您暂时无法使用心e金，试试信用卡提现吧~',
      //   2,
      //   function() {
      //     alert('跳转到信用卡功能体现页面')
      //   }
      // )
    },
    // 心e金首页 获取心e金类型
    callRPCGetType () {
      // debugger
      const _this = this
      AlipayJSBridge_call(
        'rpc',
        {
          operationType: 'getCashLoanHome_restrictedTrade.do',
          requestData: [
            // { idNum: 'value1' },
            // { idType: '1e1' },
            // { cust_name: 'value1' }
          ],
          headers: {}
        },
        function (result) {
          // alert(JSON.stringify(result))
          if (result.Head.IBSReturnCode === '000000') {
            //  LOAN_SIGN A没有资格/B有资格/Y已激活但是没设置密码/N已激活已设置密码 四个状态
            _this.showDiffer = result.Body.LOAN_SIGN
            switch (_this.showDiffer) {
              case 'Y':
                _this.callRPCGetRsaKey((PUBLICKEY, NOTICE, CardNo) => {
                  AlipayJSBridge_call('pushWeb', {
                    // 要打开页面的 URL
                    url: 'password.html',
                    // 打开页面的配置参数
                    param: {
                      readTitle: true, // 自动读取 title
                      showOptionMenu: false // 隐藏右边菜单
                    },
                    // 用于给新开的页面传递参数，可选
                    // 在新开的页面使用 AlipayJSBridge.startupParams 可以获取到 passData
                    passData: {
                      PUBLICKEY: PUBLICKEY,
                      NOTICE: NOTICE,
                      CardNo: CardNo
                    }
                  })
                })
                break;

              default:
                break
            }
          }
        }
      )
    },
    // 登录已绑卡情况下，激活设置心e金密码前获取加密公钥
    callRPCGetRsaKey (callback) {
      AlipayJSBridge_call(
        'rpc',
        {
          operationType: 'QueryRsaPublicKeyByStatePwd.do',
          requestData: [
            // { idNum: 'value1' },
            // { idType: '1e1' },
            // { cust_name: 'value1' }
          ],
          headers: {}
        },
        res => {
          // alert(JSON.stringify(result))
          if (res.Head.IBSReturnCode === '000000') {
            callback &&
              callback(
                res.Body.CASH_PUBLICKEY,
                res.Body.CASH_NOTICE,
                res.Body.CREDIT_CARD_NBR
              )
          }
        }
      )
    },

    popWeb () {
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
    showInfoObj () {
      alert(JSON.stringify(AlipayJSBridge.startupParams, null, 4))
    }
  },
  beforeCreate () {
    console.log('vue beforeCreate SUCCESS')
  },
  created () {
    console.log('vue created SUCCESS')
    this.updateUserInfo({ name: 'aa' })
    console.log(this.userInfo.name)
  },
  mounted () {
    this.callRPCGetType()
    console.log('vue mounted SUCCESS')
    if (!isNotNebula) {
      alert(JSON.stringify(AlipayJSBridge.startupParams, null, 4))
    }
  }
}
</script>

<style lang="stylus"></style>
