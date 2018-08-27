#!/bin/bash

./node_modules/.bin/eslint "./**/*.{ts,js,vue}"

if [ $? -eq "0" ]; then
  node ./scripts/success.js "ESLint: No Linting Errors Found"
else
  node ./scripts/error.js "ESLint: Linting Errors Found"
fi