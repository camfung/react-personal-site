#!/bin/bash

for file in *.jsx; do
    if [[ $file == *.jsx ]]; then
        mv "$file" "${file%.jsx}.js"
        echo "renamed $file to ${file%.js}.jsx"
    fi 
done

