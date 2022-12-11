<template>
    <Encabezado></Encabezado>
  <router-view />
</template>

<script>
import Encabezado from '@/components/Encabezado.vue'


export default {
  components: { Encabezado },
  setup(props, context) {

  },
}
</script>