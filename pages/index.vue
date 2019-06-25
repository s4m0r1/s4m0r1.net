<template>
    <div class="container-fluid px-0">
        <div class="jumbotron">
            <h1 class="display-3">s4m0r1.net<span class="beta-badge">ß</span></h1>
            <p class="lead"><a href="https://twitter.com/s4m0r1">さもり</a>の自宅サーバーでうごいてるアレ</p>
            <hr class="my-2">
            <p>現状β版なのでいろいろおかしくなったりしますごめんなさい</p>
            <p class="lead">
                <a class="btn btn-primary btn-lg" href="/about" role="button">About</a>
            </p>
        </div>
    </div>
</template>
<script>
    import header from '~/layouts/header.vue'

    export default {
        layout: 'header'
    }
</script>

<style>
    .beta-badge,
    .link-badge {
        padding: 3px 10px;
        margin-right: 8px;
        margin-left: 10px;
        font-size: 75%;
        color: white;
        border-radius: 6px;
        box-shadow: 0 0 3px #ddd;
        white-space: nowrap;
    }

    .link-badge {
        background-color: #58ACFA;
        /*青*/
    }

    .beta-badge {
        background-color: rgb(112, 84, 194);
        /*緑*/
    }
</style>