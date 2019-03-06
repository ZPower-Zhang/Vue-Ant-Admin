<template>
<a-layout id="components-layout-demo-custom-trigger" style="height: 100%;">
  <a-layout-sider :trigger="null" collapsible v-model="collapsed" :width="256">
    <div class="logo" />
    <SiderBar></SiderBar>
  </a-layout-sider>
  
  <a-layout>
    <a-layout-header style="background: #fff; padding: 0">
      <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="()=> collapsed = !collapsed" />
      <div class="m-hd-rh">
        <div class="m-hd-r fr">
          <span class="u-drop-lang">
            <a-dropdown>
              <a class="ant-dropdown-link" href="#">
                  <a-icon class="ant-dropdown-link" type="global"/>
                </a>
              <a-menu slot="overlay">
                <a-menu-item key="1">1st menu item</a-menu-item>
                <a-menu-item key="2">2nd menu item</a-menu-item>
                <a-menu-item key="3">3rd menu item</a-menu-item>
              </a-menu>
            </a-dropdown>
          </span>
        </div>
      </div>
    </a-layout-header>
    <!-- <a-button type="primary" @click="showDrawer">Open</a-button> -->
    <!-- <a-icon type="setting" / @click="showDrawer"> -->
    <div class="global-setting" @click="showDrawer">
      <a-button icon="setting"></a-button>
    </div>
    <AppMain></AppMain>
    <a-layout-footer style="textAlign: center">Ant Design ©2018 Created by Ant UED</a-layout-footer>
    <a-drawer title="Basic Drawer" :placement="placement" :closable="false" @close="onClose" :visible="visible">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-drawer>
  </a-layout>
</a-layout>
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

@Component({
  components: {
    AppMain,
    NavBar,
    SiderBar
  }
})
export default class Layout extends Vue {
  private collapsed: boolean = false;
  private visible: boolean = false;
  private placement: string = 'right';

  private toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

  private showDrawer() {
    this.visible = true;
  }

  private onClose() {
    this.visible = false;
  }

  private onChange(e: any) {
    this.placement = e.target.value;
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

.m-hd-rh {
  display: inline;
}

.global-setting {
  position: absolute;
  right: 40px;
  top: 45%;
}

.m-hd-r {
  float: right;
  display: inline;
  height: 100%;
  overflow: hidden;

  .u-drop-lang {
    display: inline-block;
    padding: 0 20px;
  }
}
</style>
