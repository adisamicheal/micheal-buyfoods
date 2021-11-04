<template>
  <div>
    <label for="cars">Choose a car:</label>
    <select name="cars" id="cars" form="carform">
        <option :value="value">{{ value }}</option>
    </select>
  </div>
</template>

<script>
export default {
    name: 'Select'

}
</script>

<style>

</style>