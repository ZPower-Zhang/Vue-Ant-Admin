<template>
  <svg :class="svgClass" aria-hidden="true">
    <use xlink:href='iconName'></use>
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class Svg extends Vue {
  @Prop(String) private iconClass!: string;
  @Prop(String) private className!: string;

  get iconName() {
    return `#icon-${this.iconClass}`;
  }

  get svgClass() {
    if (this.className) {
      return 'svg-icon ' + this.className;
    } else {
      return 'svg-icon';
    }
  }
}
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
