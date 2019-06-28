<template>
    <v-container>
        <v-layout column justify-center align-center>
            <v-flex xs12 sma12 md12 style="width: 100%">
                <!-- <div class="ma-4 markdown-body" v-html="$md.render(article.bodyContent)" /> -->
                <!-- <p v-for="h in getContentsPath(jsonAll.sourceFileArray)"> -->
                    <!-- <p v-html="$md.render(article.bodyContent)"></p> -->
                <!-- <p v-html="getContentsPath(jsonAll.sourceFileArray)"></p> -->
                <!-- <p>{{ article }}</p> -->
            </v-flex>
        </v-layout>
    </v-container>
    <!-- <p>{{ jsonAll }}</p> -->
</template>


<script>
    import header from '~/layouts/header.vue'

    export default {
        layout: 'header',
        async asyncData() {
                let article
                for (let i = 0; i < process.env.summary.length; i++) {
                    article = await require("~/" + process.env.summary[i])
                }
            return {
                article: article,
                jsonAll: process.env.summary
            }
        }
        // methods: {
        //     getContentsPath(jsonData) {
        //         let contentsPaths = [];
        //         let contents_path;
        //         for (let i = 0; i < jsonData.length; i++) {
        //             contentsPaths.push("~/" + jsonData[i])
        //         }
        //         return contentsPaths
        //     }
        }
    
</script>