<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const items = [
  { title: 'Click Me 1' },
  { title: 'Click Me 2' },
  { title: 'Click Me 3' },
  { title: 'Click Me 4' },
];
</script>


<template>
  <v-app-bar color="rgba(254, 174, 251, 1)">
    <template v-slot:image>
      <v-img gradient="to top right, rgba(255, 255, 255, 1), rgba(194, 93, 191, 0.8)"></v-img>
    </template>

    <template v-slot:prepend>
      <img id="logo" @click="router.push('/home')" src="public/LOGOPEQ2.png" height="56" width="145" />
    </template>

    <v-spacer/>

    <!-- Botones menú-->
    <div class="d-flex justify-space-around">
    <v-btn variant="text"> Menu 1
      <v-menu activator="parent" transition="scale-transition">
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            :value="index"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-btn>
    <v-btn variant="text"> Menu 2 </v-btn>
    <v-btn variant="text"> Menu 3 </v-btn>
    <v-btn variant="text"> Menu 4 </v-btn>
  </div>
    <v-spacer/>

    <!-- Barra que divide los botones-->
    <v-divider class="mx-3 align-self-center" length="24" thickness="2" vertical></v-divider>

    <!-- Botones con iconos-->

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-cart</v-icon>
    </v-btn>

    <v-btn icon @click="router.push('/register')">
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<style scoped>
#logo {
  cursor: pointer;
}
</style>