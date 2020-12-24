import Vue from "vue";
import Router from "vue-router";
import HomePage from "../Pages/HomePage";
import PeoplePage from "../Pages/PeoplePage";
import FilmsPage from '../Pages/FilmsPage'
import AboutPage from '../Pages/AboutPage'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage,
    },
    {
      path: "/people",
      name: "PeoplePage",
      component: PeoplePage,
    },
    {
      path: "/films",
      name: "FilmsPage",
      component: FilmsPage,
    },
    {
      path: "/about",
      name: "AboutPage",
      component: AboutPage,
    },
  ],
});
