<template>
  <div class="home">
    <div v-if="tasks.length">
      <div v-for="task in tasks" :key="task.id">
        <Task :task="task" />
      </div>
    </div>
  </div>
</template>

<script>
import Task from "../components/Task.vue";

export default {
  name: "TaskView",
  components: {
    Task,
  },
  computed: {
    tasks() { return this.$store.state.tasks; },
  },
};
</script>

