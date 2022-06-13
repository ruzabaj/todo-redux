import React from 'react'

const initialData= {
    dataList:[]
}
export default const Todoreducer = (state=initialData, action) => {
 switch(action.type){
    case "ADD_TODO":
        const{id,data} =action.payload;
        return{
            ...state, 
            data:[
                ...state.dataList,
                {
                    id:id,  
                    data:data
                }
            ]
        }
 }
}
