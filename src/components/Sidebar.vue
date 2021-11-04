<template>
  <div>
      <div class="sidebar-background">
          <img src="@/assets/onboard.png" alt="onboarding">
      </div>
  </div>
</template>

<script>
export default {
    name: 'Sidebar'

}
</script>

<style scoped>
.sidebar-background {
    background: #F3E8C9;
    min-height: 100vh;
    display: flex;
    align-items: center;
    align-content: center;
}
img {
    margin-top: 150px;
}
</style>