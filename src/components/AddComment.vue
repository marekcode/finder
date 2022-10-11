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
import { Component, Vue } from 'vue-property-decorator'

@Component({
    components: {
    }
})
export default class AddComment extends Vue {
    addComment = this.$store.state.loc.addComment

    mailInfo = this.$store.state.loc.mailInfo

    requiredInfo = this.$store.state.loc.requiredInfo

    comment = this.$store.state.loc.comment

    name = this.$store.state.loc.name

    mail = this.$store.state.loc.mail

    link = this.$store.state.loc.www
}
</script>

<style lang="scss" scoped>
    section {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        font-size: 14px;
        margin: auto;
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
