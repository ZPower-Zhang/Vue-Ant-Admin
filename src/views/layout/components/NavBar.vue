<template>
  <section class="nav-bar">
    <BreadCrumb></BreadCrumb>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BreadCrumb from '@/components/BreadCrumb.vue';

@Component({
  components: {
    BreadCrumb
  }
})
export default class Navbar extends Vue {}
</script>
