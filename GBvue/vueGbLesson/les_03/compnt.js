// Шаг 1
// Vue.component('new-component', {

//     data() {
//         return {
//             title: "TITLE"
//         }
//     },

//     template: `
//             <div>
//                 <h2>Заголовок {{ title }}</h2>
//                 <p>Новый шаблон для vue</p>
//             </div>
            
//     `,
// });

// Шаг 2
Vue.component('new-component', {
    props: ['title', 'counter'],

    data() {
        return {
            
        }
    },

    template: `
            <div>
                <h2>Заголовок {{ title }}</h2>
                <p>Новый шаблон для vue</p>
                <p>Counter {{ counter }}</p>
                <button @click="$parent.counter++"> PLUS 1 </button>
            </div>
            
    `,
});

Vue.component('standart-comp', {
            data() {
                return { message: 'text msg' }
            },
            methods: {
                newInfo() {
                    console.log('hello methods');
                }
            },
            computed: {
                newComp() {
                    return this.message
                }
            },
            template: '<h2>standart template</h2>'
})