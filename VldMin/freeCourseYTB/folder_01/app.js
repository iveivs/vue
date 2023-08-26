const App = {
    data() {
        return {
            placeholderString: 'Введите название заметки',
            title: 'ToDo',
            inputValue: '',
            notes: ['Заметка 1', 'Заметка 2', 'Заметка 123']
        }
    },
    methods: {
        inputChangeHandler(event) {
            // console.log('inputChangeHandler', event.target.value);
            this.inputValue = event.target.value
        },
        addNewNote() {
            this.notes.push(this.inputValue)
            this.inputValue = ''
        },
        inputKeyPress(event) {
            // console.log(event.key);
            if(event.key === 'Enter') {
                this.addNewNote()
            }
        }
    },
}
// указываем куда будем передавать vue содержимое
const app = Vue.createApp(App) 
app.mount('#app')
// Vue.createApp(App) 