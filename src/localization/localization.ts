import { ILocale } from './locale'
import { IDictionary, ILocalizationStore } from './localization.model'
import { LocalizationStore } from './localization.store'

/**
 * Localization class
 */
export class LocalizationData {
    private static instance: LocalizationData

    private currentLocale: ILocale

    private readonly localizationStore: ILocalizationStore = LocalizationStore

    /**
     * Take value from localstorage
     */
    private constructor() {
        // const locale = localStorage.getItem('locale') as ILocale;
        // if (locale) {
        //     this.currentLocale = locale;
        // } else {
        //     this.currentLocale = 'en';
        // }
        this.currentLocale = 'pl'

        try {
            document.body.setAttribute('locale-key', this.currentLocale)
            document.body.classList.add(`locale-key-${this.currentLocale}`)
        } catch (error) {
            console.log('Localization error: ', error)
        }
    }

    /**
     * Return current locale dictionary
     */
    public get localeDictionary(): IDictionary {
        const currentDict = this.localizationStore[this.currentLocale]
        if (!currentDict) {
            throw new Error(`locale '${this.currentLocale}' is not exist.`)
        }
        return currentDict
    }

    /**
     * Return instance of localization class
     */
    public static getInstance(): LocalizationData {
        if (!LocalizationData.instance) {
            LocalizationData.instance = new LocalizationData()
        }
        return LocalizationData.instance
    }

    /**
     * Return all available locales
     */
    public getAvailableLocales(): string[] {
        return Object.keys(this.localizationStore)
    }

    /**
     * Return current selected locale
     */
    public getCurrentLocale(): ILocale {
        return this.currentLocale
    }

    /**
     * Test if custom locale is set
     */
    public static isLocaleSet(): boolean {
        const locale = localStorage.getItem('locale')

        return Boolean(locale)
    }

    public static setCurrentLocale(locale: ILocale): void {
        // if (!this.localisationStore[locale]) {
        //     console.warn(`locale '${locale}' is not exist. Using 'en' locale`);
        //     this.currentLocale = 'en';
        //     localStorage.setItem('locale', 'en');
        // } else {
        //     this.currentLocale = locale;
        //     localStorage.setItem('locale', locale);
        // }
    }
}

export default LocalizationData
