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

# Make directory dist/bundles
mkdir $PWD/dist/bundles
# Rollup index.js into bundles/forms.umd.min.js w/sourcemaps
# $ROLLUP -c=rollup.config.js
$ROLLUP $PWD/dist/forms.js -o $PWD/dist/bundles/forms.umd.min.js -f umd --name @rd/forms -m \
--globals @rd/core:rd.core,@angular/core:ng.core,moment:moment --external @rd/core,@angular/core,@angular/forms,moment \
$1 $2 $3 $4 $5 $6 $7 $8 $9

# Copy library package.json + README.md, etc. to ./dist directory
cp $PWD/package.json $PWD/dist/package.json
cp $PWD/README.md $PWD/dist/README.md
