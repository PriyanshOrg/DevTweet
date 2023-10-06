import {
  defineConfig,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';
import { presetScrollbar } from 'unocss-preset-scrollbar';

export default defineConfig({
  presets: [
    presetUno(),
    presetScrollbar(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  theme: {
    colors: {
      themeBlack: '#121212',
    },
  },
});
