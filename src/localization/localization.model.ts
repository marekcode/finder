export interface IDictionary {
    [key: string]: string;
}

export interface ILocalizationStore {
    [key: string]: IDictionary;
}

export { ILocale } from './locale'
