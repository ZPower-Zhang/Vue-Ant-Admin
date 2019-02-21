<template>
<section class="app-main" style="height: 100%;">
  <BreadCrumb></BreadCrumb>
  <transition name="fade-transform" mode="out-in">
    <a-layout-content class="main-content" :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
    </a-layout-content>
  </transition>
</section>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from "vue-property-decorator";
import BreadCrumb from "@/components/BreadCrumb.vue";

@Component({
  components: {
    BreadCrumb
  }
})
export default class Appmain extends Vue {}
</script>

<style lang="scss" scoped>
.main-content {
  height: 100%;
}
</style>

