<template>
    <div v-if="hasUser" class="pa-0 ma-0">
        <template v-for="(item, index) in listRepo">
            <RepositoryItem 
                :repository="item"
                :index="index + 1"
                :key="item.id"
            />
        </template>
        <v-btn 
            v-if="canAddMoreRepo" 
            block 
            :disabled="disabledBtn"
            @click="getNextRepoPage()"
        >Load More Repositories</v-btn>
    </div>
</template>

<script>
import RepositoryItem from './RepositoryItem'
import Repository from '../../entities/Repository'
export default {
    components: {
        RepositoryItem
    },
    computed: {
        /**@returns {Boolean} */
        disabledBtn() {
            return this.$store.getters["loading/isLoading"]
        },
        /**@returns {Boolean} */
        hasUser() {
            return this.$store.getters["user/hasUser"]
        },
        /**@returns {Array<Repository>} */
        listRepo() {
            return this.$store.getters["repository/repositories"]
        },
        /**@returns {Boolen} */
        canAddMoreRepo() {
            return !this.$store.getters["repository/isLastPage"]
        }
    },
    methods: {
        async getNextRepoPage() {
            await this.$store.dispatch("repository/getRepositoriesByPage")
        }  
    },
}
</script>