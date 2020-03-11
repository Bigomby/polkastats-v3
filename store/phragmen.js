import axios from "axios"
import { backendBaseURL } from "../polkastats.config.js"

export const state = () => ({
  info: {
    validator_count: 0,
    nominator_count: 0,
    total_issuance: "",
    candidates: []
  }
})

export const mutations = {
  update(state, phragmen) {
    // Send Google Analytics event: Category, action, label, value
    // console.log(`Updating validators store, sending event to Google Analytics!`);
    // this.$ga.event('vuex-store', 'update-phragmen');

    state.info.validator_count = phragmen.validator_count
    state.info.nominator_count = phragmen.nominator_count
    state.info.total_issuance = phragmen.total_issuance
    state.info.candidates = phragmen.candidates
  },
  getters: function() {
    state => state.info
  }
}

export const actions = {
  update(context) {
    axios.get(`${backendBaseURL}/phragmen`).then(function(response) {
      context.commit("update", response.data)
    })
  }
}
