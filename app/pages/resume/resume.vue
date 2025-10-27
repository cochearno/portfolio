<template>
	<div class="resume-page">
		<div class="resume-page-title">
			<h1>Maxime Kuhn</h1>
			<input type="button" value="openModal" @click="openModal = true" />
			<span class="titre">Développeur Web Fullstack en formation </span>
			<span class="accroche"
				>Je concois des interfaces web modernes, accessibles et centrées
				utilisateur</span
			>
			<patterns-overlay-modal v-if="openModal" text="Me Contacter" />
		</div>
		<div class="resume-page-contenu"><h2>Expériences Professionelles</h2></div>
		<div class="resume-page-loisir">
			<h2>Centre d'intérets</h2>
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

