<template>
    <div class="star-list">
        <template v-for="i in 10">
             <StargazerMeta :key="'star-' + i"/>
        </template>
        <v-btn block text>Load More Stargazers</v-btn>
    </div>
</template>

<script>
import StargazerMeta from './StargazerMeta'

export default {
    components : {
        StargazerMeta
    }
}
</script>

<style scoped>
.star-list {
    margin: 0 auto;
    width: 900px;
}
</style>