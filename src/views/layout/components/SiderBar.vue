<template>
  <section class="Siderbar">
    <div class="logo"/>
    <a-menu
      :defaultSelectedKeys="['1']"
      :defaultOpenKeys="['sub1']"
      mode="inline"
      theme="dark"
      :inlineCollapsed="collapsed"
    >
      <template v-for="(item, index) in routes">
        <a-menu-item :key="index" v-show="item.meta.show">
          <router-link :to="item.path" :key="index">
            <a-icon type="pie-chart"/>
            <span>{{item.name}}</span>
          </router-link>
        </a-menu-item>
      </template>
      <!-- <a-menu-item key="1">
      <a-icon type="pie-chart" />
      <span>Option 1</span>
    </a-menu-item>
    <a-menu-item key="2">
      <a-icon type="desktop" />
      <span>Option 2</span>
    </a-menu-item>
    <a-menu-item key="3">
      <a-icon type="inbox" />
      <span>Option 3</span>
    </a-menu-item>
    <a-sub-menu key="sub1">
      <span slot="title">
          <a-icon type="mail"/>
          <span>Navigation One</span>
      </span>
      <a-menu-item key="5">Option 5</a-menu-item>
      <a-menu-item key="6">Option 6</a-menu-item>
      <a-menu-item key="7">Option 7</a-menu-item>
      <a-menu-item key="8">Option 8</a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="sub2">
      <span slot="title">
          <a-icon type="appstore"/>
          <span>Navigation Two</span>
      </span>
      <a-menu-item key="9">Option 9</a-menu-item>
      <a-menu-item key="10">Option 10</a-menu-item>
      <a-sub-menu key="sub3" title="Submenu">
        <a-menu-item key="11">Option 11</a-menu-item>
        <a-menu-item key="12">Option 12</a-menu-item>
      </a-sub-menu>
      </a-sub-menu>-->
    </a-menu>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue, Model } from 'vue-property-decorator';
import { routers } from '@/router/router';

@Component({
  components: {},
})
export default class Siderbar extends Vue {
  private routes: any = [];
  private collapsed!: boolean;

  private mounted() {
    this.routes = routers;
  }
  /**
   *
   * @desc   切换菜单栏效果
   */
  private toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
}
</script>
