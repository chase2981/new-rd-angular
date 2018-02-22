import rollup from 'rollup'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify'
//paths are relative to the execution path
export default {
    input: 'dist/forms.js',
    version: "7.0.0",
    output: {
        name: '@rd/forms',
        file: 'dist/bundles/forms.umd.min.js', // output a single application bundle
        // sourcemap: true,
        // sourcemapFile: 'dist/bundles/forms.umd.min.js.map',
        format: 'umd',
        // external: ['@angular', 'rxjs/*'],
    },
    // onwarn: function (warning) {
    //     // Skip certain warnings
    //     // should intercept ... but doesn't in some rollup versions
    //     if (warning.code === 'THIS_IS_UNDEFINED') { return; }
    //     // console.warn everything else
    //     console.warn(warning.message);
    // },
    plugins: [
        {
            name: 'replace moment imports',
            transform: code =>
                ({
                    code: code.replace(/import\s*\*\s*as\s*moment/g, 'import moment'),
                    map: { mappings: '' }
                })
        },
        nodeResolve({ jsnext: true, module: true }),
        commonjs({
            include: ['node_modules/rxjs/**']
        }),
        uglify()
    ]
}
