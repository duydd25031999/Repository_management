<template>
    <div class="repo-item">
        <RepositoryMeta :repository="repository" :index="index" />
        <StargazersList :repository="repository" />
    </div>
</template>

<script>
import RepositoryMeta from './RepositoryMeta'
import StargazersList from '../stargazer/StargazersList'
export default {
    components: {
        RepositoryMeta,
        StargazersList
    },
    props: {
        repository: Object,
        index: Number
    }
}
</script>

<style scoped>
.repo-item {
    padding: 0;
    margin-bottom: 20px;
}
</style>