<template>
	<div class="overlay-modal">
		<div :class="cssClass">
			<div class="overlay-modal-title">
				<p class="title">{{ text }}</p>
				<img
					src="../../../assets/icones/close.png"
					alt="icon-cross"
					class="icon-cross"
					@click="$emit('close-modal')"
				/>
			</div>
			<div class="overlay-body">
				<div class="mail-phone-adress">
					<p class="mail">
						<span class="mail-name">Mail:</span> cochearno17@gmail.com
					</p>
					<p class="phone">
						<span class="phone-name">Téléphone:</span> 0606060606
					</p>
					<p class="adress">
						<span class="adress-name">Adresse:</span>
						18 rue nasser Al K, Saint germain en laye
					</p>
				</div>
				<div class="social-network">
					<div class="facebook">
						<img
							src="../../../assets/icones/facebook.png"
							alt="icon-facebook"
						/>
					</div>
					<div class="instagram">
						<img
							src="../../../assets/icones/instagram.png"
							alt="icon-instagram"
						/>
					</div>
					<div class="x">
						<img src="../../../assets/icones/twitter.png" alt="icon-x" />
					</div>
					<div class="github">
						<img src="../../../assets/icones/github.png" alt="icon-github" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "overlayModal",
	props: {
		text: {
			type: String,
			default: "",
		},
	},
	emits: ["close-modal"],
	computed: {
		cssClass() {
			return ["overlay-modal-wrapper"];
		},
	},
};
</script>

<style lang="scss" src="../overlay-modal/overlay-modal.scss" />

