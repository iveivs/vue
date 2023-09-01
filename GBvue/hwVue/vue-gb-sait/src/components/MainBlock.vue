<template>
    <div>
        <section class="main">
        <div class="container">
            <div class="main__wrapper">
                <div class="main__content">
                    <h1 class="main__title">Let Your Home 
                    Be Unique</h1>
                    <p class="main__subtitle">There are many variations of the passages of
                        lorem Ipsum fromavailable, majority.</p>
                    <div class="main__button">Get Started 
                        <img src="../assets/arrow.svg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
</template>

<script>
export default {
    name: 'MainBlock',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="sass" scoped>
.main
    &__wrapper
        height: 758px
        background: url("../assets/main_bg.jpg") center (center / cover) no-repeat
        border-radius: 50px
    &__content
        width: 434px
        margin-left: 52px
        padding-top: 140px
    &__title
        font-size: 64px
        margin-bottom: 18px
    &__subtitle
        font-size: 22px
        margin-bottom: 18px
    &__button
        width: 220px    
        height: 75px
        padding: 26px
        background: #292F36
        color: #fff
        border-radius: 18px
        box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35)
        text-align: center
</style>