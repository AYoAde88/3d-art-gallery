import resolve from '@rollup/plugin-node-resolve';

export default {
    input: 'modules/js/index.js',
    output: [
        {
            format: 'esm',
            file: 'bundle.js'
        },
    ],
    plugins: [
        resolve(),
    ]
};