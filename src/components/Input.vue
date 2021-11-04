<template>
<div class="form-input">
  <label class="label" :for="label">{{ label }}</label>
  <input class="input" :class="classes" :type="type" :placeholder="placeholder">
</div>
</template>

<script>
export default {
    name: 'Input',
    props: {
        error: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: ''
        },
        // input: {
        //    type: String,
        //     default: '' 
        // },
        label: {
           type: String,
            default: '' 
        }
    },
    computed: {
        classes() {
            // return [ this.error ? 'error' : '', `${this.input}`]
            return [ this.error ? 'error' : '']
        }
    }
}
</script>

<style>
.form-input {
    display: flex;
    flex-direction: column;
    width: 100%;
}
.input {
    background: #FFFFFF;
    border: 1px solid #E4E9EF;
    border-radius: 12px;
    height: 54px;
    padding: 0 20px;
}
.input:focus {
    border: 1px solid #006AFF;
    outline: none;
}
.label {
    font-weight: 500;
    font-size: 12px;
    line-height: 22px;
    color: #141737;
    margin-bottom: 10px;
}
.error {
    border: 1px solid red;
}

</style>