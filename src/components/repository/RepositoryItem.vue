<template>
    <div class="repo-item">
        <RepositoryMeta/>
        <StargazersList/>
    </div>
</template>

<script>
import RepositoryMeta from './RepositoryMeta'
import StargazersList from '../stargazer/StargazersList'
export default {
    components: {
        RepositoryMeta,
        StargazersList
    }
}
</script>

<style scoped>
.repo-item {
    padding: 0;
    margin-bottom: 20px;
}
</style>