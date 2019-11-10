<template>
    <v-layout row class="repo-meta">
        <v-flex xs6>({{ index }}) : {{ repository.name }}</v-flex>
        <v-flex xs3>stargazers : {{ repository.totalStargazers }}</v-flex>
        <v-flex xs3>
            <v-btn v-if="!hasList" @click="listStar()">List Stargazers</v-btn>
        </v-flex>
    </v-layout>
</template>
 
<script>
export default {
    props: {
        repository: Object,
        index: Number
    },
    data: () => ({
        hasList: false
    }),
    methods: {
        async listStar() {
            console.log("before", this.repository)
            this.repository.clearPage()
            await this.$store.dispatch("stargazer/getStargazersByPage", this.repository)
            console.log("after", this.repository)
            this.hasList = true
        }
    }
}
</script>

<style scoped>
.repo-meta {
    border: 1px solid;
    border-radius: 10px;
    padding: 10px;
}
</style>
