<template>
    <v-container>
        <v-layout column justify-center align-center>
            <v-flex xs12 sma12 md12 style="width: 100%">
                <div class="ma-4" v-html="JSON.stringify(sourceFile)" />
                <p v-for="n in jsonAll.sourceFileArray.length">
                    {{ n }}
                </p>
            </v-flex>
        </v-layout>
    </v-container>
    <!-- <p>{{ jsonAll }}</p> -->
</template>


<script>
import header from '~/layouts/header.vue'

export default {
    layout: 'header',
    asyncData() {
        return {
            jsonAll:  process.env.summary
        }
    },
}

</script>