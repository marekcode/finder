<template>
  <div>
    <header>{{ title }}</header>
    <nav>
      <a v-for="link in links" :key="link">
        {{ link }}
      </a>
    </nav>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class HomeView extends Vue {
  @Prop()
  title!: string

  @Prop()
  links!: Array<string>
}
</script>

<style lang="scss" scoped>
div {
  font-size: 15px;
  text-align: left;
}
</style>
