<script>
export default {
    data() {
        return {
        }
    },
    methods: {
    }
}
</script>

<template>
    <my-crumbs :crumbs="[
        {
            title: 'Главная',
            name: 'home'
        },
        {
            title: 'Услуга',
            name: `sub`
        }
    ]"></my-crumbs>
    <list-render :list="this.$store.state.blocks[$route.params.service].sub" :param="'sub'" :service="$route.params.service"></list-render>
</template>

<style lang='scss' scoped></style>