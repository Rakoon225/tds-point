<script>
export default {
  name: "MyJustButton",
};
</script>

<template>
  <button class="button"><slot></slot></button>
</template>

<style lang="scss" scoped>
.button {
  & {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: inherit;
    border: 1px solid #fff;
    border-radius: 6px;
    padding: 7px 30px;

    font-family: "Montserat";
    color: #fff;
    font-weight: 300;

    transition: all ease .2s;
    cursor: pointer;
    &:hover{
        background-color: #fff;
        color: #000;
    }&:active{
        background-color: #d9d9d9;
    }

    @media(min-width: 768px){
        font-size: 20px;
    }
    @media(max-width: 768px){
        font-size: 18px;
    }
  }
}
</style>
