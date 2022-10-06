<template>
  <div class="main">
    <h1>{{ formattedArticle.title }}</h1>
    <span>{{ formattedArticle.date }}, {{ formattedArticle.author }}</span>
    <p>{{ formattedArticle.text }}</p>
  </div>
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

        currentArticle.text = paragraphs as unknown as HTMLElement

        return currentArticle
    }
}
</script>

<style lang="scss" scoped>
    h1 {
        font-size: 20px;
    }

    span {
        font-size: 11px;
    }

    p {
        font-size: 14px;
    }

    a {
        color: #0175ac;
    }
</style>
