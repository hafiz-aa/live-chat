<template>
  <nav>
    <div>
      <p>Hey there... displayName here</p>
      <p class="email">Currently logged in as... email</p>
    </div>
    <button>Log out</button>
  </nav>
</template>

<script>
export default {

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