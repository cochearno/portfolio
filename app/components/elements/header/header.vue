<template>
	<header>
		<div class="page-heading">
			<div class="page-heading-title"><h1>PORTFOLIO</h1></div>
			<div class="page-heading-menu">
				<elements-buttons-button-menu
					v-for="button in buttonList"
					v-bind="button"
				/>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	data() {
		const buttonList = [
			{ text: "Projets" },
			{ text: "Resume" },
			{ text: "Contacts" },
		];

		return {
			buttonList,
		};
	},
};
</script>
<style lang="scss" src="./header.scss" />

