<template>
    <section>
        <h1>{{ addComment }}</h1>
        <p>{{ mailInfo }}</p>
        <p>{{ requiredInfo }}<sup>*</sup></p>
        <label for="commentText">
            <span>{{ comment }}<sup>*</sup></span>
            <textarea name="commentText"></textarea>
        </label>
        <div>
            <label for="userName">
                <span>{{ name }}<sup>*</sup></span>
                <input name="userName">
            </label>

            <label for="mail">
                <span>{{ mail }}<sup>*</sup></span>
                <input name="mail">
            </label>

            <label for="link">
                <span>{{ link }}<sup></sup></span>
                <input name="link">
            </label>
        </div>
    </section>
</template>

<script lang="ts">
import { LocalizationData } from '@/localization/localization'
import { IDictionary } from '@/localization/localization.model'
import { Component, Vue } from 'vue-property-decorator'

@Component({
    components: {
    }
})
export default class AddComment extends Vue {
    private localizationData = LocalizationData.getInstance()

    private loc: IDictionary = this.localizationData.localeDictionary

    addComment = this.loc.addComment

    mailInfo = this.loc.mailInfo

    requiredInfo = this.loc.requiredInfo

    comment = this.loc.comment

    name = this.loc.name

    mail = this.loc.mail

    link = this.loc.www
}
</script>

<style lang="scss" scoped>
    section {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        font-size: 14px;
    }

    h1 {
        margin: 10px 0;
    }

    p {
        margin: 0
    }

    sup {
        color: red;
    }

    label {
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    div {
        display: flex;
        flex-direction: row;
    }

    input {
        margin-right: 20px;
    }

</style>
