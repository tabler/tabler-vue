import babel from 'rollup-plugin-babel'
import VuePlugin from  'rollup-plugin-vue'
export default [
    // browser-friendly UMD build
    {
        input: 'src/index.js',
        output: {
            name: 'tablerReact',
            file: 'dist/vue-tabler.js',
            format: 'cjs'
        },
        plugins: [
            VuePlugin(),
            babel({
                exclude: 'node_modules/**'
            })
        ]
    }
]