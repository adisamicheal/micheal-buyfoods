<template>
  <div class="form-input">
    <label class="label" for="cars">{{ label }}</label>
    <div class="styled-select">
        <select class="input">
            <span>
            </span>
            <option v-for="value in values" :key="value.id" :value="values">{{ value }}</option>
        </select>
    </div>
    <!-- <div class="select-icon">
        <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.41421 0C0.523309 0 0.077142 1.07714 0.707107 1.70711L3.29289 4.29289C3.68342 4.68342 4.31658 4.68342 4.70711 4.29289L7.2929 1.70711C7.92286 1.07714 7.47669 0 6.58579 0H1.41421Z" fill="#A5B4CB"/>
        </svg>
    </div> -->
  </div>
</template>

<script>
export default {
    name: 'Select',
    props: [ 'label', 'values', 'selected' ]

}
</script>

<style>
.form-input {
    display: flex;
    flex-direction: column;
    width: 100%;
}
.input {
    background: transparent;
    border: 1px solid #E4E9EF;
    border-radius: 12px;
    height: 54px;
    padding: 0 20px;
    width: 100%;
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
select::-ms-expand {
    display: none;
}
select {
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: '';
}
/* .select-icon {
    position: absolute;
    margin-left: 83%;
    margin-top: 59px;
} */
.styled-select {
    background: url(../assets/arrow.png);
    background-repeat: no-repeat;
    background-position: calc(100% - 20px) 50%;
}
</style>