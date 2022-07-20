import i18next from 'i18next';

import { en } from './en';

export const i18nResources = {
  en,
};

export const t = (key: string, options?: {}) => {
  return `${i18next.t(key, options)}`;
};
