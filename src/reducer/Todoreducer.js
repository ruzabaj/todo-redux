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
        case "DELETE_TODO":
           const newList=  state.dataList.filter((i)=> i.id !== action.id)
                return{
                    ...state, 
                    dataList:newList
                }
                default: return state;
 }
}
export default Todoreducer
