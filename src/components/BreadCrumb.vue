<template>
  <a-breadcrumb class="m-breadcrumb">
    <a-breadcrumb-item href>
      <a-icon type="home"/>
    </a-breadcrumb-item>
    <a-breadcrumb-item href>
      <a-icon type="user"/>
      <span>Application List</span>
    </a-breadcrumb-item>
    <a-breadcrumb-item>Application</a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class BreadCrumb extends Vue {}
</script>

<style lang="scss" scoped>
.m-breadcrumb {
  margin: 16px 24px 0 16px;
}
</style>
