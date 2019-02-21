<template>
  <section class="Bread-crumb">
    <a-breadcrumb>
      <a-breadcrumb-item href>
        <a-icon type="home"/>
      </a-breadcrumb-item>
      <a-breadcrumb-item href>
        <a-icon type="user"/>
        <span>Application List</span>
      </a-breadcrumb-item>
      <a-breadcrumb-item>Application</a-breadcrumb-item>
    </a-breadcrumb>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class BreadCrumb extends Vue {}
</script>
