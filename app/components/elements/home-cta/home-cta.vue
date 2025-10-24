<template>
	<div :class="cssClass">
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
		}
  },
	computed: {
cssClass() {
	return [
		"home-cta",
		`home-cta--${this.variant}`
	]
}
	}
};
</script>
<style lang="scss" src="./home.cta.scss" />

