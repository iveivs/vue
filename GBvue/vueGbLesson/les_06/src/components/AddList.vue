<template>
    <div>
        <input v-model="category" type="text" placeholder="category">
        <input v-model="data" type="text" placeholder="data"/>
        <input v-model="value" type="text" placeholder="value"/>
        <button @click="onSave">Save</button>
    </div>
</template>

<script>
export default {
    name: 'AddList',

    data() {
        return {
            category: '',
            value: '',
            data: '',
        };
    },
    methods: {
        onSave() {
            const data = {
                value: +this.value,
                category: this.category,
                data: this.data,
            }
            this.$emit('addNewPay', data)
        }
    },
};
</script>

<style lang="scss" scoped>

</style>