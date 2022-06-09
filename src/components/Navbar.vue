<template>
  <nav>
    <div>
      <p>Hey there... displayName here</p>
      <p class="email">Currently logged in as... email</p>
    </div>
    <button @click="handleClick">Log out</button>
  </nav>
</template>

<script>
import useLogout from '../composables/useLogout.js'

export default {
  setup() {
    const { logout, error } = useLogout()

    const handleClick = async () => {
      await logout()
      if(!error.value){
        console.log('user log out')
      }
    }
    return { handleClick }
  }
}
</script>

<style>
nav {
    padding: 20px;
    border-bottom: 0px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  nav p {
    margin: 2px auto;
    font-size: 16px;
    color: #444;
  }
  nav p.email {
    font-size: 14px;
    color: #999;
  }
</style>