<template>
    <v-container>
        <v-layout column justify-center align-center>
            <v-flex xs12 sma12 md12 style="width: 100%">
                <div class="ma-4 markdown-body" v-html="$md.render(article.bodyContent)" />
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import header from '~/layouts/header.vue'

    export default {
        layout: 'header',
        async asyncData() {
            const article = await import(`~/contents/json/2019-06-27-test002.json`)
            return {
                article: article
            }
        }
    }
</script>