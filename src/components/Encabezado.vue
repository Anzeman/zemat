
<template>
  <div id="encabezado">
  Bienvenidos a Zenat
    <router-link to="/">
       Home
    </router-link>
    <router-link to="Contactanos">
      Contactanos
    </router-link>
    <router-link to="Nosotros">
      Nosotros
    </router-link>
    <router-link to="Servicios">
      Servicios
    </router-link></div>
</template>

<script>
import { ref } from 'vue'

export default {
  components: {},
  setup(props, context) {

  }
}

</script>


<style scoped>
#encabezado{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  background: red;
}
</style>
