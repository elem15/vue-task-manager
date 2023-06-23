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
    }
  }
});