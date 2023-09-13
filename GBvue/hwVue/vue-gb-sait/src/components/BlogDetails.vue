<template>
    <div>
        <section class="banner">
        </section>
        <section class="blog-details">
            <div class="container">
                <div class="blog-details__wrapper" >

                    <div class="blog-details__articles" >
                        <div class="blog-details__article-item"  v-for="article in getArticleItems" :key="article.id">
                        <div class="blog-details__img">
                            <img :src="require(`@/assets/${article.src}`)" alt="">
                        </div>
                        <div class="blog-details__info-box">
                            <div class="blog-details__title">
                                {{ article.titleText }}
                            </div>
                            <div class="blog-details__text">
                                {{ article.text }}
                            </div>
                        </div>
                    </div>

                    </div>
                    

                    <div class="blog-details__tags" >
                        <div class="blog-details__tags-item" v-for="article in getArticleItems" :key="article.id">
                            {{ article.tag }}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'BlogDetails',

    data() {
        return {
            blogs: [
                        { tag: 'kitchen', title: 'Lets Get Solution for Building Construction Work', text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem ssing hidden in the middle of text. All tend to repeat predefined chunks as necessary.'},
                        { tag: 'bedroom', title: 'Design sprints are great', text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'},
                        { tag: 'lorem', title: 'Lorem ipsum dolor sit.', text: 'Lorem ipsum dolor sit.'}
                ],
                tagbtn: [
                    {title: 'kitchen'},
                    {title:'bedroom'},
                    {title:'lorem'},
                ],
                curentIndex: 0,
                currentArticle: [],
        };
    },
    computed: {
        ...mapGetters(['getArticleItems'])
    },
    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="sass" scoped>
.banner
    height: 356px
    background: url("../assets/baner_blog_details.jpg") center (center / cover) no-repeat
.blog-details
    &__article-item
        margin-top: 40px
        display: flex
        align-items: center
        gap: 20px
    &__img
        img
            width: 360px
            border-bottom-left-radius: 14%
            border-bottom-right-radius: 14%
    &__wrapper
        display: flex
        margin-top: 100px
    &__info-box
        width: 400px
    &__title
        font-family: DM Serif Display
        font-size: 30px
        font-style: normal
        font-weight: 400
        margin-bottom: 20px
</style>