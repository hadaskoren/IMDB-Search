'use strict';

import MovieComp from '../movie-comp/index.vue';

export default {
    computed: {
        titles() {
            return this.$store.state.titles;
        },
        showData() {
            return this.$store.state.showData;
        }
    },
    components: {
        MovieComp
    }
}