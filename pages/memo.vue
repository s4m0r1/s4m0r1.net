<template>
    <div class="container">
        <div class="jumbotron-flude">
            <h1 class="display-3"> 雑記 </h1>
            <p class="lead">投稿したQiita一覧です</p>
            <hr class="my-2">
            <!-- この下にコンテナなりなんなり作ってAPIから帰ってきたアレをアレしてカード生成でいいかなと -->
        </div>
    </div>
</template>

<script>
import header from '~/layouts/header.vue'

export default {
    layout: 'header',
    computed: {
        test() {
            return null
        }
    }
}
</script>