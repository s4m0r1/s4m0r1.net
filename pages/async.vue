<template>
    <h1>{{ title }}</h1>
</template>

<script>
import Axios, { axios } from "axios";
export default {
    asyncData ({ params }) {
        return Axios.get(`https://qiita.com/api/v2/items?=page1`)
        .then((res) => {
            return { title: res.data[0] }
        })
    }
}
</script>
