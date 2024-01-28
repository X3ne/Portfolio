import path from 'path';
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import vue from "@astrojs/vue";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import cloudflare from "@astrojs/cloudflare";
const __dirname = path.dirname(new URL(import.meta.url).pathname);


// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  integrations: [tailwind(), mdx(), vue(), sitemap(), icon()],
  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src')
      }
    }
  },
  adapter: cloudflare()
});
