<template>
    <div class="container">
        <br>
        <h1>変更点</h1>
        <hr>
        <ui v-for='item in items' :key='item.tag_name'>
            <h1><a href={{ item.url }}>{{ item.tag_name }}</a></h1>
            <hr>
            <p>{{ item.body }}</p>
        </ui>
    </div>
</template>

<script>

import axios from '@nuxtjs/axios'
export default {
    async asyncData({ app }) {
        const api_url = "https://api.github.com/repos/s4m0r1/s4m0r1.net/releases?client_id=" + process.env.GITHUB_ID + "&client_secret=" + process.env.GITHUB_SEC
        const items = await app.$axios.$get(api_url);
    return { items };
    }
}
</script>