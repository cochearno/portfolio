<template>
	<div class="overlay-modal">
		<div :class="cssClass">
			<div class="overlay-modal-title">
				<p>{{ text }}</p>
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
				<div class="social-network"></div>
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
	computed: {
		cssClass() {
			return ["overlay-modal-wrapper"];
		},
	},
};
</script>

<style lang="scss" src="../overlay-modal/overlay-modal.scss" />

