<template>
    <div>
        <ul>
            <li v-for='item in items' :key='item.name'>
                <h1><a :href="item.html_url">{{item.name}}</a></h1>
                    <h2>{{ item.description }}</h2>
                <hr>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from '@nuxtjs/axios'
export default {
    async asyncData({ app }) {
        const items = await app.$axios.$get('https://api.github.com/users/s4m0r1/repos');
    console.log(await items)
    return { items };
    },
}
</script>