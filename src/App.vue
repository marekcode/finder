<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/admin">Admin</router-link>
    </nav>
    <div class="home">
        <SearchBar></SearchBar>
        <div class="left">
            <LinkBox v-for="link in leftLinks" :key="link.name" :title=link.name :links=link.links></LinkBox>
        </div>
        <router-view/>
        <div class="right">
            <LinkBox v-for="link in rightLinks" :key="link.name" :title=link.name :links=link.links></LinkBox>
        </div>
        <footer>footer</footer>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue'
import SearchBar from '@/components/SearchBar.vue'
import LinkBox from '@/components/LinkBox.vue'
import MainArticle from '@/components/MainArticle.vue' // @ is an alias to /src
import { TPosition } from '@/types'
import AddComment from '@/components/AddComment.vue'

@Component({
    components: {
        HelloWorld,
        SearchBar,
        LinkBox,
        MainArticle,
        AddComment
    }
})
export default class App extends Vue {
    public get linksBase(): Array<Record<string, unknown>> {
        return [{
            name: this.$store.state.loc.categories,
            links: [{
                name: 'jakis link',
                href: 'http://gdzies.pl'
            }, {
                name: 'jakis link',
                href: 'http://gdzies.pl'
            }],
            position: TPosition.LEFT
        }, {
            name: this.$store.state.loc.names,
            links: [{
                name: 'jakis link',
                href: 'http://gdzies.pl'
            }, {
                name: 'jakis link',
                href: 'http://gdzies.pl'
            }],
            position: TPosition.LEFT
        }, {
            name: this.$store.state.loc.newestPosts,
            links: [{
                name: 'jakis link',
                href: 'http://gdzies.pl'
            }, {
                name: 'jakis link',
                href: 'http://gdzies.pl'
            }],
            position: TPosition.RIGHT
        }, {
            name: this.$store.state.loc.archive,
            links: [{
                name: 'jakis link',
                href: 'http://gdzies.pl'
            }, {
                name: 'jakis link',
                href: 'http://gdzies.pl'
            }],
            position: TPosition.RIGHT
        }, {
            name: this.$store.state.loc.recommendedLinks,
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
        return this.linksBase.filter((link: Record<string, unknown>) => link.position === TPosition.LEFT)
    }

    public get rightLinks(): Array<Record<string, unknown>> {
        return this.linksBase.filter((link: Record<string, unknown>) => link.position === TPosition.RIGHT)
    }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
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
    max-width: 1300px;
    margin: 0 auto;

    &>div {
        background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
    }
}

.left,
.right {
    width: 200px
}

.left {
    grid-area: menu;
}

.right {
    grid-area: right;
}

footer {
    grid-area: footer;
}

h1 {
    font-size: 20px;
}
</style>
