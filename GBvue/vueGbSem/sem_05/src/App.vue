<template>
  <div id="app">
    <h1>Задание 1</h1>
    <AuthenticationBlock/>
    <h1>Задание 2</h1>
    <CartBlock />
    <h1>Задание 3</h1>
    <BookList />
    <h1>Задание 4</h1>
    <h1>Mortgage Calculator</h1>
    <label for="loanAmount">Величина займа:</label>
    <input type="number" id="loanAmount" v-model.number="loanAmount">
    <br>
    <label for="interestRate">Процентная ставка:</label>
    <input type="number" id="interestRate" step="0.01" v-model.number="interestRate">
    <br>
    <label for="loanTerm">Срок кредита (количество месяцев):</label>
    <input type="number" id="loanTerm" v-model.number="loanTerm">
    <div>
      <h2>Каждый месяц:</h2>
      <p>{{ monthlyPayment }}</p>
    </div>
    <div>
      <h2>Всего к оплате:</h2>
      <p>{{ totalPayment }}</p>
    </div>
  </div>
</template>

<script>
import AuthenticationBlock from './components/AuthenticationBlock.vue'
import CartBlock from './components/CartBlock.vue'
import  BookList from '@/components/BookList.vue'

export default {
  name: 'App',
  components: {
    AuthenticationBlock,
    CartBlock,
    BookList,
  },
  data() {
    return {
      loanAmount: 0,
      interestRate: 0,
      loanTerm: 0,
    }
  },
  computed: {
      monthlyPayment: function() {
        const rate = this.interestRate / 100 / 12;
        const term = this.loanTerm;
        const principal = this.loanAmount;
        const numerator = rate * Math.pow(1 + rate, term);
        const denominator = Math.pow(1 + rate, term) - 1;
        const payment = principal * (numerator / denominator);
        return payment.toFixed(2);

    },
      totalPayment: function() {
        const term = this.loanTerm;
        const payment = parseFloat(this.monthlyPayment);
        return (term * payment).toFixed(2);

    },
  },
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
