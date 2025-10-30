<template>
	<div class="project-page">
		<div class="project-title-page">Mes projets réalisés ou en cours</div>
		<div class="project-line-two">
			<div class="project-one">
				<a href="https://github.com/cochearno/capudculotte" target="_blank">
					<img
						src="../../assets/img/capudculotte.png"
						alt="logo-capudculotte"
						class="capudculotte"
					/>
				</a>
			</div>
			<div class="project-two">
				<a href="" target="_blank"
					><img
						src="../../assets/img/baptservices.png"
						alt="logo-baptservices"
						class="baptservices"
				/></a>
			</div>
			<div class="project-three">three</div>
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

