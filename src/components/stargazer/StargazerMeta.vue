<template>
    <div class="star-meta">
        <span>{{index}}. name : {{ stargazer.name }}</span>
    </div>
</template>

<script>
export default {
    props: {
        stargazer: Object,
        index: Number
    }
}
</script>

<style scoped>
.star-meta {
    padding: 10px;
    border-bottom: 1px outset;
}
</style>