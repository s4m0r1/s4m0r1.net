# s4m0r1.net

勉強のために自分の自己紹介サイトを作成しています。

こここうしたほうがいいんじゃないの的なのあったらissueで投げてください。

ものによってはやります

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

## ブログ新規ページ立ち上げ

MarkDown形式で書いたブログは以下の形式でJSONを生成

```bash
# jsonとサマリーの作成
processmd "contents/markdown/*.md" --preview 160 --stdout --outputDir contents/json > contents/summary.json
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
