<!-- <template>
    <div>
      <van-form>
        <van-field v-model="username" label="Username" placeholder="Enter username" />
        <van-field v-model="password" type="password" label="Password" placeholder="Enter password" />
        <div style="margin: 16px;">
          <van-button type="primary" @click="handleLogin">Login</van-button>
        </div>
      </van-form>
    </div>
</template>
  
<script setup lang='ts'>
    import { ref } from 'vue'

    const username = ref('')
    const password = ref('')

    const handleLogin = () => {
    // handle login logic here
    }
</script> -->
<!-- <template>
    <div class="login-container">
      <van-form>
        <van-field v-model="username" label="Username" placeholder="Enter username" />
        <van-field v-model="password" type="password" label="Password" placeholder="Enter password" />
        <div class="login-button">
          <van-button type="primary" @click="handleLogin">Login</van-button>
        </div>
      </van-form>
    </div>
</template>

<script setup lang='ts'>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router';
  const username = ref('')
  const password = ref('')
  const router = useRouter()

  const handleLogin = () => {
    // handle login logic here
    if(username.value === 'admin'){
         router.push('A3')
    }
    // router.push('A3')
  }
  </script>
  
  <style scoped>
  .login-container {
    padding: 16px;
  }
  
  .login-button {
    margin-top: 16px;
  }
</style> -->
<template></template>
<script></script>
<!-- ============================================================================================ -->


