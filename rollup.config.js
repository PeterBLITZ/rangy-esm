const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const { terser } = require('rollup-plugin-terser');

const rollupConfig = {
    input: {
        "rangy-core": "./src/core/index.js",
        "rangy-classapplier": "./src/modules/rangy-classapplier.js",
        "rangy-serializer": "./src/modules/rangy-serializer.js",
        "rangy-selectionsaverestore": "./src/modules/rangy-selectionsaverestore.js",
        "rangy-textrange": "./src/modules/rangy-textrange.js",
        "rangy-highlighter": "./src/modules/rangy-highlighter.js"
    },
    output: [
        {
            dir: 'lib',
            format: 'es',
            sourcemap: true,
        },
    ],
    plugins: [
        nodeResolve({
            browser: true,
        }),
        commonjs(),
        terser(),
    ],
    watch: {
        include: 'src/**',
        chokidar: {
            useFsEvents: false,
        },
    },
};

module.exports = rollupConfig;
