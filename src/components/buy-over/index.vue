<template>
  <div class="md-buy-over">
    <span class="md-custom-text" @click="$_onSthEvent">{{content}}</span>
  </div>
</template>

<script>
// import Tag from '../tag'

export default {
  name: 'md-buy-over',

  components: {
    // [Tag.name]: Tag
  },

  props: {
    content: {
      type: String,
      default: '本期抢完'
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
.md-buy-over
  color: color-gray-1
  -webkit-font-smoothing: antialiased
  text-align: center
  width: 156px
  height: 50px
  background: #d3d1d7
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
