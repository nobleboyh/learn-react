import { Context } from './context'
import React from 'react'
import { useReducer } from 'react'
import reducer, {initialState} from './reducer'

const Provider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = [state, dispatch]
  return (
    <Context.Provider value={value}>
        {children}
    </Context.Provider>
  )
}

export default Provider