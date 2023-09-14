<template>
    <div>
        <section class="banner">
            <div class="banner__wrapper">
                <div class="banner__content">
                    <div class="banner__title">Our Project</div>
                <div class="banner__subtitle">Home / Project</div>
                </div>
            </div>
        </section>
        <section class="project">
            <div class="container">
                <div class="project__link-box">
                    <div class="project__btn">Bathroom</div>
                    <div class="project__btn">Bed Room</div>
                    <div class="project__btn">Kitchan</div>
                    <div class="project__btn">Living Area</div>
                </div>
                <div class="project__gallereya">
                    <div :class="item.class" v-for="item in currentProductList" :key="item.id">
                        <div class="project__img-box">
                            <img :src="require(`@/assets/${item.src}`)" alt="">
                        </div>
                        <div class="project__descr-box">
                            <div class="project__descr-box_text">
                                <div class="project__descr-box_title">{{ item.name }}</div>
                                <div class="project__descr-box_subtitle">{{ item.subtitle }}</div>
                            </div>
                            <div class="gallery__icon">
                                <router-link class="header__link" to="/project-det"><img src="../assets/ar_icon.svg" alt=""></router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="project__pagination-box">
                    <router-link class="paginations"
                        v-for="page in 3" 
                        :to="`/project/${page}`" 
                        :key="page" 
                        >
                        {{ page  }}
                    </router-link>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'ProjectPage',
    watch: {
        $route(to, from) {
            // const page = this.$route.params.page // ещё один вариант
            const { page }  = this.$route.params
            // if(page) this.currentPage = page // необязательная проверка
            this.currentPage = +page
            console.log(to, from);
        }
    },

    data() {
        return {
            tempItems: [ 
                {name: 'Minimal Bedroom 1', subtitle: 'Decor / Artchitecture', class: 'project__item project__item1', src: 'proj_gal1.jpg'},
                {name: 'Bedroom Minimal 2', subtitle: 'Artchitecture / Decor', class: 'project__item project__item2', src: 'proj_gal2.jpg'},
                {name: 'Bedroom Bedroom 3', subtitle: 'Decor / Artchitecture', class: 'project__item project__item3', src: 'proj_gal3.jpg'},
                {name: 'Minimal Minimal 4', subtitle: 'Decor / Decor', class: 'project__item project__item4', src: 'proj_gal4.jpg'},
                {name: 'Minimal Bedroom 5', subtitle: 'Decor / Artchitecture', class: 'project__item project__item5', src: 'proj_gal5.jpg'},
                {name: 'Bedroom Minimal 6', subtitle: 'Artchitecture / Decor', class: 'project__item project__item6', src: 'proj_gal6.jpg'},
                {name: 'Bedroom Bedroom 7', subtitle: 'Decor / Artchitecture', class: 'project__item project__item7', src: 'proj_gal7.jpg'},
                {name: 'Minimal Minimal 8', subtitle: 'Decor / Decor', class: 'project__item project__item8', src: 'proj_gal1.jpg'},
                {name: 'Minimal Bedroom 1', subtitle: 'Decor / Artchitecture', class: 'project__item project__item1', src: 'proj_gal1.jpg'},
                {name: 'Bedroom Minimal 2', subtitle: 'Artchitecture / Decor', class: 'project__item project__item2', src: 'proj_gal2.jpg'},
            ],
            currentPage: 1,
            itemsPerPage: 4,
        };
    },
    computed: {
        currentProductList() {
            const {currentPage , itemsPerPage} = this
            const startIndex = (currentPage - 1) * itemsPerPage
            const endIndex = startIndex + itemsPerPage
            return this.tempItems.slice(startIndex, endIndex)
        }
    },
    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="sass" scoped>
.project
    &__link-box
        display: flex
        justify-content: space-between
        align-items: center
        
        width: 880px
        height: 75px
        margin: 0 auto
        border: 1px solid #CDA274
        border-radius: 20px
        margin-top: 160px
        margin-bottom: 100px
    &__btn
        cursor: pointer
        text-align: center
        width: 219px
        height: 75px
        border-radius: 20px
        padding-top: 26px
    &__btn:hover
        background-color: #CDA274
    &__descr-box
        margin-top: 10px
        display: flex
        justify-content: space-between
        &_title
            font-size: 20px
            font-weight: 500
    &__pagination-box
        margin-top: 40px
        display: flex
        justify-content: center
        gap: 10px
    &__gallereya
        display: grid
        grid-template-columns: repeat(2, 585px)
        gap: 20px
    &__item
        // border: 1px solid #222
    &__item1
        grid-column: 1 / 2
        grid-row: 1 / 3
        min-height: 700px
        .project__img-box
            img
                height: 850px
    &__item2
        min-height: 600px
        grid-column: 2 / 3
        .project__img-box
            img
                height: 519px
    &__item3
        grid-column: 1 / 2
        grid-row: 3 / 4
        min-height: 600px
        .project__img-box
            img
                height: 519px
    &__item4
        grid-row: 2 / 4
        min-height: 700px
        .project__img-box
            img
                height: 850px
    &__item5
        grid-column: 1 / 2
        grid-row: 1 / 3
        min-height: 700px
        .project__img-box
            img
                height: 850px
    &__item6
        min-height: 600px
        grid-column: 2 / 3
        .project__img-box
            img
                height: 519px
    &__item7
        grid-column: 1 / 2
        grid-row: 3 / 4
        min-height: 600px
        .project__img-box
            img
                height: 519px
    &__item8
        grid-row: 2 / 4
        min-height: 700px
        .project__img-box
            img
                height: 850px
    // &__item5
    //     grid-column: 1 / 2
    //     grid-row: 4 / 6
    //     min-height: 700px
    //     .project__img-box
    //         img
    //             height: 850px
    // &__item6
    //     min-height: 600px
    //     grid-column: 2 / 3
    //     .project__img-box
    //         img
    //             height: 519px
    // &__item7
    //     grid-column: 1 / 2
    //     grid-row: 6 / 7
    //     min-height: 600px
    //     .project__img-box
    //         img
    //             height: 519px
    // &__item8
    //     grid-row: 5 / 7
    //     min-height: 700px
    //     .project__img-box
    //         img
    //             height: 850px
.banner
    height: 356px
    background: url("../assets/baner_project.jpg") center (center / cover) no-repeat
    &__wrapper
        margin-top: 300px
        width: 503px
        // padding: 180px 78px
        padding-top: 180px
        margin: 0 auto
        text-align: center
        height: 300px
    &__content
        background-color: #fff
        // height: 278px
        width: 503px
        padding: 51px 78px
        border-radius: 30px 30px 0px 0px
    &__title
        font-size: 46px
        font-style: normal
        font-weight: 500
    &__subtitle
        font-size: 22px
        font-style: normal
        font-weight: 400
        margin-top: 10px
button
    padding: 0
    border: none
    font: inherit
    color: inherit
    background-color: transparent
    cursor: pointer
.paginations
    border: 1px solid #CDA274
    padding: 14px
    width: 52px
    height: 52px
    border-radius: 50%
    text-align: center
</style>