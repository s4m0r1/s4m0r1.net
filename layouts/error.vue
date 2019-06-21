<template>
    <div class="container">
        <h1 v-if="error.statusCode === 404">ページがみつかりません</h1>
        <h1 v-else>エラーが発生しました</h1>
        <nuxt-link to="/">ホーム</nuxt-link>
    </div>
</template>

<script>
import header from '~/layouts/header.vue'

export default {
    
    props: ['error'],
    layout: 'header'
}
</script>
