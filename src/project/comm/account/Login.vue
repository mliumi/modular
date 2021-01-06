<template>
  <div id="login">
      <Narbar />
      <Pagename />
      <UsernameTypeTag/>
  </div>
</template>
<script>
import Narbar from "@c/comm/Narbar"
import Pagename from "./components/PageTitle"
import UsernameTypeTag from "./components/UsernameType"
  export default {
    name: "Login",
    components:{
      Narbar,
      Pagename,
      UsernameTypeTag
    }
  }
</script>
<style lang="scss" scoped>

</style>