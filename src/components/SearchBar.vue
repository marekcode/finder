<template>
  <div class="header">
    <input :value="search" :placeholder="placeholder" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
    components: {
    }
})
export default class SearchBar extends Vue {
    search = ''

    placeholder = this.$store.state.loc.searchPlaceholder
}
</script>

<style lang="scss" scoped>
.header {
    grid-area: header;
}

input {
    padding: 10px;
    border-radius: 5px;
    border: 0px solid white;
    min-width: 300px;
    font-size: 20px;
    width: 50%;
    -webkit-box-shadow: 5px 5px 16px -2px rgba(0, 0, 0, 0.37);
    box-shadow: 5px 5px 16px -2px rgba(0, 0, 0, 0.37);
}

input:focus-visible {
    outline: none;
}
</style>
