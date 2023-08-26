//  Создайте компонент списка, который отображает массив элементов. 
//  Добавьте текстовое поле для фильтрации списка.
//  При вводе текста в поле, список должен автоматически обновляться,
//  отображая только элементы, содержащие введенный текст.
Vue.component('comp02', {
    props: {  },

    data() {
        return {
            // liList: [ {name: 'list 1' } , {name: 'list 2' }, {name: 'list 3' }],
            liList: [ 'list 1' , 'list 2' , 'list 3' ],
            inputData: '',
            outputList: '',
        }
    },

    template: `
        <div>
        <input type="text" v-model="inputData" placeholder="Фильтр">
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

Vue.component('another-solution', {

    data() {
        return {
            items: [ 'list 1' , 'list 2' , 'list 3' ],
            filterItem: ''
        }
    },

    template: `
    <div> 
        <input type="text" v-model="filterItem" placeholder="Фильтр">
        <div v-for="item in items"> {{ item }} </div>
        <p>filtered</p>
        <div v-for="item in filteredItems"> {{ item}}</div>
    </div>
    `,
    computed: {
        filteredItems() {
            return this.items.filter(elem => elem.includes(this.filterItem))
        }
    }
});

Vue.component('list-filter', {
    template: `
<div>
    <input type="text" v-model="filterText" placeholder="Фильтр">
    <ul>
        <li v-for="item in filteredList" :key="item.id">{{ item.name }}</li>
    </ul>
</div>
`,

    data() {
        return {
            filterText: '',
            items: [
                {
                    id: 1,
                    name: 'list 1'
                },
                {
                    id: 2,
                    name: 'list 2'
                },
                {
                    id: 3,
                    name: 'list 3'
                }
            ]
        };
    },
    computed: {
        filteredList() {
            return this.items.filter(item => item.name.toLowerCase().includes(this.filterText));
        }
    }
});