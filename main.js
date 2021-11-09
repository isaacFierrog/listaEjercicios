const ls = localStorage;
const app = new Vue({
    created(){
        if(ls.getItem('listaEjercicios')){
            this.ejercicios = JSON.parse(ls.getItem('listaEjercicios'));
        }
    },
    el: '#app',
    data: {
        titulo: 'Mi GYM',
        nuevoEjercicio: '',
        ejercicios: []
    },
    methods: {
        agregarEjercicio(){
            this.ejercicios.unshift(
                {
                    nombre: this.nuevoEjercicio, 
                    estado: false
                }
            );
            ls.setItem('listaEjercicios', JSON.stringify(this.ejercicios));
            this.idEjercicios++;
            this.nuevoEjercicio = '';
        },
        eliminarEjercicio(index){
            this.ejercicios.splice(index, 1);
            ls.setItem('listaEjercicios', JSON.stringify(this.ejercicios));
        },
        completarEjercicio(index){
            this.ejercicios[index].estado = true;
            return ls.setItem('listaEjercicios', JSON.stringify(this.ejercicios));
        }
    },
    computed: {
        estiloEjercicios(estado){
            console.log(estado);
        }
    }
});