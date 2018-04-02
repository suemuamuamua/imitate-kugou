
const mutations = {
  setNav:(state,nav)=>{
    state.selectedNav = nav;
  },
  setPlayer: (state,value) => {
    state.togglePlayer = value
  }
}
export default mutations;