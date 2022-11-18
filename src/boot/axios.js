import { boot } from "quasar/wrappers";
import axios from "axios";

import { LocalStorage, Notify } from "quasar";
// import { usuarioStore } from "src/stores/usuario";
import { Cookies } from "quasar";
import { router } from "src/router";

const api = axios.create({ baseURL: "http://192.168.3.7:8000/api" });

api.interceptors.request.use(
  function (config) {
    const token = LocalStorage.getItem("token");
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default boot(({ app }) => {
  app.config.globalProperties.$axios = axios;
  app.config.globalProperties.$api = api;

  // const user_store = usuarioStore();

  const responseInterceptor = (response) => {
    switch (response.status) {
      case 200:
        router.push({ path: "/painel" });
        // if (response.data.action === "update" && !response.data.no_toast) {
        //   Notify.create({
        //     type: "positive",
        //     message: "Atualizado com sucesso!",
        //   });
        // }

        // if (response.data.action === "delete" && !response.data.no_toast) {
        //   Notify.create({
        //     type: "positive",
        //     message: "Deletado com sucesso!",
        //   });
        // }
        break;
      case 201:
        // if (response.data.action === "create" && !response.data.no_toast) {
        //   Notify.create({
        //     type: "positive",
        //     message: "Criado com sucesso!",
        //   });
        // }
        break;
      default:
    }

    return response;
  };

  const errorInterceptor = (error) => {
    if (!error.response) {
      Notify.create({
        type: "negative",
        message: "Sem conexão com o servidor",
      });

      if (router.currentRoute.path != "/login") {
        user_store.logOut();
      }
      return;
    }

    switch (error.response.status) {
      case 400:
        Notify.create({
          type: "negative",
          message: error.response.data.message,
        });
        break;

      case 401:
        Notify.create({
          type: "negative",
          message: error.response.data.message,
        });

        if (router.currentRoute.path != "/login") {
          user_store.logOut();
        }

        break;

      case 403:
        Notify.create({
          type: "negative",
          message: error.response.data.message,
        });
        // router.push({ path: "/home" });
        break;

      case 422: {
        const result = error.response.data.result;

        Object.keys(result).forEach((key) => {
          Notify.create({
            type: "negative",
            message: result[key][0],
          });
        });
        break;
      }

      case 404: {
        Notify.create({
          type: "negative",
          message: error.response.data.message,
        });
        break;
      }
      case 406: {
        break;
      }
      case 409: {
        break;
      }

      default:
        Notify.create({
          type: "negative",
          message: "Erro no servidor, tente novamente mais tarde!",
        });
    }

    return Promise.reject(error);
  };

  api.interceptors.response.use(responseInterceptor, errorInterceptor);
});

/**
 * * Se esta usando Options Api, consegue acessar com this.$api ou this.$axios
 * * Se esta usando setup, tem que importar a api esse arquivo dentro do componente
 * import { api } from "boot/axios";
 */

export { api };
