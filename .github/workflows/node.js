name: Node CI

on:
  push:
    branches:
      - master
      - release/*

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [8.x]

    steps:
    - uses: actions/checkout@v1
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v1
      with:
        node-version: ${{ matrix.node-version }}
    - name: npm install, build
      run: |
        npm ci
        npm run generate
      env:
        CI: true
    - name: deploy to Firebase Hosting
      run: |
        npm install firebase-tools
        ./node_modules/.bin/firebase deploy --token=${{ secrets.FIREBASE_TOKEN }}
    - name: Actions for Discord
      env:
        DISCORD_WEBHOOK: ${{ secrets.DISCORD_WEBHOOK }}
      uses: Ilshidur/action-discord@0.0.2
      with:
        args: 's4m0r1-netのデプロイ成功した！！！よ！！！'
