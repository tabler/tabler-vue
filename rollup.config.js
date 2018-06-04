import babel from 'rollup-plugin-babel'
import VuePlugin from  'rollup-plugin-vue'
import resolve from 'rollup-plugin-node-resolve'
export default [
    // browser-friendly UMD build
    {
        input: 'src/index.js',
        output: {
            name: 'tablerReact',
            file: 'dist/vue-tabler.js',
            format: 'cjs',
        },
        plugins: [
            resolve({
                main: true,
                extensions: [ '.mjs', '.js', '.jsx', '.json', '.vue' ],
            }),
            VuePlugin(),
            babel({
                exclude: 'node_modules/**'
            })
        ]
    },
]