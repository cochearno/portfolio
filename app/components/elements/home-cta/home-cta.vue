<template>
	<div class="home-cta">
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
    }
  },
};
</script>
<style lang="scss" src="./home.cta.scss" />

