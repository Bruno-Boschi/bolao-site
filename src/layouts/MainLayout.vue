<template>
  <q-img src="../assets/neutro.jpg" class="wave" alt="wave" />
  <q-layout class="q-px-xl" style="height: 100vh" v-if="show">
    <div class="q-px-sm q-py-md q-px-xl">
      <q-img src="../assets/bg.jpg" class="borda" style="height: 100px">
      </q-img>
    </div>
    <div class="row q-px-xl">
      <div class="col-10 col-md-4">
        <q-card class="q-mb-md text-white bg-grey-9 borda">
          <q-card-section>
            <q-avatar size="100px" class="absolute-center shadow-10">
              <img
                src="https://img.freepik.com/psd-gratuitas/copa-do-mundo-do-catar_187299-11254.jpg?w=826&t=st=1669128178~exp=1669128778~hmac=bf54072d19d947d061719ee32c25aaf90ff0590e937415154138ef663a89d9ce"
                alt="avatar"
              />
            </q-avatar>
          </q-card-section>
          <q-card-section>
            <div class="q-pt-lg">
              <div class="q-py-sm col text-h6 ellipsis flex justify-center">
                {{ usuario.name }}
              </div>
              <q-separator color="white"></q-separator>
              <div class="row q-py-md justify-between">
                <div class="col-4 text-center">
                  <div>{{ usuario.rank ? usuario.rank : 0 }}</div>
                  <div>Ranking</div>
                </div>
                <div class="col-4 text-center">
                  <div>{{ usuario.pontos ? usuario.pontos : 0 }}</div>
                  <div>Pontos</div>
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>

        <q-list>
          <q-item
            v-for="link in linksList"
            :key="link.title"
            class="text-white bg-grey-9 q-mb-sm borda"
            clickable
            :to="link.to"
            exact
          >
            <q-item-section avatar>
              <q-icon :name="link.icon" />
            </q-item-section>
            <q-item-section>{{ link.title }}</q-item-section>
          </q-item>
        </q-list>
      </div>
      <q-page-container class="col-12 col-md-8 q-px-lg q-pb-lg">
        <router-view />
      </q-page-container>
    </div>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useQuasar } from "quasar";
import { api } from "../boot/axios";
const $q = useQuasar();

const linksList = [
  {
    title: "Dashboard",
    icon: "mdi-view-dashboard-variant",
    to: "/painel/dashboard",
  },
  {
    title: "Ranking",
    icon: "code",
    to: "/painel/ranking",
  },
  {
    title: "Fase de Grupo",
    icon: "chat",
    to: "/painel/fase-grupo",
  },
  {
    title: "Eliminatorias",
    icon: "record_voice_over",
    to: "/painel/fase-eliminatorias",
  },
];

export default defineComponent({
  name: "MainLayout",

  data() {
    const leftDrawerOpen = ref(false);

    return {
      linksList,
      leftDrawerOpen,
      usuario: {},
      show: false,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },

  methods: {
    getUsers() {
      this.$q.loading.show();
      api
        .get("/user")
        .then((response) => {
          this.usuario = response.data;
          this.show = true;
          this.$q.loading.hide();
        })
        .catch(() => {
          console.log("nao deu");
          this.show = true;
          this.$q.loading.hide();
        });
    },
  },

  mounted() {
    this.getUsers();
  },
});
</script>

<style scoped>
.wave {
  position: fixed;
  height: 100%;
  left: 0;
  bottom: 0;
  z-index: -1;
}
.borda {
  border-radius: 20px;
}
</style>
