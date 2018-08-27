#!/bin/bash

./node_modules/.bin/eslint "./**/*.{ts,js,vue}"
if [ $? == 0 ]; then
  node ./scripts/success.js "ESLint"
fi