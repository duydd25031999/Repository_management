<template>
    <v-layout row class="repo-meta">
        <v-flex xs6>({{ index }}) : {{ repository.name }}</v-flex>
        <v-flex xs3>stargazers : {{ repository.totalStargazers }}</v-flex>
        <v-flex xs3>
            <v-btn :disabled="disableBtn" v-if="!hasList" @click="listStar()">List Stargazers</v-btn>
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
    computed: {
        /**@returns {Boolean} */
        disableBtn() {
            return this.$store.getters["loading/isLoading"]
        }
    },
    methods: {
        async listStar() {
            this.repository.clearPage()
            await this.$store.dispatch("stargazer/getStargazersByPage", this.repository)
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
