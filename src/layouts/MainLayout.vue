<template>
  <q-img src="../assets/neutro.jpg" class="wave" alt="wave" />
  <q-layout class="q-px-xl">
    <div class="q-pa-md">
      <q-card class="bg-pink-13" style="height: 100px"> </q-card>
    </div>
    <div class="row">
      <div class="col-10 col-md-4">
        <div>
          <q-card class="q-mb-md text-white bg-grey-9 borda">
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
                <q-separator color="white"></q-separator>
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

          <q-card
            v-for="link in linksList"
            :key="link.title"
            class="q-mb-sm borda"
          >
            <q-list>
              <q-item
                class="text-white bg-grey-9 borda"
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
          </q-card>
        </div>
      </div>
      <q-page-container class="col-12 col-md-8 q-px-lg q-pt-lg">
        <router-view />
      </q-page-container>
    </div>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

const linksList = [
  {
    title: "Dashboard",
    icon: "mdi-view-dashboard-variant",
    to: "/",
  },
  {
    title: "Ranking",
    icon: "code",
    to: { nome: "home" },
  },
  {
    title: "Fase de Grupo",
    icon: "chat",
    to: "/fase-grupo",
  },
  {
    title: "Eliminatorias",
    icon: "record_voice_over",
    to: { nome: "home" },
  },
];

export default defineComponent({
  name: "MainLayout",

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      linksList,
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
.borda {
  border-radius: 20px;
}
</style>
