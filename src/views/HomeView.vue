<template>
  <div class="home">
    <SearchBar></SearchBar>
    <div class="left">
      <LinkBox v-for="link in leftLinks"
        :key="link.name"
        :title=link.name
        :links=link.links
      ></LinkBox>
    </div>
    <MainArticle :article="example"></MainArticle>
    <div class="right">
      <LinkBox v-for="link in rightLinks"
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
import { TArticle, TPosition } from '@/types'

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

  example: TArticle = {
      title: 'Jak gryźć by ugryźć',
      date: new Date().getDate(),
      author: 'Kłopotusz Zasada',
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
magna aliqua. Molestie a iaculis at erat pellentesque. Vel eros donec ac odio. Lobortis feugiat vivamus at augue eget arcu.
Et odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Non nisi est sit amet facilisis magna etiam tempor
orci. Scelerisque fermentum dui faucibus in. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec
sagittis. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Sit amet risus nullam eget. Libero volutpat sed
cras ornare arcu dui vivamus arcu felis. Lectus magna fringilla urna porttitor.

Arcu risus quis varius quam quisque id. Commodo ullamcorper a lacus vestibulum. Nisi lacus sed viverra tellus in hac
habitasse platea. Sit amet est placerat in egestas. Adipiscing elit ut aliquam purus sit. Consequat nisl vel pretium
lectus quam. Tortor consequat id porta nibh. Diam maecenas sed enim ut sem viverra aliquet. Bibendum arcu vitae elementum
curabitur vitae nunc sed velit dignissim. Diam maecenas ultricies mi eget mauris pharetra. Mi quis hendrerit dolor magna
eget est lorem ipsum dolor. Arcu bibendum at varius vel. Ultricies tristique nulla aliquet enim tortor at auctor. Velit
laoreet id donec ultrices. Quis enim lobortis scelerisque fermentum. Sapien nec sagittis aliquam malesuada bibendum.

Sapien pellentesque habitant morbi tristique senectus et netus et. Sed augue lacus viverra vitae congue. Erat imperdiet
sed euismod nisi porta lorem.

Ac odio tempor orci dapibus ultrices. Vestibulum sed arcu non odio euismod lacinia at quis risus. Bibendum at varius
vel pharetra vel turpis nunc eget. Aliquet lectus proin nibh nisl condimentum. Diam quis enim lobortis scelerisque
fermentum dui faucibus. Vulputate dignissim suspendisse in est ante. Phasellus faucibus scelerisque eleifend donec.
Turpis nunc eget lorem dolor sed viverra. Et ultrices neque ornare aenean euismod elementum. Imperdiet sed euismod
nisi porta lorem. Justo nec ultrices dui sapien eget. Lectus magna fringilla urna porttitor. Suspendisse sed nisi
lacus sed. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Volutpat est velit egestas dui id
ornare. Eget velit aliquet sagittis id consectetur purus ut. Massa enim nec dui nunc mattis enim ut tellus elementum.
Penatibus et magnis dis parturient montes nascetur ridiculus. Nec feugiat nisl pretium fusce id.`
  }

  public get links(): Array<Record<string, unknown>> {
      return [{
          name: this.loc.categories,
          links: [{
              name: 'jakis link',
              href: 'http://gdzies.pl'
          }, {
              name: 'jakis link',
              href: 'http://gdzies.pl'
          }],
          position: TPosition.LEFT
      }, {
          name: this.loc.names,
          links: [{
              name: 'jakis link',
              href: 'http://gdzies.pl'
          }, {
              name: 'jakis link',
              href: 'http://gdzies.pl'
          }],
          position: TPosition.LEFT
      }, {
          name: this.loc.newestPosts,
          links: [{
              name: 'jakis link',
              href: 'http://gdzies.pl'
          }, {
              name: 'jakis link',
              href: 'http://gdzies.pl'
          }],
          position: TPosition.RIGHT
      }, {
          name: this.loc.archive,
          links: [{
              name: 'jakis link',
              href: 'http://gdzies.pl'
          }, {
              name: 'jakis link',
              href: 'http://gdzies.pl'
          }],
          position: TPosition.RIGHT
      }, {
          name: this.loc.recommendedLinks,
          links: [{
              name: 'jakis link',
              href: 'http://gdzies.pl'
          }, {
              name: 'jakis link',
              href: 'http://gdzies.pl'
          }],
          position: TPosition.RIGHT
      }]
  }

  public get leftLinks(): Array<Record<string, unknown>> {
      return this.links.filter((link: Record<string, unknown>) => link.position === TPosition.LEFT)
  }

  public get rightLinks(): Array<Record<string, unknown>> {
      return this.links.filter((link: Record<string, unknown>) => link.position === TPosition.RIGHT)
  }
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
  gap: 25px;
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
