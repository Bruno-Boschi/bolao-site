<template>
  <q-img src="../assets/wave.jpg" class="wave" alt="login-wave" />
  <div class="row" style="height: 90vh">
    <div class="col-0 col-md-6 flex justify-center content-center">
      <!-- <q-img
        src="../assets/15635386_5637956-removebg-preview.png"
        class="responsive"
        alt="login-image"
      /> -->
    </div>
    <div
      v-bind:class="{
        'justify-center': $q.screen.md || $q.screen.sm || $q.screen.xs,
      }"
      class="col-12 col-md-6 flex content-center"
    >
      <q-card
        v-bind:style="$q.screen.lt.sm ? { width: '80%' } : { width: '50%' }"
      >
        <q-card-section>
          <q-avatar size="120px" class="absolute-center shadow-10">
            <img src="../assets/lock.png" alt="avatar" />
          </q-avatar>
        </q-card-section>
        <q-card-section>
          <div class="q-pt-lg">
            <div class="col text-h6 ellipsis flex justify-center">
              <h2 class="text-h2 text-uppercase q-my-none text-weight-regular">
                Login
              </h2>
            </div>
          </div>
        </q-card-section>
        <q-card-section>
          <q-form class="q-gutter-md" @submit.prevent="submitForm">
            <q-input label="Username" v-model="username"> </q-input>
            <q-input label="Password" type="password" v-model="password">
            </q-input>
            <div>
              <q-btn
                class="full-width"
                color="primary"
                type="submit"
                label="Login"
                rounded
              ></q-btn>

              <div class="text-center q-mt-sm q-gutter-lg">
                <router-link class="text-white" to="/login"
                  >Esqueceu a senha?</router-link
                >
                <router-link class="text-white" to="/login"
                  >Criar conta</router-link
                >
              </div>
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import { useQuasar } from "quasar";
import { api } from "../boot/axios";
import { LocalStorage } from "quasar";
import router from "src/router";

const $q = useQuasar();

export default {
  name: "FirstPage",
  data() {
    return {
      username: "caio@caionorder.com",
      password: "iconeSenna88@",
    };
  },

  methods: {
    submitForm() {
      this.$q.loading.show();
      api
        .post("/auth", {
          email: this.username,
          password: this.password,
        })
        .then((response) => {
          let token = response.data.token;
          LocalStorage.set("token", token);
          this.$q.loading.hide();
          router.push({ path: "/painel" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  // mounted() {
  //
  // },
};
</script>

<style escoped>
.wave {
  position: fixed;
  height: 100%;
  left: 0;
  bottom: 0;
  z-index: -1;
}
</style>
