<template>
    <div>
        <div>
            <img 
            :src="selectImg" 
            alt="galaxy" 
            :class="$style.bigimg" >
        </div>
        <div>
            <img 
                v-for="(img, index) in imgUrls"
                :class="$style.smallimg"
                :src="img" 
                alt="galaxy" 
                :key="index.id"
                @click="selectImgIndex(index)"
            >
        </div>
        <p>test</p>
    </div>
</template>

<script>
export default {
    name: 'picGal',

    data() {
        return {
            currentImgIndex: 0,
            imgUrls: [
                'https://icdn.lenta.ru/images/2022/02/28/16/20220228160452598/square_320_bab1446cc4563d939940fcc5b7f0cccb.jpg',
                'https://www.krugosvet.ru/sites/krugosvet.ru/files/img14/0521_011.jpg',
                'https://3dnews.ru/assets/external/illustrations/2019/09/07/993719/nasa2.jpg'
        ],

        };
    },

    mounted() {
        
    },

    methods: {
        selectImgIndex(index) {
            this.currentImgIndex = index
        }
    },
    computed: {
        selectImg() {
            return this.imgUrls[this.currentImgIndex]
        }
    }
};
</script>

<style module lang="css">
.bigimg {
    width: 300px;
    height: 300px;
}
.smallimg {
    height: 140px;
    padding: 5px;
}
p {
    color: green;
}
</style>