<template>
  <div class="md-low-over-tag">
    <span class="md-custom-text" @click="$_onSthEvent">{{content}}</span>
  </div>
</template>

<script>
// import Tag from '../tag'

export default {
  name: 'md-low-over-tag',

  components: {
    // [Tag.name]: Tag
  },

  props: {
    content: {
      type: String,
      default: '已还清'
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
.md-low-over-tag
  color: color-gray-1
  -webkit-font-smoothing: antialiased
  text-align: center
  width: 100px
  height: 40px
  background: #6dd1bc
  // border-radius: 10px
  display: flex
  align-items: center
  justify-content: center
  border-top-right-radius: 20px
  border-bottom-left-radius: 20px

span
  color: #ffffff
  font-size: 20px
  font-weight: 400
  text-align: center
</style>
