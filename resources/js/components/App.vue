<template>
  <div>
    <login-page v-if="!token"></login-page>
    <todo-list v-else></todo-list>
  </div>
</template>

<script>
/* import LoginPage from "./Login.vue";
import TodoListPage from "./TodoList.vue"; */

export default {
 /*   components: {
    "login-page": LoginPage,
    "todo-list": TodoListPage
  }, */
  /* computed :{
    token() {
      return this.$store.state.token;
    }
  },  */
};
</script>
