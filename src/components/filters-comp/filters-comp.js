'use strict';

import filterComp from '../filter-comp/index.vue';

export default {
    components: {
        filterComp
    },
    computed: {
        showData() {
            return this.$store.state.showData;
        }
    }
}