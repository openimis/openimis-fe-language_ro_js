import messages_ro from './translations/ro.json';
import flatten from 'flat';

const DEFAULT_CONFIG = {
  translations: [{ key: 'ro', messages: flatten(messages_ro) }],
};

export const LanguageRoModule = (cfg) => {
  return { ...DEFAULT_CONFIG, ...cfg };
};
