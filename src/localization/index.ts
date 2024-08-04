import type {LocalizedStrings as LocalizedStringsType} from 'react-native-localization';
import LocalizedStrings from 'react-native-localization';
import {english} from './en';
import {TranslationKeys} from './types';

const Translations: LocalizedStringsType<TranslationKeys> =
  new LocalizedStrings({
    en: english,
  });

export default Translations;
