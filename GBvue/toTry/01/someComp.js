Vue.component('somecomp', {
    props: ['text2'],
    data() {
        return {
            text: 'some text',
            
        }
    },

    template: `
            <div>
                <h1> Zagolovok </h1>
                <h2> {{ text }} </h2>
                <h3> {{ text2 }} </h3>
            </div>
            `,
});