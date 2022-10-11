import Vue from 'vue'
import Vuex from 'vuex'
import { LocalizationData } from '@/localization/localization'

Vue.use(Vuex)

const localizationData = LocalizationData.getInstance()

export default new Vuex.Store({
    state: {
        loc: localizationData.localeDictionary
    },
    getters: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
    }
})
