<template>
    <div class="about">

        <Button variant="contained" color="primary">
            nowy artykuł
        </Button>
        <button>Lista artykułów</button>

        <h1>Wyszukałem dla Ciebie:</h1>

        {{ offers }}

        <button :click="userso()">get data</button>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import axios from 'axios'

@Component({
    components: {
    }
})
export default class AdminView extends Vue {
    users = []

    offers = []

    public userso(): void {
        const username = 'root'
        const password = ''
        const credentials = btoa(`${username}:${password}`)
        const basicAuth = `Basic ${credentials}`
        console.log(this.$children)

        axios
            .post('http://finder/articles/read/1', {}, {
                headers: {
                    // Authorization: basicAuth,
                    Accept: 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                auth: {
                    username,
                    password
                }
            })
            // .get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                // this.users = res.data
                this.offers = res.data
            })
    }
}
</script>
