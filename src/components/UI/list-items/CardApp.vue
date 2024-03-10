<script>
export default {
    name: 'card-app',
    props: {
        item: {
            type: Object,
            required: true
        },
    },
    methods: {
        goOwnPage(param, service){
            this.$router.push({
                name: 'ownPage',
                params: {
                   id: param,
                   service: service
                }             
            })
        }
    },
    mounted() {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 1
        };

        const observer1 = new IntersectionObserver(entries => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('animate__zoomIno');
                    }, index * 300); 
                }
            });
        }, options);

        const cardElements = document.querySelectorAll('.card');
        cardElements.forEach(cardElement => observer1.observe(cardElement));
    }
}
</script>

<template>
    <div class="card animate__animated">
        <div class="card__container animate__animated  ">
            <div class="card__image">
                <img src="@/assets/content/img/card/2017-05-31-10-21-21.jpg" alt="Изображение услуги">
            </div>
            <div class="card__body">
                <div class="card__text">
                    <h2 class="card__title">{{ item.item.title }}</h2>                
                </div>
                <p class="card__description">{{ item.item.description }}</p>
                <my-button class="card__button" @click="goOwnPage(item.item.id)">Перейти</my-button>
            </div>
        </div>
    </div>
</template>

<style lang='scss' scoped>
@use '@/assets/styles/fonts.scss';
.animate__zoomIno{
    opacity: 100 !important;
    --animate-duration: 5s;
    filter: blur(0px) !important
}
.card {
    & {
        background-color: rgba($color: #000000, $alpha: .2);
        border-radius: 5px;
        overflow: hidden;
        border: 1px solid rgba($color: #fff, $alpha: .7);

        @media(max-width: 768px) {
            width: 100%;
            border-left: none;
            border-right: none;
            border-radius: 0;
        }

        @media(min-width: 768px) {
            width: 30%;
        }

        @media(min-width: 1024px) {
            width: 25%;
        }
        opacity: 0;
        transition: all 2s;
        filter: blur(7px)
    }

    &__container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 8px;
        height: 100%;
    }

    &__text {
        padding: 7px 3px;
    }

    &__title {
        color: #fff;
        font-family: "Montserat";
        font-weight: 600;
        margin-bottom: 5px;
    }

    &__description {
        color: #fff;
        font-family: "Montserat";
        max-height: 150px;
        font-weight: 300;
        overflow-y: auto;
        border-top: 1px solid rgba($color: #fff, $alpha: 0.5);
        border-bottom: 1px solid rgba($color: #fff, $alpha: 0.5);
        padding: 5px;

        margin-top: auto;
        margin-bottom: 5px;
    }

    &__image {
        & img {
            width: 100%;
            object-fit: cover;
        }
    }

    &__body{
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    &__button {
        padding: 10px 0;
        font-size: 17px;
    }

}
</style>