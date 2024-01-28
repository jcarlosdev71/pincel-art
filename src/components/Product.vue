<script setup lang="ts">
import { ref } from 'vue';

const loading = ref(false);

const galeria = () => {
  loading.value = true;

  setTimeout(() => (loading.value = false), 2000);
};

</script>

<template>
  <v-card
    color="grey-lighten-5"
    class="mx-auto my-12"
    max-width="auto"
    max-height="500"
  >
    <v-card-title> MIS CUADROS </v-card-title>

    <v-divider />

    <v-img
      cover
      height="150"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-item>
      <v-card-title>Título</v-card-title>

      <v-card-subtitle>
        <span class="me-1">Local Favorite</span>
      </v-card-subtitle>
    </v-card-item>

    <v-card-text>
      <div>
        Small plates, salads & sandwiches - an intimate setting with 12 indoor
        seats plus patio seating.
      </div>
    </v-card-text>

    <v-divider class="mx-4 mb-1"></v-divider>

    <v-card-actions>
      <v-btn variant="text" @click="galeria"> Galería </v-btn>
    </v-card-actions>
  </v-card>
</template>


