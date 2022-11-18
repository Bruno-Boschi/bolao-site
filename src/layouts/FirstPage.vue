<template>
  <q-img src="../assets/neutro.jpg" class="wave" alt="login-wave" />

  <!-- DESKTOP -->
  <q-toolbar
    class="bg-teste opacidade text-white shadow-12"
    style="height: 10vh"
    v-if="!$q.screen.lt.sm"
  >
    <div class="q-pl-lg">BEM VINDO</div>
    <q-space />
    <q-form
      class="q-gutter-md row q-pr-lg"
      v-bind:class="{
        'justify-center': $q.screen.md || $q.screen.sm || $q.screen.xs,
      }"
      @submit.prevent="submitForm"
    >
      <q-input
        label="Username"
        outlined
        dense
        rounded
        bg-color="white"
        v-model="username"
      >
      </q-input>
      <q-input
        label="Password"
        outlined
        dense
        rounded
        bg-color="white"
        type="password"
        v-model="password"
      >
      </q-input>
      <div class="justify-center">
        <q-btn
          class="full-width"
          color="primary"
          type="submit"
          label="Login"
          rounded
        ></q-btn>
      </div>
    </q-form>
  </q-toolbar>

  <!-- MOBILE -->
  <q-toolbar
    class="bg-teste opacidade text-white shadow-12"
    style="height: 25vh"
    v-if="$q.screen.lt.sm"
  >
    <q-form class=" " @submit.prevent="submitForm">
      <div class="row justify-center">
        <div class="q-pb-md">
          <q-input
            style="width: 250px"
            label="Username"
            outlined
            dense
            rounded
            bg-color="white"
            v-model="username"
          >
          </q-input>
        </div>
        <div class="q-pb-md">
          <q-input
            style="width: 250px"
            label="Password"
            outlined
            dense
            rounded
            bg-color="white"
            type="password"
            v-model="password"
          >
          </q-input>
        </div>
      </div>

      <div class="row justify-center">
        <q-btn
          color="primary"
          style="width: 250px"
          type="submit"
          label="Login"
          rounded
        ></q-btn>
      </div>
    </q-form>
  </q-toolbar>

  <div class="row" style="height: 90vh">
    <div
      class="col-12 col-md-3 flex justify-center content-center"
      v-bind:style="
        $q.screen.lt.sm || $q.screen.lt.md ? { display: 'none' } : {}
      "
    >
      <!-- <q-img
        src="../assets/15635386_5637956-removebg-preview.png"
        class="responsive"
        alt="login-image"
      /> -->
    </div>
    <div class="col-12 col-md-9 flex content-center justify-center">
      <q-card
        v-bind:style="
          $q.screen.lt.sm
            ? { width: '80%', height: '80%' }
            : { width: '50%', height: '80%' }
        "
        v-bind:class="{
          'justify-center': $q.screen.md || $q.screen.sm || $q.screen.xs,
        }"
      >
        <q-card-section>
          <div class="q-pt-lg">
            <div class="col flex justify-center">
              <h2 class="text-h2 text-uppercase q-my-none text-weight-regular">
                Venha participar do nosso bolão Join Ads
              </h2>
            </div>
          </div>
        </q-card-section>
        <q-card-section> </q-card-section>
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
      this.$q.loading.show({
        delay: 200, // ms
      });
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
          this.$q.loading.hide();
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
