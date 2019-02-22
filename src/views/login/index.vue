<template>
  <div class="g-login">
    <div class="login-wrap"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  // components: {}
})
export default class Login extends Vue {}
</script>

<style lang="scss" scoped>
.g-login {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  background: url(../../assets/img/login-bg.jpg) no-repeat center center;
  background-size: cover;
  .login-wrap {
    position: absolute;
    top: 149px;
    left: 50%;
    margin-left: -206px;
    width: 412px;
    height: 448px;
    border-radius: 10px;
    background-color: #fff;
  }
}
</style>

