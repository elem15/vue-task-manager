import { createStore } from 'vuex';
import VuexPersistence from 'vuex-persist';

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
});

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
    complete(state, { id }) {
      const task = state.tasks.find((task) => task.id === id);
      task.complete = !task.complete;
    },
    update(state, { task }) {
      const index = state.tasks.findIndex((t) => t.id === task.id);
      state.tasks.splice(index, 1, task);
    }
  },
  getters: {
    taskById: (state) => (id) => {
      const task = state.tasks.find((task) => task.id == id);
      return task;
    }
  },
  plugins: [vuexLocal.plugin],
});