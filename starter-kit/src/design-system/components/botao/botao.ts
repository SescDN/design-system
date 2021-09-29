import { VBtn } from "vuetify/lib";

export default {
    extends: VBtn,
    name: "botao",
    
    props: {
        alerta: {},
        cancelar: {},
        confirmar: {}
    },

    data: function() {
        return {
            loading: false
        }
    },
    
    // methods: {
    //     italo() {
    //         alert("Italo é legal");
    //     }
    // }
    
    // mounted: function() {
    //     if (this.alerta == "") {
    //         this.$el.classList.add("alerta");
    //     }
    //     else if (this.cancelar == "") {
    //         this.$el.classList.add("cancelar");
    //     }
    //     else if (this.confirmar == "") {
    //         this.$el.classList.add("confirmar");
    //     }
    // }
}