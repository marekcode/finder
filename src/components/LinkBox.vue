<template>
  <div>
    <header>{{ title }}</header>
    <nav>
      <a v-for="link, index in links" :key="index" :href="link.href">
        {{ link.name }}
      </a>
    </nav>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
    components: {
    }
})
export default class HomeView extends Vue {
  @Prop()
  title!: string

  @Prop()
  links!: Array<Record<string, string>>
}
</script>

<style lang="scss" scoped>
header {
        background: gray;
        padding: 6px;
        color: white;
    }

    div {
        font-size: 15px;
        text-align: left;
    }

    nav {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 10px
    }

    a {
        display:inline-flex;
        margin-bottom: 3px;
    }
</style>
