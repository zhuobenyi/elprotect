<template>
  <div class="md-rush-buy">
    <span class="md-custom-text" @click="$_onSthEvent">{{content}}</span>
  </div>
</template>

<script>
// import Tag from '../tag'

export default {
  name: 'md-rush-buy',

  components: {
    // [Tag.name]: Tag
  },

  props: {
    content: {
      type: String,
      default: '抢购'
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
.md-rush-buy
  color: color-gray-1
  -webkit-font-smoothing: antialiased
  text-align: center
  width: 108px
  height: 50px
  background: linear-gradient(135deg, #ED9BFA, #904EF4)
  // background-image: linear-gradient(to right, #EA99FA, #914FF4)
  border-radius: 30px
  display: flex
  align-items: center
  justify-content: center

span
  color: #ffffff
  font-size: 24px
  font-weight: 400
  text-align: center
</style>
