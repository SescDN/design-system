<template>
	<v-app>
		<botao>Texto</botao>
		<botao class="alerta">Texto</botao>
		<botao class="cancelar" ref="botao">Texto</botao>
		<botao class="confirmar" @click="funcao" :loadingX="false">Texto</botao>
	</v-app>
</template>

<style lang="scss">
	#app {
		background-color: #111A20 !important;
	}
</style>

<script>
	import botao from "./design-system/components/botao/botao.vue";

	export default {
		name: "App",

		components: {
			botao
		},

		methods: {
			funcao: function(event) {
				alert(event.target.getAttribute('loadingX'));
				alert(this.loadingX);

				// this.$refs.botao.loading = false;
			}
		}
	};
</script>