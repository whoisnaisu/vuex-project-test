import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    counter: 0,
    colorCode: "blue",
  },
  getters: {
    counterSquared(state) {
      return state.counter * state.counter;
    },
  },
  mutations: {
    increment(state, randomNumber) {
      console.log(`Random number from API: ${randomNumber}`);
      state.counter += randomNumber;
    },
    decrement(state, randomNumber) {
      console.log(`Random number from API: ${randomNumber}`);
      state.counter -= randomNumber;
    },
    setColorCode(state, newColorCode) {
      state.colorCode = newColorCode;
    },
  },
  actions: {
    async increment({ commit }) {
      try {
        const response = await axios.get(
          "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new"
        );
        commit("increment", response.data);
      } catch (err) {
        console.error(`Error occurred: ${err}`);
      }
    },
    async decrement({ commit }) {
      try {
        const response = await axios.get(
          "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new"
        );
        commit("decrement", response.data);
      } catch (err) {
        console.error(`Error occurred: ${err}`);
      }
    },
    setColorCode({ commit }, newColorCode) {
      commit("setColorCode", newColorCode);
    },
  },
  modules: {},
});
