<template>
    <div class="container">
        <h1 class="sub-title">Qiita</h1>
        <hr>
        <div class="row-eq-height">
        <b-card v-for='item in items' :key='item.title' style="max-width: 20rem;" class="md-1 border-primary" header-tag="header" footer-tag="footer">
            <h2 class="repo_name" slot="header">{{ item.title }}</h2>
            <div class="git_badge">
                <b-badge variant="warning">
                    いいね
                    <b-badge pill variant="light">{{ item.likes_count }}</b-badge>
                </b-badge>
                <b-badge variant="primary">
                    コメント
                    <b-badge pill variant="light">{{ item.comments_count }}</b-badge>
                </b-badge>
                <b-badge variant="success">
                    リアクション
                    <b-badge pill variant="light">{{ item.reactions_count }}</b-badge>
                </b-badge>
            </div>
            <b-button :href="item.url" class="go_git_button" variant="primary" slot="footer">Go Qiita</b-button>
        </b-card>

        </div>
    </div>
</template>

<script>
import axios from '@nuxtjs/axios'
export default {
    async asyncData({ app }) {
        const api_url = "https://qiita.com/api/v2/users/s4m0r1/items?page=1&per_page=20"
        const items = await app.$axios.$get(api_url);
        const tags = items.tags;
    return { items, tags};
    }
}
</script>

<style>
.container {
    position: relative;
    width: 100%;
    height: auto !important;
    height: 100%;
    min-height: 100%;
    margin: auto auto 10% auto;
}
.sub-title {
    margin: 1%
}
.row-eq-height {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
.md-1 {
    width: 100%;
    margin: 1%;
}
</style>
