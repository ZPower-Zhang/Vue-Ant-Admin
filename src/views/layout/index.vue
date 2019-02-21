<template>
<a-layout id="components-layout-demo-custom-trigger" style="height: 100%;">
  <a-layout-sider :trigger="null" collapsible v-model="collapsed">
    <SiderBar></SiderBar>
  </a-layout-sider>
  <a-layout>
    <a-layout-header style="background: #fff; padding: 0">
      <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="()=> collapsed = !collapsed" />
    </a-layout-header>
    <AppMain></AppMain>
  </a-layout>
</a-layout>
<!-- <section class="app-wrapper">
    <SiderBar></SiderBar>
    <div class="main-container">
      <NavBar></NavBar>
      <AppMain></AppMain>
    </div>
  </section>-->
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Emit
} from "vue-property-decorator";
import AppMain from "./components/AppMain.vue";
import NavBar from "./components/NavBar.vue";
import SiderBar from "./components/SiderBar.vue";
import BreadCrumb from "@/components/BreadCrumb.vue";

@Component({
  components: {
    AppMain,
    NavBar,
    BreadCrumb,
    SiderBar
  }
})
export default class Layout extends Vue {
  collapsed: boolean = false;

  @Emit()
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
}
</script>

<style lang="scss" scoped>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
