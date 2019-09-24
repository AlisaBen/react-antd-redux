export default {
    namespace: 'products',// 全局state上的key
    state: [],// 初始值
    reducers: {
        delete(state,{payload:id}){
            return state.filter(item => item.id !== id);
        },
    },// 接收action,同步更新state
}
// umi 里约定 src/models 下的 model 会被自动注入，你无需手动注入。