<template>
    <section class="container-fluid">
        <div class="row">
            <b-alert show variant="success">
                <h4 class="alert-heading">現在このページは作成中です</h4></b-alert>
            </div>
        <div class="row">
            <div class="col-md col-xs-1 icon">
                <img class="s4m0r1ico" v-b-popover.hover="{title:'s4m0r1', content:'雪歩好き！'}" src="https://avatars1.githubusercontent.com/u/29473019" alt="s4m0r1">
            </div>
            <div class="col-md">
                <div class="row">
                    <h2>Name: s4m0r1</h2>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import header from '~/layouts/header.vue'

export default {
    layout: 'header'
}
</script>

<style>
.danger {
    display: flex;
    justify-content: center;
    align-items: center;
}
.container-fluid {
    /* background-color: blueviolet; */
}
.row {
    /* background-color: coral; */
}
.col-md-1 {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: brown;
}
.icon {
    padding: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.s4m0r1ico {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width:  180px;
    height: 180px;
}
.test-col {
    background-color: yellow;
}
</style>