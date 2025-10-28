<template>
	<header>
		<div class="page-heading">
			<div class="page-heading-title"><h1>PORTFOLIO</h1></div>
			<div class="page-heading-menu">
				<elements-buttons-button-menu
					v-for="button in buttonList"
					v-bind="button"
					@cta-redirect="handleClick"
				/>
			</div>
			<patterns-overlay-modal
				v-if="openModal"
				text="Me Contacter"
				@close-modal="openModal = false"
			/>
		</div>
	</header>
</template>

<script>
export default {
	data() {
		const buttonList = [
			{ text: "Accueil", interact: "redirect", redirectUrl: "/" },
			{ text: "Projets", interact: "redirect", redirectUrl: "/projet" },
			{ text: "Resume", interact: "redirect", redirectUrl: "/resume" },
			{ text: "Contacts", interact: "openModal" },
		];
		const openModal = false;
		return {
			buttonList,
			openModal,
		};
	},
	methods: {
		handleClick(item) {
			if (item.interact === "redirect") {
				navigateTo(item.redirectUrl);
			}
			if (item.interact === "openModal") {
				this.openModal = true;
			}
		},
	},
};
</script>
<style lang="scss" src="./header.scss" />

