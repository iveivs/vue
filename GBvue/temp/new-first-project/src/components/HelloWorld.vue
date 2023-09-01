<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h2>Hello</h2>
        <p class="text">Lorem ipsum dolor sit amet 1.</p>
        <p>counter {{ counter }}</p>
        <button @click="increase">+1</button>
        <button @click="reset">reset</button>
    </div>
</template>

<script>
export default {
    name: "HelloWorld",
    props: {
        msg: String,
    },
    data() {
        return {
            counter: 0,
        };
    },
    methods: {
        increase() {
            this.counter++;
        },
        reset() {
            this.counter = 0
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.text {
    color: red;
}
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
