<template>
    <div v-if="showLoading" class="pa-0 ma-0">
        <v-progress-circular
            :rotate="360"
            :size="50"
            :width="5"
            :value="value"
            color="teal"
        >
            {{ value }}%
        </v-progress-circular>
    </div>
</template>

<script>
export default {
    computed: {
        showLoading() {
            return true;
        },
        value() {
            return 70
        }
    }
}
</script>