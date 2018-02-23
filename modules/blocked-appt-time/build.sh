#!/bin/bash

# Declaration(s)
GULP="node ../../node_modules/.bin/gulp"
# KARMA="node node_modules/.bin/karma"
NGC="node ../../node_modules/.bin/ngc"
ROLLUP="node ../../node_modules/.bin/rollup"
# TSC="node node_modules/.bin/tsc"

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
$ROLLUP -c=rollup.config.js
# $ROLLUP $PWD/dist/blocked-appt-time.js -o $PWD/dist/bundles/blocked-appt-time.umd.min.js -f umd --name @rd/blocked-appt-time -m \
# --external '@rd/core','@angular/core','@angular/compiler','@angular/common','@angular/http','@angular/forms','@angular/platform-browser-dynamic','rxjs/Observable','rxjs/add/operator/map' \
# --globals @rd/core:rd.core,@angular/core:ng.core,@angular/compiler:ng.compiler,@angular/http:ng.http,@angular/forms:ng.forms,@angular/platform-browser-dynamic:ng.platformBrowserDynamic,@angular/common:ng.common,rxjs/Observable:rxjs.observable

# Copy library package.json + README.md, etc. to ./dist directory
cp $PWD/package.json $PWD/dist/package.json
cp $PWD/README.md $PWD/dist/README.md
