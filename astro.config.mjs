// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import pagefind from "astro-pagefind";
// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },
    integrations: [pagefind()],
    output: "static", // Ensures static build
    site: 'https://natscihistories.github.io/NatSciHistories',
    base: '/NatSciHistories/',
});
