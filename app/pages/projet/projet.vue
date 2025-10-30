<template>
	<div class="project-page">
		<div class="project-title-page">Mes projets réalisés</div>
		<div class="project-line-two">
			<div class="project-one">
				<img
					src="../../assets/img/capudculotte.png"
					alt="logo-capudculotte"
					class="capudculotte"
				/>
			</div>
			<div class="project-two">two</div>
			<div class="project-three">three</div>
			<div class="project-four">four</div>
			<div class="project-five">five</div>
			<div class="project-six">six</div>
		</div>
	</div>
</template>

<script>
export default {
	setup() {
		definePageMeta({
			name: "projet",
			path: "/projet",
		});
	},
};
</script>

<style lang="scss" src="../../assets/scss/pages/_projet.scss" />

