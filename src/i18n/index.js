import I18n from 'i18n-js';
import { Localization } from 'expo';

import en from './translations/en';

I18n.fallbacks = true;
I18n.translations = {
    en: en,
};
I18n.locale = Localization.locale;
I18n.defaultLocale = 'en';


export default I18n;
