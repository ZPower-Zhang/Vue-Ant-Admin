<template>
  <div class="g-login">
    <div class="login-wrap">
      <div class="m-ipt">
        <div class="field-label">用户名</div>
        <input class="field-ipt" type="text" placeholder="User Name">
        <div>
          <hr class="mu-text-field-line">
          <hr class="mu-text-field-focus-line">
        </div>
      </div>

      <div class="m-ipt">
        <div class="field-label">密码</div>
        <input class="field-ipt" type="text" placeholder="Password">
        <div>
          <hr class="mu-text-field-line">
          <hr class="mu-text-field-focus-line">
        </div>
      </div>

      <div class="m-sign-btn">Sign In</div>
      <div class="m-line-link">
        <a href="http://">Forgot Password?</a>
        <a href="http://">Sign Up?</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Getter, Mutation, Action } from 'vuex-class';

@Component({
  components: {},
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
    padding: 37px 28px;
    width: 412px;
    height: 448px;
    border-radius: 10px;
    background-color: #fff;

    .m-ipt {
      position: relative;
      padding-top: 28px;
      padding-bottom: 12px;

      .field-label {
        top: 8px;
        position: absolute;
        line-height: 20px;
        -webkit-transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1);
        transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1);
        z-index: 1;
        cursor: text;
        -webkit-transform: translateZ(0) scale(0.75);
        transform: translateZ(0) scale(0.75);
        -webkit-transform-origin: left top;
        -ms-transform-origin: left top;
        transform-origin: left top;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        pointer-events: none;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
      }

      .field-ipt {
        appearance: none;
        outline: none;
        border: none;
        background: none;
        border-radius: 0 0 0 0;
        box-shadow: none;
        display: block;
        padding: 0;
        margin: 0;
        width: 100%;
        height: 32px;
        font-style: inherit;
        font-variant: inherit;
        font-weight: inherit;
        font-stretch: inherit;
        font-size: inherit;
        color: rgba(0, 0, 0, 0.87);
        font-family: inherit;
        position: relative;

        ::-webkit-input-placeholder {
          color: #a0a0a0;
        }
      }

      div {
        .mu-text-field-line {
          margin: 0;
          height: 1px;
          border: none;
          background-color: rgba(0, 0, 0, 0.12);
          left: 0;
          right: 0;
          position: absolute;
        }

        .mu-text-field-focus-line {
          margin: 0;
          height: 2px;
          border: none;
          background-color: #7e57c2;
          position: absolute;
          left: 0;
          right: 0;
          margin-top: -1px;
          -webkit-transform: scaleX(0);
          -ms-transform: scaleX(0);
          transform: scaleX(0);
          -webkit-transition: -webkit-transform 0.45s
            cubic-bezier(0.23, 1, 0.32, 1);
          transition: -webkit-transform 0.45s cubic-bezier(0.23, 1, 0.32, 1);
          transition: transform 0.45s cubic-bezier(0.23, 1, 0.32, 1);
          transition: transform 0.45s cubic-bezier(0.23, 1, 0.32, 1),
            -webkit-transform 0.45s cubic-bezier(0.23, 1, 0.32, 1);
        }
      }
    }

    .m-sign-btn {
      margin-top: 23px;
      height: 50px;
      background-color: #434a5f;
      line-height: 50px;
      font-size: 18px;
      color: #fff;
      text-align: center;
      border-radius: 5px;
      cursor: pointer;
    }

    .m-line-link {
      margin-top: 25px;
      font-size: 14px;

      > a {
        display: inline-block;
        color: #8e8e8e;
      }
    }
  }
}
</style>
