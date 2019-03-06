<template>
<div class="home">
  <img alt="Vue logo" src="../assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
</div>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from 'vue-property-decorator';
import NavBar from '@/view/layout/components/NavBar.vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
    NavBar
  },
})
export default class Home extends Vue {}
</script>
