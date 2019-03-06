<template>
  <section class="app-main" style="height: 100%;">
    <NavBar></NavBar>
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews">
        <a-layout-content class="main-content">
          <router-view :key="key"></router-view>
        </a-layout-content>
      </keep-alive>
    </transition>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Emit, Watch } from "vue-property-decorator";
import NavBar from "./NavBar.vue";

@Component({
  components: {
    NavBar
  }
})
export default class Appmain extends Vue {
  get cachedViews() {
    return this.$store.state.tagsView.cachedViews;
  }

  get key() {
    return 0;
  }

  mounted() {
    this.$on("emit-todo", function(n: string) {
      console.log(n);
    });

    this.emitTodo("world");
  }

  @Emit()
  emitTodo(n: string) {
    console.log("hello");
  }
}
</script>

<style lang="scss" scoped>
.main-content {
  margin: 24px 16px;
  padding: 24px;
  height: 100%;
  min-height: 280px;
  background-color: #fff;
}
</style>
