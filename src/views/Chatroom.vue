<template>
<div class="container">
  <Navbar />
</div>
  
</template>

<script>
import Navbar from '../components/Navbar'
import getUser from '../composables/getUser'
import { useRouter } from 'vue-router'
import { watch } from 'vue'

export default {
  components: { Navbar },
  setup() {
    const router = useRouter()
    const { user } = getUser()

    watch(user, () => {
      if (!user.value)  {
        router.push({ name: 'Welcome'})
      }
    })
  }
}
</script>

<style>

</style>