<template>
  <div>
    <div id="todos">
      <ul>
        <li
          v-for="todo in todos"
          :key="todo.id"
          @click="toggle(todo.id)"
          :class="{'completed': todo.completed_at}"
        >
          <span v-if="todo.completed_at">✅</span>
          <span v-else>⭕️</span>
          {{todo.text}}
        </li>
      </ul>

      <form @submit.prevent="addNewTodo">
        <input type="text" v-model="newtodo" :disabled="isAddedNew" />
        <button type="submit" :disabled="isAddedNew">EKLE</button>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      newtodo: "",
      todos: [],
      isAddedNew: false
    };
  },
  methods: {
    toggle(id) {
      const todoIndex = this.todos.findIndex(item => item.id == id);
      console.log(id);
      console.log(todoIndex);
      if (todoIndex == -1) return false;
      console.log("tıklanan id" + id);
      axios
        .put("http://firstproject.local/api/todos/" + id + "/toggle")
        .then(response => {
          this.todos[todoIndex].completed_at = response.data.completed_at;
        })
        .catch(response => {
          console.error(response);
        });

      //if (thid.todos[todoIndex].completed_at == null) {
      //this.todos[todoIndex].completed_at = new Date();
      ////} else {
      //  this.todos[todoIndex].completed_at = null;
      //}

      // this.todos[todoIndex].is_done = !this.todos[todoIndex].is_done;
    },

    getTodos() {
      axios
        .get("http://firstproject.local/api/todos")
        .then(response => {
          this.todos = response.data;
          /*           this.todos.forEach(element => {
            console.log(element);
          }); */
        })
        .catch(response => {
          console.error(response);
        });
    },
    addNewTodo() {
      if (this.newtodo.length < 3) return false;
      this.isAddedNew = true;
      axios
        .post("http://firstproject.local/api/todos", {
          todo: this.newtodo
        })
        .then(response => {
          this.todos.unshift(response.data);
          this.newtodo = "";
        })
        .catch(response => {
          console.error(response.error);
        })
        .then(() => {
          this.isAddedNew = false;
        });
    }
  },
  beforeMount() {
    this.getTodos();
  }
};
</script>
