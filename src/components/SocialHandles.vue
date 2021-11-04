<template>
  <div class="social-handles">
    <Heading heading="Social Handles"/>
    <p>Enter your business social media handles</p>
    <div class="abeg">
        <Input class="handle-input" label="Choose your Abeg Tag (required)" type="text"/>
    </div>
    <div class="social-inputs">
        <Input class="handle-input" label="Instagram" type="text" value="@"/>
        <Input class="handle-input" label="Twitter" type="text" value="@"/>
    </div>
    <hr>
    <Button @click="submit" class="btn__regular button">Confirm Social Handles</Button>

  </div>
</template>

<script>
import Heading from '@/components/Heading.vue'
import Input from '@/components/Input.vue'
import Button from '@/components/Button.vue'

export default {
    name: "SocialHandles",
    components: {
        Heading,
        Input,
        Button
    },
    methods: {
        submit() {
            this.$emit('submit');
        }
    }

}
</script>

<style scoped>
.social-handles {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    color: #7D8DA7;
}
.abeg {
    display: grid;
    grid-template-columns: repeat(12,1fr);
    grid-column-gap: 40px;
    margin-top: 44px;
    /* width: 100%; */
}
.handle-input {
    grid-column: span 6;
}
.social-inputs {
    display: grid;
    grid-template-columns: repeat(12,1fr);
    /* width: 100%; */
    grid-column-gap: 40px;
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
    .abeg {
        display: block;
    }
    .social-inputs {
        display: block;
    }
}
</style>