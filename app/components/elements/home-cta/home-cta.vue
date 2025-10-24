<template>
	<div :class="cssClass" @click="handleRedirect">
		<span class="home-cta-text">{{ text }}</span>
	</div>
</template>

<script lang="js">
export default {
  name: "cta",
  props: {
    text: {
      type: String,
      required: false,
      default: undefined,
    },
		variant: {
			type: String,
			default: "primary"
		},
		interact: {
			type: String,
			default: "redirect"
		},
		redirectUrl : {
			type: String,
			default: undefined
		}
  },
	computed: {
cssClass() {
	return [
		"home-cta",
		`home-cta--${this.variant}`
	]
}
	},
	emits: ["cta-redirect"],
	methods: {
		handleRedirect() {
			const redirectData = {
				interact: this.interact,
				redirectUrl : this.redirectUrl
			}
			this.$emit("cta-redirect", redirectData)
		}
	}
};
</script>
<style lang="scss" src="./home.cta.scss" />

