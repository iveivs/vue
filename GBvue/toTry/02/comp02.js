//  Создайте компонент списка, который отображает массив элементов. 
//  Добавьте текстовое поле для фильтрации списка.
//  При вводе текста в поле, список должен автоматически обновляться,
//  отображая только элементы, содержащие введенный текст.
Vue.component('comp02', {
    props: {  },

    data() {
        return {
            liText: '123',
            // liList: [ {name: 'list 1' } , {name: 'list 2' }, {name: 'list 3' }],
            liList: [ 'list 1' , 'list 2' , 'list 3' ],
            inputData: '',
            outputList: '',
        }
    },

    template: `
        <div>
        <input v-model="inputData" placeholder="Фильтр">
        <li>{{ liText }}</li>
        <li v-for="item in liList" :key="item.id">{{ item }}</li>
        <button @click="findList()">Найти</button>
        <p v-for="item in outputList"> {{ item }}</p>
        </div>
        
    `,
    computed: {
        
    },
    methods: {
        findList() {
            this.outputList = this.liList.filter(elem => elem.includes(this.inputData))
        }
    },

});