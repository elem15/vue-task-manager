<template>
  <main>
    <h1>ADD NEW TASK</h1>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="">Title</label>
        <input type="text" v-model="title" required />
      </div>
      <div>
        <label for="">Details</label>
        <textarea v-model="details" required />
      </div>
      <div class="button-wrapper">
        <button>Add task</button>
      </div>
    </form>
  </main>
</template>

<script>
export default {
  name: "NewTaskForm",
  data() {
    return {
      title: "",
      details: "",
    };
  },
  methods: {
    handleSubmit() {
      this.$store.commit('add', {
        task: {
          id: new Date().getTime(),
          title: this.title,
          details: this.details,
          complete: false,
        }
      });
      this.title = "";
      this.details = "";
    },
  },
};
</script>

<style scoped>
main {
  max-width: 600px;
  margin: 0 auto;
}

h1 {
  font-size: 1rem;
  font-weight: 500;
  margin: 10px 30px;
  margin-top: 0.5rem;
  color: #022762;
}

form {
  background: white;
  padding: 0 30px;
  border-radius: 10px;
}

label {
  display: block;
  color: #bbb;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 20px 0 10px 0;
}

input {
  padding: 10px;
  border: 0;
  border-bottom: 1px solid #ddd;
  width: 100%;
  box-sizing: border-box;
}

textarea {
  border: 1px solid #ddd;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  height: 100px;
}

button {
  display: block;
  margin: 20px 0 0;
  background: #033687;
  color: white;
  padding: 10px;
  border: 0;
  border-radius: 2rem;
  font-size: 1rem;
  cursor: pointer;
}

button:hover {
  background: #164ea7;
}

button:active {
  background: #0b1e3d;
}

.button-wrapper {
  text-align: right;
  display: flex;
  justify-content: right;
  align-items: end;
}
</style>
