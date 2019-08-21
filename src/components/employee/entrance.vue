<template>
    <div class="employeeEn-container">
      <div class="employeeEn-info">
        <router-link to="/registration">
          <img src="../../assets/button.png"  style="position: absolute;left: 60%;top: 66%" >
        </router-link>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
      name:"entrance",
        data() {
            return {};
        }
    };
</script>

<style scoped="">
  .employeeEn-info {
    background-image: url("../../assets/main.png") ;
    background-repeat: no-repeat;
    background-position: center;
    background-size:auto 100%;
    height: 100vh;
  }
</style>
