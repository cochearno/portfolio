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
				<elements-home-cta
					v-for="cta in ctaList"
					v-bind="cta"
					@cta-redirect="handleClick"
					@click="openModal = true"
				/>
				<patterns-overlay-modal
					v-if="openModal"
					text="Me Contacter"
					@close-modal="openModal = false"
				/>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		const ctaList = [
			{ text: "Projets", interact: "redirect", redirectUrl: "/projet" },
			{
				text: "Resume",
				variant: "secondary",
				interact: "redirect",
				redirectUrl: "/resume",
			},
			{
				text: "Contacts",
				interact: "openModal",
				openModal: true,
			},
		];
		const openModal = false;
		const closeModal = false;
		return {
			ctaList,
			openModal,
			closeModal,
		};
	},
	methods: {
		handleClick(item) {
			if (item.interact === "redirect") {
				navigateTo(item.redirectUrl);
			}
		},
	},
};
</script>
<style lang="scss" src="../assets/scss/pages/_home.scss" />

