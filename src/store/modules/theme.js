import api from '@/service/api'

const tableModule = {
  state: {
    theme: 1
  },

  mutations: {
    SET_THEME (state, payload) {
      state.theme = payload
    }
  }
}

export default tableModule