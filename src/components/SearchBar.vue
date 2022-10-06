<template>
  <div class="header">
    <input :value="search" :placeholder="placeholder" />
  </div>
</template>

<script lang="ts">
import { LocalizationData } from '@/localization/localization'
import { IDictionary } from '@/localization/localization.model'
import { Component, Vue } from 'vue-property-decorator'

@Component({
    components: {
    }
})
export default class SearchBar extends Vue {
    private localizationData = LocalizationData.getInstance()

    private loc: IDictionary = this.localizationData.localeDictionary

    search = ''

    placeholder = this.loc.searchPlaceholder
}
</script>

<style lang="scss" scoped>
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
