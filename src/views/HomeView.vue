<script>
export default {
  name: 'HomeView',
  components: {
  },
  data () {
    return {
      names: ['pipi', 'pupu', 'john', 'alex', 'steve', 'mike', 'jose', 'momo', 'mama', 'popo', 'zebra', 'okey', 'radio']
    }
  }
}
</script>

<template>
  <div class="home">
    
      <p v-for="name in names">{{ name }}</p>

  </div>
</template>


