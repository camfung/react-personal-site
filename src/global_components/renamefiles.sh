#!/bin/bash

for file in *.js; do
    if [[ $file == *.js ]]; then
        mv "$file" "${file%.js}.jsx"
        echo "renamed $file to ${file%.js}.jsx"
    fi 
done

