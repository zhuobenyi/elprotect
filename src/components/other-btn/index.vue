<template>
  <div
    class="md-other-btn"
    :style="{background:bgColor,border:`1px solid ${bgBorder}`,color:fontColor}"
  >
    <span class="md-custom-text" @click="$_onSthEvent">{{content}}</span>
  </div>
</template>

<script>
// import Tag from '../tag'

export default {
  name: 'md-other-btn',

  components: {
    // [Tag.name]: Tag
  },

  props: {
    content: {
      type: String,
      default: '修改'
    },
    bgColor: {
      type: String,
      default: 'linear-gradient(135deg, #ED9BFA, #904EF4)'
    },
    bgBorder: {
      type: String,
      default: 'linear-gradient(135deg, #ED9BFA, #904EF4)'
    },
    fontColor: {
      type: String,
      default: '#ffffff'
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
.md-other-btn
  color: color-gray-1
  -webkit-font-smoothing: antialiased
  text-align: center
  width: 330px
  height: 80px
  // background-image: linear-gradient(to right, #EA99FA, #914FF4)
  border-radius: 42px
  display: flex
  align-items: center
  justify-content: center

span
  // color: #ffffff
  font-size: 28px
  font-weight: 400
  text-align: center
  letter-spacing: 0.4129999px
</style>
