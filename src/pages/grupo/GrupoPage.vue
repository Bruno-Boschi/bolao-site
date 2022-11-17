<template>
  <q-page>
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

const jogos = [
  {
    id: 1,
    group: " Grupo A",
    date: " Domingo • 20/11 ",
    hora: "13:00",
    team1: "Catar",
    image1: {
      uri: "https://cdn-icons-png.flaticon.com/512/197/197618.png",
    },
    team2: "Equador",
    image2: {
      uri: "https://cdn-icons-png.flaticon.com/512/4854/4854969.png",
    },
  },
  {
    id: 2,
    group: " Grupo B",
    date: " Segunda • 21/11 ",
    hora: "10:00",
    team1: "Inglaterra",
    image1: {
      uri: "https://cdn-icons-png.flaticon.com/512/197/197485.png",
    },
    team2: "Irã",
    image2: {
      uri: "https://cdn-icons-png.flaticon.com/512/197/197574.png",
    },
  },
  {
    id: 3,
    group: "Grupo A",
    date: " Segunda • 21/11 ",
    hora: "13:00",
    team1: "Senegal",
    image1: {
      uri: "https://cdn-icons-png.flaticon.com/512/197/197377.png",
    },
    team2: "Holanda",
    image2: {
      uri: "https://cdn-icons-png.flaticon.com/512/6157/6157397.png",
    },
  },
  {
    id: 4,
    group: "Grupo B",
    date: " Segunda • 21/11 ",
    hora: "16:00",
    team1: "Estados Unidos",
    image1: {
      uri: "https://cdn-icons-png.flaticon.com/512/197/197484.png",
    },
    team2: "Gales",
    image2: {
      uri: "https://cdn-icons-png.flaticon.com/512/197/197620.png",
    },
  },
  {
    id: 5,
    group: "Grupo C",
    date: "Terça • 22/11 ",
    hora: "07:00",
    team1: "Argentina",
    image1: {
      uri: "https://cdn-icons-png.flaticon.com/512/5315/5315710.png",
    },
    team2: "Arábia Saudita",
    image2: {
      uri: "https://cdn-icons-png.flaticon.com/512/5111/5111777.png",
    },
  },
  {
    id: 6,
    group: "Grupo D",
    date: "Terça • 22/11 ",
    hora: "10:00",
    team1: "Dinamarca",
    image1: {
      uri: "https://cdn-icons-png.flaticon.com/512/197/197565.png",
    },
    team2: "Tunísia",
    image2: {
      uri: "https://cdn-icons-png.flaticon.com/512/197/197624.png",
    },
  },
  {
    id: 7,
    group: "Grupo C",
    date: "Terça • 22/11 ",
    hora: "13:00",
    team1: "México",
    image1: {
      uri: "https://cdn-icons-png.flaticon.com/512/197/197397.png",
    },
    team2: "Polônia",
    image2: {
      uri: "https://cdn-icons-png.flaticon.com/512/4628/4628690.png",
    },
  },
  {
    id: 8,
    group: "Grupo D",
    date: "Terça • 22/11 ",
    hora: "16:00",
    team1: "França",
    image1: {
      uri: "https://cdn-icons-png.flaticon.com/512/5921/5921991.png",
    },
    team2: "Austrália",
    image2: {
      uri: "https://cdn-icons-png.flaticon.com/512/197/197507.png",
    },
  },
  {
    id: 9,
    group: "Grupo F",
    date: " Quarta • 23/11 ",
    hora: "07:00",
    team1: "Marrocos",
    image1: {
      uri: "https://cdn-icons-png.flaticon.com/512/197/197551.png",
    },
    team2: "Croácia",
    image2: {
      uri: "https://cdn-icons-png.flaticon.com/512/197/197503.png",
    },
  },
  {
    id: 10,
    group: "Grupo E",
    date: " Quarta • 23/11 ",
    hora: "10:00",
    team1: "Alemanha",
    image1: {
      uri: "https://cdn-icons-png.flaticon.com/512/197/197571.png",
    },
    team2: "Japão",
    image2: {
      uri: "https://cdn-icons-png.flaticon.com/512/197/197604.png",
    },
  },
  {
    id: 11,
    group: "Grupo E",
    date: " Quarta • 23/11 ",
    hora: "13:00",
    team1: "Espanha",
    image1: {
      uri: "https://cdn-icons-png.flaticon.com/512/197/197593.png",
    },
    team2: "Costa Rica",
    image2: {
      uri: "https://cdn-icons-png.flaticon.com/512/197/197506.png",
    },
  },
  {
    id: 12,
    group: "Grupo F",
    date: " Quarta • 23/11 ",
    hora: "16:00",
    team1: "Bélgica",
    image1: {
      uri: "https://cdn-icons-png.flaticon.com/512/197/197583.png",
    },
    team2: "Canadá",
    image2: {
      uri: "https://cdn-icons-png.flaticon.com/512/197/197430.png",
    },
  },
  {
    id: 13,
    group: "Grupo G",
    date: " Quinta • 24/11 ",
    hora: "07:00",
    team1: "Suíca",
    image1: {
      uri: "https://cdn-icons-png.flaticon.com/512/197/197540.png",
    },
    team2: "Camarões",
    image2: {
      uri: "https://cdn-icons-png.flaticon.com/512/197/197531.png",
    },
  },
  {
    id: 14,
    group: "Grupo H",
    date: " Quinta • 24/11 ",
    hora: "10:00",
    team1: "Uruguai",
    image1: {
      uri: "https://cdn-icons-png.flaticon.com/512/197/197599.png",
    },
    team2: "Coreia do Sul",
    image2: {
      uri: "https://cdn-icons-png.flaticon.com/512/197/197582.png",
    },
  },
  {
    id: 15,
    group: "Grupo H",
    date: " Quinta • 24/11 ",
    hora: "13:00",
    team1: "Portugal",
    image1: {
      uri: "https://cdn-icons-png.flaticon.com/512/197/197463.png",
    },
    team2: "Gana",
    image2: {
      uri: "https://cdn-icons-png.flaticon.com/512/197/197381.png",
    },
  },
  {
    id: 16,
    group: "Grupo G",
    date: " Quinta • 24/11 ",
    hora: "16:00",
    team1: "Brasil",
    image1: {
      uri: "https://cdn-icons-png.flaticon.com/512/7826/7826359.png",
    },
    team2: "Sérvia",
    image2: {
      uri: "https://cdn-icons-png.flaticon.com/512/197/197602.png",
    },
  },
  {
    id: 17,
    group: "Grupo B",
    date: " Sexta • 25/11 ",
    hora: "07:00",
    team1: "Gales",
    image1: {
      uri: "https://cdn-icons-png.flaticon.com/512/197/197620.png",
    },
    team2: "Irã",
    image2: {
      uri: "https://cdn-icons-png.flaticon.com/512/197/197574.png",
    },
  },
  {
    id: 18,
    group: "Grupo A",
    date: " Sexta • 25/11 ",
    hora: "10:00",
    team1: "Catar",
    image1: {
      uri: "https://cdn-icons-png.flaticon.com/512/197/197618.png",
    },
    team2: "Senegal",
    image2: {
      uri: "https://cdn-icons-png.flaticon.com/512/197/197377.png",
    },
  },
  {
    id: 19,
    group: "Grupo A",
    date: " Sexta • 25/11 ",
    hora: "13:00",
    team1: "Holanda",
    image1: {
      uri: "https://cdn-icons-png.flaticon.com/512/6157/6157397.png",
    },
    team2: "Equador",
    image2: {
      uri: "https://cdn-icons-png.flaticon.com/512/4854/4854969.png",
    },
  },
  {
    id: 20,
    group: "Grupo B",
    date: " Sexta • 25/11 ",
    hora: "16:00",
    team1: "Inglaterra",
    image1: {
      uri: "https://cdn-icons-png.flaticon.com/512/197/197485.png",
    },
    team2: "Estados Unidos",
    image2: {
      uri: "https://cdn-icons-png.flaticon.com/512/197/197484.png",
    },
  },
  {
    id: 21,
    group: "Grupo D",
    date: " Sábado • 26/11 ",
    hora: "07:00",
    team1: "Tunísia",
    image1: {
      uri: "https://cdn-icons-png.flaticon.com/512/197/197624.png",
    },
    team2: "Austrália",
    image2: {
      uri: "https://cdn-icons-png.flaticon.com/512/197/197507.png",
    },
  },
  {
    id: 22,
    group: "Grupo C",
    date: " Sábado • 26/11 ",
    hora: "10:00",
    team1: "Polônia",
    image1: {
      uri: "https://ssl.gstatic.com/onebox/media/sports/logos/yTS_Piy3M1wUBnqU0n5aAw_96x96.png",
    },
    team2: "Arábia Saudita",
    image2: {
      uri: "https://ssl.gstatic.com/onebox/media/sports/logos/QoAJxO46fHid3_T-7nRZ0Q_96x96.png",
    },
  },
  {
    id: 23,
    group: "Grupo D",
    date: " Sábado • 26/11 ",
    hora: "13:00",
    team1: "França",
    image1: {
      uri: "https://ssl.gstatic.com/onebox/media/sports/logos/z3JEQB3coEAGLCJBEUzQ2A_96x96.png",
    },
    team2: "Dinamarca",
    image2: {
      uri: "https://ssl.gstatic.com/onebox/media/sports/logos/LaOvu-pyRqRso6uzff55XA_96x96.png",
    },
  },
  {
    id: 24,
    group: "Grupo C",
    date: " Sábado • 26/11 ",
    hora: "16:00",
    team1: "Argentina",
    image1: {
      uri: "https://ssl.gstatic.com/onebox/media/sports/logos/1xBWyjjkA6vEWopPK3lIPA_96x96.png",
    },
    team2: "México",
    image2: {
      uri: "https://ssl.gstatic.com/onebox/media/sports/logos/yJF9xqmUGenD8108FJbg9A_96x96.png",
    },
  },
  {
    id: 25,
    group: "Grupo E",
    date: " Domingo • 27/11 ",
    hora: "07:00",
    team1: "Japão",
    image1: {
      uri: "https://ssl.gstatic.com/onebox/media/sports/logos/by4OltvtZz7taxuQtkiP3A_96x96.png",
    },
    team2: "Costa Rica",
    image2: {
      uri: "https://ssl.gstatic.com/onebox/media/sports/logos/ixZiM5pj2IvvYc15k-zfeQ_96x96.png",
    },
  },
  {
    id: 26,
    group: "Grupo F",
    date: " Domingo • 27/11 ",
    hora: "10:00",
    team1: "Bélgica",
    image1: {
      uri: "https://ssl.gstatic.com/onebox/media/sports/logos/6SF7yEoB60bU5knw-M7R5Q_96x96.png",
    },
    team2: "Marrocos",
    image2: {
      uri: "https://ssl.gstatic.com/onebox/media/sports/logos/I3gt2Ew39ux3GGdZ-4JE3g_96x96.png",
    },
  },
  {
    id: 27,
    group: "Grupo F",
    date: " Domingo • 27/11 ",
    hora: "13:00",
    team1: "Croácia",
    image1: {
      uri: "https://ssl.gstatic.com/onebox/media/sports/logos/9toerdOg8xW4CRhDaZxsyw_96x96.png",
    },
    team2: "Canadá",
    image2: {
      uri: "https://ssl.gstatic.com/onebox/media/sports/logos/H23oIEP6qK-zNc3O8abnIA_96x96.png",
    },
  },
  {
    id: 28,
    group: "Grupo E",
    date: " Domingo • 27/11 ",
    hora: "16:00",
    team1: "Espanha",
    image1: {
      uri: "https://ssl.gstatic.com/onebox/media/sports/logos/5hLkf7KFHhmpaiOJQv8LmA_96x96.png",
    },
    team2: "Alemanha",
    image2: {
      uri: "https://ssl.gstatic.com/onebox/media/sports/logos/h1FhPLmDg9AHXzhygqvVPg_96x96.png",
    },
  },
  {
    id: 29,
    group: "Grupo G",
    date: " Segunda • 28/11 ",
    hora: "07:00",
    team1: "Camarões",
    image1: {
      uri: "https://ssl.gstatic.com/onebox/media/sports/logos/fmHyTSbJ-cYbY6WJzvqaZQ_96x96.png",
    },
    team2: "Sérvia",
    image2: {
      uri: "https://ssl.gstatic.com/onebox/media/sports/logos/xyh1vmZ-xJH2iJCKjqS1Ow_96x96.png",
    },
  },
  {
    id: 30,
    group: "Grupo H",
    date: " Segunda • 28/11 ",
    team1: "Coreia do Sul",
    hora: "10:00",
    image1: {
      uri: "https://ssl.gstatic.com/onebox/media/sports/logos/Uu5pwNmMHGd5bCooKrS3Lw_96x96.png",
    },
    team2: "Gana",
    image2: {
      uri: "https://ssl.gstatic.com/onebox/media/sports/logos/VJQ1emg0TOubjGnap4vWuw_96x96.png",
    },
  },
  {
    id: 31,
    group: "Grupo G",
    date: " Segunda • 28/11 ",
    hora: "13:00",
    team1: "Brasil",
    image1: {
      uri: "https://ssl.gstatic.com/onebox/media/sports/logos/zKLzoJVYz0bb6oAnPUdwWQ_96x96.png",
    },
    team2: "Suíça",
    image2: {
      uri: "https://ssl.gstatic.com/onebox/media/sports/logos/1hy9ek4dOIffYULM6k1fqg_96x96.png",
    },
  },
  {
    id: 32,
    group: "Grupo H",
    date: " Segunda • 28/11 ",
    hora: "16:00",
    team1: "Portugal",
    image1: {
      uri: "https://ssl.gstatic.com/onebox/media/sports/logos/HJ3_2c4w791nZJj7n-Lj3Q_96x96.png",
    },
    team2: "Uruguai",
    image2: {
      uri: "https://ssl.gstatic.com/onebox/media/sports/logos/KnSUdQWiGRoy89q4x85IgA_96x96.png",
    },
  },
  {
    id: 33,
    group: "Grupo A",
    date: " Terça • 29/11 ",
    hora: "12:00",
    team1: "Equador",
    image1: {
      uri: "https://ssl.gstatic.com/onebox/media/sports/logos/AKqvkBpIyr-iLOK7Ig7-yQ_96x96.png",
    },
    team2: "Senegal",
    image2: {
      uri: "https://ssl.gstatic.com/onebox/media/sports/logos/zw3ac5sIbH4DS6zP5auOkQ_96x96.png",
    },
  },
  {
    id: 34,
    group: "Grupo A",
    date: " Terça • 29/11 ",
    hora: "12:00",
    team1: "Holanda",
    image1: {
      uri: "https://ssl.gstatic.com/onebox/media/sports/logos/8GEqzfLegwFFpe6X2BODTg_96x96.png",
    },
    team2: "Catar",
    image2: {
      uri: "https://ssl.gstatic.com/onebox/media/sports/logos/h0FNA5YxLzWChHS5K0o4gw_96x96.png",
    },
  },
  {
    id: 35,
    group: "Grupo B",
    date: " Terça • 29/11 ",
    hora: "16:00",
    team1: "Irã",
    image1: {
      uri: "https://ssl.gstatic.com/onebox/media/sports/logos/1oq8Fy7ETpBpZNaCA22ArQ_96x96.png",
    },
    team2: "Estados Unidos",
    image2: {
      uri: "https://ssl.gstatic.com/onebox/media/sports/logos/wj9uZvn_vZrelLFGH8fnPA_96x96.png",
    },
  },
  {
    id: 36,
    group: "Grupo B",
    date: " Terça • 29/11 ",
    hora: "16:00",
    team1: "Gales",
    image1: {
      uri: "https://ssl.gstatic.com/onebox/media/sports/logos/1JjnDm6Es30LryHzbudyEw_96x96.png",
    },
    team2: "Inglaterra",
    image2: {
      uri: "https://ssl.gstatic.com/onebox/media/sports/logos/DTqIL8Ba3KIuxGkpXw5ayA_96x96.png",
    },
  },
  {
    id: 37,
    group: "Grupo D",
    date: "Quarta • 30/11 ",
    hora: "12:00",
    team1: "Tunísia",
    image1: {
      uri: "https://ssl.gstatic.com/onebox/media/sports/logos/Xs33c9XVUJBX0IkeFn_bIw_96x96.png",
    },
    team2: "França",
    image2: {
      uri: "https://ssl.gstatic.com/onebox/media/sports/logos/z3JEQB3coEAGLCJBEUzQ2A_96x96.png",
    },
  },
  {
    id: 38,
    group: "Grupo D",
    date: "Quarta • 30/11 ",
    hora: "12:00",
    team1: "Austrália",
    image1: {
      uri: "https://ssl.gstatic.com/onebox/media/sports/logos/jSgw5z0EPOLzdUi-Aomq7Q_96x96.png",
    },
    team2: "Dinamarca",
    image2: {
      uri: "https://ssl.gstatic.com/onebox/media/sports/logos/LaOvu-pyRqRso6uzff55XA_96x96.png",
    },
  },
  {
    id: 39,
    group: "Grupo C",
    date: "Quarta • 30/11 ",
    hora: "16:00",
    team1: "Polônia",
    image1: {
      uri: "https://ssl.gstatic.com/onebox/media/sports/logos/yTS_Piy3M1wUBnqU0n5aAw_96x96.png",
    },
    team2: "Argentina",
    image2: {
      uri: "https://ssl.gstatic.com/onebox/media/sports/logos/1xBWyjjkA6vEWopPK3lIPA_96x96.png",
    },
  },
  {
    id: 40,
    group: "Grupo C",
    date: "Quarta • 30/11 ",
    hora: "16:00",
    team1: "Arábia Saudita",
    image1: {
      uri: "https://ssl.gstatic.com/onebox/media/sports/logos/QoAJxO46fHid3_T-7nRZ0Q_96x96.png",
    },
    team2: "México",
    image2: {
      uri: "https://ssl.gstatic.com/onebox/media/sports/logos/yJF9xqmUGenD8108FJbg9A_96x96.png",
    },
  },
  {
    id: 41,
    group: "Grupo F",
    date: " Quinta • 01/12 ",
    hora: "12:00",
    team1: "Croácia",
    image1: {
      uri: "https://ssl.gstatic.com/onebox/media/sports/logos/9toerdOg8xW4CRhDaZxsyw_96x96.png",
    },
    team2: "Bélgica",
    image2: {
      uri: "https://ssl.gstatic.com/onebox/media/sports/logos/6SF7yEoB60bU5knw-M7R5Q_96x96.png",
    },
  },
  {
    id: 42,
    group: "Grupo F",
    date: " Quinta • 01/12 ",
    hora: "12:00",
    team1: "Canadá",
    image1: {
      uri: "https://ssl.gstatic.com/onebox/media/sports/logos/H23oIEP6qK-zNc3O8abnIA_96x96.png",
    },
    team2: "Marrocos",
    image2: {
      uri: "https://ssl.gstatic.com/onebox/media/sports/logos/I3gt2Ew39ux3GGdZ-4JE3g_96x96.png",
    },
  },
  {
    id: 43,
    group: "Grupo E",
    date: " Quinta • 01/12 ",
    hora: "16:00",
    team1: "Japão",
    image1: {
      uri: "https://ssl.gstatic.com/onebox/media/sports/logos/by4OltvtZz7taxuQtkiP3A_96x96.png",
    },
    team2: "Espanha",
    image2: {
      uri: "https://ssl.gstatic.com/onebox/media/sports/logos/5hLkf7KFHhmpaiOJQv8LmA_96x96.png",
    },
  },
  {
    id: 44,
    group: "Grupo E",
    date: " Quinta • 01/12 ",
    hora: "16:00",
    team1: "Costa Rica",
    image1: {
      uri: "https://ssl.gstatic.com/onebox/media/sports/logos/ixZiM5pj2IvvYc15k-zfeQ_96x96.png",
    },
    team2: "Alemanha",
    image2: {
      uri: "https://ssl.gstatic.com/onebox/media/sports/logos/h1FhPLmDg9AHXzhygqvVPg_96x96.png",
    },
  },
  {
    id: 45,
    group: "Grupo H",
    date: " Sexta • 02/12 ",
    hora: "12:00",
    team1: "Coreia do Sul",
    image1: {
      uri: "https://ssl.gstatic.com/onebox/media/sports/logos/Uu5pwNmMHGd5bCooKrS3Lw_96x96.png",
    },
    team2: "Portugal",
    image2: {
      uri: "https://ssl.gstatic.com/onebox/media/sports/logos/HJ3_2c4w791nZJj7n-Lj3Q_96x96.png",
    },
  },
  {
    id: 46,
    group: "Grupo H",
    date: " Sexta • 02/12 ",
    hora: "12:00",
    team1: "Gana",
    image1: {
      uri: "https://ssl.gstatic.com/onebox/media/sports/logos/VJQ1emg0TOubjGnap4vWuw_96x96.png",
    },
    team2: "Uruguai",
    image2: {
      uri: "https://ssl.gstatic.com/onebox/media/sports/logos/KnSUdQWiGRoy89q4x85IgA_96x96.png",
    },
  },
  {
    id: 47,
    group: "Grupo G",
    date: " Sexta • 02/12 ",
    hora: "16:00",
    team1: "Sérvia",
    image1: {
      uri: "https://ssl.gstatic.com/onebox/media/sports/logos/xyh1vmZ-xJH2iJCKjqS1Ow_96x96.png",
    },
    team2: "Suíça",
    image2: {
      uri: "https://ssl.gstatic.com/onebox/media/sports/logos/1hy9ek4dOIffYULM6k1fqg_96x96.png",
    },
  },
  {
    id: 48,
    group: "Grupo G",
    date: " Sexta • 02/12 ",
    hora: "16:00",
    team1: "Camarões",
    image1: {
      uri: "https://ssl.gstatic.com/onebox/media/sports/logos/fmHyTSbJ-cYbY6WJzvqaZQ_96x96.png",
    },
    team2: "Brasil",
    image2: {
      uri: "https://ssl.gstatic.com/onebox/media/sports/logos/zKLzoJVYz0bb6oAnPUdwWQ_96x96.png",
    },
  },
];
let $q;
export default defineComponent({
  name: "GrupoPage",

  data() {
    return {
      jogos,
      jogos2: [],
      text: "",
    };
  },

  methods: {
    getJogos() {
      api
        .get("/jogos-grupos")
        .then((response) => {
          this.jogos2 = response.data;
        })
        .catch(() => {
          console.log("nao deu");
        });
    },
  },

  mounted() {
    $q = useQuasar();
    this.getJogos();
  },
});
</script>

<style scoped>
.borda {
  border-radius: 20px;
}
</style>
