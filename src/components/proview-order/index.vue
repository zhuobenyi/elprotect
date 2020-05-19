<template>
  <div class="md-proview-order">
    <md-button
      type="default"
      :style="{background:bgColor}"
      plain
      round
      @click="$_onSthEvent"
    >{{content}}</md-button>
    <!-- <span class="md-custom-text"></span> -->
  </div>
</template>

<script>
import Button from '../button'

export default {
  name: 'md-proview-order',

  components: {
    [Button.name]: Button
  },

  props: {
    content: {
      type: String,
      default: '预览订单'
    },
    bgColor: {
      type: String,
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
      this.$emit('activeMethod', 'hello')
    },

    // MARK: public methods
    publicMethod() {}
  }
}
</script>

<style lang="stylus" scoped>
.md-proview-order
  color: color-gray-1
  -webkit-font-smoothing: antialiased
  text-align: center
  // background-image: linear-gradient(to right, #EA99FA, #914FF4)

.md-proview-order >>> .md-button-content
  height: 80px
  color: #ffffff

.md-proview-order
  & .md-button
    width: 690px
    height: 80px
    border-radius: 42px
    display: flex
    align-items: center
    justify-content: center
    margin: 0 auto
    border: 0px
    font-size: 28px
    font-weight: 400
    text-align: center
    letter-spacing: 0.82px

  .md-proview-order .default::after
    border: solid 0 #c5cad5
</style>
