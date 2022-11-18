<template>
  <q-page v-if="show">
    <q-card
      class="q-px-sm borda q-mb-xl bg-grey-box shadow-10"
      style="height: 20 px"
    >
      <q-card-section>
        <div class="row justify-center">
          <div class="text-white" style="font-size: 30px">Fase de Grupo</div>
        </div>
      </q-card-section>
    </q-card>
    <q-card
      v-for="jogo in jogos2"
      :key="jogo.id"
      style="height: 140px"
      class="border bg-grey-9 borda text-white q-mb-md"
    >
      <div class="row">
        <div class="row col-8">
          <div class="q-pl-lg q-pt-sm">Grupo {{ jogo.grupo }}</div>

          <div class="col-8 col-md-12 q-pt-lg">
            <div class="row">
              <div class="col-4 row justify-end">
                <div>
                  <span class="q-pr-sm">{{ jogo.time1_nome }}</span>
                  <q-avatar class="shadow-12">
                    <q-img :src="jogo.time1_imgURL" />
                  </q-avatar>
                </div>
              </div>
              <div class="col-4 row justify-center items-center">
                <div class="q-mr-md">
                  <q-input
                    outlined
                    dense
                    input-class="text-center"
                    bg-color="white"
                    style="width: 40px"
                    v-model="text"
                    placeholder="0"
                  />
                </div>
                x
                <div class="q-ml-md">
                  <q-input
                    outlined
                    dense
                    input-class="text-center"
                    bg-color="white"
                    style="width: 40px"
                    v-model="text"
                    placeholder="0"
                  />
                </div>
              </div>

              <div class="col-4">
                <q-avatar class="shadow-12">
                  <q-img :src="jogo.time2_imgURL" />
                </q-avatar>
                <span class="q-pl-sm"> {{ jogo.time2_nome }} </span>
              </div>
            </div>
          </div>
        </div>

        <q-separator class="q-mt-md" vertical spaced="8px" color="white" />

        <q-card-section
          class="col-3 column q-pt-xl justify-center items-center"
        >
          <div>{{ jogo.data }}</div>
          <div>{{ jogo.hora }}</div>
        </q-card-section>
      </div>
    </q-card>
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import { defineComponent } from "vue";
import { api } from "../../boot/axios";
const $q = useQuasar();

export default defineComponent({
  name: "GrupoPage",

  data() {
    return {
      jogos2: [],
      text: "",
      show: false,
    };
  },

  methods: {
    getJogos() {
      api
        .get("/jogos-grupos")
        .then((response) => {
          this.jogos2 = response.data;
          this.show = true;
        })
        .catch(() => {
          console.log("nao de");
        });
    },
  },

  beforeMount() {
    this.getJogos();
  },
});
</script>

<style scoped>
.borda {
  border-radius: 20px;
}
</style>
