<template>
	<v-app>
		<botao>Texto</botao>
		<botao class="alerta">Texto</botao>
		<botao class="cancelar" ref="botao">Texto</botao>
		<botao class="confirmar" :loading="loading" @click="remove">Texto</botao>

		<v-btn
			:loading="loading"
			class="ma-1"
			color="error"
			plain
			@click="remove"
		>
		Delete
		</v-btn>
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
			funcao() {
			},

			async remove () {
				this.loading = true;

				await new Promise(resolve => setTimeout(resolve, 3000));

				this.loading = false;
			},
		},
  }
</script>