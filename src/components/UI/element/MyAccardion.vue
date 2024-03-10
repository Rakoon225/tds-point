<script>

export default {
    name: 'my-accardion',
    props: {
        list: {
            type: Array,
            required: true
        }
    },

    mounted(){
        const options = {
		root: null,
		rootMargin: '0px',
		threshold: 1 
	};
        const observer1 = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				setTimeout(() => {
				entry.target.classList.add('opacity_animate_two');
				}, 1100); // Задержка 
			} 
			});
		}, options);

		const accardionElement = document.querySelectorAll('.accardion');
		accardionElement.forEach(accardionElement => observer1.observe(accardionElement));
    }
}
</script>

<template>
    <article class="accardion animate__animated ">
        <div class="accardion__container">
            <section class="accardion__item" :class="{ 'show': tab.isShow, 'un-show': !tab.isShow }" v-for="tab in list">   
                <header class="accardion__header">
                    <h2 class="accardion__title">{{ tab.title }}</h2>
                    <button @click="tab.isShow = !tab.isShow" class="accardion__button">
                        <img src="@/assets/content/img/own/arrow-right.png" alt="arrow" class="accardion__arrow">
                    </button>

                </header>
                <div class="accardion__main">
                    <div class="accardion__body">
                        <p class="accardion__text">{{ tab.text }}</p>
                    </div>
                </div>
            </section>
        </div>
    </article>
</template>

<style lang='scss' scoped>
@use '@/assets/styles/fonts.scss';

.opacity_animate_two{
    opacity: 100 !important;
    filter: blur(0px) !important;
}
$transition: .7s;
.accardion {
    opacity: 0;
    transition: all 2s;
    filter: blur(7px);
    &__container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    &__item {
        &.show {
            & .accardion__main {
                height: 150px;
                overflow: auto;
            }

            & .accardion__arrow {
                transform: rotate(270deg);
            }
        }

        &.un-show {
            & .accardion__main {
                height: 0px;
            }
        }

        @media (min-width: 576px){
            width: 80%;
        }
        @media (max-width: 576px){
            width: 100%;
        }
    }

    &__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;

        border: 1px solid rgba($color: #fff, $alpha: .7);
    }

    &__arrow {
        transform: rotate(90deg);
        object-fit: cover;
        width: 50px;
        cursor: pointer;
        transition: $transition;

        &:hover {
            transition: .4s;
            filter: brightness(80%);
        }

        @media (max-width: 576px) {
            width: 30px;
        }
    }

    &__title {
        color: rgba($color: #fff, $alpha: .8);
        font-family: 'Montserat';
        font-weight: 500;
        font-size: 22px;

        margin: 0;

        @media (max-width: 576px) {
            font-size: 17px;
        }
    }

    &__text{
        color: rgba($color: #fff, $alpha: .7);
        font-family: 'Montserat';
        font-weight: 500;
        font-size: 15px;
    }

    &__button {
        background-color: inherit;
        border: none;
    }

    &__body {
        height: 100%;
        padding: 10px;
    }

    &__main {
        width: 100%;
        background-color: rgba($color: #fff, $alpha: .1);
        transition: $transition;

        overflow: hidden;
        height: 0px;
    }

}

</style>