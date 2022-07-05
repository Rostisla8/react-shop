import React from 'react';

const defaultState = {
    items: [],
    searchString: ''
}

const Reducer = (state = defaultState , action) =>{
    switch (action.type){
        case 'ADD_ITEM': 
            return {...state , items: [...state.items , action.payload]}
        case 'DEL_ITEM': 
             let res = state.items.filter((item)=>{
                 if(item.id != action.payload){
                     return item
                 }
             })
             return {...state , items: [...res]}
        case 'SEARCH': 
             return {...state , searchString: action.payload}
        default:
            return state
    }
}

export default Reducer;