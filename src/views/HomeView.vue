<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="counter" :style="{color: $store.state.colorCode}">
      {{  $store.state.counter }}
    </div>
    <div class="counter-squared">
      {{ $store.state.counter }} <sup>2</sup>
      = {{ $store.getters.counterSquared }}
    </div>
    <div class="buttons">
      <button @click="$store.dispatch('decrement')">-</button>
      <button @click="$store.dispatch('increment')">+</button>
    </div>
    <div>
      <input type="text" placeholder="Enter color code here" v-model="colorCode">
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
  computed: {
    colorCode: {
      get() {
        return this.$store.state.colorCode;
      },
      set(newColorCode: string) {
       this.$store.dispatch('setColorCode', newColorCode);
      }
    }
  }
});
</script>

<style lang="css" scoped>

button {
  width: 5rem;
  height: 4rem;
}

</style>
