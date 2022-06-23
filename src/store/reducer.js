import { SET_ITEM, ADD_ITEM } from "./const";
//Init
const initialState ={
    item:"",
    items:[]
}

//Reducer
const reducer = (state, action) =>{
    console.log(action);
    switch(action.type){
        case SET_ITEM:
            return {
                ...state,
                item: action.payload
            }
        case ADD_ITEM:{
            return{
                ...state,
                items: [...state.items, action.payload]
            }
        }
        default:
            throw new Error("No action found")
    }

}

export {initialState}
export default reducer