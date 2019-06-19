<template>
    <div class="row">
        <b-card
            title="riamu-jihou"
            img-src="https://assets.brandfolder.com/pmix53-32t4so-a6439g/view@2x.png?v=1549488833"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="md-1"
        >
            <b-card-text>
                僕の活動場所であるラボは20時にでなければならないので５分前にラズパイで鳴らそうと思い作ったもの
                え？役にたたないとか言わないでPサマ！はー、やむ！！
            </b-card-text>
            <p>完成度</p>
            <b-progress class="mb-2" :max="max" show-value>
                <b-progress-bar :value=50 show-progress animated></b-progress-bar>
            </b-progress>
            <b-button href="https://github.com/s4m0r1/riamu-jihou" variant="primary">GO Github</b-button>
        </b-card>
        <b-card
            title="make_signage_pic"
            img-src="https://user-images.githubusercontent.com/29473019/57278194-d29cfe00-70e0-11e9-9baf-e2e0e60efd00.png"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="md-1"
        >
            <b-card-text class="md-1">
                学内デジタルサイネージ用画像を作成するためのPythonスクリプト
            </b-card-text>
            <p>完成度</p>
            <b-progress class="mb-2" :max="max" show-value>
                <b-progress-bar :value=90 show-progress animated></b-progress-bar>
            </b-progress>
            <b-button href="https://github.com/s4m0r1/make_signage_pic" variant="primary">GO Github</b-button>
        </b-card>
        <b-card
            title="s4m0r1.net"
            img-src="https://ja.nuxtjs.org/logos/nuxt-icon-white.png"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="md-1"
        >
            <b-card-text class="md-1">
                このサイト初NuxtJSでやってみました。
                BootstrapのGridなどわからないままさわったけど案外どうにかなるものですねそれっぽいものはできました
            </b-card-text>
            <p>完成度</p>
            <b-progress class="mb-2" :max="max" show-value>
                <b-progress-bar :value=10 show-progress animated></b-progress-bar>
            </b-progress>
            <b-button href="https://github.com/s4m0r1/s4m0r1.net_site" variant="primary">GO Github</b-button>
        </b-card>
                <b-card
            title="docker-clean"
            img-src="https://upload.wikimedia.org/wikipedia/commons/7/79/Docker_%28container_engine%29_logo.png"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="md-1"
        >
            <b-card-text class="md-1">
                DockerのImageなどを全削除するツール
                Goの練習がてら作成しました
                Dockerの検証してるとどんどんデーター溜まってストレージ圧迫すごいので全削除しようとすると手間がかかるのでなんとなく作ってみました
            </b-card-text>
            <p>完成度</p>
            <b-progress class="mb-2" :max="max" show-value>
                <b-progress-bar :value=80 show-progress animated></b-progress-bar>
            </b-progress>
            <b-button href="https://github.com/s4m0r1/docker-clean" variant="primary">GO Github</b-button>
        </b-card>
                </b-card>
                <b-card
            title="emoji-nonfitication"
            img-src="https://assets.brandfolder.com/pmix53-32t4so-a6439g/view@2x.png?v=1549488833"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="md-1"
        >
            <b-card-text class="md-1">
                Slackに絵文字が追加されたらメッセージ送信するLambda
                なんだかんだないので作ってみた
                環境変数にTokenとChannelを指定するだけ！めっちゃ簡単！
                なんだかんだ初のライセンス適用してみたやつ
            </b-card-text>
            <p>完成度</p>
            <b-progress class="mb-2" :max="max" show-value>
                <b-progress-bar :value=90 show-progress animated></b-progress-bar>
            </b-progress>
            <b-button href="https://github.com/s4m0r1/emoji-nonfitication" variant="primary">GO Github</b-button>
        </b-card>

    </div>
</template>

<script>
import header from '~/layouts/header.vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css'
export default {
    layout: 'header',
    data() {
        return {
            isLoading: true,
            fullPage: true
        }
    },
    components: {
        Loading
    },
    methods: {
        mounted() {
            window:addEventListener("load", function() {
            this.isLoading = true;
        }, false)

        },
    }
}
</script>

<style>
.md-1 {
    margin: 1%
}
</style>
