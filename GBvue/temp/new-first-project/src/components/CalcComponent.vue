<template>
    <div>
        <div class="calc">
            <input type="text" class="input" v-model="result">
            <button @click="$event => addButton(num)" v-for="num in nums" :key="num.id">{{ num }}</button>
            <button @click="addButton(tab)" v-for="tab in tabs" :key="tab.id">{{ tab }}</button>
            <button @click="calcResult"> = </button>
            <button @click="reset" class="reset"> C </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CalcComponent',

    data() {
        return {
            result: 0,
            nums: [1,2,3,4,5,6,7,8,9,0],
            tabs: ['+' , '-' , '*' , '/' ],
        };
    },

    mounted() {
        
    },

    methods: {
        addButton(char) {
            this.result = this.result.toString()
            this.result += char
        },
        calcResult() {
            this.result = eval(this.result)
        },
        reset() {
            this.result = ''
        }
    },
};
</script>

<style lang="css" scoped>
.calc {
    display: grid;
    grid-template-columns: repeat(3, 120px);
    justify-content: center;
    padding-top: 48px;
    padding-bottom: 48px;
}
.input {
    grid-column: 1 / -1;
    text-align: right;
}
.reset {
    grid-column: 1 / -1;
}
</style>