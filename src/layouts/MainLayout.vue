<template>
  <q-img
    src="../assets/football-g90d3aab53_1920.jpg"
    class="wave"
    alt="login-wave"
  />
  <q-layout class="q-px-xl">
    <div class="q-pa-xl">
      <q-card class="bg-pink-13" style="height: 100px"> </q-card>
    </div>
    <div class="row q-px-xl">
      <div class="col-10 col-md-4 bg-red">
        <div>
          <q-card class="q-mb-md">
            <q-card-section>
              <q-avatar size="100px" class="absolute-center shadow-10">
                <img src="https://cdn.quasar.dev/img/avatar.png" alt="avatar" />
              </q-avatar>
            </q-card-section>
            <q-card-section>
              <div class="q-pt-lg">
                <div class="q-py-sm col text-h6 ellipsis flex justify-center">
                  Bruno Boschi
                </div>
                <q-separator></q-separator>
                <div class="row q-py-md justify-between">
                  <div class="col-4 text-center">
                    <div>1</div>
                    <div>Ranking</div>
                  </div>
                  <div class="col-4 text-center">
                    <div>231231213</div>
                    <div>Pontos</div>
                  </div>
                </div>
              </div>
            </q-card-section>
          </q-card>

          <q-card></q-card>
        </div>
      </div>
      <q-page-container
        class="col-12 col-md-8 flex content-center justify-center bg-blue"
      >
        <router-view />
      </q-page-container>
    </div>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Dashboard",
    icon: "mdi-view-dashboard-variant",
    route: { nome: "home" },
  },
  {
    title: "Ranking",
    icon: "code",
    route: { nome: "home" },
  },
  {
    title: "Fase de Grupo",
    icon: "chat",
    route: { nome: "home" },
  },
  {
    title: "Eliminatorias",
    icon: "record_voice_over",
    route: { nome: "home" },
  },
];

export default defineComponent({
  name: "MainLayout",

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
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
</style>
