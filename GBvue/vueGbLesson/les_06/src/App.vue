<template>
  <div id="app">
    <PaymentsDisplay :items="paymentList"/>
    <AddList @addNewPay="addNewPay"/>
  </div>
</template>

<script>
import PaymentsDisplay from './components/PaymentsDisplay.vue'
import AddList from './components/AddList.vue'

export default {
  name: 'App',
  components: {
    PaymentsDisplay,
    AddList,
  },
  data() {
    return {
        paymentList: [],
    };
  },
  methods: {
    fetchData() {
            return [
                {
                    data: '28.03.2023',
                    category: 'Food',
                    value: 169,
                },
                {
                    data: '24.03.2023',
                    category: 'Transport',
                    value: 369,
                },
                {
                    data: '21.03.2023',
                    category: 'Food',
                    value: 456,
                },
            ]
        },
        addNewPay(data) {
          this.paymentList.push(data)
        }
  },
  created() {
    this.paymentList = this.fetchData()
  }
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
