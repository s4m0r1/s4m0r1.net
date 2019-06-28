<template>
  <div v-html="test"></div>
</template>

<script>
    import header from '~/layouts/header.vue'
    import test from '~/assets/memo/test.md'

    export default {
        layout: 'header',
        computed: {
            test() {
                return test
            }
        }
    }
</script>