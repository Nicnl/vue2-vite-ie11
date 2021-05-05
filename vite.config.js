import legacy from "@vitejs/plugin-legacy";
const path = require('path');
import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'

export default defineConfig({
    plugins: [
        createVuePlugin(),
        legacy({
            targets: [
                'ie 11',
            ],
        }),
    ],
    resolve: {
        alias: [
            {
                find: '@',
                replacement: path.resolve(__dirname, 'src')
            }
        ]
    },
    server: {
        port: 8080,
    },
})
