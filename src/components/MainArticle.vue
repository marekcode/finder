<template>
  <article>
    <h1>{{ formattedArticle.title }}</h1>
    <author>{{ formattedArticle.author }}</author>
    <span>{{ formattedArticle.date }}</span>
    <p v-html="formattedArticle.text"></p>
  </article>
</template>

<script lang="ts">
import { TArticle } from '@/types'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
    components: {
    }
})
export default class SearchBar extends Vue {
    @Prop()
    article!: TArticle

    public get formattedArticle(): TArticle {
        const currentArticle = this.article
        const paragraphs = `<p>${currentArticle.text.split('\n').join('</p><p>')}</p>`.split('<p></p>').join('')

        currentArticle.text = paragraphs

        return currentArticle
    }
}
</script>

<style lang="scss" scoped>
    article {
        display: flex;
        flex-direction: column;
    }

    h1 {
        font-size: 20px;
    }

    span {
        font-size: 11px;
        text-align: left;
    }

    p {
        font-size: 14px;
        text-align: justify;
    }

    a {
        color: #0175ac;
    }

    author {
        font-size: 13px;
        display: block;
    }
</style>
