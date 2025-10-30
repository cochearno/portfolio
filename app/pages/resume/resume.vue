<template>
	<div class="resume">
		<div class="resume-page">
			<span
				>Actuellement en formation de développement web, j'explore les languages
				et outils du front-end: HTML, CSS, Javascript, React et Figma et serais
				amené a découvrir le back-end. Chaque projet est pour moi une occasion
				de progresser, d'expérimenter et de trouver ma voie dans cet univers en
				constante évolution, tout en exprimant mon coté créatif. je cherche à
				allier design réfléchi et code propre, pour créer des interfaces qui
				font sens.</span
			>
		</div>
	</div>
</template>

<script>
export default {
	setup() {
		definePageMeta({
			name: "resume",
			path: "/resume",
		});
	},
	data() {
		const openModal = false;
		return {
			openModal,
		};
	},
};
</script>

<style lang="scss" src="../../assets/scss/pages/_resume.scss" />

