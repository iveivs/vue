Vue.createApp({
    data: () => ({
        title: 'я есть грут',
        myHtml: '<h1>Вью 3 хтмл</h1>',
        persone: {
            firstName: 'Bob',
            lastName: 'Smith',
            age: 44
        },
        itemsArr: [1, 2, 3, 4, 5]
    }),
    computed: {
        evenItems() {
            return this.itemsArr.filter(elem => elem % 2 === 0)
        }
    }
}).mount('#app')