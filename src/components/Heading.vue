<template>
  <h3 class="heading">{{ heading }}</h3>
</template>

<script>
export default {
    name: "Heading",
    props: [ 'heading']

}
</script>

<style scoped>
.heading {
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    line-height: 34px;
    color: #141737;
}
</style>