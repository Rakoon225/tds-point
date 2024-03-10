<script>
export default {
	data(){
		return{
			
		}
	}
}
</script>

<template>
	<list-render :list="$store.state.blocks" :param="'main'"></list-render>
</template>

<style lang="scss" scoped>
@use '../assets/styles/vars.scss' as v;
@use '../assets/styles/class.scss' as c;
</style>