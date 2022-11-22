<template>
  <div>
    <q-card
      class="q-px-sm borda q-mb-xl bg-grey-box shadow-10"
      style="height: 9vh"
    >
      <q-card-section>
        <div class="row justify-center">
          <div class="text-white" style="font-size: 30px">Regras</div>
        </div>
      </q-card-section>
    </q-card>

    <q-card
      style="height: 65vh"
      class="border bg-grey-9 borda text-white q-mb-md"
    >
    </q-card>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "DashboardPage",
});
</script>
<style scoped>
.borda {
  border-radius: 20px;
}
</style>
