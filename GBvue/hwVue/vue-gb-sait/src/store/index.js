import Vue from 'vue'
import Vuex from 'vuex'



Vue.use(Vuex);

export default new Vuex.Store ({
    state: {
        articleItems: [
            {id:1, url: '../assets/artcl1.png', category: 'Kitchan Design', titleText: 'Lets Get Solution For Building Construction Work', backgroundColor: 'white'},
            {id:2, url: '../assets/artcl2.png', category: 'Living Design', titleText: 'Cost Latest Invented Interior Designing Ideas.', backgroundColor: '#F4F0EC'},
            {id:3, url: '../assets/artcl3.png' , category: 'Interior Design', titleText: 'Best For Any Office & Business Interior Solution', backgroundColor: 'white'},
        ],
        
    },
    mutations: {
        // SET_ARTICLE_ITEMS(state, article) {
        //     state.articleItems = article
        // }
    },
    getters: {
        getArticleItems(state) {
            return state.articleItems
        },
        getLastElement(state) {
            return state.articleItems[state.articleItems.length -1]
        }
    }
})