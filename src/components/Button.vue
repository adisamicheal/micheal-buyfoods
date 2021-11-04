<template>
  <button :class="buttonClasses" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default { 
    name: 'Button',
    props: {
        type: {
            type: String,
            default: 'btn__normal'
        },
        size: {
            type: String,
            default: 'btn'
        }
    },
    computed: {
        buttonClasses() {
            return [ `${this.type}`, `${this.size}`]
        }
    },
    methods: {
        handleClick() {
            this.$emit('click')
        }
    }

}
</script>

<style scoped>
.btn__regular {
    background: #006AFF;
    border: 2px solid #006AFF;
    color: #fff;
}
.btn__danger {
    background: #FF6774;
    border: 2px solid #FF6774;
    color: #fff;
}
.btn {
    padding: 14px 30px;
    font-size: 14px;
    border-radius: 8px;
    cursor: pointer;
}
</style>