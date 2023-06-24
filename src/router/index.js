import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import TasksView from '../views/TasksView.vue';
import NewTaskView from '../views/NewTaskView.vue';
import EditTaskView from '../views/EditTaskView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: TasksView
    },
    {
      path: '/new-task',
      name: 'new-task',
      component: NewTaskView
    },
    {
      path: '/edit/:id',
      name: 'EditTaskView',
      component: EditTaskView,
      props: true
    },
  ]
});

export default router;
