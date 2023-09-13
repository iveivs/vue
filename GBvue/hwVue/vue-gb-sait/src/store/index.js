import Vue from 'vue'
import Vuex from 'vuex'



Vue.use(Vuex);

export default new Vuex.Store ({
    state: {
        articleItems: [
            {id:1, url: '../assets/artcl1.png', src: 'artcl1.png', category: 'Kitchan Design', titleText: 'Lets Get Solution For Building Construction Work', backgroundColor: 'white', text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.Lorem Ipsum is not simply random text. It has roots in a piece of classica'},
            {id:2, url: '../assets/artcl2.png', src: 'artcl2.png', category: 'Living Design', titleText: 'Cost Latest Invented Interior Designing Ideas.', backgroundColor: '#F4F0EC', text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.Lorem Ipsum is not simply random text. It has roots in a piece of classica'},
            {id:3, url: '../assets/artcl3.png' , src: 'artcl3.png', category: 'Interior Design', titleText: 'Best For Any Office & Business Interior Solution', backgroundColor: 'white', text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.Lorem Ipsum is na'},
        ],
        dataNow: ''
        
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
        },
        getCurrentData(state){
            const today = new Date()
            const d = today.getDate()
            const m = today.getMonth() + 1
            const y = today.getFullYear()
            return  state.dataNow = `${d}. ${m}. ${y}`
        }
    }
})