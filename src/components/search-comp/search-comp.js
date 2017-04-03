'use strict';

export default {
    computed: {
        titles() {
            return this.$store.state.titles;
        },
        titleInput: {
            get() {
                return this.$store.state.titleInput;
            },
            set(titleInput) {
                this.$store.dispatch('updateInput', titleInput);
            }
        },
        showData: {
            get() {
                return this.$store.state.showData;
            },
            set(showData) {
                this.$store.dispatch('updateShowData', showData);
            }
        }
    },
    methods: {
        /*
         *
         * once a user click the search button or enter in the search input field
         * 
         * */
        callAPI() {
            let titleToSearch = this.titleInput;

            let imdbAPIWithTitle = `http://www.omdbapi.com/?r=json&s=${titleToSearch}`;
            
            fetch(imdbAPIWithTitle)
                    .then(res => res.json())
                    .then(res => {
                        if(res.Search.length > 0) {
                            this.showData = true;
                            this.$store.dispatch('updateTitles', res.Search);
                        }
                    }).catch((error)=> {
                        console.log('error found when called imdb API');
                        if(this.titles.length === 0){
                            this.showData = false;
                        }
                        toastr.options.timeOut = 2000;
                        toastr.warning('title wasn\'t found, please try again');
                    })
        }
    }
}