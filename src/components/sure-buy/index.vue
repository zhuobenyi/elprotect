<template>
  <div class="md-sure-buy" :style="{background:bgColor ? bgColor:''}">
    <span class="md-custom-text" @click="$_onSthEvent">{{content}}</span>
  </div>
</template>

<script>
// import Tag from '../tag'

export default {
  name: 'md-sure-buy',

  components: {
    // [Tag.name]: Tag
  },

  props: {
    content: {
      type: String,
      default: '确认购买'
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
.md-sure-buy
  color: color-gray-1
  -webkit-font-smoothing: antialiased
  text-align: center
  width: 236px
  height: 80px
  cursor: pointer
  // background: linear-gradient(135deg, #ED9BFA, #904EF4)
  // background-image: linear-gradient(to right, #EA99FA, #914FF4)
  border-radius: 40px
  display: flex
  align-items: center
  justify-content: center

span
  color: #ffffff
  font-size: 28px
  font-weight: 400
  text-align: center
  // letter-spacing: 0.4129999px
  letter-spacing: 0.82px
</style>
