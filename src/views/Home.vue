<template>
  <div>
    <Jumbotron />
    <Main />
  </div>
</template>

<script>
// @ is an alias to /src
import Jumbotron from "@/components/Jumbotron";
import Main from "@/components/Main";
export default {
  name: 'Home',
  components: {
    Jumbotron,
    Main
  }
}
</script>
