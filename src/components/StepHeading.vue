<template>
  <div class="step" @click="submit">
      <div :class="stepNumber == steps ? 'step-active' : 'step-disabled'">
          {{ stepNumber }}
      </div>
      <p class="display" :class="stepNumber == steps ? 'step-text-active' : 'step-text-disabled'">{{ step }}</p>
  </div>
</template>

<script>
export default {
    props: {
        stepNumber: {
            type: String
        },
        step: {
            type: String
        },
        steps: {
            type: Number
        }
        // active: {
        //     type: Boolean,
        //     default: false
        // },
        // disabled: {
        //     type: Boolean,
        //     default: false
        // }
    },
    computed: {
        headingClasses() {
            return ''
            // return [ this.active ? 'step-active' : '', this.disabled ? 'step-disabled': '']
        }
    },
    methods: {
        submit() {
            this.$emit('submit');
        },
    }
}
</script>

<style scoped>
.step {
    display: flex;
    align-items: center;
    cursor: pointer;
}
.step-active {
    background: #006AFF;
    color: #fff;
    padding: 7px 13px;
    border-radius: 3.1px;
    font-size: 13px;
}
.step-disabled {
    background: #E4E9EF;
    color: #A5B4CB;
    padding: 7px 13px;
    border-radius: 3.1px;
    font-size: 13px;
}
.step-text-active {
    font-weight: 300;
    font-size: 18px;
    line-height: 23px;
    color: #141737;
    margin-left: 12px;
}
.step-text-disabled {
    font-weight: 300;
    font-size: 18px;
    line-height: 23px;
    color: #A5B4CB;
    margin-left: 12px;

}
@media screen and (max-width: 768px) {
    .display {
        display: none;
    }
}
</style>
