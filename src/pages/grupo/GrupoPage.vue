<template>
  <q-page>
    <q-card class="border bg-grey-9 borda">
      <div class="row">
        <div class="row">
          <q-card-section class="col-8 col-xs-10"> teste</q-card-section>

          <q-card-section class="col-8 col-md-10">
            <div class="row">
              <div class="bg-red col-4">1</div>
              <div class="bg-pink col-4">2</div>
              <div class="bg-grey col-4">3</div>
            </div>
          </q-card-section>
        </div>
        <q-separator vertical color="red" />
        teste
      </div>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});
</script>

<style scoped>
.borda {
  border-radius: 20px;
}
</style>
