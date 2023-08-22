const compItem = {
    name: 'comp-item',
    template: '<p>item info</p>'
}

Vue.component('new-component', {
    props: ['title'],

    data() {
        return {
            counter: 0,
        }
    },
    methods: {
        increase(step) {
            this.counter += step
        },
    },

    components: {
        'comp': compItem,
    },

    template: `
            <div>
                <h2>Заголовок {{ title }}</h2>
                <comp></comp>
                <p>Новый шаблон для vue</p>
                <p>Counter {{ counter }}</p>
                <button @click="increase(2)"> PLUS 1 </button>
            </div>
            
    `,
});

Vue.component('change-one', {
    template: `
    <div>
        <h2>Info change component</h2>
        <p>Новый текстовый блок, который нужно прочитать</p>
    </div>
    `
})

Vue.component('change-two', {
    template: `
    <div>
        <h2>2 change component</h2>
        <p>Другой текст и другой шаблон</p>
    </div>
    `
})

Vue.component('change-three', {
    template: `
    <div>
        <ul>
            <li>list item info 1</li>
            <li>list item info 2</li>
            <li>list item info 3</li>
        </ul>
    </div>
    `
})