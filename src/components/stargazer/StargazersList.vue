<template>
    <div v-if="hasStar" class="star-list">
        <template v-for="(item, index) in repository.stargazers">
             <StargazerMeta :stargazer="item" :index="index + 1" :key="item.id"/>
        </template>
        <v-btn 
            v-if="canAddMoreStar" 
            block 
            text
            :loading="repository.stargazersLoading"
            :disabled="disabledBtn"
            @click="getNextStarPage()"
        >Load More Stargazers</v-btn>
    </div>
</template>

<script>
import StargazerMeta from './StargazerMeta'

export default {
    components : {
        StargazerMeta
    },
    props: {
        repository: Object
    },
    computed: {
        /**@returns {Boolean} */
        disabledBtn() {
            return this.$store.getters["loading/isLoading"]; 
        },
        /**@returns {Boolean} */
        canAddMoreStar() {
            return this.repository.stargazers.length < this.repository.totalStargazers
        },
        /**@returns {Boolean} */
        hasStar() {
            return this.repository.stargazers.length > 0
        }
    },
    methods: {
        async getNextStarPage() {
            await this.$store.dispatch("stargazer/getStargazersByPage", this.repository)
        }  
    }
}
</script>

<style scoped>
.star-list {
    margin: 0 auto;
    width: 900px;
}
</style>