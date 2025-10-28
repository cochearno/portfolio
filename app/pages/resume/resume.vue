<template>
	<div class="resume-page">
		<div class="resume-page-title">
			<h1>Développeur Web Fullstack</h1>
			<div class="titre">En formation actuellement chez Chronodrive</div>
			<span class="accroche"
				>Je conçois des interfaces web modernes, accessibles et centrées
				utilisateur</span
			>
		</div>
		<div class="resume-page-contenu">
			<div class="title-contenu"><h2>Expériences Professionelles</h2></div>
			<div class="text-contenu">
				Après plus de dix ans dans le domaine de la collecte du déchet et une
				reconversion professionelle. <br />
				Je me suis lancé dans une formation de développeur web et web mobile au
				sein du centre européen de formation. <br />J'effectue actuellement un
				stage d'une durée de dix semaines dans l'entreprise Chronodrive.
			</div>
		</div>
		<div class="resume-page-loisir">
			<div class="centre-title"><h2>Centre d'intérets</h2></div>
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

