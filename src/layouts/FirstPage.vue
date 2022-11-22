<template>
  <q-img src="../assets/neutro.jpg" class="wave" alt="login-wave" />
  <q-img src="../assets/—Png.png" class="q-ml-lg boneco" alt="login-image" />

  <!-- DESKTOP -->
  <q-toolbar
    class="bg-teste text-white shadow-12"
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

  <div style="height: 75vh" v-if="!$q.screen.lt.sm">
    <div class="q-pt-xl flex justify-center">
      <q-card
        class="shadow-10 card text-white"
        style="width: 500px; height: 75vh"
      >
        <q-card-section>
          <div class="q-pt-lg">
            <div class="col flex justify-center text-h3">BOLÃO JOIN ADS</div>
          </div>
        </q-card-section>
        <q-card-section> VENHA PARTICIPAR DO NOSSO BOLAO </q-card-section>
        <q-card-section> JUNTE PONTOS </q-card-section>
        <q-card-section> SEJA O MELHOR </q-card-section>
        <q-card-section> UMA GRANDE SURPRESA TE ESPERA</q-card-section>
      </q-card>
    </div>
  </div>
  <!-- FIM DESK -->

  <!-- MOBILE -->
  <q-toolbar
    class="bg-teste text-white shadow-12"
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

  <div style="height: 70vh" v-if="$q.screen.lt.sm">
    <div class="q-pt-md flex justify-center">
      <q-card
        style="width: 80%; height: 70vh"
        class="shadow-10 card text-white"
      >
        <q-card-section>
          <div class="q-pt-lg">
            <div class="col flex justify-center text-h5">BOLÃO JOIN ADS</div>
          </div>
        </q-card-section>
        <q-card-section> VENHA PARTICIPAR DO NOSSO BOLAO </q-card-section>
        <q-card-section> JUNTE PONTOS </q-card-section>
        <q-card-section> SEJA O MELHOR </q-card-section>
        <q-card-section> UMA GRANDE SURPRESA TE ESPERA</q-card-section>
      </q-card>
    </div>
  </div>
  <!-- FIM MOBILE -->
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

.boneco {
  position: fixed;
  top: 0;
  right: 0;
  z-index: -1;
}

.card {
  font-family: "Lucida Console", Monaco, monospace;
  border-radius: 16px 16px 16px 16px;
  -moz-border-radius: 16px 16px 16px 16px;
  -webkit-border-radius: 16px 16px 16px 16px;
  border: 1px solid #000000;
  opacity: 0.9;
  background: linear-gradient(to right, #781645 41%, #2b0e1c 100%);
}
</style>
