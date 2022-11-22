<template>
  <div>
    <q-card
      class="q-px-sm borda q-mb-xl bg-grey-box shadow-10"
      style="height: 9vh"
    >
      <q-card-section>
        <div class="row justify-center">
          <div class="text-white" style="font-size: 30px">Ranking</div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "RankingPage",

  data() {
    return {};
  },
});
</script>

<style scoped>
.borda {
  border-radius: 20px;
}
</style>
