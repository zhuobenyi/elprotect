<template>
  <div class="md-three-tips-lot">
    <ul class="md-three-tips-ul">
      <li @click="$_deletePersionalCard">
        <div class="img1"></div>
        <!-- <md-icon
        name="delete"
        size="lg"
        ></md-icon>-->
        <span>删除名片</span>
      </li>
      <li @click="$_queryDetails">
        <div class="img2"></div>
        <span>查看详情</span>
      </li>
      <li @click="$_downPersionalCard">
        <div class="img3"></div>
        <span>下载名片</span>
      </li>
    </ul>
  </div>
</template>

<script>
import Icon from '../icon'
export default {
  name: 'md-three-tips-lot',

  components: {
    [Icon.name]: Icon
  },

  props: {},

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
    $_downPersionalCard(event) {
      this.$emit('downPersionalCard', 'hello')
    },
    $_queryDetails(event) {
      this.$emit('queryDetails', 'hello')
    },
    $_deletePersionalCard(event) {
      this.$emit('deletePersionalCard', 'hello')
    },

    // MARK: public methods
    publicMethod() {}
  }
}
</script>

<style lang="stylus">
.md-three-tips-lot
  color: color-gray-1
  -webkit-font-smoothing: antialiased
  text-align: center
  background: white
  box-shadow: 0 -4px 7px 0 rgba(0, 0, 0, 0.02)
  height: 120px
  width: 750px
  font-size: 24px
  display: flex
  align-items: center
  // opacity: 0.6

.md-three-tips-lot ul, .md-three-tips-lot ul li
  height: 60px
  display: flex
  align-items: center
  justify-content: center

.md-three-tips-lot ul
  justify-content: space-around

.md-three-tips-lot ul li
  border-right: 1px solid #D3D1D7
  letter-spacing: 0.5px
  font-size: 24px

.md-three-tips-lot ul li:nth-of-type(1)
  width: 252px
  color: #FF666B

.md-three-tips-lot ul li:nth-of-type(2)
  width: 243px
  color: #231A2F

.md-three-tips-lot ul li:nth-of-type(3)
  border-right: 0px solid #D3D1D7
  color: #231A2F
  width: 251px

.img1, .img2, .img3, img
  width: 35px
  height: 35px
  background-size: cover

.img1, .img2, .img3
  margin-right: 16px

.img1
  // background: url('../_style/images/delete.png') center no-repeat
  background: url('../_style/images/delete.png') center no-repeat
  background-size: cover

.img2
  background: url('../_style/images/search.png') center no-repeat
  background-size: cover

.img3
  background: url('../_style/images/download.png') center no-repeat
  background-size: cover
</style>
