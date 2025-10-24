<template>
	<div class="home">
		<div class="img-max">
			<img src="../assets/img/max.png" alt="max" />
		</div>
		<div class="presentation">
			<div class="presentation-text">
				<h1>salut salut !!!</h1>
				<span>
					Voici mon portfolio qui mets en avant toutes mes productions
				</span>
			</div>
			<div class="presentation-round">
				<elements-home-cta v-for="cta in ctaList" v-bind="cta" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		const ctaList = [
			{ text: "Projets" },
			{ text: "Resume", variant: "secondary" },
			{ text: "Contacts" },
		];
		return {
			ctaList,
		};
	},
};
</script>
<style lang="scss" src="../assets/scss/pages/_home.scss" />

