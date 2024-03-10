<script>
export default {
	name: 'MyButton',
}
</script>

<template>
	<button class="Button">
		<slot></slot>
	</button>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/vars.scss' as v;
@use '@/assets/styles/class.scss' as c;
@use '@/assets/styles/fonts.scss' as f;

.Button {
	color: #fff;
	font-family: "Montserat";
	font-weight: 600;
	transition: .5s;
	border: none;
	cursor: pointer;
	background: v.$grey;
	transition: background 1s ease;
	width: 100%;

	@extend %Button__HA;
}
</style>