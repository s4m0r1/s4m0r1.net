<template>
    <div class=container>
        <br>
        <h1>💊Product💊</h1>
        <hr>
        <div class="row row-eq-height">
        <b-card v-for='item in items' :key='item.name' style="max-width: 20rem;" class="md-1 border-primary" header-tag="header" footer-tag="footer">
            <h2 class="repo_name" slot="header">{{ item.name }}</h2>
            <div class="git_badge">
                <b-badge variant="warning">
                    Star
                    <b-badge pill variant="light">{{ item.stargazers_count }}</b-badge>
                </b-badge>
                <b-badge variant="primary">
                    forks
                    <b-badge pill variant="light">{{ item.forks_count }}</b-badge>
                </b-badge>
                <b-badge variant="success">
                    watchers
                    <b-badge pill variant="light">{{ item.watchers_count }}</b-badge>
                </b-badge>
            </div>
            <b-card-text>{{ item.description }}</b-card-text>
            <b-button :href="item.html_url" class="go_git_button" variant="primary" slot="footer">Go Github</b-button>
        </b-card>
        </div>
    </div>
</template>

<script>
import axios from '@nuxtjs/axios'
export default {
    async asyncData({ app }) {
        const api_url = "https://api.github.com/users/s4m0r1/repos?client_id=" + process.env.GITHUB_ID + "&client_secret=" + process.env.GITHUB_SEC
        const items = await app.$axios.$get(api_url);
    return { items };
    }
}
</script>

<style lang="css">
.container {
    position: relative;
    width: 100%;
    height: auto !important;
    height: 100%;
    min-height: 100%;
    margin: auto auto 5% auto;
}
.border-primary {
    background-color: crimson;
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
.card-header {
    background-color: rgb(248,182,207);
}
.repo_name{
    color: rgb(114, 1, 129);
}
.card-body {
    padding: 1% 5% 5%;
    background-color: rgb(247, 247, 247);
}
.card-footer {
    background-color: rgb(109,218,226);
}
.go_git_button {
    float: right;
}
.git_badge {
    padding: 1% 0% 2% ;
}
</style>
