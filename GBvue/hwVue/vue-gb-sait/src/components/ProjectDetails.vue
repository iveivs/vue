<template>
    <div>
        <section class="banner">
        </section>
        <section class="project-det">
            <div class="container">
                <div class="project-det__content">
                    <div class="project-det__title">Minimal Look Bedrooms </div>
                    <div class="project-det__subtitle">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. 
                        Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. 
                        <br>
                        In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis 
                        quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, 
                        in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.
                    </div>
                    <div class="project-det__slider">
                        <img src="../assets/proj_slider.jpg" alt="">
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'ProjectDetails',

    data() {
        return {
            imgList: [
                {src: 'proj_slider.jpg'}
            ]
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="sass" scoped>
.project-det
    padding: 140px 0
    &__title
        font-size: 50px
        font-weight: 500
        text-align: center
        margin-bottom: 20px
    &__subtitle
        width: 600px
        text-align: center
        font-size: 22px
        margin: 0 auto
    &__slider
        margin-top: 80px
        text-align: center
        img
            width: 800px
            border-radius: 30px
.banner
    height: 356px
    background: url("../assets/proj_det_baner.jpg") center (center / cover) no-repeat

</style>