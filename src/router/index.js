import { route } from "quasar/wrappers";
import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import routes from "./routes";
import { Notify } from "quasar";
import { Cookies } from "quasar";

// import { usuarioStore } from "src/stores/usuario.js";

const createHistory = process.env.SERVER
  ? createMemoryHistory
  : process.env.VUE_ROUTER_MODE === "history"
  ? createWebHistory
  : createWebHashHistory;

const router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  routes,
  history: createHistory(process.env.VUE_ROUTER_BASE),
});

export default route(function ({ store /*, ssrContext */ }) {
  router.beforeEach(async (to, from, next) => {
    document.title = "Join Ads";

    const token = Cookies.get("token");
    // const current_route = Cookies.get("current_route");

    if (to.matched.some((record) => record.meta.requireAuth)) {
      if (!token) {
        Notify.create({
          type: "negative",
          message: "Nao autorizado",
        });
        next("/login");
      } else {
        // const user_store = usuarioStore(store);
        // await user_store.getUsuario();

        next();
      }
    } else {
      if (to.fullPath == "/login") {
        if (token) {
          next("/");
        } else {
          next();
        }
      } else {
        next();
      }
    }
  });

  router.afterEach((to, from) => {
    if (to.fullPath != "/login") {
      Cookies.set("current_route", to.path, { expires: "3d" });
    }
    Cookies.set("last_route", from.path, { expires: "3d" });
  });

  return router;
});

export { router };
