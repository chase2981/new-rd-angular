#!/bin/bash

# Declaration(s)
GULP="node node_modules/.bin/gulp"
# KARMA="node node_modules/.bin/karma"
NGC="node node_modules/.bin/ngc"
# ROLLUP="node node_modules/.bin/rollup"
# TSC="node node_modules/.bin/tsc"

# Clean up previous distributions
rm -rf ./dist ./build

# Run gulp inline-templates
$GULP inline-templates --gulpfile ./.gulpfile.js

# Run Typescript Compiler
$NGC -p ./tsconfig.json

# Copy library package.json
cp package.json dist/package.json
{ # try

    command1 &&
    #save your output

} || { # catch
    # save log for exception 
    set -e
}

