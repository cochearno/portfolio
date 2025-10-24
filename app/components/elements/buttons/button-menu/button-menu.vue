<template>
	<div class="button-menu-heading">{{ text }}</div>
</template>

<script lang="js">
export default {
  name: "button-menu",
  props: {
    text: {
      type: String,
      required: false,
      default: undefined,
    }
  },
};
</script>

<style lang="scss" src="./button-menu.scss" />

