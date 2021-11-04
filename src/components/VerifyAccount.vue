<template>
  <div class="verify-account">
      <Heading heading="Verify Account"/>
      <div class="select-method">
          <p>Select a verification method</p>
            <div class="actions">
                <span @click="switchTab" :class="!showBankInputs ? 'actions-span-active' : 'actions-span-disabled'">BVN</span>
                <span @click="switchTab"  :class="showBankInputs ? 'actions-span-active' : 'actions-span-disabled'">Personal Account Number</span>
            </div>
      </div>
      <div class="bank-verification">
        <div class="bank-inputs" v-if="showBankInputs">
            <Input class="bank-input" label="Account Number" type="number"/>
            <Select class="bank-input" :values="values" label="Select Bank" />
        </div>
        <div v-else>
            <Input label="Bank Verification Number (11-digits)" type="number" maxlength="11"/>
            <Accordion />
        </div>
        <hr class="hr-out">
        <Button @click="submit" class="btn__regular button">Continue</Button>
      </div>
  </div>
</template>

<script>
import Heading from '@/components/Heading.vue'
import Input from '@/components/Input.vue'
import Select from '@/components/Select.vue'
import Accordion from '@/components/Accordion.vue'
import Button from '@/components/Button.vue'

export default {
    name: 'VerifyAccount',
    components: {
        Heading,
        Input,
        Select,
        Accordion,
        Button
    },
    props: [ 'steps' ],
    data() {
        return {
            showBankInputs: false,
            values: [
                ' ',
                'Wema',
                'Heritage Bank',
                'Zenith Bank',
                'GT Bank',
                'United Bank for Africa',
                'FCMB'
            ]
        }
    },
    methods: {
    onlyNumber($event) {
        console.log('something here');
      let keyCode = ($event.keyCode ? $event.keyCode : $event.which);
      if (((keyCode < 48 || keyCode > 57) && keyCode !== 46) || keyCode === 173) { // 46 is dot
        $event.preventDefault();
      }
    },
    switchTab() {
        if(!this.showBankInputs) {
            this.showBankInputs = true
        } else {
            this.showBankInputs = false
        }
    },
    submit() {
        // const { showBankInputs } = this;
        if(!this.showBankInputs) {
            this.showBankInputs = true
        } else {
            this.$emit('submit');
        }
    }
  }
}
</script>

<style scoped>
.select-method {
    margin-top: 39px;
}
.select-method p {
    font-weight: 300;
    font-size: 12px;
    line-height: 22px;
}
.actions {
    margin-top: 20px;
}
.actions-span-active {
    background: #DCEAFF;
    border-radius: 10px;
    border: 1px solid #006AFF;
    padding: 15px 19px;
    font-weight: 500;
    font-size: 14px;
    line-height: 32px;
    margin-right: 20px;
}
.actions-span-disabled {
   background: #F5F6FA;
    border: 1px solid rgba(20, 23, 55, 0.1);
    border-radius: 10px;
    padding: 15px 19px;
    font-weight: 500;
    font-size: 14px;
    line-height: 32px;
    margin-right: 20px;
}
.bank-verification {
    margin-top: 50px;
}
.bank-inputs {
    grid-column-gap: 40px;
    display: grid;
    grid-template-columns: repeat(12,1fr);
    width: 100%;
    margin-top: 44px;
}
.bank-input {
    grid-column: span 6;
}
.hr-out {
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
    .bank-inputs { 
        display: block;
    }
    .bank-input {
        margin-top: 20px;
    }
}
</style>
