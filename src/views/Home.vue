<template>
  <div class="home">
   <div class="sidebar">
     <Sidebar class="sidebar-display"/>
   </div>
   <div class="onboarding">
      <Button class="btn__danger button">Logout</Button>
     <div class="step-bar-wrapper">
       <StepHeading @submit="steps = 1" :steps="steps" class="step-bar"  stepNumber="1" step="Verify Account"/>
       <StepHeading @submit="steps = 2" :steps="steps" class="step-bar" stepNumber="2" step="Social Handles"/>
       <StepHeading @submit="steps = 3" :steps="steps" stepNumber="3" step="Business Category"/>
     </div>
     <div class="step-bar-wrapper-mobile">
       <StepHeading v-if="steps === 1" @submit="steps = 1" :steps="steps" class="step-bar"  stepNumber="1" step="Verify Account"/>
       <StepHeading v-if="steps === 2" @submit="steps = 2" :steps="steps" class="step-bar" stepNumber="2" step="Social Handles"/>
       <StepHeading v-if="steps === 3" @submit="steps = 3" :steps="steps" stepNumber="3" step="Business Category"/>
     </div>
     <hr class="horizontal-line">
     <div class="step-heading">
       <p>Step {{ steps }}/3</p>
     </div>
     <div class="step-componentns">
       <VerifyAccount :steps="steps" v-if="steps === 1" @submit="increment"/>
       <SocialHandles :steps="steps" v-if="steps === 2" @submit="increment"/>
       <BusinessCategory :steps="steps" v-if="steps === 3" @submit="increment"/>
     </div>
   </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Button from '@/components/Button.vue'
import Sidebar from '@/components/Sidebar.vue'
import StepHeading from '@/components/StepHeading.vue'
import VerifyAccount from '@/components/VerifyAccount.vue'
import SocialHandles from '@/components/SocialHandles.vue'
import BusinessCategory from '@/components/BusinessCategory.vue'
// import { Mobile } from '@/mixins/mobile';

export default {
  name: 'Home',
  // mixins: [Mobile],
  components: {
    Button,
    Sidebar,
    StepHeading,
    VerifyAccount,
    SocialHandles,
    BusinessCategory
  },
  data() {
    return {
      steps: 1
    }
  },
  methods: {
    increment() {
      if (this.steps < 3) {
        this.steps +=1
      }
    }
  }
}
</script>

<style scoped>
.home {
  display: grid;
  grid-template-columns: 1fr 2fr;
}
.onboarding {
  padding: 35px 60px;
}
.button {
  margin-left: auto;
  display: block;
}
.step-bar-wrapper {
  display: flex;
  align-items: center;
  margin-top: 65px;
}
.step-bar-wrapper-mobile {
  display: none;
}
.step-bar {
  margin-right: 40px;
}
.horizontal-line {
  border: 1px solid #E9EEF4;
  margin: 20px 0;
}
.step-heading p {
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 17px;
  color: #A5B4CB;
}
.step-componentns {
  margin-top: 19px;
}

@media screen and (max-width: 768px) {
  .home {
    display: block;
  }
  .sidebar-display {
    display: none;
  }
  .onboarding {
    padding: 70px 20px;
  }
  .button {
    display: none;
  }
  .horizontal-line {
    display: none;
  }
  .step-heading {
    margin-top: 35px;
  }
  .step-bar-wrapper {
    display: none;
  }
  .step-bar-wrapper-mobile  {
    display: block;
  }
}
</style>
