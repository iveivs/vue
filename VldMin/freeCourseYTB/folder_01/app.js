const App = {
    data() {
        return {
            placeholderString: 'Введите название заметки',
            title: 'ToDo',
            inputValue: '',
            notes: ['Заметка 1', 'Заметка 2', 'Зам-ка']
        }
    },
    methods: {
        inputChangeHandler(event) {
            // console.log('inputChangeHandler', event.target.value);
            this.inputValue = event.target.value
        },
        addNewNote() {
            if(this.inputValue !== '') {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
            
        },
        // ненужная функция
        // inputKeyPress(event) {
        //     // console.log(event.key);
        //     if(event.key === 'Enter') {
        //         this.addNewNote()
        //     }
        // }
        removeNote(index) {
            this.notes.splice(index, 1)
        },
        toUpperCase(item) {
            return item.toUpperCase()
        }
    },
}
// указываем куда будем передавать vue содержимое
const app = Vue.createApp(App) 
app.mount('#app')
// Vue.createApp(App) 