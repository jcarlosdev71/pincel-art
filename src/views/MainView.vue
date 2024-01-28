<script lang="ts" setup>
import AppBar from '@/layouts/AppBar.vue';
import FooterComponent from '@/layouts/FooterComponent.vue';
</script>

<template>
  <div id="main-container">
    <div id="app-bar">
      <AppBar />
    </div>
    <v-container fluid id="main">
      <Suspense>
        <template #default>
          <router-view v-slot="{ Component, route }">
            <transition
              name="fade"
              mode="out-in"
            >
              <div :key="route.name?.toString()">
                <component :is="Component" />
              </div>
            </transition>
          </router-view>
        </template>
      </Suspense>
    </v-container>
    <div id="footer">
      <FooterComponent />
    </div>
  </div>

</template>

<style>
#main-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
#main {
    flex-grow: 1;
}
</style>




