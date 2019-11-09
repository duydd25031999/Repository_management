<template>
    <v-app-bar
      app
    >
        <SearchUser/>
        <v-spacer></v-spacer>
        <LoadingProcess/>
    </v-app-bar>
</template>

<script>
import LoadingProcess from './LoadingProcess'
import SearchUser from '../user/SearchUser'
export default {
    components: {
        LoadingProcess,
        SearchUser
    },
    computed: {
    },
}
</script>