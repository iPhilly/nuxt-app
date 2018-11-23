export const state = () => ({
  result: 0
})

export const mutations = {
  increment(state) {
    state.result += 1
  },
  decrement(state) {
    state.result -= 1
  }
}
