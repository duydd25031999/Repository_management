<template>
    <v-layout row class="repo-meta">
        <v-flex xs6>({{ index }}) : {{ repository.name }}</v-flex>
        <v-flex xs3>stargazers : {{ repository.totalStargazers }}</v-flex>
        <v-flex xs3>
            <v-btn v-if="repository.totalStargazers > 0" :disabled="disableBtn" @click="listStar()">List stargazers</v-btn>
        </v-flex>
    </v-layout>
</template>
 
<script>
export default {
    props: {
        repository: Object,
        index: Number
    },
    data: () => ({}),
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
