<template>
    <div>
        <p>引数のデータ: {{hoge}} </p>
    </div>
</template>

<script>
export default {
    
    data: function() {
        return {
            hoge: '空'
        }
    },
    asyncData(context) {
    return {
        hoge: context.query['hoge']
    }
    }
}
</script>