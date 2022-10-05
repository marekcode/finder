<template>
  <div class="home">
    <SearchBar></SearchBar>
    <div class="left">
      <LinkBox v-for="link in links"
        :key="link.name"
        :title=link.name
        :links=link.links
      ></LinkBox>
    </div>
    <MainArticle></MainArticle>
    <div class="right">
      <LinkBox v-for="link in links"
        :key="link.name"
        :title=link.name
        :links=link.links
      ></LinkBox>
    </div>
    <footer>footer</footer>

    <!--HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/-->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue'
import SearchBar from '@/components/SearchBar.vue'
import LinkBox from '@/components/LinkBox.vue'
import MainArticle from '@/components/MainArticle.vue' // @ is an alias to /src
import { IDictionary } from '@/localization/localization.model'
import { LocalizationData } from '@/localization/localization'
import { TPosition } from '@/types'

@Component({
    components: {
        HelloWorld,
        SearchBar,
        LinkBox,
        MainArticle
    }
})
export default class HomeView extends Vue {
  private localizationData = LocalizationData.getInstance()

  private loc: IDictionary = this.localizationData.localeDictionary

  public get links(): Array<Record<string, unknown>> {
      return [{
          name: this.loc.categories,
          links: ['asdad', 'sss'],
          position: TPosition.LEFT
      }, {
          name: this.loc.names,
          links: ['asdad', 'sss'],
          position: TPosition.LEFT
      }, {
          name: this.loc.newestPosts,
          links: ['asdad', 'sss'],
          position: TPosition.RIGHT
      }, {
          name: this.loc.archive,
          links: ['asdad', 'sss'],
          position: TPosition.RIGHT
      }, {
          name: this.loc.recommendedLinks,
          links: ['asdad', 'sss'],
          position: TPosition.RIGHT
      }]
  }

  public rightLinks = []
}
</script>

<style lang="scss">
.header {
  grid-area: header;
}

.left {
  grid-area: menu;
}

.main {
  grid-area: main;
}

.right {
  grid-area: right;
}

footer {
  grid-area: footer;
}

.home {
  display: grid;
  grid-template-areas:
    'header header header header header header'
    'menu main main main main right'
    'menu footer footer footer footer right';
  gap: 10px;
  background-color: white;
  padding: 10px;
}

.home>div {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 20px 0;
  font-size: 30px;
}
</style>
