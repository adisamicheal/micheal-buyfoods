<template>
  <div class="business-category">
    <Heading heading="Business Category"/>
    <div class="business-inputs">
        <Select class="business-input" :values="values" label="Type of your business" />
        <Select class="business-input" :values="values" label="Business Category" />
    </div>
    <div class="pos">
        <p>Do you use POS machines for your business?</p>
        <div class="pos-answer">
            <div @click="toggleActive" :class="active ? 'active' : 'disabled'" class="answer">Yes</div>
            <div @click="toggleInactive" :class="!active ? 'active' : 'disabled'" class="answer">No</div>
        </div>
    </div>
    <hr>
    <Button @click="submit" class="btn__regular button">Complete</Button>

  </div>
</template>

<script>
import Heading from '@/components/Heading.vue'
import Select from '@/components/Select.vue'
import Button from '@/components/Button.vue'

export default {
    name: "BusinessCategory",
    components: {
        Heading,
        Select,
        Button
    },
    data() {
        return {
            active: false,
            values: [
                ' ',
                'One',
                'Two',
                'Three',
                'Four',
                'Five',
                'Six'
            ]
        }
    },
    methods: {
        submit() {
            this.$emit('submit');
        },
        toggleActive() {
            this.active = true
        },
        toggleInactive() {
            this.active = false
        }
    }


}
</script>

<style scoped>
.business-inputs {
    display: grid;
    grid-template-columns: repeat(12,1fr);
    grid-column-gap: 40px;
    margin-top: 44px;
}
.business-input {
    grid-column: span 6;
}
.pos {
    margin-top: 26px;
}
.pos p {
    font-weight: 500;
    font-size: 12px;
    line-height: 22px;
    color: #141737;
}
.pos-answer {
    display: flex;
    align-items: center;
    margin-top: 4px;
}
.answer {
    border-radius: 10px;
    font-weight: 500;
    font-size: 14px;
    line-height: 32px;
    color: #141737;
    margin-right: 21px;
    cursor: pointer;
    padding: 4px 17px;
}
.disabled {
    background: #F5F6FA;
    border: 1px solid rgba(20, 23, 55, 0.1);
}
.active {
    background: #DCEAFF;
    border: 1px solid #006AFF;
}
hr {
    opacity: 0.3;
    border: 1px solid #A5B4CB;
    margin-top: 45px;
}
.button {
    display: block;
    margin-left: auto;
    margin-top: 13px;
}
@media screen and (max-width: 768px) {
    .business-inputs {
        display: block;
    }
    .business-input {
        margin-top: 20px;
    }
}
</style>