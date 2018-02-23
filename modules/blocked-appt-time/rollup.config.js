//import rollup from 'rollup'
//import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify'
//paths are relative to the execution path

const libraryName = '@rd/blocked-appt-time';
const libraryVersion = '7.0.0';


export default {
    input: 'dist/blocked-appt-time.js',
    external: [
        'moment',
        '@rd/core',
        '@rd/forms',
        '@angular/core',
        '@angular/common'
    ],
    output: {
        name: '@rd/blocked-appt-time',
        file: 'dist/bundles/blocked-appt-time.umd.min.js', // output a single application bundle
        sourcemap: true,
        sourcemapFile: 'dist/bundles/blocked-appt-time.umd.min.js.map',
        format: 'umd',
        // external: ['@angular', 'rxjs/*'],
        // paths: {
        //     d3: 'https://d3js.org/d3.v4.min'
        // },
        globals: {
            moment: 'moment',
            '@rd/core': 'rd.core',
            '@rd/forms': 'rd.forms',
            '@angular/core': 'ng.core'
        },
        banner: '/* my-library version ' + libraryVersion + ' */',
        footer: '/* follow me on Twitter! @rich_harris */'
    },
    onwarn: function (warning) {
        var code = warning.code;
        var loc = warning.loc;
        var frame = warning.frame;
        var message = warning.message;
        // print location if applicable
        if (loc) {
            console.warn(`${loc.file} (${loc.line}:${loc.column}) ${message}`);
            if (frame) console.warn(frame);
        } else {
            console.warn(message);
        }
        // skip certain warnings
        if (code === 'UNUSED_EXTERNAL_IMPORT') return;

        // throw on others
        if (code === 'NON_EXISTENT_EXPORT') throw new Error(message);
    },
    plugins: [
        {
            name: 'replace moment imports',
            transform: code =>
                ({
                    code: code.replace(/import\s*\*\s*as\s*moment/g, 'import moment'),
                    map: { mappings: '' }
                })
        },
        /* https://github.com/rollup/rollup-plugin-node-resolve */
        // nodeResolve({ jsnext: true, module: true }), causes sourcemap errors
        /* https://github.com/rollup/rollup-plugin-commonjs */
        commonjs({
            include: ['node_modules/rxjs/**']
        }),
        /* https://github.com/TrySound/rollup-plugin-uglify */
        uglify()
    ]
}
