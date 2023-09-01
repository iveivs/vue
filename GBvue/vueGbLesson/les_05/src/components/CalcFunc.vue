<template>
    <div>
        <input type="text" v-model="operand1">
        <input type="text" v-model="operand2">
        {{ result }}
        <div>
            <!-- <button @click="calcAllResult('+')">+</button>
            <button @click="calcAllResult('-')">-</button>
            <button @click="calcAllResult('*')" >*</button>
            <button @click="calcAllResult('/')">/</button> -->
            <button 
                @click="calcAllResult(operation)" 
                v-for="operation in operations" 
                :key="operation.id">
                {{ operation }}
            </button>
        </div>
        <div>
            <div v-show="errorText">
                {{ errorText }}
            </div>
        </div>
        <div>
            <template v-if="result < 0">Получилось отрицательное число</template>
            <template v-if="result >= 0 && result <= 100">Получилось число от 0 до 100</template>
            <template v-if="result > 100">Получилось число больше 100</template>
        </div>
        <div>
            <h3>История операций</h3>
            <div v-for="log in logs" :key="log.id">
                {{ log }}
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
export default {

    name: 'CalcFunc',

    data() {
        return {
            operand1: 0,
            operand2: 0,
            result: 0,
            operations: ['+', '-', '*', '/'],
            errorText: '',
            logs: {},
        };
    },

    methods: {
        add() {
            this.result = Number(this.operand1) + Number(this.operand2) 
        },
        minus() {
            this.result = Number(this.operand1) - Number(this.operand2) 
        },
        mult() {
            this.result = Number(this.operand1) * Number(this.operand2) 
        },
        div() {
            // this.result = Number(this.operand1) / Number(this.operand2) 
            const { operand1, operand2 } = this;
            if(operand2 === 0) {
                this.errorText = 'Ошибка! На ноль делить нельзя'
            } else {
                this.result = operand1 / operand2;
            }
        },
        calcAllResult(operation = "+") {
            this.errorText = '';
            switch(operation) {
                case '+':
                    this.add()
                    break
                case '-':
                    this.minus()
                    break
                case '*':
                    this.mult()
                    break
                case '/':
                    this.div()
                    break
            }
            // this.logs[Date.now()] = `${this.operand1} ${this.operation} ${this.operand2} = ${this.result}` // Первый вариант логирования
            const key = Date.now()
            const value = `${this.operand1} ${this.operation} ${this.operand2} = ${this.result}`
            Vue.set(this.logs, key, value)
        }
    },
};
</script>

<style lang="scss" scoped>

</style>