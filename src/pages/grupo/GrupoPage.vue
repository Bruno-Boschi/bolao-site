<template>
  <div>
    <q-card
      class="q-px-sm borda q-mb-xl bg-grey-box shadow-10"
      style="height: 9vh"
    >
      <q-card-section>
        <div class="row justify-between">
          <div></div>
          <div class="text-white" style="font-size: 30px">Fase de Grupo</div>

          <div>
            <q-btn class="botao" color="teste" @click="simuleResquest">
              Palpitar
            </q-btn>
          </div>
        </div>
      </q-card-section>
    </q-card>

    <div class="scrolling">
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
                      rounded
                      dense
                      input-class="text-center"
                      bg-color="white"
                      style="width: 2.3rem"
                      v-model="jogo.gols_time1"
                      placeholder="0"
                    />
                  </div>
                  x
                  <div class="q-ml-md">
                    <q-input
                      outlined
                      rounded
                      dense
                      input-class="text-center"
                      bg-color="white"
                      style="width: 2.3rem"
                      v-model="jogo.gols_time2"
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
    </div>
  </div>
</template>

<script>
import { useQuasar } from "quasar";
import { defineComponent } from "vue";
import { api } from "../../boot/axios";
const $q = useQuasar();

const jogos2 = [
  {
    id: 1,
    time1_id: 1,
    gols_time1: 0,
    time2_id: 2,
    gols_time2: 0,
    data: "Domingo - 20/11",
    hora: "13:00",
    time1_nome: "Catar",
    time1_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197618.png",
    grupo: "A",
    time2_nome: "Equador",
    time2_imgURL: "https://cdn-icons-png.flaticon.com/512/4854/4854969.png",
  },
  {
    id: 2,
    time1_id: 5,
    gols_time1: 0,
    time2_id: 6,
    gols_time2: 0,
    data: "Segunda - 21/11",
    hora: "10:00",
    time1_nome: "Inglaterra",
    time1_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197485.png",
    grupo: "B",
    time2_nome: "Irã",
    time2_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197574.png",
  },
  {
    id: 3,
    time1_id: 3,
    gols_time1: 0,
    time2_id: 4,
    gols_time2: 0,
    data: "Segunda - 21/11",
    hora: "13:00",
    time1_nome: "Senegal",
    time1_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197377.png",
    grupo: "A",
    time2_nome: "Holanda",
    time2_imgURL: "https://cdn-icons-png.flaticon.com/512/6157/6157397.png",
  },
  {
    id: 4,
    time1_id: 7,
    gols_time1: 0,
    time2_id: 8,
    gols_time2: 0,
    data: "Segunda - 21/11",
    hora: "16:00",
    time1_nome: "Estados Unidos",
    time1_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197484.png",
    grupo: "B",
    time2_nome: "Gales",
    time2_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197620.png",
  },
  {
    id: 5,
    time1_id: 9,
    gols_time1: 0,
    time2_id: 10,
    gols_time2: 0,
    data: "Terça - 22/11",
    hora: "07:00",
    time1_nome: "Argentina",
    time1_imgURL: "https://cdn-icons-png.flaticon.com/512/5315/5315710.png",
    grupo: "C",
    time2_nome: "Arábia Saudita",
    time2_imgURL: "https://cdn-icons-png.flaticon.com/512/5111/5111777.png",
  },
  {
    id: 6,
    time1_id: 13,
    gols_time1: 0,
    time2_id: 14,
    gols_time2: 0,
    data: "Terça - 22/11",
    hora: "10:00",
    time1_nome: "Dinamarca",
    time1_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197565.png",
    grupo: "D",
    time2_nome: "Tunísia",
    time2_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197624.png",
  },
  {
    id: 7,
    time1_id: 11,
    gols_time1: 0,
    time2_id: 12,
    gols_time2: 0,
    data: "Terça - 22/11",
    hora: "13:00",
    time1_nome: "México",
    time1_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197397.png",
    grupo: "C",
    time2_nome: "Polônia",
    time2_imgURL: "https://cdn-icons-png.flaticon.com/512/4628/4628690.png",
  },
  {
    id: 8,
    time1_id: 15,
    gols_time1: 0,
    time2_id: 16,
    gols_time2: 0,
    data: "Terça - 22/11",
    hora: "16:00",
    time1_nome: "França",
    time1_imgURL: "https://cdn-icons-png.flaticon.com/512/5921/5921991.png",
    grupo: "D",
    time2_nome: "Austrália",
    time2_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197507.png",
  },
  {
    id: 9,
    time1_id: 21,
    gols_time1: 0,
    time2_id: 22,
    gols_time2: 0,
    data: "Quarta - 23/11",
    hora: "07:00",
    time1_nome: "Marrocos",
    time1_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197551.png",
    grupo: "F",
    time2_nome: "Croácia",
    time2_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197503.png",
  },
  {
    id: 10,
    time1_id: 17,
    gols_time1: 0,
    time2_id: 18,
    gols_time2: 0,
    data: "Quarta - 23/11",
    hora: "10:00",
    time1_nome: "Alemanha",
    time1_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197571.png",
    grupo: "E",
    time2_nome: "Japão",
    time2_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197604.png",
  },
  {
    id: 11,
    time1_id: 19,
    gols_time1: 0,
    time2_id: 20,
    gols_time2: 0,
    data: "Quarta - 23/11",
    hora: "13:00",
    time1_nome: "Espanha",
    time1_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197593.png",
    grupo: "E",
    time2_nome: "Costa Rica",
    time2_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197506.png",
  },
  {
    id: 12,
    time1_id: 23,
    gols_time1: 0,
    time2_id: 24,
    gols_time2: 0,
    data: "Quarta - 23/11",
    hora: "16:00",
    time1_nome: "Bélgica",
    time1_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197583.png",
    grupo: "F",
    time2_nome: "Canadá",
    time2_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197430.png",
  },
  {
    id: 13,
    time1_id: 25,
    gols_time1: 0,
    time2_id: 26,
    gols_time2: 0,
    data: "Quinta - 24/11",
    hora: "07:00",
    time1_nome: "Suíça",
    time1_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197540.png",
    grupo: "G",
    time2_nome: "Camarões",
    time2_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197531.png",
  },
  {
    id: 14,
    time1_id: 29,
    gols_time1: 0,
    time2_id: 30,
    gols_time2: 0,
    data: "Quinta - 24/11",
    hora: "10:00",
    time1_nome: "Uruguai",
    time1_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197599.png",
    grupo: "H",
    time2_nome: "Coreia do Sul",
    time2_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197582.png",
  },
  {
    id: 15,
    time1_id: 31,
    gols_time1: 0,
    time2_id: 32,
    gols_time2: 0,
    data: "Quinta - 24/11",
    hora: "13:00",
    time1_nome: "Portugal",
    time1_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197463.png",
    grupo: "H",
    time2_nome: "Gana",
    time2_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197381.png",
  },
  {
    id: 16,
    time1_id: 28,
    gols_time1: 0,
    time2_id: 29,
    gols_time2: 0,
    data: "Quinta - 24/11",
    hora: "16:00",
    time1_nome: "Sérvia",
    time1_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197602.png",
    grupo: "G",
    time2_nome: "Brasil",
    time2_imgURL: "https://cdn-icons-png.flaticon.com/512/7826/7826359.png",
  },
  {
    id: 17,
    time1_id: 8,
    gols_time1: 0,
    time2_id: 6,
    gols_time2: 0,
    data: "Sexta - 25/11",
    hora: "07:00",
    time1_nome: "Gales",
    time1_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197620.png",
    grupo: "B",
    time2_nome: "Irã",
    time2_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197574.png",
  },
  {
    id: 18,
    time1_id: 1,
    gols_time1: 0,
    time2_id: 3,
    gols_time2: 0,
    data: "Sexta - 25/11",
    hora: "10:00",
    time1_nome: "Catar",
    time1_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197618.png",
    grupo: "A",
    time2_nome: "Senegal",
    time2_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197377.png",
  },
  {
    id: 19,
    time1_id: 4,
    gols_time1: 0,
    time2_id: 2,
    gols_time2: 0,
    data: "Sexta - 25/11",
    hora: "13:00",
    time1_nome: "Holanda",
    time1_imgURL: "https://cdn-icons-png.flaticon.com/512/6157/6157397.png",
    grupo: "A",
    time2_nome: "Equador",
    time2_imgURL: "https://cdn-icons-png.flaticon.com/512/4854/4854969.png",
  },
  {
    id: 20,
    time1_id: 5,
    gols_time1: 0,
    time2_id: 7,
    gols_time2: 0,
    data: "Sexta - 25/11",
    hora: "16:00",
    time1_nome: "Inglaterra",
    time1_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197485.png",
    grupo: "B",
    time2_nome: "Estados Unidos",
    time2_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197484.png",
  },
  {
    id: 21,
    time1_id: 14,
    gols_time1: 0,
    time2_id: 16,
    gols_time2: 0,
    data: "Sabado - 26/11",
    hora: "07:00",
    time1_nome: "Tunísia",
    time1_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197624.png",
    grupo: "D",
    time2_nome: "Austrália",
    time2_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197507.png",
  },
  {
    id: 22,
    time1_id: 12,
    gols_time1: 0,
    time2_id: 10,
    gols_time2: 0,
    data: "Sabado - 26/11",
    hora: "10:00",
    time1_nome: "Polônia",
    time1_imgURL: "https://cdn-icons-png.flaticon.com/512/4628/4628690.png",
    grupo: "C",
    time2_nome: "Arábia Saudita",
    time2_imgURL: "https://cdn-icons-png.flaticon.com/512/5111/5111777.png",
  },
  {
    id: 23,
    time1_id: 15,
    gols_time1: 0,
    time2_id: 13,
    gols_time2: 0,
    data: "Sabado - 26/11",
    hora: "13:00",
    time1_nome: "França",
    time1_imgURL: "https://cdn-icons-png.flaticon.com/512/5921/5921991.png",
    grupo: "D",
    time2_nome: "Dinamarca",
    time2_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197565.png",
  },
  {
    id: 24,
    time1_id: 9,
    gols_time1: 0,
    time2_id: 11,
    gols_time2: 0,
    data: "Sabado - 26/11",
    hora: "16:00",
    time1_nome: "Argentina",
    time1_imgURL: "https://cdn-icons-png.flaticon.com/512/5315/5315710.png",
    grupo: "C",
    time2_nome: "México",
    time2_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197397.png",
  },
  {
    id: 25,
    time1_id: 18,
    gols_time1: 0,
    time2_id: 20,
    gols_time2: 0,
    data: "Domingo - 27/11",
    hora: "07:00",
    time1_nome: "Japão",
    time1_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197604.png",
    grupo: "E",
    time2_nome: "Costa Rica",
    time2_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197506.png",
  },
  {
    id: 26,
    time1_id: 23,
    gols_time1: 0,
    time2_id: 21,
    gols_time2: 0,
    data: "Domingo - 27/11",
    hora: "10:00",
    time1_nome: "Bélgica",
    time1_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197583.png",
    grupo: "F",
    time2_nome: "Marrocos",
    time2_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197551.png",
  },
  {
    id: 27,
    time1_id: 22,
    gols_time1: 0,
    time2_id: 24,
    gols_time2: 0,
    data: "Domingo - 27/11",
    hora: "13:00",
    time1_nome: "Croácia",
    time1_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197503.png",
    grupo: "F",
    time2_nome: "Canadá",
    time2_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197430.png",
  },
  {
    id: 28,
    time1_id: 19,
    gols_time1: 0,
    time2_id: 17,
    gols_time2: 0,
    data: "Domingo - 27/11",
    hora: "16:00",
    time1_nome: "Espanha",
    time1_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197593.png",
    grupo: "E",
    time2_nome: "Alemanha",
    time2_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197571.png",
  },
  {
    id: 29,
    time1_id: 26,
    gols_time1: 0,
    time2_id: 28,
    gols_time2: 0,
    data: "Segunda - 28/11",
    hora: "07:00",
    time1_nome: "Camarões",
    time1_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197531.png",
    grupo: "G",
    time2_nome: "Sérvia",
    time2_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197602.png",
  },
  {
    id: 30,
    time1_id: 30,
    gols_time1: 0,
    time2_id: 32,
    gols_time2: 0,
    data: "Segunda - 28/11",
    hora: "10:00",
    time1_nome: "Coreia do Sul",
    time1_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197582.png",
    grupo: "H",
    time2_nome: "Gana",
    time2_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197381.png",
  },
  {
    id: 31,
    time1_id: 27,
    gols_time1: 0,
    time2_id: 25,
    gols_time2: 0,
    data: "Segunda - 28/11",
    hora: "13:00",
    time1_nome: "Brasil",
    time1_imgURL: "https://cdn-icons-png.flaticon.com/512/7826/7826359.png",
    grupo: "G",
    time2_nome: "Suíça",
    time2_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197540.png",
  },
  {
    id: 32,
    time1_id: 31,
    gols_time1: 0,
    time2_id: 29,
    gols_time2: 0,
    data: "Segunda - 28/11",
    hora: "16:00",
    time1_nome: "Portugal",
    time1_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197463.png",
    grupo: "H",
    time2_nome: "Uruguai",
    time2_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197599.png",
  },
  {
    id: 33,
    time1_id: 2,
    gols_time1: 0,
    time2_id: 3,
    gols_time2: 0,
    data: "Terça - 29/11",
    hora: "12:00",
    time1_nome: "Equador",
    time1_imgURL: "https://cdn-icons-png.flaticon.com/512/4854/4854969.png",
    grupo: "A",
    time2_nome: "Senegal",
    time2_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197377.png",
  },
  {
    id: 34,
    time1_id: 4,
    gols_time1: 0,
    time2_id: 1,
    gols_time2: 0,
    data: "Terça - 29/11",
    hora: "12:00",
    time1_nome: "Holanda",
    time1_imgURL: "https://cdn-icons-png.flaticon.com/512/6157/6157397.png",
    grupo: "A",
    time2_nome: "Catar",
    time2_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197618.png",
  },
  {
    id: 35,
    time1_id: 7,
    gols_time1: 0,
    time2_id: 6,
    gols_time2: 0,
    data: "Terça - 29/11",
    hora: "16:00",
    time1_nome: "Estados Unidos",
    time1_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197484.png",
    grupo: "B",
    time2_nome: "Irã",
    time2_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197574.png",
  },
  {
    id: 36,
    time1_id: 8,
    gols_time1: 0,
    time2_id: 5,
    gols_time2: 0,
    data: "Terça - 29/11",
    hora: "16:00",
    time1_nome: "Gales",
    time1_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197620.png",
    grupo: "B",
    time2_nome: "Inglaterra",
    time2_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197485.png",
  },
  {
    id: 37,
    time1_id: 14,
    gols_time1: 0,
    time2_id: 15,
    gols_time2: 0,
    data: "Quarta - 30/11",
    hora: "12:00",
    time1_nome: "Tunísia",
    time1_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197624.png",
    grupo: "D",
    time2_nome: "França",
    time2_imgURL: "https://cdn-icons-png.flaticon.com/512/5921/5921991.png",
  },
  {
    id: 38,
    time1_id: 16,
    gols_time1: 0,
    time2_id: 13,
    gols_time2: 0,
    data: "Quarta - 30/11",
    hora: "12:00",
    time1_nome: "Austrália",
    time1_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197507.png",
    grupo: "D",
    time2_nome: "Dinamarca",
    time2_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197565.png",
  },
  {
    id: 39,
    time1_id: 12,
    gols_time1: 0,
    time2_id: 10,
    gols_time2: 0,
    data: "Quarta - 30/11",
    hora: "16:00",
    time1_nome: "Polônia",
    time1_imgURL: "https://cdn-icons-png.flaticon.com/512/4628/4628690.png",
    grupo: "C",
    time2_nome: "Arábia Saudita",
    time2_imgURL: "https://cdn-icons-png.flaticon.com/512/5111/5111777.png",
  },
  {
    id: 40,
    time1_id: 10,
    gols_time1: 0,
    time2_id: 11,
    gols_time2: 0,
    data: "Quarta - 30/11",
    hora: "16:00",
    time1_nome: "Arábia Saudita",
    time1_imgURL: "https://cdn-icons-png.flaticon.com/512/5111/5111777.png",
    grupo: "C",
    time2_nome: "México",
    time2_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197397.png",
  },
  {
    id: 41,
    time1_id: 22,
    gols_time1: 0,
    time2_id: 23,
    gols_time2: 0,
    data: "Quinta - 01/12",
    hora: "12:00",
    time1_nome: "Croácia",
    time1_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197503.png",
    grupo: "F",
    time2_nome: "Bélgica",
    time2_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197583.png",
  },
  {
    id: 42,
    time1_id: 24,
    gols_time1: 0,
    time2_id: 21,
    gols_time2: 0,
    data: "Quinta - 01/12",
    hora: "12:00",
    time1_nome: "Canadá",
    time1_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197430.png",
    grupo: "F",
    time2_nome: "Marrocos",
    time2_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197551.png",
  },
  {
    id: 43,
    time1_id: 18,
    gols_time1: 0,
    time2_id: 19,
    gols_time2: 0,
    data: "Quinta - 01/12",
    hora: "16:00",
    time1_nome: "Japão",
    time1_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197604.png",
    grupo: "E",
    time2_nome: "Espanha",
    time2_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197593.png",
  },
  {
    id: 44,
    time1_id: 20,
    gols_time1: 0,
    time2_id: 17,
    gols_time2: 0,
    data: "Quinta - 01/12",
    hora: "16:00",
    time1_nome: "Costa Rica",
    time1_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197506.png",
    grupo: "E",
    time2_nome: "Alemanha",
    time2_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197571.png",
  },
  {
    id: 45,
    time1_id: 30,
    gols_time1: 0,
    time2_id: 31,
    gols_time2: 0,
    data: "Sexta - 02/12",
    hora: "12:00",
    time1_nome: "Coreia do Sul",
    time1_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197582.png",
    grupo: "H",
    time2_nome: "Portugal",
    time2_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197463.png",
  },
  {
    id: 46,
    time1_id: 32,
    gols_time1: 0,
    time2_id: 29,
    gols_time2: 0,
    data: "Sexta - 02/12",
    hora: "12:00",
    time1_nome: "Gana",
    time1_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197381.png",
    grupo: "H",
    time2_nome: "Uruguai",
    time2_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197599.png",
  },
  {
    id: 47,
    time1_id: 28,
    gols_time1: 0,
    time2_id: 25,
    gols_time2: 0,
    data: "Sexta - 02/12",
    hora: "16:00",
    time1_nome: "Sérvia",
    time1_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197602.png",
    grupo: "G",
    time2_nome: "Suíça",
    time2_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197540.png",
  },
  {
    id: 48,
    time1_id: 26,
    gols_time1: 0,
    time2_id: 27,
    gols_time2: 0,
    data: "Sexta - 02/12",
    hora: "16:00",
    time1_nome: "Camarões",
    time1_imgURL: "https://cdn-icons-png.flaticon.com/512/197/197531.png",
    grupo: "G",
    time2_nome: "Brasil",
    time2_imgURL: "https://cdn-icons-png.flaticon.com/512/7826/7826359.png",
  },
];

export default defineComponent({
  name: "GrupoPage",

  data() {
    return {
      jogos2,
      text: "",
    };
  },

  methods: {
    simuleResquest() {
      api
        .put("/palpites", jogos2)
        .then((response) => {
          console.log(jogos2);
        })
        .catch((erro) => {
          console.log(erro);
        });
    },
    // getJogos() {
    //   this.$q.loading.show();
    //   api
    //     .get("/jogos-grupos")
    //     .then((response) => {
    //       this.jogos2 = response.data;
    //       this.show = true;
    //       this.$q.loading.hide();
    //     })
    //     .catch(() => {
    //       console.log("nao de");
    //       this.show = true;
    //       this.$q.loading.hide();
    //     });
    // },
  },
});
</script>

<style scoped>
.borda {
  border-radius: 20px;
}

.scrolling {
  overflow-y: auto;
  height: 68vh;
}
.botao {
  width: 100%;
  height: 100%;
}
</style>
