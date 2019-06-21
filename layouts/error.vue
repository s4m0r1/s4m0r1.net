<template>
    <div class="jumbotron">
        <h1 class="display-3">のっとふぁうんど</h1>
        <p class="lead">そのようなページはありませんごめんなさい</p>
        <hr class="my-2">
        <p></p>
        <p class="lead">
            <a onclick="javascript:window.history.back(-1);return false;" class="btn btn-primary btn-lg" href="#" role="button">戻る</a>
        </p>
    </div>

</template>

<script>
import header from '~/layouts/header.vue'

export default {
    props: ['error'],
    layout: 'header'
}
</script>
