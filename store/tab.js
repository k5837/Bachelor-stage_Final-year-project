export default {
  state: {
    isCollapse: false,
		tabsList: [
		],
		currentMenu: null,
  },
  mutations: {
    collapseMenu (state) {
      state.isCollapse = !state.isCollapse//将上面state里面的变量iscollapse直接取反
    },
		selectMenu (state, val) {
        // 新增tabsList
        let result = state.tabsList.findIndex(item => item.name == val.name)
        result === -1 ? state.tabsList.push(val) : ''
      }
    },
    closeTag (state, val) {
      let result = state.tabsList.findIndex(item => item.name === val.name)
      state.tabsList.splice(result, 1)
    }
	}
// }
