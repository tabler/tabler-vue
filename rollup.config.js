export default [
    // browser-friendly UMD build
    {
        input: 'src/index.js',
        output: {
            name: 'tablerReact',
            file: 'dist/vue-tabler.js',
            format: 'cjs'
        }
    }
]