#!/bin/bash

# Declaration(s)
GULP="node ../../node_modules/.bin/gulp"
# KARMA="node node_modules/.bin/karma"
NGC="node ../../node_modules/.bin/ngc"
ROLLUP="node ../../node_modules/.bin/rollup"
TSC="node ../../node_modules/.bin/tsc"

echo $PWD

# Clean up previous distributions
rm -rf $PWD/dist $PWD/build

# Run gulp inline-templates
$GULP inline-templates --gulpfile $PWD/gulpfile.js

# Run angular compiler
$NGC -p $PWD/tsconfig.json

# Rollup index.js into bundles/forms.umd.min.js w/sourcemaps
$ROLLUP $PWD/dist/index.js -o $PWD/dist/forms.umd.min.js -f es -m

# Copy library package.json + README.md, etc. to ./dist directory
cp $PWD/package.json $PWD/dist/package.json
cp $PWD/README.md $PWD/dist/README.md
