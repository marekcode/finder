<template>
  <div class="about">
    <h1>Wyszukałem dla Ciebie:</h1>

    {{ users }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import axios from 'axios'

@Component({
    components: {
    }
})
export default class HomeView extends Vue {
    users = []

    offers = []

    public async userso(): Promise<void> {
        const username = 'login'
        const password = 'haslo'
        const credentials = btoa(`${username}:${password}`)
        const basicAuth = `Basic ${credentials}`

        await axios
            .post('https://adresapi.com', {}, {
                headers: {
                    Authorization: basicAuth,
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
                this.offers = res.data.offers
            })
    }
}
</script>
