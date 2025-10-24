<template>
	<div class="home">
		<div>Photo</div>
		<div class="presentation">
			<div class="presentation-text">Hello</div>
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
			{ text: "Resume" },
			{ text: "Contacts" },
		];
		return {
			ctaList,
		};
	},
};
</script>
<style lang="scss" src="../assets/scss/pages/_home.scss" />

