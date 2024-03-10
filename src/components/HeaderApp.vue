<script>
export default {
	mounted() {
		const options = {
			root: null,
			rootMargin: '0px',
			threshold: 1 
		};

		const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				setTimeout(() => {
				entry.target.classList.add('animate__slideInDown');
				}, 2500); // Задержка 
			} 
			});
		}, options);

		const headerElements = document.querySelectorAll('.header__link');
		headerElements.forEach(headerElement => observer.observe(headerElement));
	},
	methods: {
		toHome() {
			this.$router.push({ name: 'home' });
		},
		toInf() {
			this.$router.push({ name: 'inf' });
		},
	}
}
</script>

<template>

	<header class="header">
		<div class="header__container">
			<nav class="header__links">
				<my-button class="header__link animate__animated " @click="toHome">Все услуги</my-button>
				<my-button class="header__link animate__animated " @click="toInf">О нас</my-button>
			</nav>
		</div>
	</header>

</template>

<style lang="scss" scoped>
@use '../assets/styles/vars.scss' as v;
@use '../assets/styles/class.scss' as c;
@use '../assets/styles/fonts.scss' as f;

.header{
	width: 100vw;
	position: absolute;
	z-index: 999;

	&__links{
		display: flex;
		flex-direction: column;
		row-gap: 8px;

		position: absolute;
		left: 30px;
		top: 15px;

		@media (max-width: 576px){
			left: 10px;
			top: 5px;
			row-gap: 2px;
		}
	}

	&__link{
		padding: 7px 20px;
		font-size: 17px;
		border-radius: 5px;

		@media (max-width: 768px) {
			padding: 5px;
			font-size: 15px;
	}
	}
	.header__link{
		opacity: 0;
		transition: opacity 2s;
	}
	.animate__slideInDown{
		opacity: 100;
	}
}

</style>