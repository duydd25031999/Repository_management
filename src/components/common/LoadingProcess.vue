<template>
    <div v-if="showLoading" class="pa-0 ma-0">
        <!-- <v-progress-circular
            :rotate="360"
            :size="50"
            :width="5"
            :value="value"
            color="teal"
        >
            {{ value }}%
        </v-progress-circular> -->
        <v-progress-circular
            :rotate="360"
            :size="50"
            :width="5"
            indeterminate
            color="teal"
        />
    </div>
</template>

<script>
export default {
    computed: {
        showLoading() {
            return this.$store.getters["loading/isLoading"];
        },
        value() {
            return this.$store.getters["loading/progress"];
        }
    }
}
</script>