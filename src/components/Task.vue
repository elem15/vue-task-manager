<template>
  <div class="task" :class="{ complete: task.complete }">
    <div class="actions">
      <h3 @click="detailsView = !detailsView">{{ task.title }}</h3>
      <div class="icons">
        <span class="icons tick" @click="handleComplete"> ✔ </span>
        <span class="icons" @click="handleEdit"> 🧾 </span>
        <span class="icons del" @click="handleDelete"> ❌ </span>
      </div>
    </div>
    <div class="details" v-if="detailsView">
      <p>{{ task.details }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["task"],
  data() {
    return {
      detailsView: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsView = !this.detailsView;
    },
    handleDelete() {
      this.$store.commit('delete', { id: this.task.id });
    },
    handleComplete() {
      this.$store.commit('complete', { id: this.task.id });
    },
    handleEdit() {
      this.$router.push({
        name: "EditTaskView",
        params: { id: this.task.id },
      });
    },
  },
};
</script>

<style>
.task {
  margin: 20px 0;
  background: white;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
  border-left: 4px solid #e90074;
}

.task.complete {
  border-left: 4px solid #4200e9;
}

.task.complete .tick {
  color: #4200e9;
}

h3 {
  cursor: pointer;
}

.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.icons {
  margin-left: 10px;
  font-size: 24px;
  color: #bbb;
  cursor: pointer;
}

.icons.del {
  font-size: 20px;
}

.icons:hover {
  color: #777;
}
</style>