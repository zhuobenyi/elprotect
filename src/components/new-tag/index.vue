<template>
  <div>
    <div class="md-new-tag">
      <div class="md-custom-text" @click="$_onSthEvent">
        <span>{{content}}</span>
      </div>
      <div class="triangle"></div>
    </div>
  </div>
</template>

<script>
// import Tag from '../tag'

export default {
  name: 'md-new-tag',

  components: {
    // [Tag.name]: Tag
  },

  props: {
    content: {
      type: String,
      default: 'New'
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
.md-new-tag
  color: color-gray-1
  -webkit-font-smoothing: antialiased
  text-align: center
  width: 70px
  height: 40px
  // border-radius: 10px

span
  color: #ffffff
  font-size: 20px
  font-weight: 400
  text-align: center

.md-custom-text
  widows: 62px
  height: 40px
  display: flex
  align-items: center
  justify-content: center
  border-radius: 8px
  background: linear-gradient(135deg, #FF6AF0, #F26051)

.triangle
  width: 12px
  height: 8px
  background: #F26051
  position: relative
  transform: rotate(45.00001deg)
  position: relative
  left: 62px
  top: -24px
  z-index: -2
</style>
