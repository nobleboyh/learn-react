import {SET_ITEM,DELETE_ITEM,ADD_ITEM} from './const'

export function setItem(payload){
    return {
        type: SET_ITEM,
        payload
    }
}

export function addItem(payload){
    return {
        type: ADD_ITEM,
        payload
    }
}

export function deleteItem(payload){
    return {
        type: DELETE_ITEM,
        payload
    }
}