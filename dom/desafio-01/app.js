   new Vue({
        el: '#desafio',
        data: {
            nome: 'Alan Patrick Wutke',
            idade: 31,
            imagem: 'http://files.cod3r.com.br/curso-vue/vue.jpg'
        },
        methods: {
            idadeTres() {
                return this.idade * 3
            }, 
            numRandom() {
                return Math.random(0, 1) 
            }
        }
    })
