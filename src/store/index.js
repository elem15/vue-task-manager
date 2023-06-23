import { createStore } from 'vuex';

export const store = createStore({
  state() {
    return {
      tasks: []
    };
  },
  mutations: {
    add(state, { task }) {
      state.tasks.push(task);
    },
    delete(state, { id }) {
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
    update(state, { id }) {
      const task = state.tasks.find((task) => task.id === id);
      task.complete = !task.complete;
    },
  }
});