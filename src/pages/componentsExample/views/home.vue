<template>
  <main id="home" class="view bg" role="main">
    <div class="heading">
      <h1>
        <span>Mand Mobile</span>
      </h1>
      <p>一个基于Vue的移动端UI组件库，丰富、灵活、实用，快速搭建优质的金融类产品，让复杂的金融场景变简单。</p>
    </div>

    <md-button @click="popWindow">popWindow</md-button>
    <md-button @click="popWeb">popWeb</md-button>
    <md-button @click="showInfoObj">showInfoObj</md-button>
    <!-- 组件 -->
    <!-- 按钮 -->
    <!-- 颜色渐变 订单预览-->

    <md-proview-order @activeMethod="popWeb"></md-proview-order>
    <div style="margin-top:20px; "></div>
    <!-- 白色色  订单预览-->
    <md-proview-order @activeMethod="popWeb" :bgColor="'#D3D1D7'"></md-proview-order>
    <!-- 短按钮 -->
    <div style="margin-top:20px; "></div>
    <md-other-btn @activeMethod="popWeb"></md-other-btn>
    <!-- 查询当前设置 -->
    <md-other-btn
      @activeMethod="popWeb"
      :content="'查询当前设置'"
      :bgColor="'#ffffff'"
      :fontColor="'#655A72'"
    ></md-other-btn>
    <!-- 分期设置 -->
    <md-other-btn
      @activeMethod="popWeb"
      :content="'分期设置'"
      :bgColor="'#ffffff'"
      :fontColor="'#904EF4'"
      :bgBorder="'#904EF4'"
    ></md-other-btn>
    <!--  -->
    <div style="margin-top:20px; "></div>

    <!-- 确认购买 -->
    <md-sure-buy @activeMethod="popWeb"></md-sure-buy>

    <div style="margin-top:20px; "></div>

    <!-- 抢购 -->
    <md-rush-buy @activeMethod="popWeb"></md-rush-buy>

    <div style="margin-top:20px; "></div>
    <!-- 抢完 -->
    <md-buy-over @activeMethod="popWeb"></md-buy-over>

    <div style="margin-top:20px; "></div>

    <!-- 最低还款 -->
    <md-low-tag @activeMethod="popWeb"></md-low-tag>

    <div style="margin-top:20px; "></div>

    <!-- 已经还清 -->
    <md-low-over-tag @activeMethod="popWeb"></md-low-over-tag>

    <div style="margin-top:20px; "></div>
    <!-- 三日后到期 -->
    <md-three-day-tag @activeMethod="popWeb"></md-three-day-tag>

    <div style="margin-top:20px; "></div>

    <!-- 白金卡专享 -->
    <md-platinum-tag @activeMethod="popWeb"></md-platinum-tag>

    <div style="margin-top:20px; "></div>

    <!-- new -->
    <md-new-tag @activeMethod="popWeb"></md-new-tag>

    <div style="margin-top:20px; "></div>

    <!-- hot -->
    <md-new-tag-left @activeMethod="popWeb"></md-new-tag-left>
    <div style="margin-top:20px; "></div>

    <!-- 退 -->
    <md-tips-tag @activeMethod="popWeb"></md-tips-tag>

    <div style="margin-top:20px; "></div>

    <!-- 立即购买 -->
    <md-repayment-slot @repayActive="popWeb"></md-repayment-slot>

    <div style="margin-top:20px; "></div>

    <!-- 立即购买 -->
    <md-repayment-slot @repayActive="popWeb" :repayBgColor="'#D3D1D7'"></md-repayment-slot>

    <div style="margin-top:20px; "></div>

    <!-- 确认购买 -->
    <md-buy-slot></md-buy-slot>

    <div style="margin-top:20px; "></div>

    <!-- 名片 -->
    <md-three-tips-lot
      @downPersionalCard="downPersionalCard"
      @queryDetails="queryDetails"
      @deletePersionalCard="deletePersionalCard"
    ></md-three-tips-lot>

    <div style="margin-top:20px; "></div>

    <!-- <md-info-toast @activeDialog="showToast" ref="basicDialog"></md-info-toast>
    <md-button @click="showToast">短信弹窗1</md-button>-->

    <!-- 福信用卡 -->
    <md-card-list
      @cardBtnContentActive="cardBtnContentActive"
      @cardBtnLowActive="cardBtnLowActive"
      @cardBtnPayActive="cardBtnPayActive"
      @arrowRightAct="arrowRightAct"
    ></md-card-list>

    <div style="margin-top:20px; "></div>

    <!-- 还多张卡-双币种 -->
    <md-repayment-more-card></md-repayment-more-card>

    <div style="margin-top:20px; "></div>

    <!-- 支付常用按钮 -->
    <md-pay-btn-common></md-pay-btn-common>

    <div style="margin-top:20px; "></div>

    <!-- 还多张卡-还款列表（单/多） -->
    <md-repayment-card-list
      v-model="favorites"
      @repayMoneyActive="repayMoneyActive"
      @dealEditorActive="dealEditorActive"
    ></md-repayment-card-list>

    <div style="margin-top:20px; "></div>

    <!-- <md-dialog-info
      title="窗口标题"
      :closable="true"
      v-model="basicDialog.open"
      :btns="basicDialog.btns"
    ></md-dialog-info>-->
    <!-- 优惠券弹窗 -->
    <!-- transportFlag 1 成功 2 失败 3 升级失败 4  受理中 -->
    <md-result-page-all :transportFlag="4"></md-result-page-all>
    <!-- 设计稿设计组件 -->
  </main>
</template>

<script>
import Toast from '@mandmobile/toast' //MARK:文件路径:使用源码版本组件
import Button from '@mandmobile/button' //MARK:文件路径:使用源码版本组件
import ProviewOrder from '@mandmobile/proview-order'
import OtherBtn from '@mandmobile/other-btn'
import SureBuy from '@mandmobile/sure-buy'
import RushBuy from '@mandmobile/rush-buy'
import BuyOver from '@mandmobile/buy-over'
import LowTag from '@mandmobile/low-tag'
import LowOverTag from '@mandmobile/low-over-tag'
import ThreeDayTag from '@mandmobile/three-day-tag'
import PlatinumTag from '@mandmobile/platinum-tag'
import NewTag from '@mandmobile/new-tag'
import NewTagLeft from '@mandmobile/new-tag-left'
import TipsTag from '@mandmobile/tips-tag'
import RepaymentSlot from '@mandmobile/repayment-slot'
import BuySlot from '@mandmobile/buy-slot'
import ThreeTipsLot from '@mandmobile/three-tips-lot'
import CardList from '@mandmobile/card-list'
import RepaymentMoreCard from '@mandmobile/repayment-more-card'
import PayBtnCommon from '@mandmobile/pay-btn-common'
import RepaymentCardList from '@mandmobile/repayment-card-list'
import ResultPageAll from '@mandmobile/result-page-all'
// import DialogInfo from '@mandmobile/dialog-info'
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'home-view',
  components: {
    [Button.name]: Button,
    [ProviewOrder.name]: ProviewOrder,
    [SureBuy.name]: SureBuy,
    [RushBuy.name]: RushBuy,
    [BuyOver.name]: BuyOver,
    [LowTag.name]: LowTag,
    [LowOverTag.name]: LowOverTag,
    [ThreeDayTag.name]: ThreeDayTag,
    [PlatinumTag.name]: PlatinumTag,
    [NewTag.name]: NewTag,
    [NewTagLeft.name]: NewTagLeft,
    [TipsTag.name]: TipsTag,
    [OtherBtn.name]: OtherBtn,
    [RepaymentSlot.name]: RepaymentSlot,
    [BuySlot.name]: BuySlot,
    [ThreeTipsLot.name]: ThreeTipsLot,
    [CardList.name]: CardList,
    [RepaymentMoreCard.name]: RepaymentMoreCard,
    [PayBtnCommon.name]: PayBtnCommon,
    [RepaymentCardList.name]: RepaymentCardList,
    [ResultPageAll.name]: ResultPageAll
    // [DialogInfo.name]: DialogInfo
  },
  data() {
    return {
      // showDialog: false
      favorites: []
    }
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
    downPersionalCard() {
      alert('下载')
    },
    queryDetails() {
      alert('查看详情')
    },
    deletePersionalCard() {
      alert('删除')
    },
    // 卡片列表事件
    cardBtnContentActive() {
      alert('分期付款')
    },
    cardBtnLowActive() {
      alert('最低还款')
    },
    cardBtnPayActive() {
      alert('还款')
    },
    arrowRightAct() {
      alert('next')
    },
    repayMoneyActive() {
      alert('立即还款')
      alert('favorites' + this.favorites)
    },
    dealEditorActive() {
      alert('编辑')
    },
    showToast() {
      // debugger
      this.$refs.basicDialog
      // this.showDialog
    },
    popWeb() {
      // AlipayJSBridge_call('popWeb')
      alert(1)
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
    console.log('vue mounted SUCCESS')
    if (!isNotNebula) {
      alert(JSON.stringify(AlipayJSBridge.startupParams, null, 4))
    }
  }
}
</script>

<style>
.md-repayment-slot,
.md-buy-slot,
.md-card-list,
.md-repayment-more-card,
.md-pay-btn-common,
.md-repayment-card-list,
.md-result-page-all {
  background: #ffffff;
}
.bg {
  background: #fafafa;
}
.heading {
  text-align: center;
  margin-bottom: 48px;
}
.heading h1 {
  color: #333;
  line-height: 1.15;
  font-size: 64px;
  margin-bottom: 32px;
}
.heading h1 span {
  position: relative;
}
.heading h1 span::after {
  content: '';
  position: absolute;
  z-index: -1;
  left: 0;
  bottom: 8px;
  width: 100%;
  height: 20px;
  background: #ecf6ff;
}
.heading p {
  font-size: 32px;
  color: #666;
  line-height: 56px;
}
</style>
