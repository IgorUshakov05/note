var input = document.getElementById("no")
localStorage.setItem('name', 'Igor')
Vue.createApp({
    data() {
        return {
            isActive: true,
            count: 0,
            clearVal:'',
            value:'',
            list: []
        }
    },
    methods: {
        removeing() {
            localStorage.removeItem('list')
            this.list = []
        },
        add(x) {
            if (!(/\S/.test(x))) {
                const date = new Date()
                var hours = date.getHours();
                var min = date.getMinutes();
                this.list.push({ text: 'Пустая заметка', time: `${hours}:${min}`

});
                // console.log(this.list);
                this.value = ''
                var one = JSON.stringify(this.list)
                localStorage.setItem('list', one)
            }
            else {
                const date = new Date()
                var hours = date.getHours();
                var min = date.getMinutes();
                this.list.push({
                    text: this.value, time: `${hours}:${min}`
});
                console.log(min);
                this.value = ''
                var one = JSON.stringify(this.list)
                localStorage.setItem('list', one)
            }
        },
        remove(x) {
                this.list.splice(x, 1)
                var two = JSON.stringify(this.list)
                localStorage.setItem('list', two)
        }
    },
    mounted() {
        if (localStorage.getItem('list')) {
            var obj = localStorage.getItem('list')
            var pars = JSON.parse(obj)
            this.list = pars
        } else {
            var obj1 = this.list
            JSON.stringify(obj1)
            localStorage.setItem('list', obj1)
        }
    }
}).mount('#app')
