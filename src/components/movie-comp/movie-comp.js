'use strict';

export default {
    computed: {
        showData() {
            return this.$store.state.showData;
        }
    },
    props: ['title']
}