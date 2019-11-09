<template>
    <div class="pa-0 ma-0">
        <template v-for="i in 10">
            <RepositoryItem :key="'repo-' + i"/>
        </template>
        <v-btn block :disabled="disabledBtn">Load More Repositories</v-btn>
    </div>
</template>

<script>
import RepositoryItem from './RepositoryItem'
export default {
    components: {
        RepositoryItem
    },
    computed: {
        disabledBtn() {
            return this.$store.getters["loading/isLoading"]; 
        }  
    }
}
</script>