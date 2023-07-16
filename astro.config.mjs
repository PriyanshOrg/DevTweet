import { defineConfig } from 'astro/config';
import unocss from "unocss/astro";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import { remarkReadingTime } from "./src/util/readingTime.mjs";


export default defineConfig({
  site: 'https://devtweet.is-an.app',
  integrations: [mdx(), unocss(), react()],
  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro'
    },
    remarkPlugins: [remarkReadingTime],
  },
});
