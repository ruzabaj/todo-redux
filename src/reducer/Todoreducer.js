const initialData= {
    dataList:[]
}
const Todoreducer = (state=initialData, action) => {
 switch(action.type){
    case "ADD_TODO":
        const{id,data} =action.payload;
        return{
            ...state, 
            dataList:[
                ...state.dataList,
                {
                    id,  
                    data
                }
            ]
        }
        default: return state;
 }
}
export default Todoreducer
