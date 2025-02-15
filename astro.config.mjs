// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },
    output: "static", // Ensures static build
    site: 'https://natscilaboratories.github.io/NatSciLaboratories',
    base: '/NatSciLaboratories/',
});
