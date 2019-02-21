<template>
  <div class="g-login">Login</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Login extends Vue {}
</script>

<style lang="scss" scoped>
.g-login {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  background: url(../../assets/img/login-1.png) no-repeat center center;
  background-size: cover;
}
</style>

