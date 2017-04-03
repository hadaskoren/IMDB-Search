'use strict';

export default {
    data() {
        return {
            showDropdown: false
        }
    },
    props: {
        filterType: ''
    },
    computed: {
        titles() {
            return this.$store.state.titles;
        }
    }
}